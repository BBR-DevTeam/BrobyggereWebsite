// app/api/vacancy-upload/route.ts (FULL UPDATED) — improves diagnostics for 400s,
// and keeps Turnstile verification first.

import { NextResponse } from "next/server";
import { adminBucket } from "@/lib/firebaseAdmin";
import crypto from "crypto";

export const runtime = "nodejs";

const MAX_CV_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_OTHER_BYTES = 10 * 1024 * 1024; // 10MB each
const MAX_OTHER_FILES = 5;

const CV_ALLOWED = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const OTHER_ALLOWED = new Set([...CV_ALLOWED, "image/jpeg", "image/png"]);

function safeName(name: string) {
  return name.replace(/[^\w.\-]+/g, "_");
}

function getDownloadUrl(objectPath: string, token: string) {
  const bucketName = adminBucket.name;
  const encodedPath = encodeURIComponent(objectPath);
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodedPath}?alt=media&token=${token}`;
}

async function uploadToStorage(params: { folder: string; file: File }) {
  const { folder, file } = params;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const extSafe = safeName(file.name);
  const id = crypto.randomUUID();
  const objectPath = `${folder}/${Date.now()}_${id}_${extSafe}`;

  const token = crypto.randomUUID();
  const gcsFile = adminBucket.file(objectPath);

  await gcsFile.save(buffer, {
    contentType: file.type || "application/octet-stream",
    resumable: false,
    metadata: {
      cacheControl: "private, max-age=0, no-transform",
      metadata: {
        firebaseStorageDownloadTokens: token,
      },
    },
  });

  const downloadUrl = getDownloadUrl(objectPath, token);
  return { objectPath, downloadUrl };
}

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return undefined;
}

async function verifyTurnstile(params: { token: string; ip?: string }) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return { ok: false as const, reason: "Missing secret key" };

  const body = new URLSearchParams();
  body.append("secret", secret);
  body.append("response", params.token);
  if (params.ip) body.append("remoteip", params.ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  const data: any = await res.json().catch(() => null);
  if (!data) return { ok: false as const, reason: "Invalid verify response" };

  if (data.success === true) return { ok: true as const };

  // Useful in your UI debugging (shows why it failed)
  const code = Array.isArray(data["error-codes"])
    ? data["error-codes"].join(", ")
    : "unknown";
  return { ok: false as const, reason: `Turnstile failed (${code})` };
}

export async function POST(req: Request) {
  try {
    const form = await req.formData();

    // ✅ Fail fast diagnostics: show which keys arrived if something is missing
    const keys = Array.from(form.keys());

    const turnstileToken = String(form.get("turnstileToken") || "").trim();
    if (!turnstileToken) {
      return NextResponse.json(
        { ok: false, error: "Missing captcha token", keys },
        { status: 400 },
      );
    }

    const ip = getClientIp(req);
    const verify = await verifyTurnstile({ token: turnstileToken, ip });
    if (!verify.ok) {
      return NextResponse.json(
        { ok: false, error: verify.reason },
        { status: 403 },
      );
    }

    const slug = String(form.get("slug") || "").trim();
    if (!slug) {
      return NextResponse.json(
        { ok: false, error: "Missing slug", keys },
        { status: 400 },
      );
    }

    const cv = form.get("cv");
    if (!(cv instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "Missing CV file", keys },
        { status: 400 },
      );
    }

    if (!CV_ALLOWED.has(cv.type)) {
      return NextResponse.json(
        { ok: false, error: `CV: invalid file type (${cv.type || "unknown"})` },
        { status: 400 },
      );
    }
    if (cv.size > MAX_CV_BYTES) {
      return NextResponse.json(
        { ok: false, error: "CV: file too large" },
        { status: 400 },
      );
    }

    const othersRaw = form.getAll("others");
    const otherFiles = othersRaw.filter((x): x is File => x instanceof File);

    if (otherFiles.length > MAX_OTHER_FILES) {
      return NextResponse.json(
        { ok: false, error: "Too many other files" },
        { status: 400 },
      );
    }

    for (const f of otherFiles) {
      if (!OTHER_ALLOWED.has(f.type)) {
        return NextResponse.json(
          {
            ok: false,
            error: `Other files: invalid file type (${f.type || "unknown"})`,
          },
          { status: 400 },
        );
      }
      if (f.size > MAX_OTHER_BYTES) {
        return NextResponse.json(
          { ok: false, error: "Other files: file too large" },
          { status: 400 },
        );
      }
    }

    const folder = `public_applications/${safeName(slug)}`;

    const cvUpload = await uploadToStorage({ folder, file: cv });
    const otherUploads = await Promise.all(
      otherFiles.map((f) => uploadToStorage({ folder, file: f })),
    );

    return NextResponse.json({
      ok: true,
      cv: cvUpload,
      others: otherUploads,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Upload failed" },
      { status: 500 },
    );
  }
}

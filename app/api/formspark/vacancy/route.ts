import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebaseAdmin";

export const runtime = "nodejs";

function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    // 🔐 same protection as other webhooks
    const url = new URL(req.url);
    const token = url.searchParams.get("token");
    const expected = required("FORMSPARK_WEBHOOK_SECRET");

    if (!token || token !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const body = await req.json();

    // minimal required fields for a vacancy application
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();
    const phone = String(body?.phone ?? "").trim();
    const vacancySlug = String(body?.vacancySlug ?? "").trim();
    const cvUrl = String(body?.cvUrl ?? "").trim();

    if (!name || !email || !phone || !vacancySlug || !cvUrl) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    await adminDb.collection("vacancyApplications").add({
      ...body,
      name,
      email,
      phone,
      vacancySlug,
      cvUrl,
      createdAt: new Date().toISOString(),
      source: "formspark-webhook",
      formType: "vacancy",
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Formspark vacancy webhook error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

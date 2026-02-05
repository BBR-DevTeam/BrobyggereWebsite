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
    // 1) 🔐 Guard the endpoint with your secret token
    const url = new URL(req.url);
    const token = url.searchParams.get("token");
    const expected = required("FORMSPARK_WEBHOOK_SECRET");

    if (!token || token !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    // 2) Read JSON body (Formspark will POST JSON)
    const body = await req.json();

    // 3) Minimal sanity checks (avoid empty spam docs)
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();
    const message = String(body?.message ?? "").trim();

    if (!email || !message) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    // 4) Write to Firestore (new collection: contactSubmissions)
    await adminDb.collection("contactSubmissions").add({
      ...body,
      email,
      message,
      createdAt: new Date().toISOString(),
      source: "formspark-webhook",
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Formspark contact webhook error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

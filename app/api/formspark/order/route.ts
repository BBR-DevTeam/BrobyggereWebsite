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
    // 🔐 Guard with your secret token
    const url = new URL(req.url);
    const token = url.searchParams.get("token");
    const expected = required("FORMSPARK_WEBHOOK_SECRET");

    if (!token || token !== expected) {
      return NextResponse.json({ ok: false }, { status: 401 });
    }

    const body = await req.json();

    // Minimal sanity checks for order form
    const orgName = String(body?.orgName ?? "").trim();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();
    const startDate = String(body?.startDate ?? "").trim(); // ISO expected
    const endDate = String(body?.endDate ?? "").trim();

    if (!orgName || !email || !startDate || !endDate) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    await adminDb.collection("orderSubmissions").add({
      ...body,
      email,
      orgName,
      createdAt: new Date().toISOString(),
      source: "formspark-webhook",
      formType: "order",
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Formspark order webhook error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

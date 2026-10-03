import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/mongodb";

const schema = z.object({
  name: z.string().min(1).max(120),
  businessName: z.string().max(200).optional().nullable(),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional().nullable(),
  stores: z.union([z.string(), z.number()]).optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  source: z.string().max(80).optional().nullable(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data. Please check required fields." },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const storesNum =
      data.stores === undefined || data.stores === null || data.stores === ""
        ? undefined
        : Number(data.stores);

    if (!process.env.MONGODB_URI) {
      // Allow local UI testing without Mongo — log and succeed
      console.log("[demo lead]", data);
      return NextResponse.json({ ok: true, mode: "logged" });
    }

    const db = await getDb();
    await db.collection("leads").insertOne({
      name: data.name.trim(),
      businessName: data.businessName?.toString().trim() || null,
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.toString().trim() || null,
      stores: Number.isFinite(storesNum) ? storesNum : null,
      message: data.message?.toString().trim() || null,
      source: data.source?.toString().trim() || "website",
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/demo]", err);
    return NextResponse.json(
      { error: "Unable to save your request. Please try again." },
      { status: 500 }
    );
  }
}

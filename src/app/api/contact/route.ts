import { NextResponse } from "next/server";
import {
  storageConfigured,
  smtpConfigured,
  isDev,
  storeEntity,
  sendNotification,
  isValidEmail,
  cleanText,
  rateLimited,
  clientIp,
} from "@/lib/server/forms";

const TOPICS = ["support", "feedback", "partnership", "other"] as const;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  /* Honeypot: bots fill the hidden "website" field. Pretend success. */
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (rateLimited(`contact:${clientIp(request)}`)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const name = cleanText(body.name, 100);
  const email = isValidEmail(body.email) ? body.email : null;
  const topic = TOPICS.includes(body.topic as (typeof TOPICS)[number])
    ? (body.topic as string)
    : null;
  const message = cleanText(body.message, 5000);

  if (!name || !email || !topic || !message) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  if (!storageConfigured && !smtpConfigured) {
    if (isDev) {
      console.log("[contact:dev] submission:", { name, email, topic, message });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let stored = false;
  if (storageConfigured) {
    try {
      await storeEntity("ContactMessages", {
        partitionKey: "contact",
        rowKey: `${Date.now()}-${crypto.randomUUID()}`,
        name,
        email,
        topic,
        message,
        submittedAt: new Date().toISOString(),
      });
      stored = true;
    } catch (error) {
      console.error("[contact] storage failed:", error);
    }
  }

  let notified = false;
  if (smtpConfigured) {
    try {
      await sendNotification({
        subject: `[FocusNow] ${topic} — ${name}`,
        text: `Topic: ${topic}\nFrom: ${name} <${email}>\n\n${message}`,
        replyTo: email,
      });
      notified = true;
    } catch (error) {
      console.error("[contact] notification failed:", error);
    }
  }

  if (!stored && !notified) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

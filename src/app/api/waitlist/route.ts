import { NextResponse } from "next/server";
import {
  storageConfigured,
  smtpConfigured,
  isDev,
  storeEntity,
  sendNotification,
  isValidEmail,
  emailRowKey,
  rateLimited,
  clientIp,
} from "@/lib/server/forms";

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

  if (rateLimited(`waitlist:${clientIp(request)}`)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  const email = isValidEmail(body.email) ? body.email : null;
  if (!email) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }
  const locale = body.locale === "tr" ? "tr" : "en";

  if (!storageConfigured && !smtpConfigured) {
    if (isDev) {
      console.log("[waitlist:dev] signup:", { email, locale });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let stored = false;
  if (storageConfigured) {
    try {
      /* rowKey = encoded email → the same address never creates duplicates. */
      await storeEntity("Waitlist", {
        partitionKey: "pro",
        rowKey: emailRowKey(email),
        email: email.toLowerCase(),
        locale,
        signedUpAt: new Date().toISOString(),
      });
      stored = true;
    } catch (error) {
      console.error("[waitlist] storage failed:", error);
    }
  }

  /* Email-only mode: the signup notification IS the record until
     storage is configured. */
  let notified = false;
  if (smtpConfigured) {
    try {
      await sendNotification({
        subject: "[FocusNow] New Pro waitlist signup",
        text: `${email} joined the Pro waitlist (locale: ${locale}).`,
      });
      notified = true;
    } catch (error) {
      console.error("[waitlist] notification failed:", error);
    }
  }

  if (!stored && !notified) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

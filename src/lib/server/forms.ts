import "server-only";
import { TableClient } from "@azure/data-tables";
import nodemailer from "nodemailer";

/**
 * Shared backend for the contact form and the Pro waitlist.
 *
 * Storage: Azure Table Storage (AZURE_TABLES_CONNECTION_STRING).
 * Notifications: SMTP (SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS,
 * defaults tuned for Outlook / Microsoft 365).
 *
 * In development, when nothing is configured, submissions are logged to
 * the console so the UI can be tested end-to-end without credentials.
 */

const TABLES_CONN = process.env.AZURE_TABLES_CONNECTION_STRING ?? "";
const SMTP_USER = process.env.SMTP_USER ?? "";
const SMTP_PASS = process.env.SMTP_PASS ?? "";
const NOTIFY_TO = process.env.CONTACT_TO_EMAIL || SMTP_USER;

export const storageConfigured = TABLES_CONN.length > 0;
export const smtpConfigured = SMTP_USER.length > 0 && SMTP_PASS.length > 0;
export const isDev = process.env.NODE_ENV !== "production";

/* ─── Storage ─── */

async function tableClient(tableName: string): Promise<TableClient> {
  const client = TableClient.fromConnectionString(TABLES_CONN, tableName, {
    allowInsecureConnection: isDev,
  });
  try {
    await client.createTable();
  } catch {
    /* table already exists */
  }
  return client;
}

export async function storeEntity(
  tableName: string,
  entity: Record<string, string> & { partitionKey: string; rowKey: string }
): Promise<void> {
  const client = await tableClient(tableName);
  await client.upsertEntity(entity, "Merge");
}

/* ─── Email notification (best effort — callers must not fail on throw) ─── */

export async function sendNotification(options: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<void> {
  const port = Number(process.env.SMTP_PORT ?? 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "mail.privateemail.com",
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    auth: { user: SMTP_USER.trim(), pass: SMTP_PASS.trim() },
  });

  await transporter.sendMail({
    from: `"FocusNow Website" <${SMTP_USER}>`,
    to: NOTIFY_TO,
    subject: options.subject,
    text: options.text,
    replyTo: options.replyTo,
  });
}

/* ─── Validation ─── */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(value: unknown): value is string {
  return (
    typeof value === "string" && value.length <= 254 && EMAIL_RE.test(value)
  );
}

export function cleanText(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLength) return null;
  return trimmed;
}

/** RowKey-safe encoding for emails (Table Storage forbids / \ # ?). */
export function emailRowKey(email: string): string {
  return Buffer.from(email.toLowerCase()).toString("base64url");
}

/* ─── Rate limiting (per serverless instance; paired with honeypot) ─── */

const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 10_000) hits.clear();
  return false;
}

export function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  return forwarded?.split(",")[0]?.trim() || "unknown";
}

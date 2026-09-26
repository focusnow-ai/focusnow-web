import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getTranslations } from "next-intl/server";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export type OgShot = "focus" | "productivity" | "timecards" | "calendar" | "billing" | "activities";

/** Brand values from tokens.json: purple-700 (logo), slate-950, purple-50. */
const colors = { logo: "#7e22ce", ink: "#020617", wash: "#faf5ff", muted: "#475569", border: "#e9d5ff" };

async function shotDataUrl(shot: OgShot) {
  const file = await readFile(join(process.cwd(), "src/og", `${shot}.jpg`));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

/** Shared social card: page title and kicker on the left, a real product view on the right. */
export async function renderOgImage({ title, kicker, shot }: { title: string; kicker: string; shot: OgShot }) {
  const image = await shotDataUrl(shot);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: `linear-gradient(135deg, ${colors.wash} 0%, #ffffff 60%)`,
          padding: 64,
          gap: 48,
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, height: "100%" }}>
          <div style={{ display: "flex", fontSize: 34, color: colors.ink, letterSpacing: -1 }}>
            focus<span style={{ color: colors.logo }}>now</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", marginBottom: "auto" }}>
            <div style={{ fontSize: 26, color: colors.logo }}>{kicker}</div>
            <div style={{ fontSize: 58, lineHeight: 1.08, color: colors.ink, marginTop: 18, letterSpacing: -1.5 }}>{title}</div>
          </div>
          <div style={{ fontSize: 22, color: colors.muted }}>focusnow.ai</div>
        </div>
        <div
          style={{
            display: "flex",
            width: 520,
            borderRadius: 18,
            border: `1px solid ${colors.border}`,
            overflow: "hidden",
            boxShadow: "0 30px 60px -20px rgba(59, 7, 100, 0.35)",
            background: "#ffffff",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" style={{ width: "100%" }} />
        </div>
      </div>
    ),
    ogSize
  );
}

/** Builds an opengraph-image route for a page whose title lives in messages. */
export function ogRoute({ namespace, titleKey, kickerKey, shot }: { namespace: string; titleKey: string; kickerKey: string; shot: OgShot }) {
  return async function Image({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace });
    return renderOgImage({ title: t(titleKey), kicker: t(kickerKey), shot });
  };
}

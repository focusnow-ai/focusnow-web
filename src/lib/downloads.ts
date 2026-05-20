export type Platform = "mac-arm" | "mac-intel" | "windows";

export interface DownloadLink {
  platform: Platform;
  label: string;
  fileName: string;
  url: string;
  available: boolean;
  arch?: string;
}

export const GITHUB_RELEASES_BASE =
  "https://github.com/barbaroszngr/FocusNow/releases/latest/download";

export const downloadLinks: DownloadLink[] = [
  {
    platform: "mac-arm",
    label: "macOS (Apple Silicon)",
    fileName: "FocusNow-arm64.dmg",
    url: `${GITHUB_RELEASES_BASE}/FocusNow-arm64.dmg`,
    available: true,
    arch: "Apple M1/M2/M3/M4",
  },
  {
    platform: "mac-intel",
    label: "macOS (Intel)",
    fileName: "FocusNow-x64.dmg",
    url: `${GITHUB_RELEASES_BASE}/FocusNow-x64.dmg`,
    available: true,
    arch: "Intel x64",
  },
  {
    platform: "windows",
    label: "Windows",
    fileName: "FocusNow-Setup.exe",
    url: `${GITHUB_RELEASES_BASE}/FocusNow-Setup.exe`,
    available: true,
  },
];

export function detectPlatform(): Platform {
  if (typeof window === "undefined") return "mac-arm";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("mac")) {
    // Check for Apple Silicon - not perfectly reliable from UA alone
    return "mac-arm";
  }
  if (ua.includes("win")) return "windows";
  return "mac-arm";
}

export function getPrimaryDownload(platform: Platform): DownloadLink {
  const link = downloadLinks.find((d) => d.platform === platform);
  return link || downloadLinks[0];
}

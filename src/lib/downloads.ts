export type Platform = "mac-arm" | "mac-intel" | "windows";

export interface DownloadLink {
  platform: Platform;
  label: string;
  fileName: string;
  url: string;
  available: boolean;
  arch?: string;
}

export const RELEASES_LATEST_PAGE =
  "https://github.com/focusnow-ai/focusnow-releases/releases/latest";

const RELEASES_LATEST_API =
  "https://api.github.com/repos/focusnow-ai/focusnow-releases/releases/latest";

const platformMeta: Record<Platform, { label: string; arch?: string }> = {
  "mac-arm": { label: "macOS (Apple Silicon)", arch: "Apple M1/M2/M3/M4" },
  "mac-intel": { label: "macOS (Intel)", arch: "Intel x64" },
  windows: { label: "Windows" },
};

const platformOrder: Platform[] = ["mac-arm", "mac-intel", "windows"];

interface ReleaseAsset {
  name: string;
  browser_download_url: string;
}

function matchAsset(
  assets: ReleaseAsset[],
  platform: Platform
): ReleaseAsset | undefined {
  return assets.find(({ name }) => {
    if (platform === "mac-arm") return name.endsWith(".dmg") && name.includes("arm64");
    if (platform === "mac-intel") return name.endsWith(".dmg") && !name.includes("arm64");
    return name.endsWith(".exe");
  });
}

function fallbackLinks(): DownloadLink[] {
  return platformOrder.map((platform) => ({
    platform,
    ...platformMeta[platform],
    fileName: "GitHub Releases",
    url: RELEASES_LATEST_PAGE,
    available: true,
  }));
}

export async function getLatestDownloadLinks(): Promise<DownloadLink[]> {
  try {
    const res = await fetch(RELEASES_LATEST_API, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallbackLinks();

    const release: { assets?: ReleaseAsset[] } = await res.json();

    return platformOrder.map((platform) => {
      const asset = matchAsset(release.assets ?? [], platform);
      return {
        platform,
        ...platformMeta[platform],
        fileName: asset?.name ?? "",
        url: asset?.browser_download_url ?? RELEASES_LATEST_PAGE,
        available: Boolean(asset),
      };
    });
  } catch {
    return fallbackLinks();
  }
}

export function detectPlatform(): Platform {
  if (typeof window === "undefined") return "mac-arm";
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("win")) return "windows";
  return "mac-arm";
}

export function getPrimaryDownload(
  links: DownloadLink[],
  platform: Platform
): DownloadLink {
  return links.find((d) => d.platform === platform) ?? links[0];
}

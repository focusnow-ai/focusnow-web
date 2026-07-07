import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://focusnow.ai"),
  title: {
    default: "FocusNow — See Where Your Time Goes | Free Desktop Tracker",
    template: "%s | FocusNow",
  },
  description:
    "Free desktop app that tracks your apps automatically and shows where your workday goes. No screenshots, no keylogging. Mac & Windows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

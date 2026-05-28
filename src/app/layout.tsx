import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://focusnow.ai"),
  title: {
    default: "FocusNow — See Where Your Time Goes | Free Desktop Tracker",
    template: "%s | FocusNow",
  },
  description:
    "Free desktop app that automatically tracks your apps and shows how you spend your workday. AES-256 encrypted. Mac & Windows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

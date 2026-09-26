import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://focusnow.ai"),
  title: {
    default: "FocusNow: Automatic Time Tracking for Mac & Windows",
    template: "%s | FocusNow",
  },
  description:
    "Automatic time tracking for Mac and Windows. See where your day goes, make room for deep work and turn tracked activity into client hours. Free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

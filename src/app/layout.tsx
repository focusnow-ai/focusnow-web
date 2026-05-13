import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FocusNow - AI-Powered Focus Tracking",
    template: "%s | FocusNow",
  },
  description:
    "Privacy-first AI-powered desktop focus tracking app. Understand your productivity patterns without compromising your data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/* GOOGLE FONT — BODY */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

/* LOCAL FONT — DISPLAY */
const clash = localFont({
  src: [
    {
      path: "../public/fonts/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Portfolio — Muhammad Dannis",
  description: "Creative Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${clash.variable}`}>
        {children}
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Kay Moz Ceramics",
  description: "The official website of Kay Moz Ceramics.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}

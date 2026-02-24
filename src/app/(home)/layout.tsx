import { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

import "../globals.scss";

export const metadata: Metadata = {
  title: "Kay Moz Ceramics",
  description: "The official website of Kay Moz Ceramics.",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <Header isHomepage={true} />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "../globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
        <Header isHomepage={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

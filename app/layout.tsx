import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Cormorant_Garamond,
  DM_Sans,
  Geist,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const fustat = localFont({
  src: "./font/fustat.ttf",
  variable: "--font-body",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zufeet —  Handcrafted Footwear for Confident Steps",
  description:
    "Zufeet is a Nigerian footwear brand crafting premium quality palms for everyday comfort and lasting style.",
  keywords: [
    "Zufeet",
    "Nigerian footwear",
    "palms",
    "sandals",
    "quality footwear Nigeria",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        display.variable,
        fustat.variable,
        body.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

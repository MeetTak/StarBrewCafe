import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "StarBrew Cafe — Enjoy Brewtiful Moments",
  description:
    "StarBrew Cafe in Kishangarh — specialty coffee, delicious bites, and brewtiful vibes. View our menu, explore the space, and visit us today.",
  keywords: ["starbrew", "cafe", "kishangarh", "coffee", "specialty coffee"],
  openGraph: {
    title: "StarBrew Cafe — Enjoy Brewtiful Moments",
    description:
      "Specialty coffee, delicious bites, and brewtiful vibes in Kishangarh.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dancingScript.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}

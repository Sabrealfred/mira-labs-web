import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mira Labs | Regulated Digital Asset Management",
  description:
    "Mira Labs operates a FINMA-authorized Swiss asset manager with Luxembourg CSSF compartments, delivering institutional digital asset exposure with day-one scale.",
  openGraph: {
    title: "Mira Labs | Regulated Digital Asset Management",
    description:
      "FINMA-licensed platform with ~$72M AUM, Luxembourg CSSF compartments, and institutional infrastructure ready on day one.",
    url: "https://mira-labs-web.vercel.app",
    siteName: "Mira Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mira Labs | Regulated Digital Asset Management",
    description:
      "FINMA-licensed platform with ~$72M AUM, Luxembourg CSSF compartments, and institutional infrastructure ready on day one.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}

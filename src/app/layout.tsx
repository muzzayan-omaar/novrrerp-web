import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/* Matches the geometric bold wordmark in the NOVRR ERP logo */
const outfit = Outfit({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://novrrerp.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOVRR ERP — One system to run your stores",
    template: "%s | NOVRR ERP",
  },
  description:
    "Localized ERP for Ugandan shops and multi-branch retail. POS, multi-store inventory, sales, EFRIS-ready fiscal receipts, payroll, and more — in one place.",
  keywords: [
    "ERP Uganda",
    "POS Uganda",
    "EFRIS",
    "multi-store inventory",
    "NOVRR",
    "accounting software Uganda",
  ],
  authors: [{ name: "NOVRR" }],
  creator: "NOVRR",
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteUrl,
    siteName: "NOVRR ERP",
    title: "NOVRR ERP — One system to run your stores",
    description:
      "Sell, stock, pay staff, and stay EFRIS-ready from one platform built for Uganda.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "NOVRR ERP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVRR ERP — One system to run your stores",
    description:
      "Sell, stock, pay staff, and stay EFRIS-ready from one platform built for Uganda.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-nova-900 bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
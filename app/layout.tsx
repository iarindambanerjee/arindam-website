import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import StructuredData from "@/components/seo/StructuredData";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arindam-banerjee.com"),

  title: {
    default:
      "Fractional CIO | AI & Technology Strategy | Arindam Banerjee",
    template: "%s | Arindam Banerjee",
  },

  description:
    "Fractional CIO helping founders, CEOs and growing businesses modernise technology, adopt AI responsibly and build scalable digital capabilities through strategic technology leadership.",

  keywords: [
    "Fractional CIO",
    "Interim CIO",
    "Technology Strategy",
    "Technology Consultant",
    "Digital Transformation",
    "AI Strategy",
    "AI Advisory",
    "Technology Leadership",
    "Enterprise Architecture",
    "Cloud Transformation",
    "IT Strategy",
    "Digital Modernisation",
  ],

  authors: [
    {
      name: "Arindam Banerjee",
    },
  ],

  creator: "Arindam Banerjee",

  publisher: "Arindam Banerjee",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

    openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.arindam-banerjee.com",
    siteName: "Arindam Banerjee",

    title:
      "Fractional CIO | AI & Technology Strategy | Arindam Banerjee",

    description:
      "Helping founders, CEOs and growing businesses modernise technology, adopt AI responsibly and build scalable digital capabilities through strategic technology leadership.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arindam Banerjee | Fractional CIO",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Fractional CIO | AI & Technology Strategy | Arindam Banerjee",

    description:
      "Helping organisations modernise technology, adopt AI responsibly and accelerate digital transformation.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <StructuredData />
        <Navbar />

        <main>
          {children}
        </main>
        
        <GoogleAnalytics
        gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
       />
      </body>
      
    </html>
  );
}
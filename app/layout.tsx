import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
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
  metadataBase: new URL(siteConfig.website),

 title: {
  default: "Arindam Banerjee | Technology Leadership",
  template: "%s | Arindam Banerjee",
},  

  description:
  "Technology leader with more than 21 years of experience delivering enterprise technology transformation, AI strategy, digital transformation and delivery excellence across global organisations.",

  keywords: [
  "Technology Leadership",
  "Enterprise Technology",
  "Digital Transformation",
  "AI Strategy",
  "Enterprise Architecture",
  "Programme Management",
  "Technology Strategy",
  "Cloud Transformation",
  "Delivery Excellence",
  "Technology Modernisation",
  "Leadership",
  "Persistent Systems",
],

 authors: [
  {
    name: siteConfig.name,
  },
],

creator: siteConfig.name,

publisher: siteConfig.name,

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
    url: siteConfig.website,
    siteName: siteConfig.name,

    title:
  "Arindam Banerjee | Technology Leadership",

    description:
  "Technology leader with more than 21 years of experience delivering enterprise technology transformation, AI strategy and business-focused technology leadership.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arindam Banerjee | Technology Leadership",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
  "Arindam Banerjee | Technology Leadership",

    description:
  "Enterprise technology leader specialising in digital transformation, AI strategy and delivery excellence.",

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

        <div className="flex min-h-screen flex-col">
          <Navbar />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </div>

        <GoogleAnalytics
          gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!}
        />
      </body>
    </html>
  );
}
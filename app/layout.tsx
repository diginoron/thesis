import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  generateWebsiteJsonLd,
  generateOrganizationJsonLd,
} from "@/lib/seo";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-vazir",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.caspianthesis.com"),
  title: {
    default: "انجام پایان نامه با هوش مصنوعی | Caspian Thesis",
    template: "%s | Caspian Thesis",
  },
  description:
    "دستیار هوش مصنوعی برای انجام پایان‌نامه — نوشتن، تحلیل داده، ویرایش و مشاوره تخصصی پایان‌نامه با هوش مصنوعی پیشرفته.",
  keywords: [
    "انجام پایان نامه با هوش مصنوعی",
    "دستیار هوش مصنوعی انجام پایان نامه",
    "پایان نامه هوش مصنوعی",
    "نوشتن پایان نامه",
    "تحلیل داده پایان نامه",
    "caspian thesis",
    "thesis ai",
    "پایان نامه دریای خزر",
  ],
  authors: [{ name: "Caspian Thesis" }],
  creator: "Caspian Thesis",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: "Caspian Thesis",
    locale: "fa_IR",
    type: "website",
  },
  verification: {
    google: "7RwW6HkWMtAtWWznj8SKw91oRf4NLEUc2iQPCnWAwHY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = generateWebsiteJsonLd();
  const organizationJsonLd = generateOrganizationJsonLd();

  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={vazir.className}>
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

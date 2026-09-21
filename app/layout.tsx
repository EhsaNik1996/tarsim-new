import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { VisualAtmosphere } from "@/components/effects/atmosphere";

const vazirmatn = localFont({
  src: "./fonts/Vazirmatn.woff2",
  variable: "--font-vazirmatn",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: { default: "ترسیم — استودیوی محصول", template: "%s — ترسیم" },
  description:
    "ترسیم محصولات دیجیتال و زیرساخت‌هایی برای مسئله‌های واقعی می‌سازد. سازندهٔ داکیباکس.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>
        <VisualAtmosphere />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { VisualAtmosphere } from "@/components/effects/atmosphere";

const iranRounded = localFont({
  src: "../public/assets/fonts/IRAN-Rounded.woff",
  variable: "--font-iran-rounded",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: { default: "ترسیم — استودیوی محصول", template: "%s — ترسیم" },
  description:
    "ترسیم محصولات دیجیتال و زیرساخت‌هایی برای مسئله‌های واقعی می‌سازد. سازندهٔ داکیباکس.",
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={iranRounded.variable}>
      <body>
        <VisualAtmosphere />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

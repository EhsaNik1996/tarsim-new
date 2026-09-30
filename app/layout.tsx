import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/header";
import { VisualAtmosphere } from "@/components/effects/atmosphere";

const iranRounded = localFont({
  src: [
    {
      path: "../public/assets/fonts/IRAN.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/IRAN_SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/IRANBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/IRANBlack.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-iran-rounded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarsiminc.com"),
  title: { default: "ترسیم | استودیوی محصول و فناوری", template: "%s | ترسیم" },
  description:
    "ترسیم استودیوی محصول و فناوری است؛ محصولات دیجیتال و زیرساخت‌هایی برای مسئله‌های واقعی می‌سازیم، از جمله داکیباکس.",
  applicationName: "ترسیم",
  keywords: ["ترسیم", "استودیوی محصول", "محصول دیجیتال", "داکیباکس", "فناوری", "طراحی محصول"],
  authors: [{ name: "استودیو ترسیم", url: "https://tarsiminc.com/studio" }],
  creator: "استودیو ترسیم",
  publisher: "استودیو ترسیم",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://tarsiminc.com/",
    siteName: "ترسیم",
    title: "ترسیم | استودیوی محصول و فناوری",
    description: "محصولات دیجیتال و زیرساخت‌هایی برای مسئله‌های واقعی.",
    images: [{ url: "/assets/tarsim-logo.png", width: 512, height: 512, alt: "لوگوی ترسیم" }],
  },
  twitter: {
    card: "summary",
    title: "ترسیم | استودیوی محصول و فناوری",
    description: "محصولات دیجیتال و زیرساخت‌هایی برای مسئله‌های واقعی.",
    images: ["/assets/tarsim-logo.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
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

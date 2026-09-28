import type { Metadata } from "next";
import ContactPageClient from "./contact-client";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "برای همکاری، ساخت محصول دیجیتال یا مطرح کردن یک ایده با تیم ترسیم در ارتباط باشید.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "تماس با ترسیم",
    description: "برای شروع یک گفت‌وگو و همکاری با ترسیم پیام بفرستید.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

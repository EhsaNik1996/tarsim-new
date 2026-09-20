import type { Metadata } from "next";
import { NextPage } from "@/components/shared/next-page";
import { PageIntro } from "@/components/shared/page-intro";
import { AboutQuote, Principles } from "./components/about-content";
export const metadata: Metadata = {
  title: "دربارهٔ ما",
  description: "ترسیم؛ یک استودیوی مستقل محصول.",
};
export default function AboutPage() {
  return (
    <main>
      <PageIntro
        index="03"
        eyebrow="دربارهٔ ترسیم"
        title="ما یک شرکت خدماتی نیستیم."
        accent="سازنده‌ایم."
        underlineAccent
        text="ترسیم یک استودیوی مستقل محصول است. از یک نیاز واقعی شروع می‌کنیم و آن را به تجربه‌ای ساده، پایدار و قابل رشد تبدیل می‌کنیم."
      />
      <Principles />
      <AboutQuote />
      <NextPage href="/products/docibox" label="محصول ما" title="داکیباکس" />
    </main>
  );
}

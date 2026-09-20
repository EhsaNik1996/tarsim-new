import type { Metadata } from "next";
import { ProductCta } from "./components/product-cta";
import { ProductJourney } from "./components/product-journey";
import { NextPage } from "@/components/shared/next-page";
import { PageIntro } from "@/components/shared/page-intro";
import { DociBoxStage } from "@/components/shared/docibox-stage";
import {
  ProductAudiences,
  ProductManifesto,
} from "./components/product-content";
export const metadata: Metadata = {
  title: "داکیباکس",
  description: "پلتفرم یکپارچهٔ کتابخانه‌ها و منابع دیجیتال",
};
export default function DociBoxPage() {
  return (
    <main>
      <PageIntro
        index="01"
        eyebrow="محصول اصلی ترسیم"
        title="همهٔ منابع،"
        accent="یک تجربهٔ ساده."
        text="داکیباکس پلتفرمی یکپارچه برای کتابخانه‌ها، ناشران و آدم‌هایی است که می‌خواهند دانش همیشه در دسترس باشد."
      />
      <section className="mx-auto px-7 pb-36 max-w-7xl max-sm:px-4 max-sm:pb-20">
        <DociBoxStage compact />
      </section>
      <ProductJourney />
      <ProductManifesto />
      <ProductAudiences />
      <ProductCta />
      <NextPage href="/lab" label="بعدی" title="آزمایشگاه ترسیم" />
    </main>
  );
}

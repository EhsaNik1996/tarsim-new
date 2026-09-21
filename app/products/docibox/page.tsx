import type { Metadata } from "next";
import { ProductCta } from "./components/cta";
import { NextPage } from "@/components/shared/next";
import { PageIntro } from "@/components/shared/intro";
import { ProductJourney } from "./components/journey";
import { DociBoxStage } from "@/components/shared/stage";
import {
  ProductAudiences,
  ProductManifesto,
} from "./components/content";

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

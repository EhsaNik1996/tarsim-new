import Link from "next/link";
import Image from "next/image";
import { DociboxAccordion } from "./docibox-accordion";
import { ArrowIcon } from "@/components/shared/arrow";
import { BlurReveal } from "@/components/effects/reveal";
import { DociBoxStage } from "@/components/shared/stage";
import dociboxLogo from "../../public/assets/docibox-logo.png";

export function FeaturedProduct() {
  return (
    <section
      id="product"
      aria-labelledby="docibox-featured-title"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-7 md:py-24"
    >
      <BlurReveal>
        <div className="flex items-center text-xs font-bold tracking-wide after:mr-5 after:h-px after:flex-1 after:bg-line">
          <span className="text-accent ml-4">01</span>محصول اصلی
        </div>
        <div className="mt-9 grid min-w-0 items-center gap-9 md:mt-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-line bg-surface shadow-sm">
                <Image src={dociboxLogo} alt="" width={32} height={32} />
              </span>
              <div>
                <p dir="ltr" className="w-fit font-sans text-sm font-extrabold tracking-widest text-accent">DOCiBOX</p>
                <p className="mt-1 text-[11px] text-muted">جایی برای به‌هم‌رسیدن دانش</p>
              </div>
            </div>
            <h2 id="docibox-featured-title" className="mt-6 text-[clamp(2rem,8vw,3rem)] font-extrabold leading-[1.4] tracking-tight sm:text-5xl xl:text-6xl">
              یک کتابخانه،
              <br />
              <span className="text-accent">هزار مسیر کشف.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-muted">
              کتابخانه‌ها، ناشران و منابع دیجیتال در یک فضای مشترک؛
              تا به‌جای جست‌وجو میان مجموعه‌های پراکنده، مسیر رسیدن به دانش را پیدا کنید.
            </p>
            <Link href="/products/docibox" className="group mt-6 inline-flex min-h-12 max-w-full items-center gap-4 rounded-full bg-ink py-2 pl-2 pr-5 text-sm font-bold text-paper outline-offset-4 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-accent">
              کشف داکیباکس
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
                <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-0.5" />
              </span>
            </Link>
          </div>
          <DociboxAccordion />
        </div>
      </BlurReveal>
      <BlurReveal className="mt-9 md:mt-12" delay={120}>
        <div className="overflow-hidden rounded-3xl sm:rounded-4xl">
          <DociBoxStage />
        </div>
      </BlurReveal>
    </section>
  );
}

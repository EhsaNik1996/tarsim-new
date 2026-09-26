import Link from "next/link";
import { ArrowIcon } from "@/components/shared/arrow";
import { BlurReveal } from "@/components/effects/reveal";
import { DociBoxStage } from "@/components/shared/stage";

export function FeaturedProduct() {
  return (
    <section
      id="product"
      className="mx-auto px-7 max-w-7xl max-sm:px-4 md:py-24"
    >
      <BlurReveal>
        <div className="text-xs font-bold tracking-wide">
          <span className="text-accent ml-4">01</span>محصول اصلی
        </div>
        <div className="flex items-end justify-between mt-16 max-sm:block max-sm:mt-12">
          <div>
            <p className="font-sans text-sm font-bold text-accent tracking-widest">
              DOCiBOX®
            </p>
            <h2 className="text-8xl leading-tight font-extrabold tracking-tighter mt-5 max-sm:text-4xl">
              یک کتابخانه،
              <br />
              هزار مسیر کشف.
            </h2>
          </div>
          <p className="max-w-sm leading-8 text-muted max-sm:mt-8">
            کتابخانه‌ها، ناشران و منابع دیجیتال در یک تجربهٔ زنده و یکپارچه.
          </p>
        </div>
      </BlurReveal>
      <BlurReveal className="mt-14 max-sm:mt-9" delay={120}>
        <DociBoxStage />
      </BlurReveal>
      <BlurReveal delay={180}>
        <Link
          className="flex items-center w-fit font-bold text-accent border-b border-accent gap-3 mt-9 py-4"
          href="/products/docibox"
        >
          کشف داکیباکس <ArrowIcon />
        </Link>
      </BlurReveal>
    </section>
  );
}

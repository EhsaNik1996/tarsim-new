import Link from "next/link";
import { CircleAlert } from "lucide-react";
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
            <div className="mt-6 flex max-w-xl items-start gap-3 rounded-2xl border border-gold/20 bg-gold/5 p-4 md:p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-[#9a6b00]">
                <CircleAlert className="size-4.5" aria-hidden="true" />
              </span>
              <div>
                <span className="text-xs font-extrabold text-[#9a6b00]">
                  مسئله‌ای که حل می‌کنیم
                </span>
                <p className="mt-1 text-sm leading-7 text-ink/75">
                  منابع کتابخانه‌ها و ناشران پراکنده‌اند و پیدا کردن و دسترسی به
                  محتوای موردنیاز دشوار است.
                </p>
              </div>
            </div>
            <h2 className="text-8xl leading-tight font-extrabold tracking-tighter mt-5 max-sm:text-4xl">
              یک کتابخانه،
              <br />
              هزار مسیر کشف.
            </h2>
          </div>
          <div className="max-w-sm rounded-2xl border border-accent/15 bg-panel/45 p-5 leading-8 max-sm:mt-8">
            <span className="text-xs font-extrabold text-accent">
              راهکار داکیباکس
            </span>
            <p className="mt-2 text-sm text-muted">
              کتابخانه‌ها، ناشران و منابع دیجیتال را در یک تجربهٔ یکپارچه گرد
              هم می‌آورد تا دانش آسان‌تر پیدا و در دسترس قرار بگیرد.
            </p>
          </div>
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

import Link from "next/link";
import { ArrowIcon } from "@/components/shared/arrow";
import { CodeConsole } from "@/components/effects/console";

export function HeroSection() {
  return (
    <section
      className="flex flex-col relative min-h-[calc(100vh-6rem)] mx-auto px-7 pt-12 pb-9 max-w-7xl max-sm:min-h-[calc(100svh-5rem)] max-sm:px-4 max-sm:pt-10"
      id="top"
    >
      <div className="flex items-center flex-1 gap-10 max-lg:flex-col max-lg:items-start max-lg:justify-center">
        <div className="flex-1">
          <span>
            استودیوی محصول ترسیم
          </span>

          <div className="text-8xl leading-14 md:leading-30 font-extrabold tracking-tighter mt-7 max-sm:text-5xl">
            <span className="inline-block animate-blur-in">پیچیده‌ها را</span>
            <br />
            <span className="inline-block relative z-0 animate-blur-in text-accent [animation-delay:180ms] after:absolute after:left-0 after:top-full after:-z-10 after:w-full after:h-0.5 after:animate-line-pulse after:bg-linear-to-l after:from-transparent after:via-accent after:to-cyan">
              ساده‌تر
            </span>{" "}
            <span className="inline-block animate-blur-in [animation-delay:320ms]">
              می‌سازیم.
            </span>
          </div>
          <p className="max-w-lg text-lg leading-8 mt-10 max-sm:text-sm">
            محصول و زیرساخت می‌سازیم برای مسئله‌هایی که ارزش حل شدن دارند.
          </p>
        </div>
        <div className="flex w-1/3 justify-end max-lg:w-full max-lg:justify-start">
          <CodeConsole />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-line pt-5">
        <span className="font-mono text-xs text-muted" dir="ltr">
          SCROLL TO EXPLORE
        </span>
        <Link
          className="flex items-center justify-center size-14 bg-ink text-paper transition hover:translate-y-1 hover:bg-accent hover:text-ink rounded-full"
          href="#product"
          aria-label="دیدن محصول"
        >
          <ArrowIcon direction="down" />
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { ArrowIcon } from "@/components/shared/arrow-icon";
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <i className="absolute left-1/2 top-20 size-96 bg-accent/10 blur-3xl rounded-full" />
      <div className="relative overflow-hidden py-5">
        <div
          className="flex w-max animate-marquee font-mono text-sm text-white/40 whitespace-nowrap gap-12"
          dir="ltr"
        >
          <Ticker />
          <Ticker />
        </div>
      </div>
      <div className="flex relative items-end justify-between mx-auto px-7 pt-28 pb-24 max-w-7xl max-sm:flex-col max-sm:items-start max-sm:px-4">
        <div>
          <span
            className="font-mono text-xs text-accent tracking-widest"
            dir="ltr"
          >
            START A CONVERSATION / 2026
          </span>
          <p className="text-8xl leading-none font-extrabold tracking-tighter mt-8 max-sm:text-4xl">
            چیزی برای
            <br />
            <em className="text-accent not-italic">ساختن</em> داری؟
          </p>
        </div>
        <Link
          className="group flex items-center justify-between w-80 text-lg border border-white/20 bg-white/5 backdrop-blur-md transition hover:bg-accent hover:text-ink px-6 py-5 rounded-full max-sm:w-full max-sm:mt-16"
          href="mailto:hello@tarsim.co"
        >
          <span>با ما حرف بزن</span>
          <ArrowIcon className="transition group-hover:-translate-x-2" />
        </Link>
      </div>
      <div className="flex relative justify-between text-xs text-muted border-t border-white/15 mx-auto px-7 py-6 max-w-7xl max-sm:px-4">
        <span>© ۱۴۰۵ ترسیم — قم</span>
        <span className="flex items-center max-sm:hidden">
          <i className="size-2 animate-pulse bg-green-400 ml-2 rounded-full" />
          همهٔ سیستم‌ها فعال‌اند
        </span>
        <Link className="flex items-center text-white gap-2" href="#top">
          بازگشت به بالا <ArrowUp className="size-4 stroke-[1.7]" />
        </Link>
      </div>
    </footer>
  );
}
function Ticker() {
  return (
    <>
      <span>PRODUCT THINKING</span>
      <span>SOFTWARE ENGINEERING</span>
      <span>DIGITAL LIBRARIES</span>
      <span>REAL PROBLEMS</span>
      <span>BUILT IN QOM</span>
      <span>DOCIBOX.IR</span>
    </>
  );
}

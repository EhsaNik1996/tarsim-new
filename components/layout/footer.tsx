"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { ArrowIcon } from "@/components/shared/arrow";
import tarsimLogo from "../../public/assets/tarsim-logo.png";

function Ticker() {
  return (
    <>
      <span>PRODUCT THINKING</span>
      <span>SOFTWARE ENGINEERING</span>
      <span>DIGITAL LIBRARIES</span>
      <span>REAL PROBLEMS</span>
      <span>DOCIBOX.IR</span>
    </>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <i className="absolute left-1/2 top-20 size-96 bg-accent/10 blur-3xl rounded-full" />
      <div className="footer-logo-mask pointer-events-none absolute -left-20 top-1/2 size-168 -translate-y-1/2 opacity-[.16] max-lg:-left-40 max-lg:size-136 max-sm:-left-28 max-sm:top-[46%] max-sm:size-96" aria-hidden="true">
        <Image
          src={tarsimLogo}
          alt=""
          fill
          sizes="(max-width: 640px) 384px, 672px"
          className="object-contain grayscale brightness-200"
        />
      </div>
      <div className="relative overflow-hidden py-5">
        <div
          className="flex w-max animate-marquee font-mono text-sm text-white/40 whitespace-nowrap gap-12"
          dir="ltr"
        >
          <Ticker />
          <Ticker />
        </div>
      </div>
      <div className="relative mx-auto px-7 md:py-24 max-w-7xl max-sm:px-4">
        <div>
          <span
            className="font-mono text-xs text-accent tracking-widest"
            dir="ltr"
          >
            START A CONVERSATION / 2026
          </span>
          <p className="text-8xl leading-11 md:leading-30 font-extrabold tracking-tighter mt-8 max-sm:text-4xl">
            چیزی برای
            <br />
            <em className="text-accent not-italic">ساختن</em> داری؟
          </p>
          {pathname !== "/contact" && pathname !== "/contact/" && (
          <Link
            className="group mt-10 flex w-fit items-center gap-3 border-b border-white/25 py-2 text-sm text-white/80 transition hover:border-accent hover:text-accent max-sm:mb-10 max-sm:mt-7"
            href="/contact"
          >
            <span>با ما حرف بزن</span>
            <ArrowIcon className="size-4 transition group-hover:-translate-x-1" />
          </Link>
          )}
        </div>
      </div>
      <div className="flex relative justify-between text-xs text-muted border-t border-white/15 mx-auto px-7 py-6 max-w-7xl max-sm:px-4">
        <span>© 1405 ترسیم</span>
        <Link className="flex items-center text-white gap-2" href="#top">
          بازگشت به بالا <ArrowUp className="size-4 stroke-[1.7]" />
        </Link>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "@/components/shared/arrow";
import tarsimLogo from "../../public/assets/tarsim-logo.png";

const tickerItems = [
  "PRODUCT THINKING",
  "SOFTWARE ENGINEERING",
  "DIGITAL LIBRARIES",
  "REAL PROBLEMS",
  "DOCIBOX.IR",
];

function TickerPass() {
  return (
    <span className="flex shrink-0 items-center gap-8">
      {tickerItems.map((item) => (
        <span key={item} className="flex shrink-0 items-center">
          {item}
        </span>
      ))}
    </span>
  );
}

function Ticker() {
  const windowRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [passes, setPasses] = useState(2);

  useEffect(() => {
    const windowEl = windowRef.current;
    const track = trackRef.current;
    if (!windowEl || !track) return;
    const syncPasses = () => {
      const pass = track.firstElementChild as HTMLElement | null;
      const passWidth = pass?.offsetWidth ?? 0;
      if (!passWidth) return;
      // The loop shifts the track by half of its own width, so it needs at
      // least two window widths of words to stay covered, and an even number
      // of passes to land exactly on a pass boundary.
      const needed = Math.ceil((windowEl.clientWidth * 2) / passWidth);
      setPasses(Math.max(2, needed % 2 === 0 ? needed : needed + 1));
    };
    syncPasses();
    // The words are measured in pixels, so a late web font swap needs a re-check.
    document.fonts?.ready.then(syncPasses);
    window.addEventListener("resize", syncPasses);
    return () => window.removeEventListener("resize", syncPasses);
  }, []);

  return (
    <div ref={windowRef} className="relative overflow-hidden py-5">
      <div
        ref={trackRef}
        className="flex w-max animate-marquee font-mono text-sm text-white/40 whitespace-nowrap"
        dir="ltr"
      >
        {Array.from({ length: passes }, (_, index) => (
          <TickerPass key={index} />
        ))}
      </div>
    </div>
  );
}

export function SiteFooter() {
  const pathname = usePathname();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <i className="absolute left-1/2 top-20 size-96 bg-accent/10 blur-3xl rounded-full" />
      <div
        className="footer-logo-mask pointer-events-none absolute -left-20 top-1/2 size-168 -translate-y-1/2 opacity-[.16] max-lg:-left-40 max-lg:size-136 max-sm:-left-28 max-sm:top-[46%] max-sm:size-96"
        aria-hidden="true"
      >
        <Image
          src={tarsimLogo}
          alt=""
          fill
          sizes="(max-width: 640px) 384px, 672px"
          className="object-contain grayscale brightness-200"
        />
      </div>
      <Ticker />
      <div className="relative mx-auto px-7 md:py-24 max-w-7xl max-sm:px-4">
        <div>
          <span
            className="font-mono text-xs text-accent tracking-widest"
            dir="ltr"
          >
            START A CONVERSATION / 2026
          </span>
          <p className="text-8xl leading-11 md:leading-30 font-extrabold tracking-tighter my-8 max-sm:text-4xl">
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

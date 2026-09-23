import Link from "next/link";
import { ArrowIcon } from "@/components/shared/arrow";

export function HeroPreview() {
  return (
    <div className="relative w-full max-w-sm py-6 sm:py-10">
      <div className="relative mx-auto flex aspect-square w-full max-w-72 items-center justify-center">
        <div aria-hidden="true" className="absolute inset-10 rounded-full bg-accent/8 blur-3xl" />
        <svg aria-hidden="true" viewBox="0 0 288 288" fill="none" className="absolute inset-0 size-full">
          <rect x="28" y="28" width="232" height="232" rx="64" className="stroke-ink/8" strokeDasharray="3 7" />
          <path d="M28 92V64C28 44 44 28 64 28H92" className="stroke-accent" strokeWidth="2" strokeLinecap="round" />
          <path d="M260 196V224C260 244 244 260 224 260H196" className="stroke-cyan" strokeWidth="2" strokeLinecap="round" />
          <circle cx="260" cy="92" r="4" className="fill-green" />
          <circle cx="28" cy="196" r="4" className="fill-accent" />
        </svg>
        <div className="relative flex size-44 -rotate-6 items-center justify-center rounded-[2.5rem] border border-white bg-white/80 shadow-[0_16px_60px_-20px_rgba(45,47,50,0.18)] backdrop-blur-sm">
          <div className="rotate-6 text-center">
            <span className="text-5xl font-black tracking-tight">ترسیم</span>
            <div aria-hidden="true" className="mt-5 flex justify-center gap-1.5">
              <span className="h-1 w-5 rounded-full bg-accent" />
              <span className="h-1 w-5 rounded-full bg-green" />
              <span className="h-1 w-5 rounded-full bg-cyan" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-lg font-medium">از ایده، به چیزی واقعی.</p>
      <Link href="/contact" className="group mx-auto mt-4 flex w-fit items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted outline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-cyan">
        <span>گفت‌وگو با ترسیم</span>
        <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}

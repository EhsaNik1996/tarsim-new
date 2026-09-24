import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/shared/arrow";

export function ExploreLinks() {
  return (
    <section
      dir="ltr"
      className="flex mx-auto px-7 py-28 gap-5 max-w-7xl max-sm:flex-col max-sm:px-4 max-sm:py-20"
    >
      <ExploreCard
        href="/studio"
        index="03 / STUDIO"
        title={
          <>
            WE THINK
            <br />
            WE BUILD
            <br />
            WE EXECUTE.
          </>
        }
        caption="برای آدم‌هایی که می‌خواهند چیزی واقعی بسازند"
        variant="light"
        ltr
      />
      <ExploreCard
        href="/contact"
        index="04 / TARSIM"
        title={
          <>
            از یک گفت‌وگو
            <br />
            شروع کنیم.
          </>
        }
        caption="آشنایی با ترسیم و شروع همکاری"
        variant="accent"
      />
    </section>
  );
}
function ExploreCard({
  href,
  index,
  title,
  caption,
  variant,
  ltr = false,
}: {
  href: string;
  index: string;
  title: ReactNode;
  caption: string;
  variant: "light" | "accent";
  ltr?: boolean;
}) {
  const accent = variant === "accent";
  return (
    <Link
      href={href}
      className={`group flex flex-1 flex-col justify-between relative h-140 overflow-hidden border transition duration-500 hover:-translate-y-3 hover:shadow-2xl p-10 rounded-3xl max-sm:h-104 ${accent ? "bg-linear-to-br from-accent via-green to-cyan text-white border-white/20" : "bg-white/65 text-ink border-line backdrop-blur-lg hover:border-accent"}`}
    >
      <i
        className={`absolute left-2/3 top-2/3 size-72 blur-3xl transition duration-700 group-hover:scale-150 rounded-full ${accent ? "bg-white/20" : "bg-accent/15"}`}
      />
      <span className="relative font-sans text-xs tracking-widest">
        {index}
      </span>
      <div
        dir={ltr ? "ltr" : "rtl"}
        className="flex relative min-w-0 items-end justify-between gap-8 max-sm:gap-4"
      >
        <p
          dir={ltr ? "ltr" : "rtl"}
          className={`min-w-0 text-6xl leading-tight max-sm:text-3xl font-bold tracking-tighter transition duration-500 group-hover:-translate-y-2 ${ltr ? "font-sans text-left" : "text-right"}`}
        >
          {title}
        </p>
        <span
          className={`flex size-12 shrink-0 items-center justify-center self-end rounded-full border shadow-[inset_0_0_0_1px_rgb(255_255_255/0.04)] transition duration-500 group-hover:-translate-x-2 max-sm:size-11 ${accent ? "border-white/45 bg-white/8 group-hover:bg-white/15" : "border-ink/20 bg-white/70 group-hover:border-accent group-hover:bg-white"}`}
        >
          <ArrowIcon className="size-5 shrink-0" />
        </span>
      </div>
      <small
        className={`relative text-right border-t pt-5 ${accent ? "border-white/25" : "border-ink/20"}`}
      >
        {caption}
      </small>
    </Link>
  );
}

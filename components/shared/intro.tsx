import type { ReactNode } from "react";
import { BlurReveal } from "@/components/effects/reveal";
export function PageIntro({
  index,
  eyebrow,
  title,
  accent,
  text,
  underlineAccent = false,
  sideVisual,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  accent: ReactNode;
  text: string;
  underlineAccent?: boolean;
  sideVisual?: ReactNode;
}) {
  if (sideVisual) {
    return (
      <section
        className="relative mx-auto min-h-125 max-w-7xl items-center gap-10 px-7 py-14 md:min-h-150 md:gap-8 max-sm:px-4"
        id="top"
      >
        <BlurReveal className="transition duration-1000 ease-out will-change-transform translate-y-0 opacity-100 blur-none flex self-start items-center w-1/3 text-xs font-bold tracking-wide gap-3 max-sm:w-full">
          <span className="text-accent font-mono">{index}</span>
          <span>{eyebrow}</span>
        </BlurReveal>
        <div className="flex flex-col md:flex-row w-full gap-6 max-sm:gap-4">
          <div className="basis-1/2 pt-10 md:pt-12">
            <BlurReveal>
              <h1 className="mt-8 text-6xl leading-tight font-extrabold tracking-tighter md:text-8xl max-sm:mt-1 max-sm:text-5xl">
                {title}
                <br />
                <em
                  className={
                    underlineAccent
                      ? "inline-block relative z-0 text-accent not-italic after:absolute after:left-0 after:top-full after:-z-10 after:w-full after:h-0.5 after:animate-line-pulse after:bg-linear-to-l after:from-transparent after:via-accent after:to-gold"
                      : "text-accent not-italic"
                  }
                >
                  {accent}
                </em>
              </h1>
            </BlurReveal>
            <BlurReveal delay={140}>
              <p className="mt-9 max-w-2xl text-base leading-9 md:text-lg">
                {text}
              </p>
            </BlurReveal>
          </div>
          <div className="basis-1/2">{sideVisual}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="flex items-center mx-auto px-7 max-w-7xl max-sm:block min-h-125 md:min-h-150 max-sm:px-4 py-14"
      id="top"
    >
      <BlurReveal className="flex self-start items-center w-1/3 text-xs font-bold tracking-wide gap-3 max-sm:w-full">
        <span className="text-accent font-mono">{index}</span>
        <span>{eyebrow}</span>
      </BlurReveal>
      <div className="w-2/3 max-sm:w-full">
        <BlurReveal>
          <h1 className="text-8xl leading-17 md:leading-33 font-extrabold tracking-tighter pt-10 max-sm:text-5xl">
            {title}
            <br />
            <em
              className={
                underlineAccent
                  ? "inline-block relative z-0 text-accent not-italic after:absolute after:left-0 after:top-full after:-z-10 after:w-full after:h-0.5 after:animate-line-pulse after:bg-linear-to-l after:from-transparent after:via-accent after:to-gold"
                  : "text-accent not-italic"
              }
            >
              {accent}
            </em>
          </h1>
        </BlurReveal>
        <BlurReveal delay={140}>
          <p className="max-w-2xl text-xl leading-10 mt-9 max-sm:text-base">
            {text}
          </p>
        </BlurReveal>
      </div>
    </section>
  );
}

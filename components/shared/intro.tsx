import type { ReactNode } from "react";
import { BlurReveal } from "@/components/effects/reveal";
export function PageIntro({
  index,
  eyebrow,
  title,
  accent,
  text,
  underlineAccent = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  accent: ReactNode;
  text: string;
  underlineAccent?: boolean;
}) {
  return (
    <section
      className="flex items-center min-h-172 mx-auto px-7 py-20 max-w-7xl max-sm:block max-sm:min-h-150 max-sm:px-4 max-sm:py-14"
      id="top"
    >
      <BlurReveal className="flex self-start items-center w-1/3 text-xs font-bold tracking-wide gap-3 max-sm:w-full">
        <span className="text-accent font-mono">{index}</span>
        <span>{eyebrow}</span>
      </BlurReveal>
      <div className="w-2/3 max-sm:w-full">
        <BlurReveal>
          <h1 className="text-8xl leading-tight font-extrabold tracking-tighter mt-16 max-sm:text-4xl max-sm:mt-24">
            {title}
            <br />
            <em
              className={
                underlineAccent
                  ? "inline-block relative z-0 text-accent not-italic after:absolute after:left-0 after:top-full after:-z-10 after:w-full after:h-0.5 after:animate-line-pulse after:bg-linear-to-l after:from-transparent after:via-accent after:to-cyan"
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

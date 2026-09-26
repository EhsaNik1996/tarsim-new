"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/shared/arrow";

export function HeroPreview() {
  const word = "ترسیم";
  const [typedWord, setTypedWord] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let position = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const typeNext = () => {
      if (position < word.length) {
        position += 1;
        setTypedWord(word.slice(0, position));
        setIsComplete(false);
        timeout = setTimeout(typeNext, 180);
      } else {
        setIsComplete(true);
        timeout = setTimeout(() => {
          position = 0;
          setTypedWord("");
          setIsComplete(false);
          timeout = setTimeout(typeNext, 350);
        }, 5600);
      }
    };
    typeNext();
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="relative w-full max-w-sm py-6 sm:py-10">
      <div className="relative mx-auto flex aspect-square w-full max-w-72 items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-10 rounded-full bg-accent/8 blur-3xl"
        />
        <svg
          aria-hidden="true"
          viewBox="0 0 288 288"
          fill="none"
          className="absolute inset-0 size-full"
        >
          <rect
            x="28"
            y="28"
            width="232"
            height="232"
            rx="64"
            className="hero-preview-frame stroke-ink/8"
            strokeDasharray="3 7"
          />
          <path
            d="M28 92V64C28 44 44 28 64 28H92"
            className="hero-preview-line stroke-accent"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M260 196V224C260 244 244 260 224 260H196"
            className="hero-preview-line stroke-cyan"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="260"
            cy="92"
            r="4"
            className="hero-preview-dot fill-green"
          />
          <circle
            cx="28"
            cy="196"
            r="4"
            className="hero-preview-dot fill-accent [animation-delay:-1.2s]"
          />
        </svg>
        <div className="relative flex size-44 -rotate-6 items-center justify-center rounded-[2.5rem] border border-white bg-white/80 shadow-[0_16px_60px_-20px_rgba(45,47,50,0.18)] backdrop-blur-sm">
          <div className="rotate-6 text-center">
            <span
              aria-label={word}
              className={`inline-block text-4xl leading-[1.35] font-bold tracking-tight ${isComplete ? "bg-[linear-gradient(105deg,var(--color-ink)_0%,var(--color-ink)_30%,var(--color-cyan)_42%,var(--color-green)_50%,var(--color-accent)_58%,var(--color-ink)_70%,var(--color-ink)_100%)] bg-size-[260%_100%] bg-clip-text text-transparent [-webkit-background-clip:text] animate-[hero-title-wave_2.2s_ease-in-out_1_both]" : ""}`}
            >
              {typedWord}
              <span
                aria-hidden="true"
                className={`ml-1 inline-block h-[.8em] w-0.75 align-[-.08em] rounded-full bg-current animate-[hero-caret_700ms_steps(1)_infinite] ${isComplete ? "hidden" : ""}`}
              />
            </span>
            <div
              aria-hidden="true"
              className="mt-5 flex justify-center gap-1.5"
            >
              <span className="hero-preview-mark h-1 w-5 rounded-full bg-accent" />
              <span className="hero-preview-mark h-1 w-5 rounded-full bg-green [animation-delay:-.25s]" />
              <span className="hero-preview-mark h-1 w-5 rounded-full bg-cyan [animation-delay:-.5s]" />
            </div>
          </div>
        </div>
      </div>
      <p className="mt-5 text-center text-lg font-medium">
        از ایده، به چیزی واقعی.
      </p>
      <Link
        href="/contact"
        className="grسoup mx-auto mt-4 flex w-fit items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted outline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-cyan"
      >
        <span>گفت‌وگو با ترسیم</span>
        <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}

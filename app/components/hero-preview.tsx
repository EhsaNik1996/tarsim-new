"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  AlertTriangle,
  BookOpen,
  Check,
  CheckCircle2,
  Lightbulb,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowIcon } from "@/components/shared/arrow";

const word = "ترسیم";

const views = [
  {
    id: "problem",
    label: "مسئله",
    icon: AlertTriangle,
    accent: "text-gold",
  },
  {
    id: "tarsim",
    label: "ترسیم",
    icon: Sparkles,
    accent: "text-accent",
  },
  {
    id: "product",
    label: "محصول",
    icon: CheckCircle2,
    accent: "text-green",
  },
] as const;

type ViewId = (typeof views)[number]["id"];

const infrastructureProblems = [
  { label: "شبکه‌ی ناپایدار", icon: Network },
  { label: "سرورهای پراکنده", icon: Server },
  { label: "دسترسی‌های ناامن", icon: ShieldCheck },
] as const;

const solvedProblems = [
  "منابع پراکنده‌ی کتابخانه‌ها",
  "دشواری پیدا کردن محتوای موردنیاز",
  "دسترسی جداگانه به هر مجموعه",
] as const;

export function HeroPreview() {
  const [activeView, setActiveView] = useState<ViewId>("tarsim");
  const [typedWord, setTypedWord] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const prefersReducedMotion = useReducedMotion();

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

  const changeView = (view: ViewId) => setActiveView(view);
  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 250, damping: 22 };

  return (
    <div className="relative min-w-0 w-full max-w-sm py-6 sm:py-10">
      <div
        dir="rtl"
        className="relative mx-auto w-full max-w-92 px-3 pb-3 pt-4"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 aspect-square w-full max-w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-20 right-0 size-40 rounded-full bg-gold/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/90 bg-white/70 px-3 py-1.5 shadow-sm backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/50" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <p className="text-[11px] font-bold text-ink">از مسئله تا محصول</p>
          <p
            aria-label={word}
            className={`min-w-8 text-[10px] font-semibold text-accent ${isComplete ? "bg-[linear-gradient(105deg,var(--color-accent)_0%,var(--color-accent)_30%,var(--color-gold)_50%,var(--color-green)_58%,var(--color-accent)_75%)] bg-size-[220%_100%] bg-clip-text text-transparent animate-[hero-title-wave_2.2s_ease-in-out_1_both]" : ""}`}
          >
            {typedWord}
            <span
              aria-hidden="true"
              className={`mr-0.5 inline-block h-3 w-px align-[-2px] bg-accent animate-[hero-caret_700ms_steps(1)_infinite] ${isComplete ? "hidden" : ""}`}
            />
          </p>
        </div>

        <div className="relative mx-auto mt-3 flex aspect-square w-full max-w-76 items-center justify-center">
          <div
            aria-hidden="true"
            className="absolute aspect-square w-[97%] rounded-full border border-dashed border-accent/20 animate-[spin_42s_linear_infinite]"
          />
          <div
            aria-hidden="true"
            className="absolute aspect-square w-[97%] rounded-full border border-white/80"
          />

          <span className="absolute right-[3%] top-[24%] rounded-full border border-white/80 bg-white/65 px-2.5 py-1 text-[9px] font-semibold text-muted shadow-sm">
            داده‌های پراکنده
          </span>
          <span className="absolute bottom-[17%] left-[2%] rounded-full border border-white/80 bg-white/65 px-2.5 py-1 text-[9px] font-semibold text-muted shadow-sm">
            دسترسی دشوار
          </span>
          <span
            aria-hidden="true"
            className="absolute right-[16%] top-[12%] size-2 rounded-full bg-gold shadow-[0_0_14px_var(--color-gold)] animate-pulse"
          />
          <span
            aria-hidden="true"
            className="absolute bottom-[12%] left-[18%] size-1.5 rounded-full bg-green shadow-[0_0_12px_var(--color-green)] animate-pulse [animation-delay:-.7s]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[58%] top-[57%] z-0 h-28 w-4 origin-top rotate-[-42deg] rounded-full border border-white/80 bg-linear-to-b from-white via-[#d8e8ec] to-[#9dbbc5] shadow-[3px_8px_18px_rgba(45,47,50,0.18)]"
          >
            <span className="absolute inset-y-2 left-1 w-px rounded-full bg-white/90" />
          </div>

          <motion.div
            aria-live="polite"
            aria-atomic="true"
            initial={false}
            animate={{
              width: activeView === "tarsim" ? "74%" : "93%",
              height: activeView === "tarsim" ? "74%" : "93%",
            }}
            transition={transition}
            className="absolute left-1/2 top-1/2 z-10 flex aspect-square -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-[linear-gradient(145deg,#ffffff_8%,#d9eaf0_28%,#f9fdff_50%,#c8e0e8_74%,#ffffff_95%)] p-1.75 shadow-[0_24px_55px_-16px_rgba(45,47,50,0.38),inset_0_2px_4px_rgba(255,255,255,0.95)] ring-1 ring-ink/10"
          >
            <div className="relative flex size-full items-center justify-center overflow-hidden rounded-full border border-white/90 bg-[radial-gradient(ellipse_at_48%_35%,rgba(255,255,255,0.98)_0%,rgba(246,252,255,0.96)_48%,rgba(218,239,246,0.94)_100%)] px-5 text-center shadow-[inset_0_0_24px_rgba(53,169,224,0.12)]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-7 -top-8 h-24 w-44 rotate-[-30deg] rounded-full bg-white/65 blur-md"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 right-7 size-2 rounded-full bg-white shadow-[0_0_15px_6px_rgba(255,255,255,0.8)]"
              />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeView}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 10, scale: 0.94, filter: "blur(5px)" }
                  }
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, y: -6, scale: 0.98, filter: "blur(3px)" }
                  }
                  transition={{ duration: prefersReducedMotion ? 0 : 0.24 }}
                  className="relative z-10 w-full"
                >
                  {activeView === "problem" && (
                    <div>
                      <Network
                        className="mx-auto size-8 text-[#9a6b00]"
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-[10px] font-bold text-[#9a6b00]">
                        مسئله‌های زیرساختی
                      </p>
                      <p className="mt-1 text-base font-extrabold text-ink">
                        گره کار کجاست؟
                      </p>
                      <ul className="mx-auto mt-3 max-w-52 space-y-2 text-right">
                        {infrastructureProblems.map(({ label, icon: Icon }) => (
                          <li
                            key={label}
                            className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/65 px-2.5 py-1.5 text-[11px] font-semibold text-muted shadow-sm"
                          >
                            <Icon
                              className="size-3.5 shrink-0 text-[#c58b00]"
                              aria-hidden="true"
                            />
                            {label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeView === "tarsim" && (
                    <div>
                      <Lightbulb
                        className="mx-auto size-8 text-accent"
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-[10px] font-bold text-accent">
                        نگاه ترسیم
                      </p>
                      <p
                        dir="rtl"
                        className="mt-2 text-lg leading-[1.8] font-extrabold tracking-tight text-ink"
                      >
                        پیچیده‌ها را
                        <br />
                        <span className="relative inline-block text-accent after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-right after:animate-line-pulse after:bg-linear-to-l after:from-transparent after:via-accent after:to-gold">
                          ساده‌تر
                        </span>{" "}
                        طراحی می‌کنیم.
                      </p>
                      <div className="mt-3 flex items-center justify-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="size-1.5 rounded-full bg-green animate-pulse [animation-delay:-.25s]" />
                        <span className="size-1.5 rounded-full bg-gold animate-pulse [animation-delay:-.5s]" />
                      </div>
                    </div>
                  )}

                  {activeView === "product" && (
                    <div>
                      <BookOpen
                        className="mx-auto size-8 text-[#68952c]"
                        aria-hidden="true"
                      />
                      <p className="mt-2 text-[10px] font-bold text-[#68952c]">
                        داکیباکس
                      </p>
                      <p className="mt-1 text-base font-extrabold text-ink">
                        دانش، یک‌جا و در دسترس
                      </p>
                      <ul className="mx-auto mt-3 max-w-52 space-y-2 text-right">
                        {solvedProblems.map((problem) => (
                          <li
                            key={problem}
                            className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/65 px-2.5 py-1.5 text-[11px] font-semibold text-muted shadow-sm"
                          >
                            <Check
                              className="size-4 shrink-0 text-[#68952c]"
                              aria-hidden="true"
                            />
                            {problem}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div
          role="group"
          aria-label="برای بزرگ‌نمایی، یک بخش را انتخاب کنید"
          className="relative z-20 mx-auto mt-1 grid max-w-76 grid-cols-3 rounded-full border border-white/90 bg-white/55 p-1 shadow-sm backdrop-blur"
        >
          {views.map(({ id, label, icon: Icon, accent }) => {
            const isActive = activeView === id;

            return (
              <button
                key={id}
                type="button"
                aria-pressed={isActive}
                onPointerEnter={() => changeView(id)}
                onFocus={() => changeView(id)}
                onClick={() => changeView(id)}
                className={`relative flex min-h-10 cursor-zoom-in items-center justify-center gap-1.5 rounded-full px-2 text-[11px] font-bold outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-accent ${
                  isActive ? accent : "text-muted hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="hero-preview-active-tab"
                    transition={transition}
                    className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-ink/5"
                  />
                )}
                <Icon
                  className="relative z-10 size-3.5"
                  aria-hidden="true"
                />
                <span className="relative z-10">{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-center text-sm leading-7 font-medium">
        مسئله‌ی پراکنده را به مسیر روشنِ ساخت محصول تبدیل می‌کنیم.
      </p>
      <Link
        href="/contact"
        className="group mx-auto mt-2 flex w-fit items-center gap-2 rounded-lg px-2 py-2 text-xs text-muted outline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-gold"
      >
        <span>مسیر حل مسئله را باهم ترسیم کنیم</span>
        <ArrowIcon className="size-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  );
}

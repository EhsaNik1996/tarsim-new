"use client";

import { useId, useState } from "react";
import { BookOpen, ChevronDown, CircleAlert, LibraryBig, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const items = [
  {
    id: "problem",
    label: "مسئله‌ای که از آن شروع کردیم",
    title: "دانش هست؛ مسیر دسترسی پراکنده است.",
    description: "منابع در کتابخانه‌ها و ناشران مختلف پخش شده‌اند؛ پیدا کردن محتوای موردنیاز، زمان و جست‌وجوی بیشتری می‌خواهد.",
    icon: CircleAlert,
    color: "text-[#9a6b00]",
    background: "bg-linear-to-bl from-gold/8 to-surface",
  },
  {
    id: "solution",
    label: "پاسخ داکیباکس",
    title: "منابع متصل، کشف آسان‌تر.",
    description: "مجموعه‌ها را در یک تجربهٔ یکپارچه گرد هم می‌آوریم تا دانش آسان‌تر پیدا و در دسترس قرار بگیرد.",
    icon: BookOpen,
    color: "text-accent",
    background: "bg-linear-to-bl from-accent/10 via-panel/50 to-surface",
  },
];

export function DociboxAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  const instanceId = useId();
  const reducedMotion = useReducedMotion();

  return (
    <div className="min-w-0 overflow-hidden rounded-3xl border border-line bg-surface shadow-xl shadow-ink/5 sm:rounded-4xl">
      {items.map(({ id, label, title, description, icon: Icon, color, background }) => {
        const expanded = open === id;
        const triggerId = `${instanceId}-${id}-trigger`;
        const panelId = `${instanceId}-${id}-panel`;

        return (
          <div key={id} className={`${background} border-b border-line last:border-b-0`}>
            <h3>
              <button
                type="button"
                id={triggerId}
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? null : id)}
                className="group flex w-full items-center gap-3 p-5 text-right transition-colors hover:bg-white/30 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-accent sm:gap-4 sm:p-7"
              >
                <span className={`flex size-10 shrink-0 items-center justify-center rounded-xl border border-current/10 bg-surface/70 ${color}`}>
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className={`block text-[11px] font-bold ${color}`}>{label}</span>
                  <span className="mt-2 block text-sm font-extrabold leading-7 sm:text-base">{title}</span>
                </span>
                <ChevronDown className={`size-4 shrink-0 text-muted transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!expanded}
              inert={!expanded}
              initial={false}
              animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-6 sm:px-7 sm:pb-7">
                <p className="border-t border-line/70 pt-4 text-xs leading-7 text-muted">{description}</p>
                {id === "solution" && (
                  <ul className="mt-5 grid grid-cols-3 gap-2">
                    {[
                      { label: "منابع یکپارچه", icon: LibraryBig },
                      { label: "کشف محتوا", icon: Search },
                      { label: "دسترسی آسان", icon: BookOpen },
                    ].map(({ label: benefit, icon: BenefitIcon }) => (
                      <li key={benefit} className="flex min-w-0 flex-col items-center gap-2 text-center">
                        <BenefitIcon className="size-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
                        <span className="text-[10px] font-semibold leading-5 text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

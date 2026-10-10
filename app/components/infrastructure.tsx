"use client";

import Link from "next/link";
import { BlurReveal } from "@/components/effects/reveal";
import {
  Activity,
  ArrowDown,
  ArrowUpLeft,
  Check,
  CloudUpload,
  DatabaseBackup,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "طراحی و اجرای شبکه",
    problem: "قطع ارتباط، کندی شبکه یا اتصال نامطمئن بین تیم‌ها و شعب.",
    description:
      "طراحی شبکه و اتصال امن تجهیزات و شعب، متناسب با فضای کار و نیاز واقعی شما.",
    icon: Network,
    color: "text-[#1878ad]",
    background: "bg-accent/8",
  },
  {
    title: "سرور و مجازی‌سازی",
    problem: "سرورهای پراکنده و منابعی که به‌درستی استفاده نمی‌شوند.",
    description:
      "راه‌اندازی و مدیریت سرورها و ماشین‌های مجازی برای استفادهٔ بهتر از ظرفیت و منابع.",
    icon: Server,
    color: "text-[#68952c]",
    background: "bg-green/10",
  },
  {
    title: "امنیت و دسترسی",
    problem: "دسترسی‌های کنترل‌نشده و نگرانی دربارهٔ امنیت سرویس‌ها.",
    description:
      "پیکربندی فایروال و تعریف دسترسی امن و متناسب با نقش افراد در سازمان.",
    icon: ShieldCheck,
    color: "text-[#b57c00]",
    background: "bg-gold/10",
  },
  {
    title: "پشتیبان‌گیری و بازیابی",
    problem: "از دست رفتن داده‌ها یا نامشخص بودن راه بازگردانی آن‌ها.",
    description:
      "تهیهٔ نسخهٔ پشتیبان منظم و برنامه‌ریزی بازیابی برای روزهای اختلال.",
    icon: DatabaseBackup,
    color: "text-[#68952c]",
    background: "bg-green/10",
  },
  {
    title: "استقرار و زیرساخت ابری",
    problem: "انتشارهای دستی و پرریسک یا دشواری مدیریت سرویس‌ها.",
    description:
      "راه‌اندازی سرویس‌ها با Docker و خودکارسازی مسیر انتشار برای استقرار پایدارتر.",
    icon: CloudUpload,
    color: "text-[#b57c00]",
    background: "bg-gold/10",
  },
  {
    title: "مانیتورینگ و نگهداری",
    problem: "باخبر شدن از اختلال، فقط بعد از گزارش کاربران.",
    description:
      "پایش سرویس‌ها و منابع برای شناسایی زودتر اختلال و رسیدگی به آن.",
    icon: Activity,
    color: "text-[#1878ad]",
    background: "bg-accent/8",
  },
];

export function InfrastructureSection() {
  return (
    <section
      id="infrastructure"
      aria-labelledby="infrastructure-title"
      className="mx-auto max-w-7xl px-4 pb-16 pt-12 text-ink sm:px-7 md:pb-24 md:pt-16"
    >
      <BlurReveal className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <p className="flex items-center gap-2.5 text-xs font-bold text-muted">
            <span
              className="size-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            زیرساخت و شبکه
          </p>
          <h2
            id="infrastructure-title"
            className="mt-6 text-4xl font-extrabold leading-[1.4] tracking-tight sm:text-5xl lg:text-6xl"
          >
            کار شما ادامه دارد؛
            <br />
            <span className="text-accent">زیرساخت، همراهش.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-8 text-muted">
            شبکه‌ای که قطع می‌شود، داده‌ای که پشتیبان ندارد و سرویسی که با هر
            انتشار از دسترس خارج می‌شود؛ نباید مسیر رشد شما را متوقف کنند. از
            طراحی تا نگهداری، برای رفع همین مسئله‌ها همراهتان هستیم.
          </p>
          <Link
            href="/contact"
            className="group mt-7 inline-flex min-h-12 max-w-full items-center gap-3 rounded-full bg-ink py-2 pl-2 pr-5 text-sm font-bold text-paper outline-offset-4 transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            دربارهٔ زیرساخت شما صحبت کنیم
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <ArrowUpLeft
                className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
        <InfrastructureMap />
      </BlurReveal>

      <BlurReveal className="mt-12 md:mt-16" delay={100}>
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-5">
          <div>
            <p className="text-xs font-bold text-accent">از گره تا راهکار</p>
            <h3 className="mt-2 text-xl font-extrabold sm:text-2xl">
              هر مسئله، یک مسیر روشن برای حل.
            </h3>
          </div>
          <p className="text-xs leading-6 text-muted">
            اجرا و نگهداری → طراحی راهکار → ارزیابی نیاز 
          </p>
        </div>
        <ul className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(
            ({ title, problem, description, icon: Icon, color, background }) => (
              <li
                key={title}
                className="group min-w-0 rounded-3xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-ink/5 sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${color} ${background}`}
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-xs font-bold text-muted">{title}</span>
                </div>
                <h4 className="mt-5 text-sm font-extrabold leading-7 text-ink">
                  {problem}
                </h4>
                <div className="mt-5 border-t border-line/70 pt-4">
                  <span className="flex items-center gap-2 text-[10px] font-bold text-accent">
                    <ArrowDown className="size-3.5" aria-hidden="true" />
                    راهکار ترسیم
                  </span>
                  <p className="mt-2 text-xs leading-7 text-muted">
                    {description}
                  </p>
                </div>
              </li>
            ),
          )}
        </ul>
        <ul
          aria-label="رویکرد ما در اجرای زیرساخت"
          className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs text-muted"
        >
          {["متناسب با نیاز شما", "تحویل مستند و شفاف", "همراه در نگهداری"].map(
            (item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-3.5 text-[#68952c]" aria-hidden="true" />
                {item}
              </li>
            ),
          )}
        </ul>
      </BlurReveal>
    </section>
  );
}

function InfrastructureMap() {
  const nodes = [
    {
      label: "شبکه و ارتباط",
      icon: Network,
      position: "right-4 top-4 sm:right-6 sm:top-6",
      color: "text-accent",
    },
    {
      label: "سرورها و منابع",
      icon: Server,
      position: "left-4 top-4 sm:left-6 sm:top-6",
      color: "text-green",
    },
    {
      label: "امنیت و دسترسی",
      icon: ShieldCheck,
      position: "right-4 bottom-4 sm:right-6 sm:bottom-6",
      color: "text-gold",
    },
    {
      label: "داده و پشتیبان",
      icon: DatabaseBackup,
      position: "left-4 bottom-4 sm:left-6 sm:bottom-6",
      color: "text-accent",
    },
  ];

  return (
    <div className="relative isolate min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-ink p-4 shadow-xl shadow-ink/10 sm:rounded-4xl sm:p-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(53,169,224,0.18),transparent_65%)]"
      />
      <div className="relative flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
        <span className="text-xs font-bold text-paper">
          از اجزای پراکنده، به یک سیستم هماهنگ
        </span>
        <Network className="size-4 text-accent" aria-hidden="true" />
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-100 sm:aspect-[1.15]">
        <svg
          className="absolute inset-0 size-full"
          viewBox="0 0 400 400"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M80 65V140Q80 155 95 155H200V200 M320 65V140Q320 155 305 155H200 M80 335V260Q80 245 95 245H200V200 M320 335V260Q320 245 305 245H200"
            stroke="rgba(53,169,224,0.45)"
            strokeWidth="1.5"
            strokeDasharray="5 6"
          />
          <circle cx="200" cy="200" r="84" stroke="rgba(255,255,255,0.06)" />
          <circle cx="200" cy="200" r="110" stroke="rgba(255,255,255,0.04)" />
        </svg>
        {nodes.map(({ label, icon: Icon, position, color }) => (
          <div
            key={label}
            className={`absolute z-10 flex w-[36%] max-w-36 flex-col items-center gap-2 rounded-2xl border border-white/15 bg-[#343b3f] px-2 py-3 text-center shadow-lg sm:py-4 ${position}`}
          >
            <Icon
              className={`size-5 sm:size-6 ${color}`}
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <span className="text-[10px] font-semibold text-paper sm:text-xs">
              {label}
            </span>
          </div>
        ))}
        <div className="absolute left-1/2 top-1/2 z-20 flex aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 rounded-full border border-accent/40 bg-[#263d48] px-2 text-center shadow-[0_0_40px_rgba(53,169,224,0.12)]">
          <Activity
            className="size-6 text-accent sm:size-7"
            strokeWidth={1.5}
            aria-hidden="true"
          />
          <span className="text-[11px] font-bold leading-5 text-paper sm:text-sm">
            زیرساخت
            <br />
            یکپارچه
          </span>
        </div>
      </div>
      <p className="relative border-t border-white/10 pt-4 text-center text-[11px] leading-6 text-white/60">
        اجزایی که در کنار هم، مسیر کار را هموار می‌کنند.
      </p>
    </div>
  );
}

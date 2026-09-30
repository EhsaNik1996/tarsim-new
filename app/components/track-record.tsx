"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const milestones = [
  ["۱۳۸۹", "آغاز مسیر", "تأسیس ترسیم", "ترسیم با تمرکز بر مهندسی سیستم و ساخت راهکارهایی شکل گرفت که برای استفاده بلندمدت و توسعه‌پذیری طراحی می‌شوند."],
  ["۱۳۹۰", "توسعه محصول", "نخستین CMS اختصاصی و نرم‌افزارهای کتابخانه", "توسعه سامانه‌های اختصاصی مدیریت محتوا و راهکارهای کتابخانه‌ای، مسیر ورود ترسیم به حوزه مدیریت دانش را تثبیت کرد."],
  ["۱۳۹۵", "گسترش حوزه فعالیت", "ورود به پروژه‌های موزه و پروژه‌های عراق", "دامنه خدمات ترسیم از نرم‌افزار فراتر رفت و طراحی روایت، مستندسازی آثار و تجربه دیجیتال موزه‌ها را نیز دربرگرفت."],
  ["امروز", "محصول و تداوم", "تولد داکیباکس و ادامه مسیر", "داکیباکس از دل تجربه پروژه‌های واقعی متولد شد؛ اکوسیستمی برای مدیریت دانش، کتابخانه، آرشیو و مراکز فرهنگی."],
] as const;

export function TrackRecord() {
  const [open, setOpen] = useState<number | null>(null);
  return <section className="border-y border-line bg-panel/45 py-16 md:py-24" dir="rtl">
    <div className="mx-auto grid max-w-360 gap-12 px-6 md:grid-cols-12 md:gap-20 md:px-16">
      <div className="h-fit md:col-span-5"><span className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-muted"><i className="size-2 rounded-full bg-accent" /> سابقه و مسیر</span><h2 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">مسیر ترسیم<br /><span className="text-accent">نقاط عطف ما.</span></h2><p className="mt-6 max-w-md text-sm leading-8 text-muted">از ساخت سیستم‌های اختصاصی تا محصولاتی که هر روز توسط آدم‌های واقعی استفاده می‌شوند؛ هر مرحله تجربه‌ای برای ساخت بهتر بوده است.</p></div>
      <div className="md:col-span-7">{milestones.map(([year, category, title, description], index) => { const active = open === index; return <div key={year} className="border-b border-line"><button type="button" aria-expanded={active} onClick={() => setOpen(active ? null : index)} className="group grid w-full grid-cols-[24px_minmax(0,1fr)_52px] items-start gap-4 py-6 text-right"><Plus className={`mt-1 size-4 text-accent transition-transform duration-300 ${active ? "rotate-45" : ""}`} /><span><small className="mb-2 inline-flex rounded-full border border-line bg-surface px-3 py-1 text-[10px] font-bold text-muted">{category}</small><strong className="block text-lg leading-8 text-ink transition-colors group-hover:text-accent md:text-xl">{title}</strong></span><span className="pt-1 text-left font-mono text-xs font-bold text-muted">{year}</span></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ${active ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><p className="min-h-0 overflow-hidden pb-6 pr-10 text-sm leading-8 text-muted md:pr-14">{description}</p></div></div>; })}</div>
    </div>
  </section>;
}

import Link from "next/link";
import {
  Activity,
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
    description:
      "اتصال یکپارچهٔ تجهیزات، شعب و تیم‌ها؛ متناسب با فضای کار شما.",
    icon: Network,
    color: "text-[#1878ad]",
    background: "bg-accent/8",
  },
  {
    title: "سرور و مجازی‌سازی",
    description: "راه‌اندازی و مدیریت سرورها برای استفادهٔ بهتر از منابع.",
    icon: Server,
    color: "text-[#68952c]",
    background: "bg-green/10",
  },
  {
    title: "امنیت و دسترسی",
    description: "پیکربندی فایروال و دسترسی امن به سرویس‌های سازمان.",
    icon: ShieldCheck,
    color: "text-[#b57c00]",
    background: "bg-gold/10",
  },
  {
    title: "پشتیبان‌گیری و بازیابی",
    description: "بکاپ منظم و برنامهٔ بازیابی برای محافظت از داده‌های شما.",
    icon: DatabaseBackup,
    color: "text-[#68952c]",
    background: "bg-green/10",
  },
  {
    title: "استقرار و زیرساخت ابری",
    description: "راه‌اندازی سرویس‌ها با Docker و خودکارسازی مسیر انتشار.",
    icon: CloudUpload,
    color: "text-[#b57c00]",
    background: "bg-gold/10",
  },
  {
    title: "مانیتورینگ و نگهداری",
    description: "پایش منابع و سرویس‌ها، شناسایی اختلال و رسیدگی به آن.",
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
      className="pb-16 pt-4 text-ink md:pb-24 md:pt-8"
    >
      <div className="mx-auto w-[92%] max-w-370 border border-line bg-linear-to-bl from-panel/65 via-paper to-surface p-6 md:p-9 lg:p-12 rounded-4xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.65fr] lg:gap-12 xl:gap-16">
          <div>
            <p className="flex items-center gap-2.5 text-xs font-bold text-muted">
              <span
                className="size-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              زیرساخت و شبکه
            </p>
            <h2
              id="infrastructure-title"
              className="mt-5 text-3xl font-extrabold leading-[1.6] tracking-tight md:text-4xl xl:text-[2.65rem]"
            >
              پشت هر کار بزرگ،
              <br />
              <span className="text-muted">یک زیرساخت مطمئن.</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-8 text-muted">
              از شبکهٔ دفتر تا سرورهای ابری، زیرساخت کسب‌وکارتان را طراحی،
              راه‌اندازی و نگهداری می‌کنیم؛ تا با خیال آسوده روی کارتان تمرکز
              کنید.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-11 items-center gap-4 rounded-full text-sm font-bold outline-offset-4 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              دربارهٔ زیرساخت شما صحبت کنیم
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface transition-colors group-hover:border-accent/40 group-hover:bg-accent/5">
                <ArrowUpLeft className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="min-w-0">
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
              {services.map(
                ({ title, description, icon: Icon, color, background }) => (
                  <li
                    key={title}
                    className="group bg-surface/95 p-5 transition-colors duration-300 hover:bg-paper md:p-6"
                  >
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl ${color} ${background}`}
                    >
                      <Icon
                        className="size-5.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-4 text-sm font-bold leading-7">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-muted">
                      {description}
                    </p>
                  </li>
                ),
              )}
            </ul>
            <ul
              aria-label="رویکرد ما در اجرای زیرساخت"
              className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[11px] text-muted md:gap-x-6"
            >
              {[
                "متناسب با نیاز شما",
                "تحویل مستند و شفاف",
                "همراه در نگهداری",
              ].map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check
                    className="size-3.5 text-[#68952c]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

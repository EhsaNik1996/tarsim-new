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
              وقتی شبکه ناپایدار است، داده‌ها پشتیبان ندارند یا انتشار سرویس‌ها
              پرریسک شده، زیرساخت به مانع رشد تبدیل می‌شود. از ارزیابی و طراحی
              تا راه‌اندازی و نگهداری، برای رفع همین مسئله‌ها همراهتان هستیم.
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
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-accent">
                  از مسئله تا راهکار
                </p>
                <h3 className="mt-2 text-lg font-extrabold">
                  هر خدمت، پاسخی به یک مشکل واقعی
                </h3>
              </div>
              <p className="text-xs leading-6 text-muted">
                اول مسئله را روشن می‌کنیم؛ بعد راهکار مناسب را می‌سازیم.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {services.map(
                ({
                  title,
                  problem,
                  description,
                  icon: Icon,
                  color,
                  background,
                }, index) => (
                  <li
                    key={title}
                    className="group rounded-2xl border border-line bg-surface/90 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:bg-paper hover:shadow-lg hover:shadow-ink/5 md:p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex size-11 items-center justify-center rounded-2xl ${color} ${background}`}
                      >
                        <Icon
                          className="size-5.5"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="font-sans text-[10px] font-bold tracking-widest text-muted/70">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-5 rounded-xl border border-gold/20 bg-gold/5 p-3.5">
                      <span className="inline-flex rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-bold text-[#9a6b00]">
                        مشکل
                      </span>
                      <p className="mt-2 text-xs leading-6 text-ink/75">
                        {problem}
                      </p>
                    </div>
                    <div className="mt-4 border-r-2 border-accent pr-3">
                      <span className="text-[10px] font-bold text-accent">
                        راهکار ترسیم
                      </span>
                      <h4 className="mt-1 text-sm font-extrabold leading-7">
                        {title}
                      </h4>
                      <p className="mt-1 text-xs leading-6 text-muted">
                        {description}
                      </p>
                    </div>
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

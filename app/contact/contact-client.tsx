"use client";
import { type FormEvent } from "react";
import { BlurReveal } from "@/components/effects/reveal";
import { ArrowUpLeft, Mail, MessageCircle, Send } from "lucide-react";

const fieldClass =
  "w-full min-w-0 rounded-xl border border-line bg-paper/70 px-4 py-3.5 text-sm leading-6 outline-none transition placeholder:text-muted/60 hover:border-ink/25 focus:border-accent focus:ring-4 focus:ring-accent/10";

export default function ContactPage() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`پیام جدید از ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nایمیل: ${data.get("email")}`,
    );
    window.location.href = `mailto:hello@tarsiminc.com?subject=${subject}&body=${body}`;
  }

  return (
    <main
      id="top"
      className="mx-auto max-w-7xl px-7 py-14 max-sm:px-4"
    >
      <div className="transition duration-1000 ease-out will-change-transform translate-y-0 opacity-100 blur-none flex self-start items-center w-1/3 text-xs font-bold tracking-wide gap-3 max-sm:w-full">
        <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
        تماس با ترسیم
      </div>
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20 pt-10 md:pt-12">
        <BlurReveal className="lg:py-4">
          <h1 className="text-8xl leading-17 md:leading-32 font-extrabold tracking-tighter mt-16 max-sm:text-5xl max-sm:mt-0">
            شروعش،
            <br />
            <span className="text-accent text-nowrap">یک گفت‌وگوست.</span>
          </h1>
          <p className="mt-7 max-w-md text-base leading-8 text-muted">
            ما در ترسیم محصول و زیرساخت طراحی می‌کنیم؛ از یک نیاز واقعی تا تجربه‌ای
            ساده و کاربردی.
          </p>
          <p className="max-w-md text-base leading-8 text-muted">
            ایده‌ای برای طراحی داری یا مسئله‌ای که می‌خواهی ساده‌ترش کنی؟ برای
            ما بنویس؛ از همین‌جا شروع کنیم.
          </p>
          <div className="mt-10 max-w-md border-t border-line pt-6 sm:mt-14">
            <p className="text-xs text-muted">
              اگر راحت‌تری، مستقیم در ارتباط باش.
            </p>
            <a
              href="mailto:hello@tarsiminc.com"
              className="mt-4 flex w-fit items-center gap-3 rounded-lg py-2 text-lg font-medium outline-offset-4 transition hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Mail
                aria-hidden="true"
                className="size-5 text-muted"
                strokeWidth={1.5}
              />
              <span dir="ltr">hello@tarsiminc.com</span>
            </a>
            <div className="mt-5 flex flex-wrap gap-3">
              {[
                {
                  label: "بله",
                  href: "https://ble.ir/tarsim",
                  icon: MessageCircle,
                },
                { label: "تلگرام", href: "https://t.me/tarsim", icon: Send },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-full border border-line bg-white/55 px-5 py-3 text-sm outline-offset-4 transition hover:border-accent hover:bg-white focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.5}
                  />
                  {label}
                  <ArrowUpLeft
                    aria-hidden="true"
                    className="size-3.5 text-muted"
                  />
                </a>
              ))}
            </div>
          </div>
        </BlurReveal>

        <BlurReveal delay={180}>
          <form
            onSubmit={submit}
            aria-labelledby="contact-form-title"
            aria-describedby="contact-form-note"
            className="border border-line bg-white/80 p-7 shadow-[0_20px_70px_-40px_rgba(45,47,50,0.2)] sm:p-9 rounded-4xl"
          >
            <div className="mb-8 flex items-start justify-between gap-4">
              <div>
                <h2 id="contact-form-title" className="text-xl font-bold">
                  از چیزی که در ذهنته بگو.
                </h2>
                <p className="mt-2 text-sm leading-7 text-muted">
                  یک معرفی کوتاه و چند خط دربارهٔ ایده یا سوالت.
                </p>
              </div>
              <span aria-hidden="true" className="mt-1 flex gap-1">
                <i className="size-1.5 rounded-full bg-accent" />
                <i className="size-1.5 rounded-full bg-green" />
                <i className="size-1.5 rounded-full bg-gold" />
              </span>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid min-w-0 gap-2.5 text-sm font-medium">
                نام شما
                <input
                  required
                  name="name"
                  autoComplete="name"
                  placeholder="نام و نام خانوادگی"
                  className={fieldClass}
                />
              </label>
              <label className="grid min-w-0 gap-2.5 text-sm font-medium">
                ایمیل شما
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  dir="ltr"
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </label>
            </div>
            <label className="mt-6 grid gap-2.5 text-sm font-medium">
              دربارهٔ چه چیزی صحبت کنیم؟
              <textarea
                required
                name="message"
                rows={5}
                placeholder="از ایده، مسئله یا پیشنهادی که داری بنویس…"
                className={`${fieldClass} min-h-36 resize-none`}
              />
            </label>
            <div className="mt-7 border-t border-line pt-6">
              <button
                className="group flex w-full items-center justify-between gap-3 rounded-full bg-ink px-6 py-4 text-sm font-medium text-paper outline-offset-4 transition hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-accent"
                type="submit"
              >
                <span>ادامه در ایمیل</span>
                <ArrowUpLeft
                  aria-hidden="true"
                  className="size-5 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
              <p
                id="contact-form-note"
                className="mt-4 text-xs leading-6 text-muted"
              >
                با زدن این دکمه، برنامهٔ ایمیل شما باز می‌شود تا پیام را ارسال
                کنید.
              </p>
            </div>
          </form>
        </BlurReveal>
      </div>
    </main>
  );
}

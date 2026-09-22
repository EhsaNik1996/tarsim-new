"use client";

import { FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";

export default function ContactPage() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`پیام جدید از ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\nایمیل: ${data.get("email")}`,
    );
    window.location.href = `mailto:hello@tarsim.co?subject=${subject}&body=${body}`;
  }

  return (
    <main className="mx-auto max-w-7xl px-7 py-24 max-sm:px-4 max-sm:py-16">
      <div className="grid gap-20 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent">
            دربارهٔ ترسیم / تماس
          </span>
          <h1 className="mt-8 text-7xl leading-15 md:leading-20 font-extrabold tracking-tighter max-sm:text-5xl">
            با هم چیزی <span className="text-accent">ساده</span> و ماندگار
            بسازیم.
          </h1>
          <p className="mt-8 max-w-md text-lg leading-9 text-muted">
            ترسیم یک استودیوی مستقل محصول است؛ از مسئله‌های واقعی شروع می‌کنیم و
            تجربه‌هایی روشن، کاربردی و قابل رشد می‌سازیم.
          </p>
          <div className="mt-12 flex gap-3">
            <a
              className="group flex items-center gap-2.5 rounded-full border border-line px-5 py-3 transition hover:border-accent hover:text-accent"
              href="https://ble.ir/tarsim"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle
                aria-hidden="true"
                className="size-4 stroke-[1.7] transition group-hover:scale-110"
              />
              <span>بله</span>
            </a>
            <a
              className="group flex items-center gap-2.5 rounded-full border border-line px-5 py-3 transition hover:border-cyan hover:text-cyan"
              href="https://t.me/tarsim"
              target="_blank"
              rel="noreferrer"
            >
              <Send
                aria-hidden="true"
                className="size-4 -rotate-12 stroke-[1.7] transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span>تلگرام</span>
            </a>
          </div>
        </div>
        <form
          onSubmit={submit}
          className="rounded-3xl border border-line bg-white/70 p-8 shadow-sm backdrop-blur-lg max-sm:p-5"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              نام
              <input
                required
                name="name"
                className="rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-accent"
              />
            </label>
            <label className="grid gap-2 text-sm">
              ایمیل
              <input
                required
                type="email"
                name="email"
                className="rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-accent"
              />
            </label>
          </div>
          <label className="mt-6 grid gap-2 text-sm">
            چطور می‌توانیم کمک کنیم؟
            <textarea
              required
              name="message"
              rows={6}
              className="resize-none rounded-xl border border-line bg-paper px-4 py-3 outline-none transition focus:border-accent"
            />
          </label>
          <button
            className="mt-6 flex w-full items-center justify-between rounded-xl bg-ink px-5 py-4 text-paper transition hover:bg-accent hover:text-ink"
            type="submit"
          >
            <span>ارسال پیام</span>
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </main>
  );
}

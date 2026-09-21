import Image from "next/image";
import { HeartHandshake, Minimize2, Target, TimerReset } from "lucide-react";
export function Principles() {
  return (
    <section className="mx-auto px-7 pb-40 max-w-7xl max-sm:px-4">
      <div className="text-xs font-bold tracking-wide">
        <span className="text-accent ml-4">04</span>چیزهایی که مهم‌اند
      </div>
      <div className="flex flex-wrap mt-16 gap-4 max-sm:flex-col">
        {principles.map((item, index) => {
          const Icon = item.icon;
          return (
            <article
              className="group flex flex-col relative w-[calc(50%-0.5rem)] min-h-72 overflow-hidden bg-white/65 border border-line backdrop-blur-lg transition duration-500 hover:-translate-y-2 hover:bg-ink hover:text-white hover:shadow-2xl p-9 rounded-3xl max-sm:w-full max-sm:min-h-56"
              key={index}
            >
              <i className="absolute left-2/3 top-2/3 size-48 bg-accent/20 blur-3xl transition duration-500 group-hover:scale-150 rounded-full" />
              <div className="flex relative items-center justify-between">
                <span className="font-sans text-xs text-muted">
                  0{index + 1}
                </span>
                <Icon className="size-7 text-accent stroke-[1.5] transition duration-500 group-hover:rotate-12 group-hover:text-cyan" />
              </div>
              <h2 className="relative text-6xl leading-tight font-bold mt-auto max-sm:text-4xl">
                {item.title}
              </h2>
            </article>
          );
        })}
      </div>
    </section>
  );
}
export function AboutQuote() {
  return (
    <section className="relative isolate min-h-145 overflow-hidden bg-ink py-32 text-white">
      <div className="masked-about-media absolute inset-y-0 left-0 -z-10 w-[72%] max-lg:w-full">
        <Image
          src="/about-studio.png"
          alt="میز کار تیم ترسیم هنگام طراحی و ساخت محصول"
          fill
          sizes="(max-width:1024px) 100vw, 72vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-ink via-ink/92 via-45% to-accent/20" />
      <i className="absolute -left-20 bottom-0 -z-10 size-96 rounded-full bg-cyan/15 blur-3xl" />
      <div className="relative mx-auto px-7 max-w-7xl max-sm:px-4">
        <span className="font-sans text-xs text-cyan tracking-widest">
          ترسیم / TARSIM
        </span>
        <blockquote className="max-w-5xl text-7xl leading-relaxed font-bold tracking-tighter mt-16 max-sm:text-4xl max-sm:leading-relaxed">
          هویت ما، فهرست توانایی‌هایمان نیست؛
          <br />
          چیزهایی است که ساخته‌ایم.
        </blockquote>
      </div>
    </section>
  );
}
const principles = [
  {
    title: (
      <>
        ساده،
        <br />
        نه سطحی.
      </>
    ),
    icon: Minimize2,
  },
  {
    title: (
      <>
        کاربردی،
        <br />
        نه نمایشی.
      </>
    ),
    icon: Target,
  },
  {
    title: (
      <>
        ماندگار،
        <br />
        نه موقت.
      </>
    ),
    icon: TimerReset,
  },
  {
    title: (
      <>
        انسانی،
        <br />
        در هر مقیاس.
      </>
    ),
    icon: HeartHandshake,
  },
];

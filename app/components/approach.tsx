import { BlurReveal } from "@/components/effects/reveal";

export function ApproachSection() {
  return (
    <section className="overflow-hidden bg-ink text-paper py-14">
      <div
        className="flex w-full animate-marquee md:animate-float justify-center text-3xl leading-none max-sm:text-3xl md:text-7xl font-extrabold whitespace-nowrap opacity-10 gap-16"
        aria-hidden="true"
      >
        <span>مسئله ← ایده ← محصول</span>
      </div>
      <div className="flex mx-auto px-7 mt-28 gap-16 max-w-7xl max-sm:flex-col max-sm:px-4 max-sm:mt-20">
        <BlurReveal className="w-1/4 text-xs font-bold tracking-wide max-sm:w-full">
          <span className="text-accent ml-4">02</span>رویکرد ما
        </BlurReveal>
        <BlurReveal className="w-1/3 max-sm:w-full" delay={80}>
          <h2 className="text-7xl leading-tight font-extrabold max-sm:text-4xl">
            از یک مسئله
            <br />
            <span className="text-accent">شروع می‌کنیم.</span>
          </h2>
        </BlurReveal>
        <div className="flex-1">
          {items.map((item, index) => (
            <BlurReveal delay={index * 100} key={item.question}>
              <article className="group relative border-t border-white/20 py-7">
                <span className="absolute left-0 top-7 font-sans text-xs text-accent">
                  0{index + 1}
                </span>
                <p className="text-white/60 transition group-hover:text-white">
                  {item.question}
                </p>
                <strong className="block text-xl mt-2">{item.answer}</strong>
              </article>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
const items = [
  { question: "منابع‌تان پراکنده است؟", answer: "ما یک‌جا جمع‌شان می‌کنیم." },
  { question: "ابزار مناسب ایده‌تان وجود ندارد؟", answer: "ما برایتان طراحی می‌کنیم." },
  {
    question: "زیرساخت‌تان دیگر جواب نمی‌دهد؟",
    answer: "ما دوباره طراحی‌اش می‌کنیم.",
  },
];

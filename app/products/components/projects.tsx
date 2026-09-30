"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";

import { projects } from "./projects-data";
import { ProjectDialog } from "./project-dialog";
import { useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, ArrowUpLeft } from "lucide-react";

const colors = [
  "var(--color-accent)",
  "var(--color-gold)",
  "var(--color-green)",
];
const number = (value: number) => String(value).padStart(2, "0");
const controlClass =
  "flex size-11 items-center justify-center rounded-full border border-line bg-surface/70 outline-offset-4 transition hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-default disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-surface/70 disabled:hover:text-ink";

export function OtherProducts() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);

  function goTo(index: number) {
    const swiper = swiperRef.current;
    if (!swiper || index < 0 || index >= projects.length) return;
    setActive(index);
    const count = Number(swiper.params.slidesPerView);
    const start = swiper.activeIndex;
    const target =
      index < start
        ? index
        : index >= start + count
          ? Math.min(index - count + 1, projects.length - count)
          : start;
    swiper.slideTo(
      target,
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 280,
    );
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="overflow-hidden bg-surface py-16 text-ink md:py-24"
      dir="rtl"
    >
      <div className="mx-auto w-[92%] max-w-370 max-sm:w-[92%]">
        <div className="mb-2 flex flex-col items-stretch justify-between gap-7 md:mb-16 md:flex-row md:items-center">
          <div>
            <h2
              id="projects-title"
              className="text-[2rem] font-black leading-[1.2] tracking-tight text-ink sm:text-4xl md:text-6xl"
            >
              محصولات دیگر ترسیم
            </h2>
            <p className="mt-2 text-sm leading-7 text-muted md:text-base">
              تجربه‌هایی که به نتیجه رسیدند
            </p>
          </div>
          <div
            className="flex w-full items-center justify-between gap-2.5 px-3 md:w-auto md:justify-start md:px-0"
            dir="ltr"
          >
            <span
              className="text-sm tabular-nums text-ink md:mr-5"
              aria-live="polite"
            >
              {active + 1}/{projects.length}
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                className={controlClass}
                onClick={() => goTo(active + 1)}
                disabled={active === projects.length - 1}
                aria-label="محصول بعدی"
                aria-controls="products-track"
              >
                <ChevronLeft aria-hidden="true" className="size-4" />
              </button>
              <button
                type="button"
                className={controlClass}
                onClick={() => goTo(active - 1)}
                disabled={active === 0}
                aria-label="محصول قبلی"
                aria-controls="products-track"
              >
                <ChevronRight aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-x-clip py-1">
        <Swiper
          id="products-track"
          dir="rtl"
          className="overflow-visible! px-1 pb-8 pt-8"
          modules={[A11y, Keyboard]}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={24}
          speed={280}
          breakpoints={{ 768: { slidesPerView: 3 } }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            const end =
              swiper.activeIndex + Number(swiper.params.slidesPerView) - 1;
            setActive((current) =>
              Math.max(swiper.activeIndex, Math.min(current, end)),
            );
          }}
          aria-label="??????? ???? ?????"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id} className="h-auto box-border px-px">
              <article
                className="group relative flex min-h-102 min-w-0 flex-col border p-6 transition duration-500 hover:-translate-y-0.5 focus-within:-translate-y-0.5 max-md:min-h-95 max-md:p-6 rounded-3xl max-md:rounded-3xl"
                style={
                  {
                    "--project-color": colors[index % colors.length],
                    borderColor:
                      active === index
                        ? colors[index % colors.length]
                        : "var(--color-line)",
                    background: `radial-gradient(ellipse at top left, color-mix(in srgb, ${colors[index % colors.length]} 1%, var(--color-surface)), transparent 75%), linear-gradient(210deg, color-mix(in srgb, ${colors[index % colors.length]} 7%, var(--color-surface)), var(--color-surface) 80%)`,
                    boxShadow:
                      active === index
                        ? `0 18px 38px -18px color-mix(in srgb, ${colors[index % colors.length]} 58%, transparent)`
                        : "0 6px 14px rgb(45 47 50 / 5%)",
                    transform:
                      active === index ? "translateY(-4px)" : undefined,
                  } as CSSProperties
                }
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex max-w-[78%] items-center truncate rounded-full border border-line px-3 py-1.5 text-[11px] leading-none font-bold text-muted">
                    {item.subtitle}
                  </span>
                  <span className="inline-flex shrink-0 items-center rounded-full border border-line px-3 py-1.5 text-[11px] leading-none font-bold text-muted">
                    {item.privacy}
                  </span>
                </div>
                <div className="mt-9 flex items-center justify-between gap-3">
                  <h3 className="min-w-0 text-2xl font-black leading-relaxed text-ink">
                    {item.title}
                  </h3>
                  <span
                    className="block shrink-0 text-[72px] leading-none tracking-[-3px] text-transparent md:hidden rounded-full"
                    style={{
                      WebkitTextStroke: `1px color-mix(in srgb, ${colors[index % colors.length]} 28%, transparent)`,
                    }}
                    aria-hidden="true"
                    dir="ltr"
                  >
                    {number(index + 1)}
                  </span>
                </div>
                <p className="mb-5 mt-2 text-sm font-medium leading-7 text-muted">
                  {item.desc}
                </p>
                <div
                  className="mt-auto flex items-end justify-between gap-3"
                  dir="ltr"
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-4 flex flex-wrap gap-1">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-line px-3 py-1.5 text-xs text-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      aria-haspopup="dialog"
                      aria-label={`دربارهٔ ${item.title}`}
                      onClick={() => {
                        setSelected(index);
                        setDialogOpen(true);
                      }}
                      className="flex items-center gap-1 text-xs font-bold outline-offset-4 after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-2 focus-visible:outline-current"
                    >
                      <span>مشاهده جزئیات</span>
                      <ArrowUpLeft
                        aria-hidden="true"
                        className="size-3 -rotate-90"
                      />
                    </button>
                  </div>
                  <span
                    className="hidden shrink-0 text-transparent md:block"
                    style={{
                      WebkitTextStroke: `1px color-mix(in srgb, ${colors[index % colors.length]} 28%, transparent)`,
                      fontSize: "clamp(88px, 10vw, 152px)",
                      lineHeight: 0.8,
                      letterSpacing: "-6px",
                      fontWeight: 800,
                    }}
                    aria-hidden="true"
                  >
                    {number(index + 1)}
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
        <div
          className="mt-6 flex justify-center gap-1"
          aria-label="انتخاب محصول"
        >
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => goTo(index)}
              aria-label={`نمایش ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              className="flex h-9 items-center justify-center rounded-full outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span
                style={{
                  backgroundColor:
                    active === index
                      ? colors[index % colors.length]
                      : undefined,
                }}
                className={`h-1.5 rounded-full transition-all ${active === index ? "w-8" : "w-1.5 bg-line"}`}
              />
            </button>
          ))}
        </div>
        <ProjectDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          selected={selected}
          setSelected={setSelected}
          className="h-[min(780px,calc(100%-4rem))] w-[min(1280px,calc(100%-2rem))] max-w-[min(1280px,calc(100%-2rem))]! bg-surface p-0 text-ink shadow-[0_30px_80px_rgb(45_47_50/.28)] max-md:h-[95dvh] max-md:max-h-[95dvh] max-md:w-[calc(100%-0.5rem)] max-md:max-w-[calc(100%-0.5rem)]! max-md:overflow-hidden max-md:rounded-3xl overflow-visible rounded-4xl"
        />
      </div>
    </section>
  );
}

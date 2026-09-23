"use client";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import styles from "./projects.module.css";
import { projects } from "./projects-data";
import { ProjectDialog } from "./project-dialog";
import { useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight, ArrowUpLeft } from "lucide-react";

const colors = [
  "var(--color-accent)",
  "var(--color-cyan)",
  "var(--color-green)",
];
const number = (value: number) => String(value).padStart(2, "0");
const controlClass =
  "flex size-11 items-center justify-center rounded-full border border-line bg-surface/70 outline-offset-4 transition hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent disabled:cursor-default disabled:opacity-30 disabled:hover:border-line disabled:hover:bg-surface/70 disabled:hover:text-ink";

export function OtherProducts() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState(0);

  function goTo(index: number) {
    const swiper = swiperRef.current;
    if (!swiper || index < 0 || index >= projects.length) return;
    setActive(index);
    const count = Number(swiper.params.slidesPerView);
    const start = swiper.activeIndex;
    const target = index < start ? index : index >= start + count ? index - count + 1 : start;
    swiper.slideTo(target, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 520);
  }

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-surface py-16 text-ink md:py-24"
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
        <Swiper
          id="products-track"
          dir="rtl"
          className={styles.slider}
          modules={[A11y, Keyboard]}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slidesPerView={1}
          spaceBetween={24}
          speed={520}
          breakpoints={{ 768: { slidesPerView: 2 }, 1150: { slidesPerView: 3 } }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => {
            const end = swiper.activeIndex + Number(swiper.params.slidesPerView) - 1;
            setActive((current) => Math.max(swiper.activeIndex, Math.min(current, end)));
          }}
          aria-label="??????? ???? ?????"
        >
          {projects.map((item, index) => (
            <SwiperSlide key={item.id} className={styles.slide}>
            <article
              className={`${styles.card} ${active === index ? styles.active : ""} group relative flex flex-col rounded-3xl border p-6 sm:p-8`}
              style={
                {
                  "--project-color": colors[index % colors.length],
                } as CSSProperties
              }
            >
              <div className="flex items-center justify-between gap-4">
                <span className={styles.category}>{item.subtitle}</span>
                <span className={styles.privacy}>{item.privacy}</span>
              </div>
              <div className="mt-9 flex items-center justify-between gap-3">
                <h3 className="min-w-0 text-2xl font-black leading-relaxed text-ink">
                  {item.title}
                </h3>
                <span
                  className={`${styles.number} ${styles.mobileNumber}`}
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
                      <span key={tag} className={styles.tag}>
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
                      dialogRef.current?.showModal();
                    }}
                    className={`${styles.details} flex items-center gap-1 text-xs font-bold outline-offset-4 after:absolute after:inset-0 after:rounded-3xl focus-visible:outline-2 focus-visible:outline-current`}
                  >
                    <span>مشاهده جزئیات</span>
                    <ArrowUpLeft
                      aria-hidden="true"
                      className="size-3 -rotate-90"
                    />
                  </button>
                </div>
                <span
                  className={`${styles.number} ${styles.desktopNumber}`}
                  aria-hidden="true"
                >
                  {number(index + 1)}
                </span>
              </div>
            </article>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-6 flex justify-center" aria-label="انتخاب محصول">
          {projects.map((item, index) => (
            <button
              type="button"
              key={item.id}
              onClick={() => goTo(index)}
              aria-label={`نمایش ${item.title}`}
              aria-current={active === index ? "true" : undefined}
              className={`flex h-9 items-center justify-center rounded-full outline-offset-2 focus-visible:outline-2 focus-visible:outline-accent ${active === index ? "w-10" : "w-3.5"}`}
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
          dialogRef={dialogRef}
          selected={selected}
          setSelected={setSelected}
        />{" "}
      </div>
    </section>
  );
}

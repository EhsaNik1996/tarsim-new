"use client";
import Image from "next/image";
import { projects } from "./projects-data";
import { ArrowUpLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

const screenshotPath = (name: string) =>
  `/assets/screenshots/${name === "mostanad" ? "mostanad.jpeg" : `${name}.png`}`;
const number = (value: number) => String(value).padStart(2, "0");
const button =
  "flex size-10 items-center justify-center rounded-full border border-line bg-surface/70 outline-offset-4 transition hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-30";
export function ProjectDialog({
  open,
  onOpenChange,
  selected,
  setSelected,
  className,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selected: number;
  setSelected: (value: number | ((current: number) => number)) => void;
  className: string;
}) {
  const project = projects[selected];
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} dir="rtl" className={className}>
        <div className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between bg-surface/95 p-4 backdrop-blur-sm">
          <div className="flex md:flex-row-reverse items-center justify-center gap-x-1.5">
            <button
              type="button"
              onClick={() =>
                setSelected((v) => Math.min(projects.length - 1, v + 1))
              }
              disabled={selected === projects.length - 1}
              aria-label="پروژه بعدی"
              className={`${button}`}
            >
              <ChevronLeft className="size-5 max-md:rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => setSelected((v) => Math.max(0, v - 1))}
              disabled={selected === 0}
              aria-label="پروژه قبلی"
              className={`${button}`}
            >
              <ChevronRight className="size-5 max-md:rotate-180" />
            </button>
          </div>
          <span className="absolute left-1/2 inline-flex h-8 min-w-16 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-white px-3 font-mono text-xs font-bold tabular-nums leading-none text-muted shadow-sm">
            {number(projects.length)} / {number(selected + 1)}
          </span>
          <DialogClose
            render={
              <button
                type="button"
                aria-label="بستن جزئیات محصول"
                className={`${button}`}
              >
                <X className="size-4" />
              </button>
            }
          />
        </div>
        <div className="flex h-full min-h-0 overflow-hidden pt-20 max-md:flex-col max-md:overflow-y-auto max-md:pb-9 max-md:scrollbar-none rounded-[inherit]">
          <div className="order-1 flex flex-1 flex-col p-5">
            <span className="text-xs text-muted">
              {number(selected + 1)}- ترسیم
            </span>
            <h2
              id="project-dialog-title"
              className="mt-7 text-3xl font-extrabold leading-relaxed max-md:text-[1.35rem]"
            >
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">{project.desc}</p>
            <p className="mt-10 text-[11px] text-muted max-md:mt-5">
              مرور کلی پروژه
            </p>
            <p
              id="project-dialog-description"
              className="border border-line bg-white/70 p-4 text-sm font-light leading-7 text-muted max-md:mt-2.5 mt-3 rounded-2xl"
            >
              {project.longDesc}
            </p>
            <p className="mt-10 text-[11px] text-muted max-md:mt-5">
              تکنولوژی‌ها
            </p>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-line px-3 py-2 text-xs text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-auto border-t border-line pt-6 max-md:mt-10 max-md:pt-4">
              {project.privacy === "PRIVATE" ? (
                <p className="text-sm text-muted">
                  سامانهٔ داخلی · دسترسی ویژهٔ اعضای مجموعه
                </p>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-between gap-3 rounded-xl bg-ink px-6 py-4 text-sm font-bold text-paper transition hover:bg-accent hover:text-ink"
                >
                  ورود به وب‌سایت اصلی
                  <ArrowUpLeft className="size-5" />
                </a>
              )}
            </div>
          </div>
          <div className="order-2 flex-1 bg-panel/40 p-5 max-md:bg-white max-md:p-4">
            <p className="mb-4 text-right text-xs font-bold text-ink">
              {project.title}
            </p>
            <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_15px_30px_rgb(45_47_50/.12)]">
              <div
                className="flex items-center gap-1.5 border-b border-line bg-paper px-3 py-2.5"
                dir="ltr"
              >
                <i className="size-2 rounded-full bg-accent" />
                <i className="size-2 rounded-full bg-cyan" />
                <i className="size-2 rounded-full bg-green" />
                <span className="m-auto max-w-[65%] truncate text-[11px] text-muted">
                  {project.url}
                </span>
              </div>
              <Image
                src={screenshotPath(project.screenshotName)}
                alt={`نمایی از ${project.title}`}
                width={1200}
                height={760}
                className="block h-auto max-h-147.5 w-full object-cover object-top max-md:max-h-65"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

"use client";
import Image from "next/image";
import { ArrowUpLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import type { RefObject } from "react";
import { projects } from "./projects-data";
import styles from "./projects.module.css";
const controlClass = "flex size-11 items-center justify-center rounded-full border border-line bg-surface/70 outline-offset-4 transition hover:border-accent hover:bg-accent/10 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent disabled:opacity-30";
const screenshotPath = (name: string) => `/assets/screenshots/${name === "mostanad" ? "mostanad.jpeg" : `${name}.png`}`;
const number = (value: number) => String(value).padStart(2, "0");
export function ProjectDialog({ dialogRef, selected, setSelected }: { dialogRef: RefObject<HTMLDialogElement | null>; selected: number; setSelected: (value: number | ((current: number) => number)) => void }) {
  const project = projects[selected];
  return (    <dialog ref={dialogRef} aria-labelledby="project-dialog-title" aria-describedby="project-dialog-description" className={styles.dialog} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
        <button type="button" autoFocus onClick={() => dialogRef.current?.close()} aria-label="بستن جزئیات محصول" className={`${styles.close} ${controlClass}`}><X aria-hidden="true" className="size-4" /></button>
        <button type="button" onClick={() => setSelected((value) => Math.max(0, value - 1))} disabled={selected === 0} aria-label="پروژه قبلی" className={`${styles.modalNav} ${styles.modalPrev} ${controlClass}`}><ChevronRight aria-hidden="true" /></button>
        <button type="button" onClick={() => setSelected((value) => Math.min(projects.length - 1, value + 1))} disabled={selected === projects.length - 1} aria-label="پروژه بعدی" className={`${styles.modalNav} ${styles.modalNext} ${controlClass}`}><ChevronLeft aria-hidden="true" /></button>
        <div className={styles.modalShell} dir="rtl">
          <div className={styles.modalInfo}>
            <span className="text-xs text-muted">ترسیم / {number(selected + 1)}</span>
            <h2 id="project-dialog-title" className="mt-7 text-3xl font-extrabold leading-relaxed">{project.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{project.desc}</p>
            <p className={styles.overviewLabel}>مرور کلی پروژه</p>
            <p id="project-dialog-description" className={styles.overview}>{project.longDesc}</p>
            <p className={styles.overviewLabel}>تکنولوژی‌ها</p>
            <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span className={styles.modalTag} key={tag}>{tag}</span>)}</div>
            <div className="mt-auto border-t border-line pt-6">{project.privacy === "PRIVATE" ? <p className="text-sm text-muted">سامانهٔ داخلی · دسترسی ویژهٔ اعضای مجموعه</p> : <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-3 rounded-xl bg-ink px-6 py-4 text-sm font-bold text-paper transition hover:bg-accent hover:text-ink">ورود به وب‌سایت اصلی<ArrowUpLeft aria-hidden="true" className="size-5" /></a>}</div>
          </div>
          <div className={styles.modalPreview} dir="ltr"><p className="mb-4 text-right text-xs font-bold text-ink">{project.title}</p><div className={styles.browser}><div className={styles.browserBar}><i /><i /><i /><span>{project.url.replace(/^https?:\/\//, "")}</span></div><Image src={screenshotPath(project.screenshotName)} alt={`نمایی از ${project.title}`} width={1200} height={760} className={styles.screenshot} /></div></div>
        </div>
      </dialog>
      );
}


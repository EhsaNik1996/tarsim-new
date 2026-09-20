import Image from "next/image";
export function DociBoxStage({ compact = false }: { compact?: boolean }) {
  const height = compact ? "h-180 max-sm:h-120" : "h-168 max-sm:h-120";
  return (
    <div
      className={`group flex items-center justify-center relative isolate overflow-hidden bg-ink ${height}`}
    >
      <span className="absolute left-1/2 top-1/2 size-180 animate-drift bg-accent/30 blur-3xl rounded-full" />
      <span
        className="absolute left-10 top-10 font-mono text-xs text-white/40 tracking-widest"
        dir="ltr"
      >
        DOCIBOX / DIGITAL LIBRARY
      </span>
      <div className="flex relative z-10 w-4/5 max-w-5xl h-120 overflow-hidden bg-surface border border-white/20 shadow-2xl transition duration-700 -rotate-2 group-hover:scale-105 group-hover:rotate-0 rounded-3xl max-sm:w-11/12 max-sm:h-80">
        <div className="relative flex-1 overflow-hidden">
          <Image
            src="/docibox-fullpage.png"
            alt="محیط داکیباکس؛ کتابخانه‌ات کجاست؟"
            fill
            sizes="(max-width: 640px) 90vw, 70vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-l from-ink/80 via-ink/20 to-transparent" />
          <div className="absolute left-8 top-8 w-64 bg-white/80 text-ink shadow-xl backdrop-blur-xl p-6 rounded-2xl max-sm:left-4 max-sm:top-4 max-sm:w-48 max-sm:p-4">
            <Image
              src="/docibox-logo.png"
              alt="لوگوی داکیباکس"
              width={44}
              height={44}
            />
            <strong className="block text-2xl mt-5 max-sm:text-lg">
              کتابخونه‌ات کجاست؟
            </strong>
            <p className="text-sm leading-6 text-muted mt-3 max-sm:text-xs">
              اینجا؛ جایی که هر کتابخانه هویت خودش را پیدا می‌کند.
            </p>
          </div>
          <i className="absolute left-0 top-0 w-full h-px animate-scan bg-accent shadow-lg" />
        </div>
      </div>
      <span className="absolute left-3/4 top-16 z-20 animate-float bg-accent text-xs max-sm:left-4 max-sm:top-8 max-sm:max-w-36 max-sm:text-[10px] text-ink px-5 py-3 rounded-full max-sm:px-3 max-sm:py-2">
        منابع، همیشه در دسترس
      </span>
    </div>
  );
}

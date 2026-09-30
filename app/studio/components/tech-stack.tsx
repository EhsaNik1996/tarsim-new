"use client";

const techStack = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" fill="none">
        <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1.2">
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4.2"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" className="size-8" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#111" strokeWidth="1.3" />
        <path
          d="M9 8v8M9 8l6.5 8M15.5 8v5.5"
          stroke="#111"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#3178c6]">
        <rect
          x="8"
          y="8"
          width="240"
          height="240"
          rx="24"
          fill="currentColor"
          opacity="0.12"
        />
        <rect
          x="8"
          y="8"
          width="240"
          height="240"
          rx="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <text
          x="128"
          y="170"
          textAnchor="middle"
          fill="currentColor"
          fontSize="120"
          fontFamily="Space Grotesk"
          fontWeight="800"
        >
          TS
        </text>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 256 292" className="size-7 md:size-8 text-[#339933]">
        <path
          d="M128 0L256 73.9v146.2L128 292 0 220.1V73.9z"
          fill="currentColor"
          opacity="0.15"
        />
        <path
          d="M128 32l96 55.4v110.8L128 253.6 32 198.2V87.4z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <text
          x="128"
          y="160"
          textAnchor="middle"
          fill="currentColor"
          fontSize="80"
          fontFamily="Space Grotesk"
          fontWeight="700"
        >
          N
        </text>
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#3776ab]">
        <path
          d="M126 8C80 8 56 30 56 60v28h72v8H44c-24 0-44 20-44 56s16 56 40 56h24v-32c0-24 16-44 40-44h72c20 0 36-16 36-36V60c0-28-26-52-86-52zm-40 28a12 12 0 110 24 12 12 0 010-24z"
          fill="currentColor"
          opacity="0.7"
        />
        <path
          d="M130 248c46 0 70-22 70-52v-28h-72v-8h84c24 0 44-20 44-56s-16-56-40-56h-24v32c0 24-16 44-40 44H80c-20 0-36 16-36 36v36c0 28 26 52 86 52zm40-28a12 12 0 110-24 12 12 0 010 24z"
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#336791]">
        <ellipse
          cx="128"
          cy="80"
          rx="72"
          ry="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        />
        <path
          d="M56 80v96c0 22 32 40 72 40s72-18 72-40V80"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        />
        <path
          d="M56 128c0 22 32 40 72 40s72-18 72-40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          opacity="0.4"
        />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#ff9900]">
        <path
          d="M44 160c28 28 72 40 112 28"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M180 100c-8-36-44-60-80-52s-56 44-48 80"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
        />
        <path
          d="M160 188l32-12-12-32"
          stroke="currentColor"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
  {
    name: "Docker",
    icon: (
      <svg viewBox="0 0 256 256" className="size-7 md:size-8 text-[#2496ed]">
        <rect
          x="48"
          y="100"
          width="160"
          height="96"
          rx="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        ></rect>
        <rect
          x="56"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="86"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="116"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="146"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="176"
          y="108"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.2"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="86"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="116"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <rect
          x="146"
          y="80"
          width="24"
          height="20"
          rx="3"
          fill="currentColor"
          opacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
        ></rect>
        <path
          d="M28 148c-8-4-12-12-8-20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        ></path>
      </svg>
    ),
  },
];

const badges = ["پیاده‌سازی سریع", "تحویل تمیز و مستندشده", "میزبانی پایدار"];

export default function TechStackSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-7" dir="rtl" aria-labelledby="studio-tech-title">
      <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-panel p-6 text-ink md:rounded-4xl md:p-10 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 -top-32 -z-10 size-96 rounded-full bg-accent/8 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 right-0 -z-10 size-96 rounded-full bg-green/10 blur-3xl" />
        <div className="grid items-center gap-9 lg:grid-cols-[0.9fr_1.3fr] lg:gap-12">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-muted">
              <span className="size-2 rounded-full bg-accent" aria-hidden="true" />
              جعبه‌ابزار ترسیم
            </span>
            <h2 id="studio-tech-title" className="text-3xl font-extrabold leading-snug tracking-tight md:text-4xl">
              ابزارهای شناخته‌شده.
              <br />
              <span className="text-accent">انتخاب‌های عملی.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-8 text-muted">
              اغلب کارفرماها نیازی به دانستن جزئیات فنی ندارند. ما از ابزارهای
              اثبات‌شده استفاده می‌کنیم، بخش‌های مهم را مستند می‌کنیم و نگهداری
              محصول را بعد از راه‌اندازی ساده نگه می‌داریم.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group flex min-w-0 flex-col items-start gap-5 rounded-2xl border border-line bg-surface/90 p-4 transition duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 motion-reduce:transform-none sm:p-5"
                dir="ltr"
              >
                <div aria-hidden="true" className="flex size-12 items-center justify-center rounded-xl bg-panel transition-colors group-hover:bg-accent/10">
                  {tech.icon}
                </div>
                <span className="text-sm font-bold text-ink">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 border-t border-line pt-6 md:mt-10">
          {badges.map((badge, index) => (
            <span key={badge} className="inline-flex items-center gap-2.5 text-xs font-bold text-muted">
              <span aria-hidden="true" className={`size-1.5 rounded-full ${index === 0 ? "bg-accent" : index === 1 ? "bg-gold" : "bg-green"}`} />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
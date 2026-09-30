"use client";

import { motion, useReducedMotion } from "framer-motion";

const inputs = [
  {
    id: "think",
    label: "فکر می‌کنیم",
    color: "#35a9e0",
    path: "M118 194 C225 194 240 270 390 292",
  },
  {
    id: "make",
    label: "می‌سازیم",
    color: "#8bc53f",
    path: "M118 296 C230 296 275 296 390 306",
  },
  {
    id: "execute",
    label: "اجرا می‌کنیم",
    color: "#f5a800",
    path: "M118 398 C225 398 240 342 390 320",
  },
] as const;

export function StudioFlowDiagram() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto min-h-75 w-full max-w-2xl overflow-visible md:min-h-107.5" dir="rtl">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_28%_15%_at_18%_34%,rgba(53,169,224,0.14),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_52%,rgba(139,197,63,0.13),transparent_75%),radial-gradient(ellipse_28%_15%_at_18%_70%,rgba(245,168,0,0.12),transparent_75%),radial-gradient(ellipse_48%_60%_at_72%_54%,rgba(52,211,153,0.13),transparent_82%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-55 bg-[radial-gradient(rgba(82,93,120,0.12)_0.72px,transparent_0.72px)] bg-size-[18px_18px] mask-[linear-gradient(to_left,black_0%,black_58%,rgba(0,0,0,0.72)_76%,transparent_100%)]"
      />

      <svg
        viewBox="0 0 760 560"
        className="absolute inset-x-0 bottom-0 h-full w-full overflow-visible"
        role="img"
        aria-label="سه مسیر فکر کردن، ساختن و اجرا کردن به یک نرم‌افزار کاربردی می‌رسند"
      >
        <defs>
          <filter id="studio-core-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="13" dy="8" stdDeviation="4" floodColor="#64748b" floodOpacity=".28" />
            <feDropShadow dx="2" dy="3" stdDeviation="7" floodColor="#0f172a" floodOpacity=".13" />
          </filter>
          <clipPath id="studio-core-clip">
            <polygon points="418,215 510,215 542,306 510,397 418,397 386,306" />
          </clipPath>
        </defs>

        <path
          d="M464 397 V438"
          fill="none"
          stroke="#64748b"
          strokeOpacity=".58"
          strokeWidth="3"
          strokeDasharray="7 7"
        />
        <motion.circle
          cx="464"
          cy="418"
          r="4"
          fill="#64748b"
          initial={reduceMotion ? { cy: 418, opacity: 0.75 } : { cy: 397, opacity: 0 }}
          animate={reduceMotion ? undefined : { cy: [397, 438], opacity: [0, 0.8, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            repeatDelay: 2.6,
            ease: "easeInOut",
          }}
        />
        <rect
          x="366"
          y="438"
          width="196"
          height="48"
          rx="8"
          fill="rgba(100,116,139,.08)"
          stroke="#94a3b8"
          strokeOpacity=".5"
        />
        <text
          x="464"
          y="468"
          textAnchor="middle"
          className="fill-muted text-base font-black"
        >
          زیرساخت
        </text>

        {inputs.map((input, index) => (
          <g key={input.id}>
            <path
              d={input.path}
              fill="none"
              stroke={input.color}
              strokeOpacity=".24"
              strokeWidth="1.5"
            />
            <motion.path
              d={input.path}
              fill="none"
              stroke={input.color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="26 360"
              initial={reduceMotion ? undefined : { opacity: 0, strokeDashoffset: 360 }}
              animate={
                reduceMotion
                  ? undefined
                  : {
                      opacity: [0, 0.4, 1, 1, 1, 0.35, 0],
                      strokeDashoffset: [360, 340, 275, 58, 58, 18, 0],
                    }
              }
              transition={{
                duration: 2.4,
                delay: 0.7 + index * 0.18,
                repeat: Infinity,
                repeatDelay: 1,
                times: [0, 0.08, 0.2, 0.66, 0.78, 0.93, 1],
                ease: [0.3, 0, 0.2, 1],
              }}
            />
            <circle cx="100" cy={194 + index * 102} r="4" fill={input.color} />
            <text
              x="76"
              y={199 + index * 102}
              className="fill-muted text-base font-medium"
            >
              {input.label}
            </text>
          </g>
        ))}

        <motion.g
          style={{ transformOrigin: "464px 306px" }}
          animate={reduceMotion ? undefined : { scale: [1, 1, 1.055, 1] }}
          transition={{
            duration: 3.4,
            times: [0, 0.64, 0.76, 1],
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <polygon
            points="430,215 522,215 554,306 522,397 430,397 398,306"
            fill="rgba(91,111,106,.16)"
          />
          <polygon
            points="418,215 510,215 542,306 510,397 418,397 386,306"
            fill="#070b09"
            filter="url(#studio-core-shadow)"
          />
          <g clipPath="url(#studio-core-clip)">
            {[286, 306, 326].map((y, index) => (
              <motion.line
                key={y}
                x1="382"
                x2="548"
                y1={y}
                y2={y}
                stroke="#3be58d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="18 148"
                initial={reduceMotion ? undefined : { strokeDashoffset: 166, opacity: 0 }}
                animate={
                  reduceMotion
                    ? undefined
                    : { strokeDashoffset: [166, 0], opacity: [0, 0.14, 0] }
                }
                transition={{
                  duration: 1.35,
                  delay: 2.05 + index * 0.12,
                  repeat: Infinity,
                  repeatDelay: 2.05,
                  ease: "easeInOut",
                }}
              />
            ))}
          </g>
          <text
            x="464"
            y="272"
            textAnchor="middle"
            className="fill-[#8b918d] text-sm font-extrabold tracking-[2px]"
          >
            هم‌راستا
          </text>
          <text
            x="464"
            y="311"
            textAnchor="middle"
            className="fill-white text-base font-black tracking-[2px]"
          >
            ساخت
          </text>
          <text
            x="464"
            y="347"
            textAnchor="middle"
            className="fill-[#8b918d] text-sm font-extrabold tracking-[2px]"
          >
            اعتبارسنجی
          </text>
        </motion.g>

        <path
          d="M542 306 H708"
          fill="none"
          stroke="#67dca5"
          strokeOpacity=".72"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {[0, 1, 2].map((index) => (
          <motion.rect
            key={index}
            y={304 - index * 0.25}
            width="18"
            height="4"
            rx="2"
            fill="#38e68b"
            initial={reduceMotion ? { x: 670, opacity: 0.8 } : { x: 542, opacity: 0 }}
            animate={
              reduceMotion
                ? undefined
                : { x: [542, 550, 676, 688], opacity: [0, 0.8, 0.8, 0] }
            }
            transition={{
              duration: 1.1,
              delay: 2.3 + index * 0.15,
              repeat: Infinity,
              repeatDelay: 2.3,
              times: [0, 0.12, 0.82, 1],
              ease: [0.35, 0, 0.2, 1],
            }}
          />
        ))}
        <motion.path
          d="M690 290 L708 306 L690 322"
          fill="none"
          stroke="#16c76a"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={reduceMotion ? undefined : { x: [0, 0, 5, 0] }}
          transition={{
            duration: 3.4,
            times: [0, 0.72, 0.86, 1],
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <text
          x="618"
          y="268"
          textAnchor="middle"
          className="fill-ink text-base font-black tracking-[1.5px]"
        >
          نرم‌افزار کاربردی
        </text>
        <text
          x="618"
          y="350"
          textAnchor="middle"
          className="fill-muted text-sm font-normal"
        >
          یک مسیر پاسخ‌گو
        </text>

        <line x1="0" y1="530" x2="730" y2="530" stroke="#d4d4d4" />
        <text
          x="110"
          y="550"
          textAnchor="middle"
          className="fill-muted text-sm font-extrabold"
        >
          ایده تا اجرا
        </text>
        <text
          x="650"
          y="550"
          textAnchor="middle"
          className="fill-muted text-sm font-extrabold"
        >
          محصول قابل استفاده
        </text>
      </svg>
    </div>
  );
}
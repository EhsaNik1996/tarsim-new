import { CircleHelp, Hammer, Rocket } from "lucide-react";
import { BlurReveal } from "@/components/effects/reveal";

export function LabLoop() {
  return (
    <section
      className="flex mx-auto px-7 gap-4 max-w-7xl max-sm:flex-col max-sm:px-4"
      dir="ltr"
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        const active = index === 1;
        return (
          <article
            className={`group flex flex-1 flex-col relative h-96 cursor-default overflow-hidden border transition duration-500 hover:-translate-y-3 hover:shadow-2xl p-8 rounded-3xl max-sm:h-64 ${active ? "bg-linear-to-br from-accent via-green to-cyan text-white border-white/20" : "bg-white/65 border-line backdrop-blur-lg hover:border-accent"}`}
            key={step.label}
            dir="rtl"
          >
            <i
              className={`absolute left-2/3 top-2/3 size-48 blur-3xl transition duration-500 group-hover:scale-150 rounded-full ${active ? "bg-white/20" : "bg-accent/15"}`}
            />
            <div
              className="flex relative items-center justify-between"
              dir="ltr"
            >
              <span className="font-sans text-xs opacity-60" dir="ltr">
                0{index + 1}
              </span>
              <Icon className="size-7 stroke-[1.5] transition duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
            <strong className="relative font-sans text-5xl my-auto max-sm:text-4xl">
              {step.label}
            </strong>
            <p className="relative opacity-75">{step.text}</p>
          </article>
        );
      })}
    </section>
  );
}
export function LabRoles() {
  return (
    <section className="flex mx-auto px-7 py-32 gap-20 max-w-7xl max-sm:flex-col max-sm:px-4 max-sm:py-20">
      <BlurReveal className="w-1/2 max-sm:w-full">
        <span className="text-xs text-muted">فضایی برای</span>
        <h2 className="text-8xl leading-tight font-extrabold mt-12 max-sm:text-4xl">
          آدم‌های
          <br />
          کنجکاو.
        </h2>
      </BlurReveal>
      <BlurReveal className="w-1/2 max-sm:w-full" delay={120}>
        {roles.map((role) => (
          <article
            className="group border-t border-line transition hover:border-accent py-8"
            key={role.label}
          >
            <b className="font-sans text-sm tracking-widest transition group-hover:text-accent">
              {role.label}
            </b>
            <p className="text-muted mt-4">{role.text}</p>
          </article>
        ))}
      </BlurReveal>
    </section>
  );
}
const steps = [
  { label: "THINK", text: "مسئلهٔ درست را پیدا می‌کنیم.", icon: CircleHelp },
  { label: "MAKE", text: "سریع و دقیق نمونه می‌سازیم.", icon: Hammer },
  { label: "EXECUTE", text: "به دست آدم‌های واقعی می‌رسانیم.", icon: Rocket },
];
const roles = [
  { label: "ENGINEERING", text: "Frontend · Backend · Infrastructure" },
  { label: "PRODUCT", text: "Product thinking · UX · Research" },
  { label: "IDEAS", text: "اگر چیزی برای ساختن داری، با ما مطرحش کن." },
];





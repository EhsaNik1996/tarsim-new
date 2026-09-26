import type { Metadata } from "next";
import { JoinBand } from "./components/join";
import { NextPage } from "@/components/shared/next";
import { PageIntro } from "@/components/shared/intro";
import { LabLoop, LabRoles } from "./components/content";

export const metadata: Metadata = {
  title: "استودیو",
  description: "جایی برای ساختن، تجربه کردن و عرضه کردن.",
};

export default function LabPage() {
  return (
    <main>
      <PageIntro
        index="02"
        eyebrow="TARSIM STUDIO"
        title={
          <span className="inline-block bg-[linear-gradient(105deg,var(--color-cyan)_0%,var(--color-cyan)_35%,color-mix(in_srgb,var(--color-cyan)_35%,white)_50%,var(--color-cyan)_65%,var(--color-cyan)_100%)] bg-size-[260%_100%] bg-position-[0_0] bg-clip-text text-transparent [-webkit-background-clip:text] animate-[studio-word-wave_8s_ease-in-out_infinite]">
            فکر می‌کنیم.
          </span>
        }
        accent={
          <>
            <span className="inline-block bg-[linear-gradient(105deg,var(--color-green)_0%,var(--color-green)_35%,color-mix(in_srgb,var(--color-green)_35%,white)_50%,var(--color-green)_65%,var(--color-green)_100%)] bg-size-[260%_100%] bg-position-[0_0] bg-clip-text text-transparent [-webkit-background-clip:text] animate-[studio-word-wave_8s_ease-in-out_infinite] [animation-delay:800ms]">
              می‌سازیم.
            </span>
            <br />
            <span className="inline-block bg-[linear-gradient(105deg,var(--color-accent)_0%,var(--color-accent)_35%,color-mix(in_srgb,var(--color-accent)_35%,white)_50%,var(--color-accent)_65%,var(--color-accent)_100%)] bg-size-[260%_100%] bg-position-[0_0] bg-clip-text text-transparent [-webkit-background-clip:text] animate-[studio-word-wave_8s_ease-in-out_infinite] [animation-delay:1600ms]">
              اجرا می‌کنیم.
            </span>
          </>
        }
        text="استودیو ترسیم جایی برای آدم‌هایی است که فقط دنبال تمام کردن تسک نیستند؛ می‌خواهند چیزی بسازند که واقعاً استفاده شود."
      />
      <LabLoop />
      <LabRoles />
      <JoinBand />
      <NextPage
        href="/contact"
        label="در ارتباط باشیم"
        title="گفت‌وگو با ترسیم"
      />
    </main>
  );
}



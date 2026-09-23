import type { Metadata } from "next";
import { NextPage } from "@/components/shared/next";
import { PageIntro } from "@/components/shared/intro";
import { JoinBand } from "./components/join";
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
        title={<span className="text-cyan">فکر می‌کنیم.</span>}
        accent={
          <>
            <span className="text-accent">می‌سازیم.</span>
            <br />
            <span className="text-green">اجرا می‌کنیم.</span>
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

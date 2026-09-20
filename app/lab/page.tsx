import type { Metadata } from "next";
import { NextPage } from "@/components/shared/next-page";
import { PageIntro } from "@/components/shared/page-intro";
import { JoinBand } from "./components/join-band";
import { LabLoop, LabRoles } from "./components/lab-content";
export const metadata: Metadata = {
  title: "آزمایشگاه",
  description: "جایی برای ساختن، تجربه کردن و عرضه کردن.",
};
export default function LabPage() {
  return (
    <main>
      <PageIntro
        index="02"
        eyebrow="TARSIM LAB"
        title="فکر می‌کنیم."
        accent={<>می‌سازیم.<br />عرضه می‌کنیم.</>}
        text="آزمایشگاه ترسیم جایی برای آدم‌هایی است که فقط دنبال تمام کردن تسک نیستند؛ می‌خواهند چیزی بسازند که واقعاً استفاده شود."
      />
      <LabLoop />
      <LabRoles />
      <JoinBand />
      <NextPage href="/about" label="بعدی" title="دربارهٔ ترسیم" />
    </main>
  );
}

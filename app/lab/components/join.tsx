import Image from "next/image";
import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
export function JoinBand() {
  return (
    <section className="relative isolate min-h-150 overflow-hidden bg-ink text-white py-28">
      <div className="masked-cta-media absolute inset-y-0 left-0 -z-10 w-[68%] max-lg:w-full">
        <Image
          src="/lab-workbench.png"
          alt="میز تجربه‌سازی و آزمایش نمونه‌های محصول در آزمایشگاه ترسیم"
          fill
          sizes="100vw"
          className="object-cover object-center transition duration-1000 hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-l from-ink via-ink/90 via-48% to-accent/15" />
      <i className="absolute left-1/4 top-1/3 -z-10 size-80 bg-cyan/20 blur-3xl rounded-full" />
      <div className="relative mx-auto px-7 max-w-7xl max-sm:px-4">
        <p className="font-mono text-xs text-cyan tracking-widest">
          TARSIM / PEOPLE
        </p>
        <h2 className="max-w-3xl text-8xl leading-none font-extrabold tracking-tighter my-16 max-sm:text-4xl">
          ساختن برایت
          <br />
          فقط یک شغل نیست.
        </h2>
        <Button asChild variant="outline" size="lg">
          <Link href="mailto:people@tarsim.co">
            گفت‌وگو با ما <Send className="size-4 stroke-[1.7]" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

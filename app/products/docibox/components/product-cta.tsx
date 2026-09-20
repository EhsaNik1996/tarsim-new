import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
export function ProductCta() {
  return (
    <section className="relative isolate min-h-150 overflow-hidden bg-ink text-white py-28">
      <div className="absolute left-0 top-0 -z-10 w-3/5 h-full mask-[linear-gradient(to_left,transparent_0%,black_45%)] max-lg:w-full max-lg:opacity-45">
        <Image
          src="/docibox-library.webp"
          alt="کتابخانه دیجیتال داکیباکس"
          fill
          sizes="(max-width:1024px) 100vw, 60vw"
          className="object-cover transition duration-1000 hover:scale-105"
        />
      </div>
      <div className="absolute left-0 top-0 -z-10 w-full h-full bg-linear-to-l from-ink via-ink/75 to-accent/20" />
      <i className="absolute left-1/4 top-1/3 -z-10 size-80 bg-cyan/20 blur-3xl rounded-full" />
      <div className="relative mx-auto px-7 max-w-7xl max-sm:px-4">
        <span className="font-mono text-xs text-cyan tracking-widest">
          DOCiBOX.IR
        </span>
        <h2 className="max-w-2xl text-8xl leading-none font-extrabold tracking-tighter my-16 max-sm:text-4xl">
          <span>کتابخانه‌تان را</span>
          <br />
          از نو ببینید.
        </h2>
        <Button asChild variant="outline" size="lg">
          <Link href="https://docibox.ir" target="_blank" rel="noreferrer">
            ورود به داکیباکس <ExternalLink className="size-4 stroke-[1.7]" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

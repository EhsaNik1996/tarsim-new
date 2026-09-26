import Link from "next/link";
import { ArrowIcon } from "./arrow";
import { BlurReveal } from "@/components/effects/reveal";
export function NextPage({
  href,
  label,
  title,
}: {
  href: string;
  label: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center h-60 border-t border-line mx-auto px-7 max-w-7xl max-sm:h-44 max-sm:px-4"
    >
      <BlurReveal className="flex w-full items-center">
        <span className="w-1/3 text-xs text-muted max-sm:hidden">{label}</span>
        <strong className="w-1/3 text-6xl max-sm:w-auto max-sm:text-4xl">{title}</strong>
        <ArrowIcon className="text-4xl ml-auto" />
      </BlurReveal>
    </Link>
  );
}

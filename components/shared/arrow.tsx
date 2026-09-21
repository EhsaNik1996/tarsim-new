import { ArrowDown, ArrowDownLeft } from "lucide-react";
import { cn } from "@/lib/utils";
export function ArrowIcon({
  direction = "left",
  className = "",
}: {
  direction?: "left" | "down";
  className?: string;
}) {
  const Icon = direction === "down" ? ArrowDown : ArrowDownLeft;
  return (
    <Icon className={cn("size-6 stroke-[1.7]", className)} aria-hidden="true" />
  );
}

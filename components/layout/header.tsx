"use client";
import { useState } from "react";
import Link from "next/link";
import { Home, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const navigation = [
  { href: "/products/docibox", label: "داکیباکس" },
  { href: "/lab", label: "آزمایشگاه" },
  { href: "/about", label: "دربارهٔ ما" },
];
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-paper/80 border-b border-line backdrop-blur-xl">
      <div className="flex items-center justify-between h-24 mx-auto px-7 max-w-7xl max-sm:h-20 max-sm:px-4">
        <Link
          href="/"
          className="flex items-center font-extrabold text-xl gap-3"
          aria-label="ترسیم، صفحه اصلی"
        >
          <span className="flex items-center justify-center size-9 bg-ink text-paper text-sm rounded-full">
            تـ
          </span>
          <span>ترسیم</span>
        </Link>
        <nav
          className="flex items-center text-sm gap-8 max-sm:hidden"
          aria-label="منوی اصلی"
        >
          <HomeLink active={pathname === "/"} />
          {navigation.map((item) => (
            <NavLink
              {...item}
              active={isActive(pathname, item.href)}
              key={item.href}
            />
          ))}
        </nav>
        <div className="max-sm:hidden">
          <Button asChild variant="outline" size="sm">
            <Link href="mailto:hello@tarsim.co">
              <i className="inline-block size-2 bg-green-500 rounded-full" />{" "}
              تماس با ما
            </Link>
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          className="hidden items-center justify-center size-11 text-ink bg-white/70 border border-line rounded-full max-sm:flex"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "absolute left-0 top-20 w-full overflow-hidden bg-paper/95 border-b border-line shadow-xl backdrop-blur-xl transition-all duration-500 sm:hidden",
          open
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-4 py-5 gap-2" aria-label="منوی موبایل">
          <MobileLink
            href="/"
            label="خانه"
            active={pathname === "/"}
            onNavigate={() => setOpen(false)}
          />
          {navigation.map((item) => (
            <MobileLink
              {...item}
              active={isActive(pathname, item.href)}
              onNavigate={() => setOpen(false)}
              key={item.href}
            />
          ))}
          <Link
            className="flex items-center justify-center bg-ink text-paper mt-3 px-5 py-4 rounded-2xl"
            href="mailto:hello@tarsim.co"
            onClick={() => setOpen(false)}
          >
            تماس با ما
          </Link>
        </nav>
      </div>
    </header>
  );
}
function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}
function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative py-2 transition after:absolute after:left-0 after:top-full after:h-0.5 after:bg-accent after:transition-all after:duration-500",
        active
          ? "text-accent after:w-full"
          : "text-ink after:w-0 hover:text-accent hover:after:w-full",
      )}
    >
      {label}
    </Link>
  );
}
function MobileLink({
  href,
  label,
  active,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center justify-between text-lg transition px-5 py-4 rounded-2xl",
        active ? "bg-accent text-white" : "hover:bg-panel",
      )}
    >
      <span>{label}</span>
      {active && <span className="size-2 bg-white rounded-full" />}
    </Link>
  );
}
function HomeLink({ active }: { active: boolean }) {
  return (
    <Link
      href="/"
      aria-current={active ? "page" : undefined}
      className={cn(
        "group flex items-center justify-center size-8 transition",
        active ? "text-accent" : "text-muted hover:text-accent",
      )}
      aria-label="خانه"
    >
      <Home
        aria-hidden="true"
        className={cn(
          "size-5 stroke-[1.7] transition group-hover:scale-110",
          active && "animate-home-float",
        )}
      />
    </Link>
  );
}

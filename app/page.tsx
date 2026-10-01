import type { Metadata } from "next";
import { HeroSection } from "./components/hero";
import { ExploreLinks } from "./components/explore";
import { ApproachSection } from "./components/approach";
import { FeaturedProduct } from "./components/featured";
import { OtherProducts } from "./products/components/projects";
import { InfrastructureSection } from "./components/infrastructure";
import { TrackRecord } from "./components/track-record";

export const metadata: Metadata = {
  title: "استودیوی محصول و فناوری",
  description:
    "ترسیم برای مسئله‌های واقعی محصول دیجیتال و زیرساخت طراحی می‌کند؛ با داکیباکس و پروژه‌های مستقل آشنا شوید.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProduct />
      <OtherProducts />
      <InfrastructureSection />
      <TrackRecord />
      <ApproachSection />
      <ExploreLinks />
    </main>
  );
}

import { HeroSection } from "./components/hero";
import { ExploreLinks } from "./components/explore";
import { ApproachSection } from "./components/approach";
import { FeaturedProduct } from "./components/featured";
import { OtherProducts } from "./products/components/projects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProduct />
      <OtherProducts />
      <ApproachSection />
      <ExploreLinks />
    </main>
  );
}

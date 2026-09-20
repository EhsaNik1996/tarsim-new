import { ApproachSection } from "./components/approach-section";
import { ExploreLinks } from "./components/explore-links";
import { FeaturedProduct } from "./components/featured-product";
import { HeroSection } from "./components/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProduct />
      <ApproachSection />
      <ExploreLinks />
    </main>
  );
}

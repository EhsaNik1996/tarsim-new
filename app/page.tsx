import { HeroSection } from "./components/hero";
import { ExploreLinks } from "./components/explore";
import { ApproachSection } from "./components/approach";
import { FeaturedProduct } from "./components/featured";

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

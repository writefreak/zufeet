import HeroSection from "@/components/sections/HeroSection";
import BrandStatement from "@/components/sections/BrandStatement";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandValues from "@/components/sections/BrandValues";
import PreOrderBanner from "@/components/sections/PreOrderBanner";
import Hero from "@/components/sections/hero";
import Reviews from "@/components/sections/reviews";

export default function HomePage() {
  return (
    <div>
      {/* <Hero /> */}
      <HeroSection />
      <BrandStatement />
      <BrandValues />
      <FeaturedProducts />
      <Reviews />
      <PreOrderBanner />
    </div>
  );
}

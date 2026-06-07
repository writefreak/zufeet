import HeroSection from "@/components/sections/HeroSection";
import BrandStatement from "@/components/sections/BrandStatement";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import BrandValues from "@/components/sections/BrandValues";
import PreOrderBanner from "@/components/sections/PreOrderBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStatement />
      <FeaturedProducts />
      <BrandValues />
      <PreOrderBanner />
    </>
  );
}

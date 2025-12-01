import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <NewsletterSection />
    </div>
  );
}

"use client";

import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white/80">
      <section className="max-w-6xl mx-auto px-6 pt-20 md:pt-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display md:text-[46px] text-2xl font-semibold text-text">
              Featured Pairs
            </h2>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none mt-6"
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="">
            <Link
              href="/products"
              className="w-full flex  items-center justify-center text-black/70  hover:text-brand font-body text-sm py-3 transition-colors"
            >
              See Full Collection
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

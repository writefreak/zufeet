"use client";

import { useRef, useState } from "react";
import { PRODUCTS, PRODUCT_TYPES } from "@/lib/data/products";
import type { ProductType, ProductGender } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import CategoryFilter from "@/components/ui/CategoryFilter";

type TypeFilter = "All" | ProductType;
const ALL_TYPES: TypeFilter[] = ["All", ...PRODUCT_TYPES];

const GENDER_SECTIONS: { label: string; gender: ProductGender }[] = [
  { label: "For Men With Exclusive Taste", gender: "Men" },
  { label: "For Women With Exclusive Taste", gender: "Women" },
  { label: "For Everyone With Exclusive Taste", gender: "Unisex" },
];

function GenderRow({
  title,
  products,
}: {
  title: string;
  products: typeof PRODUCTS;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (products.length === 0) return null;

  return (
    <div className="pb-16">
      <h2 className="font-display text-base md:text-xl font-semibold text-text pb-3 md:pb-6">
        {title}
      </h2>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default function ProductsClient() {
  const [activeType, setActiveType] = useState<TypeFilter>("All");

  const sections = GENDER_SECTIONS.map(({ label, gender }) => ({
    label,
    products: PRODUCTS.filter(
      (p) =>
        p.category === gender &&
        (activeType === "All" || p.type === activeType),
    ),
  }));

  const totalFiltered = sections.reduce((sum, s) => sum + s.products.length, 0);

  return (
    <div className="bg-white/80">
      <div className="max-w-6xl  mx-auto px-6 pt-28 md:pb-16">
        {/* Header */}
        <div className="pb-12 flex md:flex-row flex-col  md:justify-between">
          <h1 className="font-display text-2xl md:text-[46px] md:leading-tight font-semibold text-text md:pb-0 pb-6">
            <span className="text-brand">Explore Our</span> <br /> Unique
            Collection
          </h1>
          <div className="flex md:items-end">
            <CategoryFilter
              active={activeType}
              onChange={setActiveType}
              options={ALL_TYPES}
            />
          </div>
        </div>

        {/* Sections */}
        {totalFiltered > 0 ? (
          sections.map(({ label, products }) => (
            <GenderRow key={label} title={label} products={products} />
          ))
        ) : (
          <div className="py-24 text-center">
            <p className="font-body text-text-muted">
              No products in this category yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

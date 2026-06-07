"use client";

import { useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/data/products";
import type { ProductCategory } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";
import CategoryFilter from "@/components/ui/CategoryFilter";

type FilterOption = "All" | ProductCategory;
const ALL_FILTERS: FilterOption[] = ["All", ...CATEGORIES];

export default function ProductsClient() {
  const [active, setActive] = useState<FilterOption>("All");

  const filtered =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      {/* Header */}
      <div className="mb-12">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-3 block">
          The Collection
        </span>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold text-text mb-6">
          All Styles
        </h1>
        <CategoryFilter active={active} onChange={setActive} options={ALL_FILTERS} />
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center">
          <p className="font-body text-text-muted">No products in this category yet.</p>
        </div>
      )}

      {/* Count */}
      <p className="font-body text-xs text-text-subtle mt-8">
        Showing {filtered.length} of {PRODUCTS.length} styles
      </p>
    </div>
  );
}

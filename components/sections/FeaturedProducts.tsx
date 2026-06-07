import Link from "next/link";
import { PRODUCTS } from "@/lib/data/products";
import ProductCard from "@/components/ui/ProductCard";

export default function FeaturedProducts() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="max-w-6xl mx-auto px-6 py-8 pb-24">
      <div className="flex items-end justify-between mb-12">
        <div>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-3 block">
            The Collection
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-text">
            Featured Pairs
          </h2>
        </div>
        <Link
          href="/products"
          className="hidden md:flex items-center gap-2 font-body text-sm text-text-muted hover:text-brand transition-colors"
        >
          View all
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link
          href="/products"
          className="w-full flex items-center justify-center gap-2 border border-border text-text-muted hover:border-brand hover:text-brand font-body text-sm py-3 transition-colors"
        >
          View Full Collection →
        </Link>
      </div>
    </section>
  );
}

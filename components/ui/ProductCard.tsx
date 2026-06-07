import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export default function ProductCard({ product, variant = "default" }: ProductCardProps) {
  return (
    <article className="group relative flex flex-col bg-bg-surface border border-border hover:border-brand/30 transition-colors duration-300">
      {/* Tag badge */}
      {product.tag && (
        <span className="absolute top-3 left-3 z-10 bg-brand text-brand-fg text-xs font-body font-medium px-2.5 py-1">
          {product.tag}
        </span>
      )}

      {/* Image placeholder */}
      <div
        className={cn(
          "relative overflow-hidden bg-bg flex items-center justify-center",
          variant === "compact" ? "h-48" : "h-64"
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(200,134,10,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Placeholder visual */}
        <div className="relative z-10 flex flex-col items-center gap-2">
          <span className="font-display text-5xl font-semibold text-brand/20 select-none">
            {product.name.charAt(0)}
          </span>
          <span className="font-body text-xs text-text-subtle">{product.category}</span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold text-text group-hover:text-brand transition-colors">
            {product.name}
          </h3>
          <span className="font-body text-sm text-brand font-medium whitespace-nowrap">
            ₦{product.price.toLocaleString()}
          </span>
        </div>

        <p className="font-body text-sm text-text-muted leading-relaxed mb-4 flex-1">
          {product.description}
        </p>

        {/* Sizes */}
        <div className="mb-4">
          <p className="font-body text-xs text-text-subtle uppercase tracking-wider mb-2">
            Sizes
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="font-body text-xs text-text-muted border border-border px-2 py-1"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        <Link
          href={`/preorder?product=${product.id}`}
          className="w-full text-center border border-brand text-brand hover:bg-brand hover:text-brand-fg font-body text-sm font-medium py-2.5 transition-colors duration-200"
        >
          Pre-Order
        </Link>
      </div>
    </article>
  );
}

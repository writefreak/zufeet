import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data/products";

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export default function ProductCard({
  product,
  variant = "default",
}: ProductCardProps) {
  return (
    <article className={cn("group relative shrink-0 w-56 md:w-68 snap-start")}>
      {/* Card image container */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          variant === "compact" ? "aspect-[2/2.5]" : "aspect-[2/3]",
        )}
      >
        <img
          src="/shoe.png"
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Tag badge */}
        {product.tag && (
          <div className="absolute top-4 left-4">
            <span className="font-body bg-brand/40 px-4 py-1 rounded-full text-[8px] uppercase tracking-[0.18em] text-white/70">
              {product.tag}
            </span>
          </div>
        )}

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display text-sm font-semibold text-white mb-0.5 leading-snug">
                {product.name}
              </h3>
              <span className="font-body text-[12px] text-white/70">
                ₦{product.price.toLocaleString()}
              </span>
            </div>
            <Link
              href={`/preorder?product=${product.id}`}
              className="shrink-0 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
            >
              <ArrowUpRight size={14} color="white" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

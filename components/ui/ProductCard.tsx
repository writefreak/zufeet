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
      <Link href={`/products/${product.id}`} className="block">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl",
            variant === "compact" ? "aspect-[2/2.5]" : "aspect-[2/3]",
          )}
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-3 flex flex-col gap-2">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="font-display text-sm font-semibold text-white leading-snug">
                    {product.name}
                  </h3>
                  <span className="font-body text-[11px] text-white/60">
                    ₦{product.price.toLocaleString()}
                  </span>
                </div>
                <div className="shrink-0 w-7 h-7 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={13} color="white" />
                </div>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-lg px-2.5 py-2 flex items-center justify-between">
                <div>
                  <span className="font-body text-[10px] text-white/50 uppercase tracking-wider">
                    Sizes{" "}
                  </span>
                  <span className="font-body text-[10px] text-white font-medium">
                    {Math.min(...product.sizes)}–{Math.max(...product.sizes)}
                  </span>
                </div>
                <span className="font-body text-[10px] text-white/60">
                  {product.category}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

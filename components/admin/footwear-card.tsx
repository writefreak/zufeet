"use client";

import { useState } from "react";
import { Star, Trash2, Pencil } from "lucide-react";
import { Product } from "@/lib/data/products";

interface FootwearCardProps {
  product: Product;
  onToggleFeatured: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (product: Product) => void;
}

export default function FootwearCard({
  product,
  onToggleFeatured,
  onDelete,
  onEdit,
}: FootwearCardProps) {
  const [confirming, setConfirming] = useState(false);

  const minSize = Math.min(...product.sizes);
  const maxSize = Math.max(...product.sizes);

  const formatPrice = (price: number) => `₦${price.toLocaleString("en-NG")}`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden aspect-[3/4] group shadow-md cursor-pointer"
      onClick={() => !confirming && onEdit(product)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {product.tag && (
        <div className="absolute top-3 left-3 bg-[#6A3E19] text-white text-xs font-medium px-3 py-1 rounded-full">
          {product.tag}
        </div>
      )}

      {/* Edit hint on hover */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2">
          <Pencil size={13} className="text-white" />
          <span className="text-white text-xs font-medium">Edit product</span>
        </div>
      </div>

      <div className="absolute top-3 right-3 flex flex-col gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFeatured(product.id);
          }}
          className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-black/60"
        >
          <Star
            size={15}
            className={
              product.featured
                ? "text-yellow-500 fill-yellow-500"
                : "text-white"
            }
          />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setConfirming(true);
          }}
          className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-red-500/80"
        >
          <Trash2 size={14} className="text-white" />
        </button>
      </div>

      {confirming && (
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center gap-4 z-10 p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-white text-xs md:text-sm font-medium text-center">
            Remove this product?
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-3">
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-500 text-white text-xs md:text-sm font-medium px-5 py-2 rounded-xl hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="bg-white/20 text-white text-xs md:text-sm font-medium px-5 py-2 rounded-xl hover:bg-white/30 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="bg-black/40 backdrop-blur-md rounded-xl px-4 py-3">
          <p className="text-white font-semibold text-xs md:text-sm leading-tight">
            {product.name}
          </p>
          <div className="flex items-center justify-between mt-1.5">
            <span className="text-[#C97D3A] font-bold text-xs md:text-sm">
              {formatPrice(product.price)}
            </span>
            <span className="text-white/60 text-xs">
              EU {minSize}–{maxSize}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-white/50 text-xs">
              {product.category} · {product.type}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

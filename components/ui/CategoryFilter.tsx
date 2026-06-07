"use client";

import { cn } from "@/lib/utils";
import type { ProductCategory } from "@/lib/data/products";

type FilterOption = "All" | ProductCategory;

interface CategoryFilterProps {
  active: FilterOption;
  onChange: (cat: FilterOption) => void;
  options: FilterOption[];
}

export default function CategoryFilter({ active, onChange, options }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "font-body text-sm px-5 py-2 border transition-colors duration-200",
            active === opt
              ? "bg-brand border-brand text-brand-fg"
              : "border-border text-text-muted hover:border-brand/50 hover:text-text"
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

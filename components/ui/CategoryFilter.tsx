"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps<T extends string> {
  active: T;
  onChange: (cat: T) => void;
  options: T[];
}

export default function CategoryFilter<T extends string>({
  active,
  onChange,
  options,
}: CategoryFilterProps<T>) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={cn(
            "font-body text-sm px-5 py-2 bg-[#6A3E19]/10 rounded-2xl transition-colors duration-200",
            active === opt
              ? "bg-brand text-brand-fg"
              : "border-brand text-brand  hover:text-text",
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

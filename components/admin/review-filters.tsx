"use client";

export type StatusFilter = "All" | "Approved" | "Hidden";
export type FeaturedFilter = "All" | "Featured" | "Not Featured";

const STATUS_FILTERS: StatusFilter[] = ["All", "Approved", "Hidden"];
const FEATURED_FILTERS: FeaturedFilter[] = ["All", "Featured", "Not Featured"];

interface ReviewFiltersProps {
  statusFilter: StatusFilter;
  featuredFilter: FeaturedFilter;
  onStatusChange: (s: StatusFilter) => void;
  onFeaturedChange: (f: FeaturedFilter) => void;
}

export function ReviewFilters({
  statusFilter,
  featuredFilter,
  onStatusChange,
  onFeaturedChange,
}: ReviewFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6 bg-white/60 rounded-2xl px-4 py-3 shadow-sm">
      <div className="flex gap-1.5 flex-1">
        {STATUS_FILTERS.map((s) => (
          <button
            key={s}
            onClick={() => onStatusChange(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
              statusFilter === s
                ? "bg-[#6A3E19] text-white"
                : "text-[#6A3E19]/60 hover:text-[#6A3E19] hover:bg-[#6A3E19]/8"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="h-px sm:h-5 w-full sm:w-px bg-[#6A3E19]/10 shrink-0" />

      <div className="flex gap-1.5 shrink-0">
        {FEATURED_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => onFeaturedChange(f)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
              featuredFilter === f
                ? "bg-[#C97D3A] text-white"
                : "text-[#6A3E19]/60 hover:text-[#6A3E19] hover:bg-[#6A3E19]/8"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  );
}

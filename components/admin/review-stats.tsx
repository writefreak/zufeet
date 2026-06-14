interface ReviewStatsProps {
  total: number;
  avgRating: number;
  onHomepage: number;
}

export function ReviewStats({
  total,
  avgRating,
  onHomepage,
}: ReviewStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-white/60 rounded-2xl shadow-sm px-5 py-4">
        <p className="text-xs text-[#6A3E19]/40 font-medium mb-1">
          Total Reviews
        </p>
        <p className="text-2xl font-bold text-[#1A0F0A]">{total}</p>
      </div>
      <div className="bg-white/60 rounded-2xl shadow-sm px-5 py-4">
        <p className="text-xs text-[#6A3E19]/40 font-medium mb-1">
          Average Rating
        </p>
        <p className="text-2xl font-bold text-[#1A0F0A]">
          {avgRating.toFixed(1)}
        </p>
      </div>
      <div className="bg-white/60 rounded-2xl shadow-sm px-5 py-4">
        <p className="text-xs text-[#6A3E19]/40 font-medium mb-1">
          On Homepage
        </p>
        <p className="text-2xl font-bold text-[#1A0F0A]">{onHomepage}</p>
      </div>
    </div>
  );
}

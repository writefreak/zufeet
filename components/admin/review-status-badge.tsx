import { Review } from "@/lib/data/mock-reviews";

export function ReviewStatusBadge({
  approved,
}: {
  approved: Review["approved"];
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${
        approved
          ? "bg-emerald-100 text-emerald-600"
          : "bg-amber-50 text-amber-500"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          approved ? "bg-emerald-500" : "bg-amber-400"
        }`}
      />
      {approved ? "Approved" : "Pending"}
    </span>
  );
}

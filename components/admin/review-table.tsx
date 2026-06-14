"use client";

import { Review } from "@/lib/data/mock-reviews";
import { ReviewStatusBadge } from "./review-status-badge";
import { ReviewActions } from "./review-actions";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

interface ReviewTableProps {
  reviews: Review[];
  deleteConfirm: string | null;
  onRowClick: (review: Review) => void;
  onApprove: (id: string, current: boolean) => void;
  onDeleteRequest: (id: string) => void;
  onDeleteConfirm: (id: string) => void;
  onDeleteCancel: () => void;
}

export function ReviewTable({
  reviews,
  deleteConfirm,
  onRowClick,
  onApprove,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
}: ReviewTableProps) {
  return (
    <div className="hidden md:block bg-white/70 rounded-2xl shadow-sm overflow-hidden">
      {/* Table head */}
      <div className="grid grid-cols-[1fr_180px_110px_130px] px-6 py-3.5 bg-[#6A3E19]/[0.04] border-b border-[#6A3E19]/[0.07]">
        {["Review", "Author", "Status", "Actions"].map((h) => (
          <span
            key={h}
            className="text-[11px] font-semibold text-[#6A3E19]/40 uppercase tracking-wider"
          >
            {h}
          </span>
        ))}
      </div>

      {/* Rows */}
      {reviews.map((r, i) => (
        <div
          key={r.id}
          onClick={() => onRowClick(r)}
          className={`grid grid-cols-[1fr_180px_110px_130px] px-6 py-4 items-start hover:bg-[#6A3E19]/[0.02] transition-colors cursor-pointer ${
            i < reviews.length - 1 ? "border-b border-[#6A3E19]/[0.06]" : ""
          }`}
        >
          {/* Review text + date */}
          <div className="pr-6">
            <p className="text-sm text-[#1A0F0A]/70 leading-relaxed line-clamp-2">
              &ldquo;{r.text}&rdquo;
            </p>
            <p className="text-[11px] text-[#6A3E19]/35 mt-1.5">
              {formatDate(r.created_at)}
            </p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#6A3E19] flex items-center justify-center shrink-0">
              <span className="text-white text-[12px] font-semibold">
                {r.name.charAt(0)}
              </span>
            </div>
            <p className="text-[13px] font-semibold text-[#1A0F0A] truncate">
              {r.name}
            </p>
          </div>

          {/* Status */}
          <div>
            <ReviewStatusBadge approved={r.approved} />
          </div>

          {/* Actions — stop row click propagation */}
          <div onClick={(e) => e.stopPropagation()}>
            <ReviewActions
              review={r}
              deleteConfirm={deleteConfirm}
              onApprove={onApprove}
              onDeleteRequest={onDeleteRequest}
              onDeleteConfirm={onDeleteConfirm}
              onDeleteCancel={onDeleteCancel}
              compact
            />
          </div>
        </div>
      ))}
    </div>
  );
}

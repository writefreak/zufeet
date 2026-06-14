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

interface ReviewMobileCardProps {
  review: Review;
  deleteConfirm: string | null;
  onCardClick: (review: Review) => void;
  onApprove: (id: string, current: boolean) => void;
  onDeleteRequest: (id: string) => void;
  onDeleteConfirm: (id: string) => void;
  onDeleteCancel: () => void;
}

export function ReviewMobileCard({
  review,
  deleteConfirm,
  onCardClick,
  onApprove,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
}: ReviewMobileCardProps) {
  return (
    <div
      onClick={() => onCardClick(review)}
      className="bg-white/70 rounded-2xl shadow-sm px-4 py-4 cursor-pointer active:scale-[0.99] transition-transform"
    >
      {/* Top: avatar + name + status */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-[#6A3E19] flex items-center justify-center shrink-0">
            <span className="text-white text-[13px] font-semibold">
              {review.name.charAt(0)}
            </span>
          </div>
          <p className="text-[13px] font-semibold text-[#1A0F0A]">
            {review.name}
          </p>
        </div>
        <ReviewStatusBadge approved={review.approved} />
      </div>

      {/* Review text */}
      <p className="text-sm text-[#1A0F0A]/65 leading-relaxed line-clamp-3 mb-3">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Bottom: date + actions */}
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-[#6A3E19]/35">
          {formatDate(review.created_at)}
        </p>
        <div onClick={(e) => e.stopPropagation()}>
          <ReviewActions
            review={review}
            deleteConfirm={deleteConfirm}
            onApprove={onApprove}
            onDeleteRequest={onDeleteRequest}
            onDeleteConfirm={onDeleteConfirm}
            onDeleteCancel={onDeleteCancel}
            compact
          />
        </div>
      </div>
    </div>
  );
}

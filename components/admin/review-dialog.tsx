"use client";

import { X } from "lucide-react";
import { Review } from "@/lib/data/mock-reviews";
import { ReviewStatusBadge } from "./review-status-badge";
import { ReviewActions } from "./review-actions";
function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-NG", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

interface ReviewDialogProps {
  review: Review;
  deleteConfirm: string | null;
  onClose: () => void;
  onApprove: (id: string, current: boolean) => void;
  onDeleteRequest: (id: string) => void;
  onDeleteConfirm: (id: string) => void;
  onDeleteCancel: () => void;
}

export function ReviewDialog({
  review,
  deleteConfirm,
  onClose,
  onApprove,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
}: ReviewDialogProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1A0F0A]/30 backdrop-blur-[2px]" />

      {/* Panel */}
      <div
        className="relative bg-[#FDFBFB] w-full sm:max-w-lg sm:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile only) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-[#6A3E19]/10" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#6A3E19]/[0.07]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6A3E19] flex items-center justify-center shrink-0">
              <span className="text-white text-[14px] font-semibold">
                {review.name.charAt(0)}
              </span>
            </div>
            <p className="text-[14px] font-semibold text-[#1A0F0A]">
              {review.name}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-[#6A3E19]/[0.05] hover:bg-[#6A3E19]/[0.1] text-[#6A3E19]/40 flex items-center justify-center transition-colors"
          >
            <X size={14} />
          </button>
        </div>

        {/* Full review text */}
        <div className="px-6 py-5">
          <p className="text-[13px] text-[#1A0F0A]/60 leading-relaxed">
            &ldquo;{review.text}&rdquo;
          </p>
          <p className="text-[11px] text-[#6A3E19]/30 mt-3">
            {formatDate(review.created_at)}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#6A3E19]/[0.07] bg-[#6A3E19]/[0.02]">
          <ReviewStatusBadge approved={review.approved} />
          <ReviewActions
            review={review}
            deleteConfirm={deleteConfirm}
            onApprove={onApprove}
            onDeleteRequest={onDeleteRequest}
            onDeleteConfirm={onDeleteConfirm}
            onDeleteCancel={onDeleteCancel}
          />
        </div>
      </div>
    </div>
  );
}

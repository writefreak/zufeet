"use client";

import { Check, X, Trash2 } from "lucide-react";
import { Review } from "@/lib/data/mock-reviews";

interface ReviewActionsProps {
  review: Review;
  deleteConfirm: string | null;
  onApprove: (id: string, current: boolean) => void;
  onDeleteRequest: (id: string) => void;
  onDeleteConfirm: (id: string) => void;
  onDeleteCancel: () => void;
  /** compact = icon-only buttons for table row; default = labelled buttons for dialog */
  compact?: boolean;
}

export function ReviewActions({
  review,
  deleteConfirm,
  onApprove,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
  compact = false,
}: ReviewActionsProps) {
  const isConfirming = deleteConfirm === review.id;

  return (
    <div className="flex items-center gap-2">
      {/* Approve / Unapprove */}
      <button
        onClick={() => onApprove(review.id, review.approved)}
        title={review.approved ? "Unapprove" : "Approve"}
        className={`flex items-center gap-1.5 rounded-lg transition-colors ${
          compact
            ? "w-8 h-8 justify-center"
            : "h-8 px-3 text-[12px] font-semibold"
        } ${
          review.approved
            ? "bg-[#6A3E19]/[0.06] hover:bg-[#6A3E19]/[0.12] text-[#6A3E19]/50"
            : "bg-emerald-50 hover:bg-emerald-100 text-emerald-600"
        }`}
      >
        {review.approved ? (
          <X size={14} />
        ) : (
          <Check size={14} strokeWidth={2.5} />
        )}
        {!compact && (review.approved ? "Unapprove" : "Approve")}
      </button>

      {/* Delete */}
      {isConfirming ? (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onDeleteConfirm(review.id)}
            className={`rounded-lg bg-red-500 text-white font-semibold transition-colors hover:bg-red-600 ${
              compact ? "h-8 px-2.5 text-xs" : "h-8 px-3 text-[12px]"
            }`}
          >
            {compact ? "Confirm" : "Confirm delete"}
          </button>
          {compact && (
            <button
              onClick={onDeleteCancel}
              className="w-8 h-8 rounded-lg bg-[#6A3E19]/[0.06] hover:bg-[#6A3E19]/[0.12] text-[#6A3E19]/40 flex items-center justify-center transition-colors"
            >
              <X size={13} />
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={() => onDeleteRequest(review.id)}
          className={`flex items-center gap-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-400 transition-colors ${
            compact
              ? "w-8 h-8 justify-center"
              : "h-8 px-3 text-[12px] font-semibold"
          }`}
        >
          <Trash2 size={compact ? 14 : 13} />
          {!compact && "Delete"}
        </button>
      )}
    </div>
  );
}

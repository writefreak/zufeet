"use client";

import { useState } from "react";
import { Review, MOCK_REVIEWS } from "@/lib/data/mock-reviews";
import { ReviewTable } from "@/components/admin/review-table";
import { ReviewMobileCard } from "@/components/admin/review-card";
import { ReviewDialog } from "@/components/admin/review-dialog";

type Filter = "All" | "Approved" | "Pending";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(MOCK_REVIEWS);
  const [filter, setFilter] = useState<Filter>("All");
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [selected, setSelected] = useState<Review | null>(null);

  const pendingCount = reviews.filter((r) => !r.approved).length;

  const filtered = reviews.filter((r) =>
    filter === "All" ? true : filter === "Approved" ? r.approved : !r.approved,
  );

  // Keep dialog in sync with list mutations
  const syncSelected = (updated: Review[]) => {
    if (selected) {
      const fresh = updated.find((r) => r.id === selected.id);
      setSelected(fresh ?? null);
    }
  };

  const handleApprove = (id: string, current: boolean) => {
    setReviews((prev) => {
      const next = prev.map((r) =>
        r.id === id ? { ...r, approved: !current } : r,
      );
      syncSelected(next);
      return next;
    });
  };

  const handleDeleteConfirm = (id: string) => {
    setReviews((prev) => prev.filter((r) => r.id !== id));
    setDeleteConfirm(null);
    if (selected?.id === id) setSelected(null);
  };

  const actionProps = {
    deleteConfirm,
    onApprove: handleApprove,
    onDeleteRequest: (id: string) => setDeleteConfirm(id),
    onDeleteConfirm: handleDeleteConfirm,
    onDeleteCancel: () => setDeleteConfirm(null),
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-2xl font-bold text-[#1A0F0A] tracking-tight">
            Reviews
          </h1>
          <p className="text-sm text-[#6A3E19]/50 mt-1">
            {reviews.length} total · {pendingCount} pending approval
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6">
          {(["All", "Pending", "Approved"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                filter === f
                  ? "bg-[#6A3E19] text-white"
                  : "bg-white/60 text-[#6A3E19]/50 hover:bg-white hover:text-[#6A3E19]"
              }`}
            >
              {f}
              {f === "Pending" && pendingCount > 0 && (
                <span
                  className={`text-[11px] font-bold px-1.5 rounded-full ${
                    filter === "Pending"
                      ? "bg-white/25 text-white"
                      : "bg-[#C97D3A] text-white"
                  }`}
                >
                  {pendingCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        {filtered.length === 0 ? (
          <p className="text-center py-12 text-[#6A3E19]/35 text-sm">
            No reviews found.
          </p>
        ) : (
          <>
            {/* Desktop table */}
            <ReviewTable
              reviews={filtered}
              onRowClick={setSelected}
              {...actionProps}
            />

            {/* Mobile cards */}
            <div className="md:hidden flex flex-col gap-3">
              {filtered.map((r) => (
                <ReviewMobileCard
                  key={r.id}
                  review={r}
                  onCardClick={setSelected}
                  {...actionProps}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Detail dialog */}
      {selected && (
        <ReviewDialog
          review={selected}
          onClose={() => {
            setSelected(null);
            setDeleteConfirm(null);
          }}
          {...actionProps}
        />
      )}
    </div>
  );
}

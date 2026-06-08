"use client";

import { ChevronLeft, ChevronRight, X, Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    text: "HeatMaster transformed my home with their exceptional furnace installation service. The team was prompt, professional, and truly knew their stuff. I can finally enjoy a warm and cozy winter without any worries!",
    name: "Sarah Thompson",
  },
  {
    text: "The radiant floor heating system installed by HeatMaster has been a game changer for my family. The team was knowledgeable and attentive, making sure everything was perfect.",
    name: "Emily Chen",
  },
  {
    text: "Incredible service from start to finish. HeatMaster's technicians were on time, thorough, and left everything spotless. Highly recommend them to anyone in Fairbanks.",
    name: "Marcus Williams",
  },
  {
    text: "We've used HeatMaster twice now and they never disappoint. Fast response, fair pricing, and the work quality is top-notch. Our home has never felt warmer.",
    name: "Linda Okafor",
  },
];

type Review = { text: string; name: string };

export default function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Review | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [form, setForm] = useState({ name: "", text: "" });
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, reviews.length - 1));

  const desktopIndex = Math.min(index, reviews.length - 2);
  const desktopPair = [reviews[desktopIndex], reviews[desktopIndex + 1]];

  const isAtStart = index === 0;
  const mobileAtEnd = index === reviews.length - 1;
  const desktopAtEnd = desktopIndex >= reviews.length - 2;

  function handleSubmit() {
    if (!form.name.trim() || !form.text.trim() || rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setReviewOpen(false);
      setSubmitted(false);
      setForm({ name: "", text: "" });
      setRating(0);
    }, 2000);
  }

  return (
    <section className="bg-white/80 md:py-14 py-20 px-6 md:px-16">
      <div className="flex items-end justify-between pb-6">
        <h2 className="md:text-[46px] text-2xl font-semibold font-display text-gray-900 max-w-xs md:max-w-none leading-snug">
          Hear from Our <br />
          <span className="text-brand"> Satisfied Customers</span>
        </h2>
        <button
          onClick={() => setReviewOpen(true)}
          className="shrink-0 hidden md:block text-xs md:text-sm font-medium font-body text-brand border border-brand rounded-xl px-5 py-2.5 hover:bg-brand hover:text-brand-fg transition-all duration-200"
        >
          Leave a Review
        </button>
      </div>

      {/* Mobile: single card */}
      <div className="md:hidden">
        <ReviewCard
          review={reviews[index]}
          onClick={() => setSelected(reviews[index])}
        />
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setReviewOpen(true)}
            className="shrink-0 md:hidden text-xs md:text-sm font-medium font-body text-brand border border-brand rounded-xl px-5 py-2.5 hover:bg-brand hover:text-brand-fg transition-all duration-200"
          >
            Leave a Review
          </button>
          <div className="flex justify-end mt-4 gap-2">
            <button
              onClick={prev}
              disabled={isAtStart}
              className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={mobileAtEnd}
              className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop: two cards */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-4">
          {desktopPair.map((review, i) => (
            <ReviewCard
              key={i}
              review={review}
              onClick={() => setSelected(review)}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4 gap-2">
          <button
            onClick={prev}
            disabled={isAtStart}
            className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            disabled={desktopAtEnd}
            className="w-8 h-8 rounded-full border bg-brand text-brand-fg hover:bg-brand-light flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Read dialog */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={18} />
            </button>
            <p className="text-sm leading-relaxed text-black/60 mb-6">
              &ldquo;{selected.text}&rdquo;
            </p>
            <p className="text-sm font-bold text-text">{selected.name}</p>
          </div>
        </div>
      )}

      {/* Leave a review dialog */}
      {reviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setReviewOpen(false)}
        >
          <div
            className="bg-[#FDFBFB] rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setReviewOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 gap-3">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center">
                  <Star className="text-brand fill-brand w-5 h-5" />
                </div>
                <p className="font-display text-lg text-text font-semibold">
                  Thank you!
                </p>
                <p className="text-xs text-black/50 text-center">
                  Your review has been submitted successfully.
                </p>
              </div>
            ) : (
              <>
                <p className="font-display text-xl font-semibold text-text mb-1">
                  Share your experience
                </p>
                <p className="text-xs text-black/40 mb-6 font-body">
                  Your feedback means a lot to us.
                </p>

                {/* Name */}
                <div className="mb-4">
                  <label className="text-xs font-medium text-black/50 uppercase tracking-wider block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder="e.g. Adaeze N."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors duration-200"
                  />
                </div>

                {/* Review */}
                <div className="mb-6">
                  <label className="text-xs font-medium text-black/50 uppercase tracking-wider block mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    value={form.text}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, text: e.target.value }))
                    }
                    placeholder="Tell us about your experience with Zufeet..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-text placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.name.trim() || !form.text.trim()}
                  className="w-full bg-brand text-brand-fg font-body font-medium text-sm py-3.5 rounded-xl hover:bg-brand-light transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Submit Review
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function ReviewCard({
  review,
  onClick,
}: {
  review: Review;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white/30 shadow-md gap-3 border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg hover:border-brand transition-all duration-200"
    >
      <p className="text-xs md:text-sm leading-relaxed text-black/60 mb-6 line-clamp-3">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="text-xs md:text-sm font-bold text-text">{review.name}</p>
    </div>
  );
}

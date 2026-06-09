"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, CalendarDays, Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COLORS = ["Tan", "Chocolate", "Sand", "Ivory", "Mahogany"];
const SIZES_MALE = [40, 41, 42, 43, 44, 45, 46];
const SIZES_FEMALE = [36, 37, 38, 39, 40, 41];

type Gender = "Male" | "Female";
type Category = "Palms" | "Shoes";

export default function PreorderPage() {
  const [gender, setGender] = useState<Gender | null>(null);
  const [category, setCategory] = useState<Category | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 7);
  const minDateStr = minDate.toISOString().split("T")[0];

  const sizes = gender === "Female" ? SIZES_FEMALE : SIZES_MALE;

  // reset size if gender changes and selected size no longer in list
  function handleGenderChange(g: Gender) {
    setGender(g);
    setSelectedSize(null);
  }

  function handleImage(file: File) {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) handleImage(file);
  }

  function removeImage() {
    setImage(null);
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  }

  const canOrder =
    gender && category && selectedSize && selectedColor && deliveryDate;

  function handleSubmit() {
    if (!canOrder) return;
    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center gap-4 max-w-sm">
          <div className="w-16 h-16 rounded-2xl bg-[#6A3E19]/10 flex items-center justify-center">
            <ShoppingBag size={28} className="text-brand" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text">
            Order Received!
          </h2>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            Your custom pre-order for a{" "}
            <span className="text-text font-medium">{gender}</span>{" "}
            <span className="text-text font-medium">{category}</span> in{" "}
            <span className="text-text font-medium">{selectedColor}</span>, size{" "}
            <span className="text-text font-medium">{selectedSize}</span> has
            been placed. We'll reach out before your delivery date.
          </p>
          <Link
            href="/products"
            className="mt-2 font-body text-sm text-brand hover:underline transition-all duration-200"
          >
            Back to collection
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white/80">
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-brand transition-colors duration-200 mb-10 group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform duration-200"
          />
          Back to collection
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left — image upload */}
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="font-display text-2xl md:text-[46px] font-semibold text-text leading-[1.05] mb-3">
                Custom Pre-Order
              </h1>
              <p className="font-body text-sm text-text-muted leading-relaxed">
                Have a style in mind? Upload a reference image and we'll craft
                it for you.
              </p>
            </div>

            {/* Drop zone */}
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => !preview && fileRef.current?.click()}
              className={cn(
                "relative rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-200",
                preview
                  ? "border-transparent aspect-[4/4]"
                  : "aspect-[4/4] border-border hover:border-brand cursor-pointer bg-[#6A3E19]/10 flex flex-col items-center justify-center gap-3",
              )}
            >
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Style reference"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage();
                    }}
                    className="absolute top-4 right-4 w-8 h-8 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors duration-200"
                  >
                    <X size={14} className="text-text" />
                  </button>
                </>
              ) : (
                <>
                  <div className="w-12 h-12 rounded-2xl bg-[#6A3E19]/10 flex items-center justify-center">
                    <Upload size={20} className="text-brand" />
                  </div>
                  <div className="text-center px-6">
                    <p className="font-body text-sm text-text font-medium">
                      Drop your reference image here
                    </p>
                    <p className="font-body text-xs text-text-muted mt-1">
                      or click to browse
                    </p>
                  </div>
                </>
              )}
            </div>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImage(file);
              }}
            />
          </div>

          {/* Right — form */}
          <div className="flex flex-col gap-8 md:pt-2">
            {/* Gender */}
            <div>
              <Label text="Who is this for?" />
              <div className="flex gap-2 mt-3">
                {(["Male", "Female", "Unisex"] as Gender[]).map((g) => (
                  <button
                    key={g}
                    onClick={() => handleGenderChange(g)}
                    className={cn(
                      "flex-1 font-body text-sm py-3 rounded-2xl transition-all duration-200",
                      gender === g
                        ? "bg-brand text-brand-fg"
                        : "bg-[#6A3E19]/10 text-text hover:bg-brand/20",
                    )}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Category */}
            <div>
              <Label text="Category" />
              <div className="flex gap-2 mt-3">
                {(["Palms", "Shoes"] as Category[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={cn(
                      "flex-1 font-body text-sm py-3 rounded-2xl transition-all duration-200",
                      category === c
                        ? "bg-brand text-brand-fg"
                        : "bg-[#6A3E19]/10 text-text hover:bg-brand/20",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <Label text="Size" />
              <div className="flex flex-wrap gap-2 mt-3">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "font-body text-sm w-11 h-11 rounded-2xl transition-all duration-200",
                      selectedSize === size
                        ? "bg-brand text-brand-fg"
                        : "bg-[#6A3E19]/10 text-text hover:bg-brand/20",
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label text="Color" />
              </div>
              <input
                type="text"
                placeholder="e.g. Tan, Chocolate, Ivory…"
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full font-body text-sm text-text bg-[#6A3E19]/10 rounded-2xl px-4 py-3 placeholder:text-text-muted focus:outline-none focus:bg-brand/20 transition-colors duration-200 mb-2"
              />
              <div className="flex flex-wrap gap-2">
                {COLORS.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={cn(
                      "font-body text-xs px-4 py-2 rounded-2xl transition-all duration-200",
                      selectedColor === c
                        ? "bg-brand text-brand-fg"
                        : "bg-[#6A3E19]/10 text-text hover:bg-brand/20",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery Date */}
            <div>
              <Label text="Preferred Delivery Date" />
              <div className="relative mt-3">
                <CalendarDays
                  size={14}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none"
                />
                <input
                  type="date"
                  min={minDateStr}
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                  className="font-body w-full text-sm text-text bg-[#6A3E19]/10 rounded-2xl pl-10 pr-5 py-3 focus:outline-none focus:bg-brand/20 transition-colors duration-200 cursor-pointer"
                />
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={handleSubmit}
                disabled={!canOrder}
                className={cn(
                  "inline-flex items-center bg-brand text-brand-fg justify-center gap-2.5 font-display font-medium text-sm px-8 py-4 rounded-2xl transition-all duration-200",
                )}
              >
                <ShoppingBag size={15} />
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <p className="font-body text-xs md:text-sm text-text-muted">{text}</p>;
}

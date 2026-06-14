"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/data/products";
import { QuantitySlider } from "./slider";

const COLORS = ["Tan", "Chocolate", "Sand", "Ivory", "Mahogany"];
const MAX_QTY = 10;

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [deliveryDate, setDeliveryDate] = useState("");

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 7);
  const minDateStr = minDate.toISOString().split("T")[0];
  const [submitted, setSubmitted] = useState(false);
  const canOrder = selectedSize && selectedColor && deliveryDate;

  function handleSubmit() {
    if (!canOrder) return;
    setSubmitted(true);
  }

  if (submitted)
    return (
      <div className="md:h-screen h-[100vh] bg-[#FDFBFB] flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center gap-4 max-w-sm">
          <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
            <ShoppingBag size={28} className="text-brand" />
          </div>
          <h2 className="font-display text-2xl font-semibold text-text">
            Order Received!
          </h2>
          <p className="font-body text-sm text-text-muted leading-relaxed">
            Your pre-order for the{" "}
            <span className="text-text font-medium">{product.name}</span> in{" "}
            <span className="text-text font-medium">{selectedColor}</span>, size{" "}
            <span className="text-text font-medium">{selectedSize}</span> has
            been placed. We'll be in touch before your delivery date.
          </p>
          <Link
            href="/"
            className="mt-2 font-body text-sm text-brand hover:underline transition-all duration-200"
          >
            Back to collection
          </Link>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
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
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#F5ECED]">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {product.category && (
              <span className="absolute top-4 left-4 font-display text-sm md:text-base text-brand bg-white/80 backdrop-blur-sm px-3 py-1 rounded-2xl">
                {product.category} · {product.type}
              </span>
            )}
          </div>

          {/* Details + Form */}
          <div className="flex flex-col gap-8 md:pt-2">
            <div>
              <h1 className="font-display text-[clamp(28px,5vw,46px)] font-semibold text-text leading-[1.05] mb-3">
                {product.name}
              </h1>
              <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="font-display text-2xl font-semibold text-brand">
                ₦{product.price.toLocaleString()}
              </p>
            </div>

            {/* Size */}
            <div>
              <Label text="Pick a Size" />
              <div className="flex flex-wrap gap-2 mt-3">
                {product.sizes.map((size) => (
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
              <div className="flex items-center pb-3">
                <Label text="Pick a Color" />
              </div>
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

            {/* Quantity */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Label text="Quantity" />
              </div>
              <QuantitySlider value={quantity} onChange={setQuantity} />
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
                  className="font-body w-full text-sm text-text bg-brand/10 rounded-2xl px-10 py-2.5 focus:outline-none focus:bg-brand/20 transition-colors duration-200 cursor-pointer"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={handleSubmit}
                className={cn(
                  "inline-flex items-center bg-brand  text-white justify-center gap-2.5 font-display font-medium text-sm px-8 py-4 rounded-2xl transition-all duration-200",
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

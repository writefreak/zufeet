"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  product: string;
  size: string;
  quantity: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  product?: string;
  size?: string;
  quantity?: string;
}

const EMPTY_FORM: FormData = {
  name: "",
  email: "",
  phone: "",
  product: "",
  size: "",
  quantity: "1",
};

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  if (!data.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email.";
  if (!data.phone.trim()) errors.phone = "Phone number is required.";
  else if (!/^[0-9+\s\-()]{7,15}$/.test(data.phone)) errors.phone = "Enter a valid phone number.";
  if (!data.product) errors.product = "Please select a product.";
  if (!data.size) errors.size = "Please select a size.";
  if (!data.quantity || Number(data.quantity) < 1) errors.quantity = "Quantity must be at least 1.";
  return errors;
}

export default function PreOrderClient() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pre-select product from URL param
  useEffect(() => {
    const productId = searchParams.get("product");
    if (productId && PRODUCTS.find((p) => p.id === productId)) {
      setForm((f) => ({ ...f, product: productId, size: "" }));
    }
  }, [searchParams]);

  const selectedProduct = PRODUCTS.find((p) => p.id === form.product);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value, ...(name === "product" ? { size: "" } : {}) }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Mock submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 flex items-center justify-center border border-brand/40 text-brand text-2xl mx-auto mb-8">
            ✦
          </div>
          <h2 className="font-display text-4xl font-semibold text-text mb-4">
            Order Received
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Thank you, <span className="text-text">{form.name.split(" ")[0]}</span>. Your pre-order for{" "}
            <span className="text-brand">{selectedProduct?.name}</span> has been noted. We will reach out to{" "}
            <span className="text-text">{form.email}</span> with confirmation details before launch.
          </p>
          <button
            onClick={() => { setForm(EMPTY_FORM); setSubmitted(false); setErrors({}); }}
            className="font-body text-sm border border-border text-text-muted hover:border-brand hover:text-brand px-8 py-3 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: copy */}
        <div className="lg:sticky lg:top-24">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-4 block">
            Reserve Your Pair
          </span>
          <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] font-semibold text-text leading-tight mb-6">
            Pre-Order
            <br />
            <em className="not-italic text-brand">Your Zufeet</em>
          </h1>
          <p className="font-body text-text-muted leading-relaxed mb-8 max-w-sm">
            Secure your size before launch. No payment required now — we will contact you with
            delivery details and payment options once your order is confirmed.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { icon: "◈", label: "No upfront payment required" },
              { icon: "◎", label: "Confirmation sent to your email" },
              { icon: "✦", label: "Priority fulfillment for pre-orders" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="text-brand text-sm">{icon}</span>
                <span className="font-body text-sm text-text-muted">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-bg-surface border border-border p-8">
          <div className="grid grid-cols-1 gap-5">
            {/* Name */}
            <Field label="Full Name" error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Confidence Jef"
                className={fieldClass(!!errors.name)}
              />
            </Field>

            {/* Email */}
            <Field label="Email Address" error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="hello@example.com"
                className={fieldClass(!!errors.email)}
              />
            </Field>

            {/* Phone */}
            <Field label="Phone Number" error={errors.phone}>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className={fieldClass(!!errors.phone)}
              />
            </Field>

            {/* Product */}
            <Field label="Select Product" error={errors.product}>
              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                className={fieldClass(!!errors.product)}
              >
                <option value="">Choose a style…</option>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} — ₦{p.price.toLocaleString()} ({p.category})
                  </option>
                ))}
              </select>
            </Field>

            {/* Size */}
            <Field label="Preferred Size" error={errors.size}>
              <select
                name="size"
                value={form.size}
                onChange={handleChange}
                disabled={!selectedProduct}
                className={cn(fieldClass(!!errors.size), !selectedProduct && "opacity-50 cursor-not-allowed")}
              >
                <option value="">
                  {selectedProduct ? "Select a size…" : "Select a product first"}
                </option>
                {selectedProduct?.sizes.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </Field>

            {/* Quantity */}
            <Field label="Quantity" error={errors.quantity}>
              <input
                type="number"
                name="quantity"
                value={form.quantity}
                onChange={handleChange}
                min={1}
                max={10}
                className={fieldClass(!!errors.quantity)}
              />
            </Field>

            {/* Submit */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={cn(
                "w-full bg-brand hover:bg-brand-light text-brand-fg font-body font-medium text-sm py-4 mt-2 transition-colors duration-200",
                loading && "opacity-70 cursor-not-allowed"
              )}
            >
              {loading ? "Submitting…" : "Confirm Pre-Order →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function fieldClass(hasError: boolean) {
  return cn(
    "w-full bg-bg border font-body text-sm text-text px-4 py-3 outline-none transition-colors duration-200 placeholder:text-text-subtle",
    "focus:border-brand hover:border-text-subtle",
    hasError ? "border-red-500/60" : "border-border"
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-body text-xs tracking-wider uppercase text-text-subtle">{label}</label>
      {children}
      {error && <p className="font-body text-xs text-red-400">{error}</p>}
    </div>
  );
}

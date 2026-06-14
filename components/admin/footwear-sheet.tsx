"use client";

import { useState, useRef, DragEvent, ChangeEvent, useEffect } from "react";
import { X, Upload } from "lucide-react";
import { Product, ProductGender, ProductType } from "@/lib/data/products";

interface FootwearSheetProps {
  open: boolean;
  onClose: () => void;
  onAdd: (product: Product) => void;
  onEdit: (product: Product) => void;
  editingProduct: Product | null;
}

const SIZE_RANGES: Record<ProductGender, number[]> = {
  Men: [40, 41, 42, 43, 44, 45, 46],
  Women: [36, 37, 38, 39, 40, 41],
  Unisex: [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
};

const CATEGORIES: ProductGender[] = ["Men", "Women", "Unisex"];
const TYPES: ProductType[] = ["Palms", "Shoes"];

const defaultForm = {
  name: "",
  description: "",
  price: "",
  category: "Men" as ProductGender,
  type: "Palms" as ProductType,
  sizes: [] as number[],
  tag: "",
  featured: false,
};

export default function FootwearSheet({
  open,
  onClose,
  onAdd,
  onEdit,
  editingProduct,
}: FootwearSheetProps) {
  const [form, setForm] = useState(defaultForm);
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = !!editingProduct;

  // Pre-fill form when editing
  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name,
        description: editingProduct.description,
        price: String(editingProduct.price),
        category: editingProduct.category,
        type: editingProduct.type,
        sizes: editingProduct.sizes,
        tag: editingProduct.tag || "",
        featured: editingProduct.featured,
      });
      setImageFile(editingProduct.image);
    } else {
      setForm(defaultForm);
      setImageFile(null);
    }
  }, [editingProduct]);

  const reset = () => {
    setForm(defaultForm);
    setImageFile(null);
    setLoading(false);
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  const readFile = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setImageFile(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) readFile(file);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) readFile(file);
  };

  const toggleSize = (size: number) => {
    setForm((f) => ({
      ...f,
      sizes: f.sizes.includes(size)
        ? f.sizes.filter((s) => s !== size)
        : [...f.sizes, size].sort((a, b) => a - b),
    }));
  };

  const handleCategoryChange = (cat: ProductGender) => {
    setForm((f) => ({ ...f, category: cat, sizes: [] }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price || form.sizes.length === 0) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));

    const product: Product = {
      id: editingProduct?.id ?? `zf-${Date.now()}`,
      name: form.name,
      description: form.description,
      price: Number(form.price),
      category: form.category,
      type: form.type,
      sizes: form.sizes,
      image:
        imageFile ||
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      featured: form.featured,
      tag: form.tag || undefined,
    };

    if (isEditing) {
      onEdit(product);
    } else {
      onAdd(product);
    }
    reset();
  };

  const inputClass =
    "w-full bg-[#6A3E19]/10 rounded-2xl px-4 py-3 text-sm text-[#1A0F0A] placeholder-[#6A3E19]/40 focus:outline-none focus:bg-[#6A3E19]/20 transition-colors";

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
          onClick={handleClose}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#FDFBFB] z-50 flex flex-col transition-transform duration-300 ease-out shadow-2xl ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#1A0F0A]">
              {isEditing ? "Edit Footwear" : "Add Footwear"}
            </h2>
            <p className="text-xs text-[#6A3E19]/60 mt-0.5">
              {isEditing
                ? "Update product details below"
                : "Fill in product details below"}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-xl bg-[#6A3E19]/8 flex items-center justify-center hover:bg-[#6A3E19]/15 transition-colors"
          >
            <X size={16} className="text-[#6A3E19]" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
          {/* Image upload */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => !imageFile && fileInputRef.current?.click()}
            className={`relative w-full h-56 rounded-2xl overflow-hidden transition-all cursor-pointer ${
              imageFile
                ? ""
                : `bg-[#6A3E19]/5 flex flex-col items-center justify-center gap-2 ${dragging ? "bg-[#6A3E19]/10" : ""}`
            }`}
          >
            {imageFile ? (
              <>
                <img
                  src={imageFile}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setImageFile(null);
                  }}
                  className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <X size={13} className="text-white" />
                </button>
              </>
            ) : (
              <>
                <div className="w-10 h-10 rounded-xl bg-[#6A3E19]/10 flex items-center justify-center">
                  <Upload size={18} className="text-[#6A3E19]/50" />
                </div>
                <p className="text-sm text-[#6A3E19]/50 font-medium">
                  {dragging ? "Drop to upload" : "Click or drag image here"}
                </p>
                <p className="text-xs text-[#6A3E19]/30">JPG, PNG, WebP</p>
              </>
            )}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileInput}
          />

          {/* Name */}
          <input
            type="text"
            placeholder="Product name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={inputClass}
          />

          {/* Description */}
          <textarea
            rows={3}
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm((f) => ({ ...f, description: e.target.value }))
            }
            className={`${inputClass} resize-none`}
          />

          {/* Price */}
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6A3E19]/50 text-sm font-medium">
              ₦
            </span>
            <input
              type="number"
              placeholder="0"
              value={form.price}
              onChange={(e) =>
                setForm((f) => ({ ...f, price: e.target.value }))
              }
              className={`${inputClass} pl-8`}
            />
          </div>

          {/* Category */}
          <div>
            <p className="text-xs font-medium text-[#6A3E19]/60 mb-2 px-1">
              Category
            </p>
            <div className="flex gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${form.category === cat ? "bg-[#6A3E19] text-white" : "bg-[#6A3E19]/10 text-[#6A3E19]"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <p className="text-xs font-medium text-[#6A3E19]/60 mb-2 px-1">
              Type
            </p>
            <div className="flex gap-2">
              {TYPES.map((t) => (
                <button
                  key={t}
                  onClick={() => setForm((f) => ({ ...f, type: t }))}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-medium transition-colors ${form.type === t ? "bg-[#6A3E19] text-white" : "bg-[#6A3E19]/10 text-[#6A3E19]"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="text-xs font-medium text-[#6A3E19]/60 mb-2 px-1">
              Sizes (EU)
            </p>
            <div className="flex flex-wrap gap-2">
              {SIZE_RANGES[form.category].map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`w-10 h-10 rounded-xl text-sm font-medium transition-colors ${form.sizes.includes(size) ? "bg-[#6A3E19] text-white" : "bg-[#6A3E19]/10 text-[#6A3E19]"}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Tag */}
          <div>
            <p className="text-xs font-medium text-[#6A3E19]/60 mb-2 px-1">
              Tag (optional)
            </p>
            <input
              type="text"
              placeholder="e.g. Bestseller, New Arrival, Limited"
              value={form.tag}
              onChange={(e) => setForm((f) => ({ ...f, tag: e.target.value }))}
              className={inputClass}
            />
          </div>

          {/* Featured toggle */}
          <div className="flex items-center justify-between px-1">
            <div>
              <p className="text-sm font-medium text-[#1A0F0A]">
                Feature this product
              </p>
              <p className="text-xs text-[#6A3E19]/50">
                Appears in the featured section
              </p>
            </div>
            <button
              onClick={() => setForm((f) => ({ ...f, featured: !f.featured }))}
              className={`relative w-12 h-6 rounded-full transition-colors ${form.featured ? "bg-[#6A3E19]" : "bg-[#6A3E19]/20"}`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${form.featured ? "translate-x-6" : "translate-x-0"}`}
              />
            </button>
          </div>
        </div>

        {/* Submit */}
        <div className="px-6 pb-6 pt-2">
          <button
            onClick={handleSubmit}
            disabled={
              loading || !form.name || !form.price || form.sizes.length === 0
            }
            className="w-full bg-[#6A3E19] text-white rounded-2xl py-4 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-40 transition-opacity hover:opacity-90"
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                {isEditing ? "Saving changes…" : "Adding product…"}
              </>
            ) : isEditing ? (
              "Save Changes"
            ) : (
              "Add to Catalogue"
            )}
          </button>
        </div>
      </div>
    </>
  );
}

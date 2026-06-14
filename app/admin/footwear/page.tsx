"use client";

import { useState, useEffect } from "react";
import { Plus, PackageOpen } from "lucide-react";
import {
  Product,
  ProductGender,
  PRODUCTS,
  ProductType,
} from "@/lib/data/products";
import FootwearCard from "@/components/admin/footwear-card";
import FootwearSheet from "@/components/admin/footwear-sheet";

type CategoryFilter = "All" | ProductGender;
type TypeFilter = ProductType | null;

export default function FootwearPage() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("All");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(null);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const CATEGORY_FILTERS: CategoryFilter[] = ["All", "Men", "Women", "Unisex"];
  const TYPE_FILTERS: ProductType[] = ["Palms", "Shoes"];

  const filtered = products.filter((p) => {
    const catMatch = categoryFilter === "All" || p.category === categoryFilter;
    const typeMatch = typeFilter === null || p.type === typeFilter;
    return catMatch && typeMatch;
  });

  const handleToggleFeatured = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)),
    );
  };

  const handleDelete = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAdd = (product: Product) => {
    setProducts((prev) => [product, ...prev]);
    setSheetOpen(false);
    setToast("Product added to catalogue");
  };

  const handleEdit = (product: Product) => {
    setProducts((prev) => prev.map((p) => (p.id === product.id ? product : p)));
    setEditingProduct(null);
    setToast("Product updated successfully");
  };

  const handleCloseSheet = () => {
    setSheetOpen(false);
    setEditingProduct(null);
  };

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page header */}
        <div className="flex items-center justify-between gap-3 mb-8">
          <div className="min-w-0">
            <h1 className="text-xl md:text-2xl font-bold text-[#1A0F0A] tracking-tight">
              Footwear Catalogue
            </h1>
            <p className="text-xs md:text-sm text-black/40 mt-1 leading-snug">
              Manage your catalogue, feature products, and upload new stock.
            </p>
          </div>
          <button
            onClick={() => setSheetOpen(true)}
            className="items-center gap-1.5 hidden md:flex bg-[#6A3E19] text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shrink-0"
          >
            <Plus size={15} />
            Add Footwear
          </button>
        </div>

        {/* Filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 md:mb-8 bg-white/60 rounded-2xl px-4 py-3 shadow-sm">
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar flex-1">
            {CATEGORY_FILTERS.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                  categoryFilter === cat
                    ? "bg-[#6A3E19] text-white"
                    : "text-[#6A3E19]/60 hover:text-[#6A3E19] hover:bg-[#6A3E19]/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="h-px sm:h-5 w-full sm:w-px bg-[#6A3E19]/10 shrink-0" />
          <div className="flex gap-1.5 shrink-0">
            {TYPE_FILTERS.map((t) => (
              <button
                key={t}
                onClick={() => setTypeFilter(typeFilter === t ? null : t)}
                className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                  typeFilter === t
                    ? "bg-[#C97D3A] text-white"
                    : "text-[#6A3E19]/60 hover:text-[#6A3E19] hover:bg-[#6A3E19]/8"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-8">
          <button
            onClick={() => setSheetOpen(true)}
            className="flex items-center gap-1.5 md:hidden bg-[#6A3E19] text-white text-xs md:text-sm font-semibold px-3 md:px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity shrink-0"
          >
            <Plus size={15} />
            Add Footwear
          </button>
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((product) => (
              <FootwearCard
                key={product.id}
                product={product}
                onToggleFeatured={handleToggleFeatured}
                onDelete={handleDelete}
                onEdit={(p) => setEditingProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-2xl bg-[#6A3E19]/8 flex items-center justify-center">
              <PackageOpen size={28} className="text-[#6A3E19]/40" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-[#1A0F0A]">
                No products here
              </p>
              <p className="text-xs text-[#6A3E19]/50 mt-1">
                {categoryFilter !== "All" || typeFilter
                  ? "Try adjusting your filters or add a new product."
                  : "Add your first product to get started."}
              </p>
            </div>
            {(categoryFilter !== "All" || typeFilter) && (
              <button
                onClick={() => {
                  setCategoryFilter("All");
                  setTypeFilter(null);
                }}
                className="text-xs font-medium text-[#6A3E19] bg-[#6A3E19]/10 px-4 py-2 rounded-xl hover:bg-[#6A3E19]/20 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Sheet — handles both add and edit */}
      <FootwearSheet
        open={sheetOpen || !!editingProduct}
        onClose={handleCloseSheet}
        onAdd={handleAdd}
        onEdit={handleEdit}
        editingProduct={editingProduct}
      />

      {/* Toast */}
      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#6A3E19] text-white rounded-2xl px-5 py-3 text-sm font-medium z-50 transition-all duration-300 shadow-xl whitespace-nowrap ${
          toast
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {toast}
      </div>
    </div>
  );
}

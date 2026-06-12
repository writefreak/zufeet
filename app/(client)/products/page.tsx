import type { Metadata } from "next";
import ProductsClient from "@/components/sections/ProductsClient";

export const metadata: Metadata = {
  title: "Shop — Zufeet",
  description: "Browse the full Zufeet collection. Premium Nigerian-made palms for men, women, and unisex wear.",
};

export default function ProductsPage() {
  return <ProductsClient />;
}

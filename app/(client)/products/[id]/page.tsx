import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetail from "@/components/ui/product-detail";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

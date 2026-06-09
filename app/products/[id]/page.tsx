import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetail from "@/components/ui/product-detail";

interface Props {
  params: { id: string };
}

export default function ProductPage({ params }: Props) {
  const product = PRODUCTS.find((p) => p.id === params.id);
  if (!product) notFound();

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

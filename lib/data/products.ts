export type ProductCategory = "Men" | "Women" | "Unisex";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  sizes: number[];
  image: string;
  featured: boolean;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "zf-001",
    name: "Lagos Drift",
    description: "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/images/product-1.jpg",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-002",
    name: "Abuja Slide",
    description: "Wide-strap woven palm with arch support. Clean enough for casual, sturdy enough for everywhere.",
    price: 15000,
    category: "Unisex",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    image: "/images/product-2.jpg",
    featured: true,
    tag: "New Arrival",
  },
  {
    id: "zf-003",
    name: "Eko Grace",
    description: "Slim-profile women's palm with a cushioned footbed and adjustable strap.",
    price: 14000,
    category: "Women",
    sizes: [36, 37, 38, 39, 40, 41],
    image: "/images/product-3.jpg",
    featured: true,
  },
  {
    id: "zf-004",
    name: "Port Classic",
    description: "The everyday workhorse. Thick-soled, wide-fit palm that holds up in any terrain.",
    price: 12500,
    category: "Men",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    image: "/images/product-4.jpg",
    featured: false,
  },
  {
    id: "zf-005",
    name: "Enugu Wrap",
    description: "Full-wrap strap design with a jute-textured sole. Made for the heat.",
    price: 13500,
    category: "Women",
    sizes: [36, 37, 38, 39, 40],
    image: "/images/product-5.jpg",
    featured: false,
  },
  {
    id: "zf-006",
    name: "Delta Cross",
    description: "Cross-strap unisex palm with premium foam insole and non-slip rubber outsole.",
    price: 16000,
    category: "Unisex",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    image: "/images/product-6.jpg",
    featured: false,
    tag: "Limited",
  },
];

export const BRAND_VALUES = [
  {
    icon: "✦",
    title: "Quality First",
    description: "Every pair is inspected before it leaves our hands. No shortcuts, no compromises.",
  },
  {
    icon: "◈",
    title: "Nigerian Made",
    description: "Designed and crafted in Nigeria, for Nigerians — and everyone who appreciates real craftsmanship.",
  },
  {
    icon: "⬡",
    title: "Comfort by Design",
    description: "We engineer comfort into every layer. Your feet will thank you after hour eight.",
  },
  {
    icon: "◎",
    title: "Honest Pricing",
    description: "Premium quality at prices that make sense. No inflation for a logo.",
  },
];

export const CATEGORIES: ProductCategory[] = ["Men", "Women", "Unisex"];

import { BadgeCheck, MapPin, Footprints, Tag } from "lucide-react";
import { ElementType } from "react";

export type ProductGender = "Men" | "Women" | "Unisex";
export type ProductType = "Palms" | "Shoes";
export type ProductCategory = ProductGender; // kept for any external references

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductGender;
  type: ProductType;
  sizes: number[];
  image: string;
  featured: boolean;
  tag?: string;
}

export interface BrandValue {
  icon: ElementType;
  title: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "zf-001",
    name: "Lagos Drift",
    description:
      "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    type: "Palms",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/shoe.png",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-00i",
    name: "Lagos Drift",
    description:
      "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    type: "Palms",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/shoe.png",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-001h",
    name: "Lagos Drift",
    description:
      "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    type: "Palms",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/shoe.png",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-00t",
    name: "Lagos Drift",
    description:
      "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    type: "Shoes",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/shoe.png",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-00io",
    name: "Lagos Drift",
    description:
      "Handcrafted leather palm with a cushioned sole. Built for long days and warm evenings.",
    price: 18500,
    category: "Men",
    type: "Shoes",
    sizes: [40, 41, 42, 43, 44, 45],
    image: "/shoe.png",
    featured: true,
    tag: "Bestseller",
  },
  {
    id: "zf-002",
    name: "Abuja Slide",
    description:
      "Wide-strap woven palm with arch support. Clean enough for casual, sturdy enough for everywhere.",
    price: 15000,
    category: "Unisex",
    type: "Palms",
    sizes: [37, 38, 39, 40, 41, 42, 43],
    image: "/shoe.png",
    featured: true,
    tag: "New Arrival",
  },
  {
    id: "zf-003",
    name: "Eko Grace",
    description:
      "Slim-profile women's palm with a cushioned footbed and adjustable strap.",
    price: 14000,
    category: "Women",
    type: "Palms",
    sizes: [36, 37, 38, 39, 40, 41],
    image: "/shoe.png",
    featured: true,
  },
  {
    id: "zf-004",
    name: "Port Classic",
    description:
      "The everyday workhorse. Thick-soled, wide-fit palm that holds up in any terrain.",
    price: 12500,
    category: "Men",
    type: "Palms",
    sizes: [40, 41, 42, 43, 44, 45, 46],
    image: "/shoe.png",
    featured: false,
  },
  {
    id: "zf-005",
    name: "Enugu Wrap",
    description:
      "Full-wrap strap design with a jute-textured sole. Made for the heat.",
    price: 13500,
    category: "Women",
    type: "Shoes",
    sizes: [36, 37, 38, 39, 40],
    image: "/shoe.png",
    featured: false,
  },
  {
    id: "zf-006",
    name: "Delta Cross",
    description:
      "Cross-strap unisex palm with premium foam insole and non-slip rubber outsole.",
    price: 16000,
    category: "Unisex",
    type: "Palms",
    sizes: [37, 38, 39, 40, 41, 42, 43, 44],
    image: "/shoe.png",
    featured: false,
    tag: "Limited",
  },
];

export const BRAND_VALUES = [
  {
    icon: BadgeCheck,
    title: "Quality First",
    description:
      "Every pair is inspected before it leaves our hands without compromise.",
  },
  {
    icon: MapPin,
    title: "Nigerian Made",
    description:
      "Made in Nigeria, for everyone who appreciates real craftsmanship.",
  },
  {
    icon: Footprints,
    title: "Comfort by Design",
    description:
      "We craft comfort into every layer, so your feet constantly appreciates you.",
  },
  {
    icon: Tag,
    title: "Honest Pricing",
    description: "Premium quality at reasonable prices that make sense.",
  },
];

export const CATEGORIES: ProductGender[] = ["Men", "Women", "Unisex"];
export const PRODUCT_TYPES: ProductType[] = ["Palms", "Shoes"];

import type { Metadata } from "next";
import { Suspense } from "react";
import PreOrderClient from "@/components/sections/PreOrderClient";

export const metadata: Metadata = {
  title: "Pre-Order — Zufeet",
  description: "Reserve your Zufeet pair before launch. No upfront payment required.",
};

export default function PreOrderPage() {
  return (
    <Suspense>
      <PreOrderClient />
    </Suspense>
  );
}

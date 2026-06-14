"use client";

import { StatCard } from "./stat-card";
import { mockFootwear, mockOrders, mockPreorders } from "@/lib/data/mock";

const featuredCount = mockFootwear.filter((f) => f.featured).length;

const stats = [
  {
    title: "Total Orders",
    value: mockOrders.length,
    trend: {
      direction: "up" as const,
      value: "+12%",
      label: "vs last month",
    },
  },
  {
    title: "Pre-orders",
    value: mockPreorders.length,
    trend: {
      direction: "up" as const,
      value: "+5%",
      label: "vs last month",
    },
  },
  {
    title: "Revenue",
    value: "₦1,842,500",
    trend: {
      direction: "up" as const,
      value: "+18%",
      label: "vs last month",
    },
  },
  {
    title: "Featured Products",
    value: featuredCount,
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-2 xl:gap-4 grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <StatCard key={stat.title} {...stat} />
      ))}
    </div>
  );
}

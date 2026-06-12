"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { categoryOrderData } from "@/lib/data/mock";
import ChartCard from "./chart-card";

const BRAND = "#6a3e19";
const BRAND_LIGHT = "#c4945b";
const BRAND_PALE = "#f0ddd0";

const categoryColors: Record<string, string> = {
  Male: BRAND,
  Female: BRAND_LIGHT,
  Unisex: BRAND_PALE,
};

const axisProps = {
  tick: { fontSize: 11, fill: "#888888" },
  axisLine: false,
  tickLine: false,
};

const tooltipStyle = {
  background: "#fff",
  border: "1px solid #f0ddd0",
  borderRadius: "12px",
  fontSize: "12px",
  color: "#222",
};

export function CategoryOrdersChart() {
  return (
    <ChartCard
      title="Orders by Category"
      description="Distribution across footwear lines"
      className="lg:col-span-2"
    >
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={categoryOrderData}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0ddd0"
            vertical={false}
          />

          <XAxis dataKey="category" {...axisProps} />
          <YAxis {...axisProps} />

          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "#f5eced" }} />

          <Bar dataKey="orders" radius={[6, 6, 0, 0]}>
            {categoryOrderData.map((entry) => (
              <Cell
                key={entry.category}
                fill={categoryColors[entry.category] ?? BRAND}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex flex-col gap-2">
        {categoryOrderData.map((entry) => (
          <div
            key={entry.category}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-sm"
                style={{
                  background: categoryColors[entry.category] ?? BRAND,
                }}
              />
              <span className="text-xs text-[var(--color-text-muted)]">
                {entry.category}
              </span>
            </div>

            <span className="text-xs font-semibold text-[var(--color-border)]">
              {entry.orders}
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}

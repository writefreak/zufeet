"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { monthlyOrderData } from "@/lib/data/mock";
import ChartCard from "./chart-card";

const BRAND = "#6a3e19";

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

export function MonthlyOrdersChart() {
  return (
    <ChartCard
      title="Monthly Order Volume"
      description="Orders received each month this year"
      className="lg:col-span-3"
    >
      <ResponsiveContainer width="100%" height={260}>
        <AreaChart
          data={monthlyOrderData}
          margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={BRAND} stopOpacity={0.2} />
              <stop offset="95%" stopColor={BRAND} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0ddd0"
            vertical={false}
          />

          <XAxis dataKey="month" {...axisProps} />
          <YAxis {...axisProps} />

          <Tooltip
            contentStyle={tooltipStyle}
            cursor={{
              stroke: BRAND,
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="orders"
            stroke={BRAND}
            strokeWidth={2}
            fill="url(#orderGradient)"
            dot={false}
            activeDot={{
              r: 4,
              fill: BRAND,
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}

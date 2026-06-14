"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { mockOrders } from "@/lib/data/mock";
import { cn } from "@/lib/utils";

const columns = ["Order ID", "Customer", "Product", "Amount", "Status"];

const statusStyles: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Confirmed: "bg-blue-50 text-blue-700",
  Pending: "bg-amber-50 text-amber-700",
};

export function RecentOrdersTable() {
  return (
    <div className="rounded-2xl border border-[var(--color-border)]/10 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-xs font-semibold md:text-sm text-[var(--color-border)]">
            Recent Orders
          </h2>
          <p className="text-xs text-[var(--color-text-muted)]">
            Last 5 orders placed
          </p>
        </div>

        <Link
          href="/admin/orders"
          className="flex items-center gap-1 text-xs font-medium text-brand hover:underline"
        >
          View all
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* ── MOBILE CARDS (hidden on md+) ── */}
      <div className="flex flex-col gap-3 md:hidden">
        {mockOrders.slice(0, 5).map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-xl border border-[var(--color-border)]/8 px-4 py-3"
          >
            {/* Left: customer + product */}
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-sm font-semibold text-[var(--color-border)] truncate">
                {order.customer}
              </span>
              <span className="text-xs text-[var(--color-text-muted)] truncate">
                {order.product}
              </span>
              <span className="font-mono text-[10px] text-[var(--color-text-muted)]/60 mt-0.5">
                {order.id}
              </span>
            </div>

            {/* Right: amount + status */}
            <div className="flex flex-col items-end gap-1.5 shrink-0 ml-3">
              <span className="text-sm font-bold text-[var(--color-border)]">
                {order.amount}
              </span>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide",
                  statusStyles[order.status] ?? statusStyles.Pending,
                )}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── DESKTOP TABLE (hidden below md) ── */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]/10">
              {columns.map((column) => (
                <th
                  key={column}
                  className="pb-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {mockOrders.slice(0, 5).map((order) => (
              <tr
                key={order.id}
                className="border-b border-[var(--color-border)]/5 last:border-0"
              >
                <td className="py-3 font-mono text-xs text-[var(--color-text-muted)]">
                  {order.id}
                </td>
                <td className="py-3 font-medium text-[var(--color-border)]">
                  {order.customer}
                </td>
                <td className="py-3 text-[var(--color-text-muted)]">
                  {order.product}
                </td>
                <td className="py-3 font-semibold text-[var(--color-border)]">
                  {order.amount}
                </td>
                <td className="py-3">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
                      statusStyles[order.status] ?? statusStyles.Pending,
                    )}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

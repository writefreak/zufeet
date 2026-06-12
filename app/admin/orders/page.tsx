"use client";

import { useState, useRef, useEffect } from "react";
import { Search, ChevronDown } from "lucide-react";
import { mockOrders } from "@/lib/data/mock";
import { PageHeader } from "@/components/admin/page-header";

const PAGE_SIZE = 8;
const COLS = [
  "Order ID",
  "Customer",
  "Product",
  "Size",
  "Color",
  "Amount",
  "Status",
];

const STATUSES = [
  { label: "Pending", color: "bg-yellow-100 text-yellow-700" },
  { label: "Processing", color: "bg-blue-100 text-blue-700" },
  { label: "Shipped", color: "bg-purple-100 text-purple-700" },
  { label: "Delivered", color: "bg-green-100 text-green-700" },
  { label: "Cancelled", color: "bg-red-100 text-red-600" },
];

const statusStyle = (s: string) =>
  STATUSES.find((x) => x.label === s)?.color ?? "bg-gray-100 text-gray-600";

function StatusPicker({
  id,
  status,
  onChange,
}: {
  id: string;
  status: string;
  onChange: (id: string, s: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`inline-flex w-28 items-center justify-between rounded-full px-2.5 py-1 text-xs font-semibold transition-opacity hover:opacity-80 ${statusStyle(status)}`}
      >
        <span>{status}</span>
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1.5 w-36 rounded-xl border border-[var(--color-border)]/10 bg-white py-1 shadow-lg">
          {STATUSES.map(({ label, color }) => (
            <button
              key={label}
              onClick={() => {
                onChange(id, label);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-xs font-medium transition-colors hover:bg-[var(--color-bg)] ${label === status ? "opacity-50 cursor-default" : ""}`}
            >
              <span
                className={`inline-block h-2 w-2 rounded-full ${color.split(" ")[0]}`}
              />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState(mockOrders);

  const filtered = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) ||
      o.id.toLowerCase().includes(search.toLowerCase()),
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const updateStatus = (id: string, status: string) =>
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Orders"
        description="Manage and track all customer orders in one place."
      />

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
        <input
          type="text"
          placeholder="Search by name or order ID…"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-xl border border-[var(--color-border)]/15 bg-white py-2.5 pl-9 pr-4 text-sm text-[var(--color-border)] placeholder:text-[var(--color-text-muted)] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block w-full overflow-x-auto rounded-2xl border border-[var(--color-border)]/10 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--color-border)]/10 bg-[var(--color-bg)]">
              {COLS.map((h) => (
                <th
                  key={h}
                  className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="py-12 text-center text-[var(--color-text-muted)]"
                >
                  No orders match your search.
                </td>
              </tr>
            ) : (
              paginated.map((order, i) => (
                <tr
                  key={order.id}
                  className={`border-b border-[var(--color-border)]/5 transition-colors hover:bg-[var(--color-bg)]/60 ${i === paginated.length - 1 ? "border-b-0" : ""}`}
                >
                  <td className="px-4 py-3.5 font-mono text-xs text-[var(--color-text-muted)]">
                    {order.id}
                  </td>
                  {[order.customer, order.product].map((val, j) => (
                    <td
                      key={j}
                      className="px-4 py-3.5 font-medium text-[var(--color-border)]"
                    >
                      {val}
                    </td>
                  ))}
                  {[order.size, order.color].map((val, j) => (
                    <td
                      key={j}
                      className="px-4 py-3.5 text-[var(--color-text-muted)]"
                    >
                      {val}
                    </td>
                  ))}
                  <td className="px-4 py-3.5 font-semibold text-[var(--color-border)]">
                    {order.amount}
                  </td>
                  <td className="px-4 py-3.5">
                    <StatusPicker
                      id={order.id}
                      status={order.status}
                      onChange={updateStatus}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-2.5 md:hidden">
        {paginated.length === 0 ? (
          <p className="py-12 text-center text-[var(--color-text-muted)]">
            No orders match your search.
          </p>
        ) : (
          paginated.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl bg-white shadow-sm border border-[var(--color-border)]/8 overflow-hidden"
            >
              {/* Card top accent strip using status color */}
              <div
                className={`h-0.5 w-full ${statusStyle(order.status).split(" ")[0]}`}
              />

              <div className="p-4 flex flex-col gap-3">
                {/* Row 1: customer + amount */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold text-sm text-[var(--color-border)] leading-tight">
                      {order.customer}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                      {order.product}
                    </p>
                  </div>
                  <span className="text-base font-bold text-[var(--color-border)] tabular-nums shrink-0">
                    {order.amount}
                  </span>
                </div>

                {/* Row 2: meta chips */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {[order.id, order.size, order.color].map((val, i) => (
                    <span
                      key={i}
                      className={`rounded-md px-2 py-0.5 text-[10px] font-medium ${i === 0 ? "font-mono bg-[var(--color-bg)] text-[var(--color-text-muted)]" : "bg-[var(--color-bg)] text-[var(--color-text-muted)]"}`}
                    >
                      {val}
                    </span>
                  ))}
                </div>

                {/* Row 3: status picker aligned right */}
                <div className="flex justify-end">
                  <StatusPicker
                    id={order.id}
                    status={order.status}
                    onChange={updateStatus}
                  />
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            Showing {(page - 1) * PAGE_SIZE + 1}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length}{" "}
            orders
          </p>
          <div className="flex items-center gap-2">
            {[
              {
                label: "Previous",
                onClick: () => setPage((p) => Math.max(1, p - 1)),
                disabled: page === 1,
              },
              ...Array.from({ length: totalPages }, (_, i) => ({
                label: String(i + 1),
                onClick: () => setPage(i + 1),
                disabled: false,
                active: i + 1 === page,
              })),
              {
                label: "Next",
                onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
                disabled: page === totalPages,
              },
            ].map(({ label, onClick, disabled, active }: any) => (
              <button
                key={label}
                onClick={onClick}
                disabled={disabled}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${active ? "bg-brand text-white" : "border border-[var(--color-border)]/15 bg-white text-[var(--color-border)] hover:bg-[var(--color-bg)]"} disabled:cursor-not-allowed disabled:opacity-40`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

"use client";
import { useState, useCallback, useMemo } from "react";
import { Search } from "lucide-react";
import { mockOrders } from "@/lib/data/mock";
import { PageHeader } from "@/components/admin/page-header";
import { StatusPicker } from "@/components/ui/status-picker";
import { OrderCard } from "@/components/admin/order-card";
import { Column, DataTable } from "@/components/admin/data-table";
import { OrderDrawer } from "@/components/admin/order-drawer";

const PAGE_SIZE = 8;

type Order = (typeof mockOrders)[number];

const columns: Column<Order>[] = [
  {
    key: "id",
    header: "Order ID",
    className: "font-mono text-xs text-[var(--color-text-muted)]",
  },
  { key: "customer", header: "Customer", className: "font-medium" },
  { key: "product", header: "Product", className: "font-medium" },
  { key: "size", header: "Size", className: "text-[var(--color-text-muted)]" },
  {
    key: "color",
    header: "Color",
    className: "text-[var(--color-text-muted)]",
  },
  { key: "amount", header: "Amount", className: "font-semibold" },
  { key: "status", header: "Status" },
];

export default function OrdersPage() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState(mockOrders);
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      orders.filter(
        (o) =>
          o.customer.toLowerCase().includes(search.toLowerCase()) ||
          o.id.toLowerCase().includes(search.toLowerCase()),
      ),
    [orders, search],
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const drawerOrder = activeId
    ? (orders.find((o) => o.id === activeId) ?? null)
    : null;

  const updateStatus = useCallback(
    (id: string, status: string) =>
      setOrders((prev) =>
        prev.map((o) => (o.id === id ? { ...o, status } : o)),
      ),
    [],
  );

  const handleSearch = (val: string) => {
    setSearch(val);
    setPage(1);
  };

  // Inject the status picker render into the columns here so updateStatus is in scope
  const tableColumns: Column<Order>[] = useMemo(
    () =>
      columns.map((col) =>
        col.key === "status"
          ? {
              ...col,
              render: (row) => (
                <StatusPicker
                  id={row.id}
                  status={row.status}
                  onChange={updateStatus}
                />
              ),
            }
          : col,
      ),
    [updateStatus],
  );

  return (
    <div className="flex flex-col gap-8">
      <PageHeader
        title="Orders"
        description="Manage and track all customer orders in one place."
      />

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
      <div className="hidden md:block">
        <DataTable
          columns={tableColumns}
          rows={paginated}
          keyExtractor={(o) => o.id}
          emptyMessage="No orders match your search."
        />
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col md:hidden">
        {paginated.length === 0 ? (
          <p className="py-12 text-center text-[var(--color-text-muted)]">
            No orders match your search.
          </p>
        ) : (
          <div className="rounded-2xl bg-white border border-[var(--color-border)]/10 shadow-sm overflow-hidden divide-y divide-[var(--color-border)]/6">
            {paginated.map((order) => (
              <OrderCard
                key={order.id}
                order={order}
                onClick={(o) => setActiveId(o.id)}
              />
            ))}
          </div>
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

      <OrderDrawer
        order={drawerOrder}
        onClose={() => setActiveId(null)}
        onStatusChange={updateStatus}
      />
    </div>
  );
}

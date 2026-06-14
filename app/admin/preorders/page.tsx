"use client";

import { useState, useMemo, useCallback } from "react";
import { PackageSearch } from "lucide-react";
import {
  mockPreOrders,
  PreOrder,
  PreOrderStatus,
} from "@/lib/data/mock-preorders";
import PreOrderStatStrip from "@/components/admin/preorderstatstrip";
import PreOrderFilterBar from "@/components/admin/preorder-filter";
import PreOrderCard from "@/components/admin/preorder-card";

export default function PreOrdersPage() {
  const [orders, setOrders] = useState<PreOrder[]>(mockPreOrders);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [genderFilter, setGenderFilter] = useState("All");

  const updateStatus = useCallback((id: string, status: PreOrderStatus) => {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }, []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return orders.filter((o) => {
      if (
        q &&
        !o.customerName.toLowerCase().includes(q) &&
        !o.id.toLowerCase().includes(q)
      )
        return false;
      if (statusFilter !== "All" && o.status !== statusFilter) return false;
      if (genderFilter !== "All" && o.gender !== genderFilter) return false;
      return true;
    });
  }, [orders, search, statusFilter, genderFilter]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-8 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-semibold text-text">
          Pre-Orders
        </h1>
        <p className="font-body text-sm text-[var(--color-text-muted)] mt-1">
          Review and respond to incoming custom pre-orders.
        </p>
      </div>

      <PreOrderStatStrip orders={orders} />

      <PreOrderFilterBar
        search={search}
        status={statusFilter}
        gender={genderFilter}
        onSearch={setSearch}
        onStatus={setStatusFilter}
        onGender={setGenderFilter}
      />

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
          <PackageSearch size={36} className="text-[var(--color-text-muted)]" />
          <p className="font-body text-sm text-[var(--color-text-muted)]">
            No pre-orders match your filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((order) => (
            <PreOrderCard
              key={order.id}
              order={order}
              onUpdateStatus={updateStatus}
            />
          ))}
        </div>
      )}
    </div>
  );
}

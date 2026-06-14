"use client";
import { useEffect, useState, memo } from "react";
import { X, Package, Palette, Ruler } from "lucide-react";
import { getStatus, STATUSES } from "@/lib/data/statuses";

export const OrderDrawer = memo(function OrderDrawer({
  order,
  onClose,
  onStatusChange,
}: {
  order: any | null;
  onClose: () => void;
  onStatusChange: (id: string, s: string) => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (order) {
      const t = setTimeout(() => setVisible(true), 10);
      return () => clearTimeout(t);
    }
    setVisible(false);
  }, [order]);

  if (!order) return null;

  const close = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };
  const st = getStatus(order.status);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl bg-white shadow-2xl transition-transform duration-300 ease-out ${visible ? "translate-y-0" : "translate-y-full"}`}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-[var(--color-border)]/20" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-2 pb-4">
          <div>
            <p className="font-display text-[10px] text-[var(--color-text-muted)]/60 mb-0.5">
              {order.id}
            </p>
            <h2 className="text-base font-display font-bold text-[var(--color-border)]">
              {order.customer}
            </h2>
          </div>
          <button
            onClick={close}
            className="rounded-full bg-[var(--color-bg)] p-2 text-[var(--color-text-muted)] hover:bg-[var(--color-border)]/10 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="h-px bg-[var(--color-border)]/8 mx-5" />

        {/* Details */}
        <div className="px-5 py-4 flex flex-col gap-3">
          {[
            { icon: Package, label: "Product", value: order.product },
            { icon: Ruler, label: "Size", value: order.size },
            { icon: Palette, label: "Color", value: order.color },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-bg)]">
                <Icon className="h-4 w-4 text-[var(--color-text-muted)]" />
              </div>
              <div>
                <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium">
                  {label}
                </p>
                <p className="text-sm font-display font-semibold text-[var(--color-border)]">
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="h-px bg-[var(--color-border)]/8 mx-5" />

        {/* Amount */}
        <div className="px-5 pt-4 pb-2">
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium mb-0.5">
            Amount
          </p>
          <p className="text-xl font-display font-bold text-[var(--color-border)] tabular-nums">
            {order.amount}
          </p>
        </div>

        {/* Status inline row — no dropdown clipping issues */}
        <div className="px-5 pb-4 pt-3">
          <p className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-wider font-medium mb-2">
            Status
          </p>
          <div className="flex flex-wrap gap-2">
            {STATUSES.map(({ label, color, dot }) => (
              <button
                key={label}
                onClick={() => onStatusChange(order.id, label)}
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-opacity ${color} ${label === order.status ? "ring-1 ring-offset-1 ring-current opacity-100" : "opacity-50 hover:opacity-80"}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="pb-6" />
      </div>
    </>
  );
});

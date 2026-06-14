import { getStatus } from "@/lib/data/statuses";
import { memo } from "react";

export const OrderCard = memo(function OrderCard({
  order,
  onClick,
}: {
  order: any;
  onClick: (o: any) => void;
}) {
  const st = getStatus(order.status);
  return (
    <button
      onClick={() => onClick(order)}
      className="w-full flex items-center gap-3.5 px-4 py-3.5 text-left transition-colors active:bg-[var(--color-bg)]"
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${st.dot}`} />
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-1.5">
          <span className="text-sm font-semibold text-[var(--color-border)] truncate leading-snug">
            {order.customer}
          </span>
          <span className="text-[10px] text-[var(--color-text-muted)]/40 shrink-0">
            ·
          </span>
          <span className="text-xs text-[var(--color-text-muted)] truncate">
            {order.product}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[var(--color-text-muted)]/40 mt-0.5 block">
          {order.id}
        </span>
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span className="text-sm font-bold text-[var(--color-border)] tabular-nums">
          {order.amount}
        </span>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${st.color}`}
        >
          {order.status}
        </span>
      </div>
    </button>
  );
});

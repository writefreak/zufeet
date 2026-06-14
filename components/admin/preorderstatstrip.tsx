import { PreOrder } from "@/lib/data/mock-preorders";

interface Props {
  orders: PreOrder[];
}

const stats = (orders: PreOrder[]) => [
  { label: "Total Pre-Orders", value: orders.length },
  {
    label: "Pending",
    value: orders.filter((o) => o.status === "Pending").length,
  },
  {
    label: "Accepted",
    value: orders.filter((o) => o.status === "Accepted").length,
  },
];

export default function PreOrderStatStrip({ orders }: Props) {
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4">
      {stats(orders).map(({ label, value }) => (
        <div
          key={label}
          className="bg-white flex flex-col justify-between rounded-2xl px-5 py-4 shadow-sm"
        >
          <p className="font-sans text-xs text-[var(--color-text-muted)] mb-1">
            {label}
          </p>
          <p className="font-display text-2xl font-semibold text-text">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}

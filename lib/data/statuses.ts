export const STATUSES = [
  {
    label: "Pending",
    color: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-400",
  },
  {
    label: "Processing",
    color: "bg-blue-100 text-blue-700",
    dot: "bg-blue-400",
  },
  {
    label: "Shipped",
    color: "bg-purple-100 text-purple-700",
    dot: "bg-purple-400",
  },
  {
    label: "Delivered",
    color: "bg-green-100 text-green-700",
    dot: "bg-green-500",
  },
  { label: "Cancelled", color: "bg-red-100 text-red-600", dot: "bg-red-400" },
] as const;

export const getStatus = (s: string) =>
  STATUSES.find((x) => x.label === s) ?? {
    label: s,
    color: "bg-gray-100 text-gray-600",
    dot: "bg-gray-400",
  };

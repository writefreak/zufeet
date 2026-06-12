import { cn } from "@/lib/utils";

type BadgeStatus =
  | "Pending"
  | "Confirmed"
  | "Delivered"
  | "Processing"
  | "Ready"
  | "Hidden"
  | "Approved"
  | "Upcoming"
  | string;

interface BadgeProps {
  status: BadgeStatus;
  className?: string;
}

const statusConfig: Record<string, { bg: string; text: string; dot: string }> =
  {
    Pending: {
      bg: "bg-amber-50 border border-amber-200",
      text: "text-amber-700",
      dot: "bg-amber-400",
    },
    Confirmed: {
      bg: "bg-blue-50 border border-blue-200",
      text: "text-blue-700",
      dot: "bg-blue-400",
    },
    Delivered: {
      bg: "bg-emerald-50 border border-emerald-200",
      text: "text-emerald-700",
      dot: "bg-emerald-400",
    },
    Processing: {
      bg: "bg-purple-50 border border-purple-200",
      text: "text-purple-700",
      dot: "bg-purple-400",
    },
    Ready: {
      bg: "bg-teal-50 border border-teal-200",
      text: "text-teal-700",
      dot: "bg-teal-400",
    },
    Approved: {
      bg: "bg-emerald-50 border border-emerald-200",
      text: "text-emerald-700",
      dot: "bg-emerald-400",
    },
    Hidden: {
      bg: "bg-zinc-100 border border-zinc-200",
      text: "text-zinc-500",
      dot: "bg-zinc-400",
    },
    Upcoming: {
      bg: "bg-blue-50 border border-blue-200",
      text: "text-blue-700",
      dot: "bg-blue-400",
    },
  };

const fallback = {
  bg: "bg-zinc-100 border border-zinc-200",
  text: "text-zinc-600",
  dot: "bg-zinc-400",
};

export function Badge({ status, className }: BadgeProps) {
  const config = statusConfig[status] ?? fallback;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.bg,
        config.text,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", config.dot)} />
      {status}
    </span>
  );
}

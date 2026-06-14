import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: LucideIcon;
  trend?: {
    direction: "up" | "down";
    value: string;
    label?: string;
  };
  className?: string;
}

export function StatCard({
  title,
  value,
  icon: Icon,
  trend,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white shadow-sm border border-[var(--color-border)]/10 p-6 flex flex-col gap-4",
        className,
      )}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-muted)]">
            {title}
          </span>
          <div className="flex items-center gap-2">
            <span className="md:text-2xl text-xl font-display font-bold text-[var(--color-border)]">
              {value}
            </span>
            {Icon && (
              <div className="flex  items-center justify-center rounded-xl bg-brand/10">
                <Icon className="h-5 w-5 text-brand" />
              </div>
            )}
          </div>
        </div>
      </div>

      {trend && (
        <div className="flex flex-col gap-1">
          <div className="flex flex-row items-center gap-1.5">
            {trend.direction === "up" ? (
              <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5 text-red-500" />
            )}
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "text-xs font-semibold",
                  trend.direction === "up"
                    ? "text-emerald-600"
                    : "text-red-500",
                )}
              >
                {trend.value}
              </span>
            </div>
          </div>
          {trend.label && (
            <span className="text-xs text-[var(--color-text-muted)]">
              {trend.label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

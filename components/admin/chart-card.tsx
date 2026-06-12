import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  description: string;
  className?: string;
  children: React.ReactNode;
}

export default function ChartCard({
  title,
  description,
  className,
  children,
}: ChartCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)]/10 bg-white p-6 shadow-sm",
        className,
      )}
    >
      <div className="mb-6">
        <h2 className="text-sm font-semibold text-[var(--color-border)]">
          {title}
        </h2>
        <p className="text-xs text-[var(--color-text-muted)]">{description}</p>
      </div>

      {children}
    </div>
  );
}

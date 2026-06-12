import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  rows: T[];
  keyExtractor: (row: T) => string;
  emptyMessage?: string;
  className?: string;
}

export function DataTable<T>({
  columns,
  rows,
  keyExtractor,
  emptyMessage = "No records found.",
  className,
}: DataTableProps<T>) {
  return (
    <div
      className={cn(
        "w-full overflow-x-auto rounded-2xl border border-[var(--color-border)]/10 bg-white shadow-sm",
        className,
      )}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[var(--color-border)]/10 bg-[var(--color-bg)]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={cn(
                  "px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]",
                  col.className,
                )}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td
                colSpan={columns.length}
                className="py-12 text-center text-[var(--color-text-muted)]"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            rows.map((row, i) => (
              <tr
                key={keyExtractor(row)}
                className={cn(
                  "border-b border-[var(--color-border)]/5 transition-colors hover:bg-[var(--color-bg)]/60",
                  i === rows.length - 1 && "border-b-0",
                )}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={cn(
                      "px-4 py-3.5 text-[var(--color-border)]",
                      col.className,
                    )}
                  >
                    {col.render
                      ? col.render(row)
                      : ((row as Record<string, unknown>)[
                          col.key
                        ] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

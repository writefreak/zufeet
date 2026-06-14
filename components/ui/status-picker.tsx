"use client";
import { useRef, useState, useEffect, memo } from "react";
import { ChevronDown } from "lucide-react";
import { getStatus, STATUSES } from "@/lib/data/statuses";

export const StatusPicker = memo(function StatusPicker({
  id,
  status,
  onChange,
}: {
  id: string;
  status: string;
  onChange: (id: string, s: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const st = getStatus(status);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-opacity hover:opacity-75 ${st.color}`}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${st.dot}`} />
        {status}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 pt-2 w-40 rounded-2xl border border-[var(--color-border)]/5 bg-white py-1.5 shadow-xl shadow-black/5">
          {STATUSES.map(({ label, dot }) => (
            <button
              key={label}
              onClick={(e) => {
                e.stopPropagation();
                onChange(id, label);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2 text-xs font-medium transition-colors hover:bg-[var(--color-bg)] ${label === status ? "opacity-40 cursor-default pointer-events-none" : ""}`}
            >
              <span className={`h-2 w-2 shrink-0 rounded-full ${dot}`} />
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

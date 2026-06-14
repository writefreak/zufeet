"use client";

import { Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS = ["All", "Pending", "Accepted", "Declined"];
const GENDER_OPTIONS = ["All", "Male", "Female", "Unisex"];

interface Props {
  search: string;
  status: string;
  gender: string;
  onSearch: (v: string) => void;
  onStatus: (v: string) => void;
  onGender: (v: string) => void;
}

function Dropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        className="inline-flex items-center gap-2 border border-[var(--color-border)]/15 shadow-sm font-body text-sm bg-white  rounded-2xl px-4 py-2.5 text-text transition-colors duration-200 whitespace-nowrap"
      >
        <span className="text-[var(--color-text-muted)]">{label}:</span>
        <span className="font-medium">{value}</span>
        <ChevronDown
          size={14}
          className={cn(
            "text-[var(--color-text-muted)] transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="absolute top-full mt-2 left-0 z-20 bg-white  rounded-2xl shadow-md overflow-hidden min-w-[140px]">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left font-body text-sm px-4 py-2.5 transition-colors duration-150",
                value === opt
                  ? "bg-brand/10 text-brand font-medium"
                  : "text-text hover:bg-[#6A3E19]/5",
              )}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function PreOrderFilterBar({
  search,
  status,
  gender,
  onSearch,
  onStatus,
  onGender,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <div className="relative ">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
          <input
            type="text"
            placeholder="Search by name or order ID…"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full placeholder:text-[var(--color-text-muted)] shadow-sm rounded-xl border border-[var(--color-border)]/15 bg-white py-2.5 pl-9 pr-4 text-sm text-[var(--color-border)] focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Dropdown
          label="Status"
          value={status}
          options={STATUS_OPTIONS}
          onChange={onStatus}
        />
        <Dropdown
          label="Gender"
          value={gender}
          options={GENDER_OPTIONS}
          onChange={onGender}
        />
      </div>
    </div>
  );
}

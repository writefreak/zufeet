"use client";

import { PreOrder, PreOrderStatus } from "@/lib/data/mock-preorders";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CalendarDays,
  Footprints,
  Palette,
  Ruler,
  User,
  X,
} from "lucide-react";
import { useState } from "react";

const STATUS_STYLES: Record<PreOrderStatus, string> = {
  Pending: "bg-amber-400/80 text-white border border-amber-300/50",
  Accepted: "bg-emerald-500/80 text-white border border-emerald-300/50",
  Declined: "bg-red-500/80 text-white border border-red-300/50",
};

const NEXT_STATUS: Record<PreOrderStatus, PreOrderStatus> = {
  Pending: "Accepted",
  Accepted: "Declined",
  Declined: "Pending",
};

interface Props {
  order: PreOrder;
  onUpdateStatus: (id: string, status: PreOrderStatus) => void;
}

export default function PreOrderCard({ order, onUpdateStatus }: Props) {
  const {
    id,
    customerName,
    contact,
    imageUrl,
    status,
    gender,
    type,
    size,
    color,
    deliveryDate,
  } = order;
  const [mobileOpen, setMobileOpen] = useState(false);

  const details = [
    { icon: User, label: "Gender", value: gender },
    { icon: Footprints, label: "Type", value: type },
    { icon: Ruler, label: "Size", value: String(size) },
    { icon: Palette, label: "Color", value: color },
    {
      icon: CalendarDays,
      label: "Delivery",
      value: format(new Date(deliveryDate), "dd MMM yyyy"),
    },
  ];

  return (
    <>
      <article
        className="group relative w-full"
        onClick={() => setMobileOpen(true)}
      >
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="Reference"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-[#6A3E19]/10" />
          )}

          {/* Top row */}
          <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between">
            <span className="font-mono text-[9px] sm:text-[10px] bg-black/40 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg backdrop-blur-sm">
              {id}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onUpdateStatus(id, NEXT_STATUS[status]);
              }}
              className={cn(
                "font-body text-[9px] sm:text-[10px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full whitespace-nowrap backdrop-blur-sm transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm",
                STATUS_STYLES[status],
              )}
            >
              {status}
            </button>
          </div>

          {/* Frosted bottom card */}
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3">
            <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl p-2.5 sm:p-3.5 flex flex-col gap-2 sm:gap-3">
              <div>
                <p className="font-display text-xs sm:text-sm font-semibold text-white leading-snug">
                  {customerName}
                </p>
                <p className="font-body text-[10px] sm:text-[11px] text-white/60">
                  {contact}
                </p>
              </div>
              <div className="bg-black/30 border border-white/10 rounded-lg p-2 sm:p-3">
                <div className="flex items-center justify-between gap-1">
                  {details.map(({ icon: Icon, value }) => (
                    <div
                      key={value}
                      className="flex flex-col items-center gap-0.5 min-w-0"
                    >
                      <Icon
                        size={11}
                        className="text-white/50 shrink-0 sm:w-3.5 sm:h-3.5"
                      />
                      <p className="font-body hidden md:block text-[9px] sm:text-[10px] text-white font-medium truncate max-w-full">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Mobile detail popup */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center md:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full bg-[#FDFBFB] rounded-t-2xl p-5 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-display text-base font-semibold text-text">
                  {customerName}
                </p>
                <p className="font-body text-xs text-black/50">{contact}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onUpdateStatus(id, NEXT_STATUS[status])}
                  className={cn(
                    "font-body text-[10px] font-medium px-2.5 py-1 rounded-full whitespace-nowrap transition-all duration-200 shadow-lg",
                    STATUS_STYLES[status],
                  )}
                >
                  {status}
                </button>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-black/40 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {imageUrl && (
              <img
                src={imageUrl}
                alt="Reference"
                className="w-full h-48 object-cover rounded-xl"
              />
            )}

            <div className="grid grid-cols-2 gap-3">
              {details.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 bg-black/10 rounded-xl px-3 py-2.5"
                >
                  <Icon size={14} className="text-black/40 shrink-0" />
                  <div>
                    <p className="font-body text-[9px] text-black/40 uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="font-body text-xs text-text font-medium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* <span className="font-mono text-[10px] text-white/30 text-center">
              {id}
            </span> */}
          </div>
        </div>
      )}
    </>
  );
}

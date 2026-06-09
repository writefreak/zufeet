"use client";

import { useCallback, useRef, useState } from "react";

interface SliderProps {
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}

const MAX_QTY = 10;

export function QuantitySlider({
  value,
  min = 1,
  max = MAX_QTY,
  onChange,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragPct, setDragPct] = useState<number | null>(null);

  // Use a ref to track active dragging state instantly without waiting for React re-renders
  const isDraggingRef = useRef(false);

  const pctFromX = useCallback((clientX: number) => {
    const t = trackRef.current;
    if (!t) return 0;
    const { left, width } = t.getBoundingClientRect();
    return Math.max(0, Math.min(1, (clientX - left) / width));
  }, []);

  const pctToValue = (pct: number) => Math.round(pct * (max - min) + min);

  const displayPct =
    dragPct !== null ? dragPct * 100 : ((value - min) / (max - min)) * 100;

  return (
    <div className="flex items-center gap-4 w-full max-w-[280px]">
      <div
        ref={trackRef}
        // CRITICAL: added 'touch-none' to prevent mobile browser scrolling while dragging
        className="relative h-[3px] flex-1 rounded-full bg-[#6A3E19]/20 cursor-pointer select-none touch-none"
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId);
          isDraggingRef.current = true;

          const pct = pctFromX(e.clientX);
          setDragPct(pct);
          onChange(pctToValue(pct));
        }}
        onPointerMove={(e) => {
          // Check the Ref instead of the state to avoid race conditions during fast movements
          if (!isDraggingRef.current) return;

          const pct = pctFromX(e.clientX);
          setDragPct(pct);
          onChange(pctToValue(pct));
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          isDraggingRef.current = false;
          setDragPct(null);
        }}
        onPointerCancel={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          isDraggingRef.current = false;
          setDragPct(null);
        }}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-brand"
          style={{ width: `${displayPct}%` }}
        />
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[18px] h-[18px] rounded-full bg-brand border-2 border-white shadow-md cursor-grab active:cursor-grabbing"
          style={{ left: `${displayPct}%` }}
        />
      </div>
      <span className="font-display text-sm font-semibold text-text w-5 text-right tabular-nums">
        {value}
      </span>
    </div>
  );
}

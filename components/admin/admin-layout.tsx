"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Clock,
  Footprints,
  Star,
  Truck,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SidebarContent from "./sidebar-content";

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-white/80">
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-brand lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 flex-col bg-brand transition-transform duration-300 lg:hidden",
          mobileOpen ? "flex translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between px-4 pt-4">
          <span />
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <SidebarContent onLinkClick={() => setMobileOpen(false)} />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Mobile top bar */}
        <header className="flex items-center gap-4 border-b border-[var(--color-border)]/10 bg-white px-4 py-3 lg:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-1.5 text-[var(--color-text-muted)] hover:bg-[var(--color-bg)]"
          >
            <Menu className="h-5 w-5" />
          </button>
          <span className="font-bold tracking-tight text-brand">
            Zufeet Admin
          </span>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

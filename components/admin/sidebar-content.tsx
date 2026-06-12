import {
  Clock,
  Footprints,
  LayoutDashboard,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavLink from "./navlink";

export default function SidebarContent({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex flex-1 flex-col gap-6 p-4 pt-6">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 pb-2">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-text tracking-wide"
        >
          <img src={"/zufeetwhite.png"} alt="" className="h-9 w-full" />
        </Link>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10" />

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-1">
        {navLinks.map((link) => (
          <NavLink key={link.href} {...link} onClick={onLinkClick} />
        ))}
      </nav>

      <div className="p-3 border-t border-white/[0.08] flex flex-col gap-2">
        {!collapsed && (
          <Link
            href="/"
            onClick={onLinkClick}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-[10px] text-white/40 text-[13px] hover:bg-blue/[0.08] hover:text-blue transition-all duration-200"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Back to site
          </Link>
        )}
        <button
          // onClick={handleLogout}
          className={`flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-white/40 hover:bg-red-500/20 hover:text-red-400 transition-all duration-200 w-full ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!collapsed && <span className="text-[13px]">Sign out</span>}
        </button>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`hidden md:flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 text-white/40 hover:bg-blue/[0.08] hover:text-blue transition-all duration-200 w-full ${
            collapsed ? "justify-center" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          {!collapsed && <span className="text-[13px]">Collapse</span>}
        </button>
      </div>
    </div>
  );
}

const navLinks = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    href: "/admin/orders",
    label: "Orders",
    icon: ShoppingBag,
  },
  {
    href: "/admin/preorders",
    label: "Pre-orders",
    icon: Clock,
  },
  {
    href: "/admin/footwear",
    label: "Footwear Catalogue",
    icon: Footprints,
  },
  {
    href: "/admin/reviews",
    label: "Reviews",
    icon: Star,
  },
  {
    href: "/admin/deliveries",
    label: "Deliveries",
    icon: Truck,
  },
];

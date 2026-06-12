import { cn } from "@/lib/utils";
import { ChevronRight, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  label,
  icon: Icon,
  exact,
  onClick,
}: {
  href: string;
  label: string;
  icon: typeof LayoutDashboard;
  exact?: boolean;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all",
        isActive
          ? "bg-white text-brand shadow-sm"
          : "text-white/80 hover:bg-white/10 hover:text-white",
      )}
    >
      <Icon
        className={cn(
          "h-4 w-4 shrink-0 transition-colors",
          isActive ? "text-brand" : "text-white/70 group-hover:text-white",
        )}
      />
      <span>{label}</span>
      {isActive && <ChevronRight className="ml-auto h-3 w-3 text-brand/50" />}
    </Link>
  );
}

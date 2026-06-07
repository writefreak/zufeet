"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/preorder", label: "Pre-Order" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl font-semibold text-text tracking-wide">
          Zu<span className="text-brand">feet</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "font-body text-sm tracking-wider uppercase transition-colors duration-200",
                  pathname === href
                    ? "text-brand"
                    : "text-text-muted hover:text-text"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/preorder"
          className="hidden md:inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-brand-fg text-sm font-medium px-5 py-2 transition-colors duration-200"
        >
          Pre-Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={cn(
              "w-6 h-px bg-text transition-all duration-300",
              open && "rotate-45 translate-y-[4px]"
            )}
          />
          <span
            className={cn(
              "w-6 h-px bg-text transition-all duration-300",
              open && "-rotate-45 -translate-y-[4px]"
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 bg-bg-surface border-b border-border",
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "block font-body text-sm tracking-wider uppercase py-1 transition-colors",
                  pathname === href ? "text-brand" : "text-text-muted"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/preorder"
              className="inline-flex bg-brand text-brand-fg text-sm font-medium px-5 py-2 mt-1"
            >
              Pre-Order Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

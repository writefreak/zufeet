"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TextAlignJustify } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#", label: "Featured" },
  { href: "#ab", label: "About" },
  { href: "#rev", label: "Reviews" },
  { href: "/products", label: "Shop" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-bg/95 md:backdrop-blur-none backdrop-blur-md md:bg-[#FDFBFB]"
          : "",
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-2xl font-semibold text-text tracking-wide"
        >
          <img
            src="/zufeetmain.png"
            alt=""
            className="h-7 w-full hidden md:block"
          />
          {/* <img src="/zufeetwhite.png" alt="" className="h-7 w-full md:hidden" /> */}
          <img
            src={pathname === "/" ? "/zufeetwhite.png" : "/zufeetmain.png"}
            alt=""
            className="h-7 w-full md:hidden"
          />
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
                    : "text-text-muted hover:text-text",
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
          className="hidden font-display md:inline-flex rounded-xl items-center gap-2 bg-brand hover:bg-brand-light text-brand-fg text-sm px-5 py-2 transition-colors duration-200"
        >
          Pre-Order Now
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <TextAlignJustify color={pathname === "/" ? "white" : "#6A3E19"} />
        </button>
      </nav>

      {/* Mobile full-screen overlay */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-60 text-text bg-[#F5ECED] font-display flex flex-col items-center justify-center gap-8 transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-7 text-text text-2xl transition-colors"
          aria-label="Close menu"
        >
          ✕
        </button>

        {NAV_LINKS.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "text-2xl font-nunito font-semibold text-text transition-all text-center duration-300",
              menuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6",
            )}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile Pre-Order CTA */}
        <Link
          href="/preorder"
          onClick={() => setMenuOpen(false)}
          className={cn(
            "bg-brand hover:bg-brand-light text-brand-fg  font-display text-sm px-8 py-4 rounded-xl transition-all duration-300",
            menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
          )}
          style={{ transitionDelay: `${NAV_LINKS.length * 0.07}s` }}
        >
          Pre-Order Now
        </Link>
      </div>
    </header>
  );
}

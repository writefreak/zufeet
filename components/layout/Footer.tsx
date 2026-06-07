import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-surface mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-semibold text-text mb-3">
            Zu<span className="text-brand">feet</span>
          </p>
          <p className="font-body text-sm text-text-muted leading-relaxed max-w-xs">
            Walk in Comfort. Stand in Style. Nigerian-made palms built for everyday life.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-text-subtle mb-4">
            Navigate
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Shop" },
              { href: "/preorder", label: "Pre-Order" },
              { href: "/about", label: "About" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-sm text-text-muted hover:text-brand transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <p className="font-body text-xs tracking-widest uppercase text-text-subtle mb-4">
            Follow Us
          </p>
          <ul className="flex flex-col gap-3">
            {[
              { href: "#", label: "@zufeetng", platform: "Instagram" },
              { href: "#", label: "@zufeetng", platform: "TikTok" },
              { href: "#", label: "Zufeet Nigeria", platform: "Facebook" },
            ].map(({ href, label, platform }) => (
              <li key={platform}>
                <a
                  href={href}
                  className="font-body text-sm text-text-muted hover:text-brand transition-colors flex items-center gap-2"
                >
                  <span className="text-text-subtle text-xs">{platform}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-5 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-body text-xs text-text-subtle">
          © {new Date().getFullYear()} Zufeet. All rights reserved.
        </p>
        <p className="font-body text-xs text-text-subtle">
          Site by{" "}
          <span className="text-brand">TageLabs</span>
        </p>
      </div>
    </footer>
  );
}

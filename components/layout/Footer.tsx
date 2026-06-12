import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#FEFDFC]">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col justify-between md:flex-row gap-10">
        {/* Brand */}
        <Link
          href="/"
          className="font-display flex items-center text-2xl font-semibold text-text tracking-wide"
        >
          <img
            src="/zufeetbg.png"
            alt=""
            className="h-8 w-28 md:h-12 md:w-44"
          />
          {/* <img src="/zufeetwhite.png" alt="" className="h-6 w-40 md:hidden" /> */}
        </Link>

        <div className="flex md:grid grid-cols-2 justify-between">
          {/* Nav links */}
          <div>
            <p className="font-body text-xs tracking-widest uppercase text-text-subtle mb-4">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/products", label: "Shop" },
                { href: "/preorder", label: "Pre-Order" },
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
                { href: "#", label: "@zufeetng", platform: "Facebook" },
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
      </div>

      <div className="border-t border-border px-6 py-5 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="font-body text-xs text-text-subtle">
          © {new Date().getFullYear()} Zufeet. All rights reserved.
        </p>
        <p className="font-body text-xs text-text-subtle">
          Built by{" "}
          <a
            href="https://tagelabs.vercel.app"
            className="text-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            TageLabs
          </a>
        </p>
      </div>
    </footer>
  );
}

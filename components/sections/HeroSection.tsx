import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(200,134,10,0.12) 0%, transparent 70%), #0A0A0A",
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Large background letter */}
      <p
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-[28vw] leading-none select-none pointer-events-none z-0"
        style={{ color: "rgba(200,134,10,0.04)" }}
        aria-hidden="true"
      >
        Z
      </p>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-brand" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-brand">
              Nigerian Craftsmanship
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] text-text mb-6">
            Walk in
            <br />
            <em className="not-italic text-brand">Comfort.</em>
            <br />
            Stand in Style.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-lg text-text-muted leading-relaxed max-w-lg mb-10">
            Premium quality palms, designed and handcrafted in Nigeria. Built for long days,
            warm evenings, and every moment in between.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/preorder"
              className="inline-flex items-center gap-3 bg-brand hover:bg-brand-light text-brand-fg font-body font-medium text-sm px-8 py-4 transition-colors duration-200"
            >
              Pre-Order Now
              <span className="text-brand-fg/60">→</span>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 border border-border hover:border-brand text-text-muted hover:text-brand font-body text-sm px-8 py-4 transition-colors duration-200"
            >
              View Collection
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-border">
            {[
              { value: "100%", label: "Nigerian Made" },
              { value: "6+", label: "Styles Available" },
              { value: "Free", label: "Pre-Order — No Upfront Pay" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-display text-2xl font-semibold text-text">{value}</p>
                <p className="font-body text-xs text-text-muted mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg))" }}
      />
    </section>
  );
}

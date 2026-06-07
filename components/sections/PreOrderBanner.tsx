import Link from "next/link";

export default function PreOrderBanner() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20" id="preorder">
      <div
        className="relative overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 90% 50%, rgba(200,134,10,0.15) 0%, transparent 70%), var(--color-surface)",
          border: "1px solid rgba(200,134,10,0.2)",
        }}
      >
        {/* Decorative */}
        <p
          className="absolute right-8 top-1/2 -translate-y-1/2 font-display font-bold text-[12rem] leading-none select-none pointer-events-none"
          style={{ color: "rgba(200,134,10,0.04)" }}
          aria-hidden="true"
        >
          ✦
        </p>

        <div className="relative z-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-3">
            Limited Availability
          </p>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-text">
            Secure Your Pair Early
          </h2>
          <p className="font-body text-text-muted mt-3 max-w-md leading-relaxed">
            Pre-orders are open. Lock in your size before launch and be among the first to receive your Zufeet.
          </p>
        </div>

        <Link
          href="/preorder"
          className="relative z-10 whitespace-nowrap bg-brand hover:bg-brand-light text-brand-fg font-body font-medium px-10 py-4 text-sm transition-colors duration-200"
        >
          Pre-Order Now →
        </Link>
      </div>
    </section>
  );
}

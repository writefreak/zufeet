import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Zufeet",
  description: "The story behind Zufeet — a Nigerian footwear brand built on craft, quality, and intention.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-28 pb-24">
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-4 block">
          Our Story
        </span>
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold text-text leading-tight mb-6">
          A Brand Built
          <br />
          <em className="not-italic text-brand">With Purpose.</em>
        </h1>
      </div>

      {/* Brand story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-7">
          <p className="font-body text-lg text-text-muted leading-9 mb-6">
            Zufeet is a Nigerian footwear brand built on one conviction — that the everyday palm should
            be more than an afterthought. In a market flooded with fast fashion and flimsy soles,
            we set out to make something different.
          </p>
          <p className="font-body text-base text-text-muted leading-8 mb-6">
            Every pair of Zufeet is crafted with attention to material, build, and fit. We do not cut
            corners on comfort. We do not compromise on durability. What leaves our workshop is something
            you can wear with confidence, day after day.
          </p>
          <p className="font-body text-base text-text-muted leading-8">
            This is not just a brand. It is a statement that Nigerian-made can stand beside anything
            from anywhere in the world — and hold its own.
          </p>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          {/* Decorative stat block */}
          <div className="border border-border p-8 flex flex-col gap-8">
            {[
              { label: "Est.", value: "2024" },
              { label: "Based in", value: "Nigeria" },
              { label: "Styles", value: "6 and Growing" },
              { label: "Mission", value: "Quality for Everyone" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="font-body text-xs tracking-widest uppercase text-text-subtle mb-1">{label}</p>
                <p className="font-display text-xl font-semibold text-text">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-20">
        <div className="flex-1 h-px bg-border" />
        <span className="text-brand">✦</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Founder note */}
      <div className="max-w-3xl mb-24">
        <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-6 block">
          From the Founder
        </span>
        <blockquote className="relative">
          <span
            className="absolute -top-4 -left-2 font-display text-8xl font-bold leading-none select-none pointer-events-none"
            style={{ color: "rgba(200,134,10,0.12)" }}
            aria-hidden="true"
          >
            "
          </span>
          <p className="font-display text-[clamp(1.4rem,3vw,2rem)] font-medium text-text leading-relaxed relative z-10 pl-4">
            I built Zufeet because I was tired of settling. Good palms should not be expensive imports
            or cheap knockoffs. They should be built right, priced right, and made here — by us, for us.
          </p>
          <footer className="mt-6 pl-4">
            <p className="font-body text-sm text-text-muted">
              — <strong className="text-text">Confidence Jef</strong>, Founder, Zufeet
            </p>
          </footer>
        </blockquote>
      </div>

      {/* Mission */}
      <div className="bg-bg-surface border border-border p-10 md:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-4">Mission</p>
            <p className="font-body text-text-muted leading-8">
              To produce premium quality Nigerian footwear that people can wear with pride — built with
              honest craftsmanship, sold at fair prices, and made to last.
            </p>
          </div>
          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-4">Vision</p>
            <p className="font-body text-text-muted leading-8">
              To become the definitive Nigerian footwear brand — recognized globally for quality,
              authenticity, and the kind of comfort that only comes from making something properly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 flex flex-col sm:flex-row items-start gap-4">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-brand-fg font-body font-medium text-sm px-8 py-4 transition-colors"
        >
          Shop the Collection →
        </Link>
        <Link
          href="/preorder"
          className="inline-flex items-center gap-2 border border-border hover:border-brand text-text-muted hover:text-brand font-body text-sm px-8 py-4 transition-colors"
        >
          Pre-Order a Pair
        </Link>
      </div>
    </div>
  );
}

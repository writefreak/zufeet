import { BRAND_VALUES } from "@/lib/data/products";

export default function BrandValues() {
  return (
    <section className="bg-bg-surface border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-3 block">
            Why Zufeet
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-text">
            What We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_VALUES.map(({ icon, title, description }) => (
            <div key={title} className="flex flex-col items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center border border-brand/30 text-brand text-lg">
                {icon}
              </div>
              <h3 className="font-display text-xl font-semibold text-text">{title}</h3>
              <p className="font-body text-sm text-text-muted leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BrandStatement() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="font-body text-xs tracking-[0.3em] uppercase text-brand mb-4 block">
            Our Story
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold text-text leading-tight">
            Born in Nigeria,
            <br />
            Built for the World.
          </h2>
        </div>
        <div>
          <p className="font-body text-text-muted leading-8 text-base mb-6">
            Zufeet started with a simple conviction — that everyday footwear should feel as good as it looks.
            Confidence Jef built this brand from the ground up, sourcing quality materials and putting
            real care into every pair that leaves the workshop.
          </p>
          <p className="font-body text-text-muted leading-8 text-base">
            No shortcuts. No compromises. Just palms that hold their shape, support your stride,
            and outlast the seasons.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mt-16">
        <div className="flex-1 h-px bg-border" />
        <span className="text-brand text-lg">✦</span>
        <div className="flex-1 h-px bg-border" />
      </div>
    </section>
  );
}

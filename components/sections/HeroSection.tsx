import Link from "next/link";

export default function HeroSection() {
  return (
    <div className=" md:relative bg-neutral-900 md:bg-white/80 md:pt-28 pt-0  md:h-screen flex flex-col md:flex md:items-center overflow-hidden">
      {/* Decorative grid lines — desktop only */}

      {/* Blob left */}
      <div className="hidden md:block absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand opacity-15 blur-[120px] pointer-events-none z-0" />

      {/* Blob right */}
      <div className="hidden md:block absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand opacity-30 blur-[120px] pointer-events-none z-0" />
      <div
        className="absolute inset-0 z-0 opacity-5 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="md:hidden w-full h-[400px] relative">
        <img
          src="/shoe.png"
          alt="Zufeet shoe"
          className="w-full object-cover h-full brightness-50 rounded-b-2xl"
        />
        {/* Black gradient overlay: opaque on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-b-2xl" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 pt-10 gap-6">
          <h1 className="font-display text-[38px] leading-[0.95] text-white">
            Handcrafted <br className="md:hidden" /> Footwear for
            <span>Confident</span> Steps
          </h1>
          <div className="flex items-center gap-4 pt-3">
            <Link
              href="/preorder"
              className="inline-flex text-xs items-center gap-3 bg-[#6a3e19]/80 backdrop-blur-lg border border-gray-900 rounded-xl hover:bg-brand-light text-brand-fg font-body font-medium md:text-sm px-8 py-4 transition-colors duration-200"
            >
              Pre-Order Now
            </Link>
            <Link
              href="#"
              className="inline-flex text-xs md:text-sm rounded-xl items-center gap-3 border border-white text-white hover:text-brand font-body px-8 py-4 transition-colors duration-200"
            >
              Our Brand Story
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop: original layout */}
      <div className="pb-20 max-w-6xl mx-auto px-6 w-full hidden md:block">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-5">
          <div>
            <h1 className="font-display text-5xl md:text-[68px] leading-[0.95] text-text md:pb-11">
              Handcrafted Footwear for <span>Confident</span> Steps
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/preorder"
                className="inline-flex items-center gap-3 bg-brand rounded-xl hover:bg-brand-light text-brand-fg font-body font-medium text-sm px-8 py-4 transition-colors duration-200"
              >
                Pre-Order Now
              </Link>
              <Link
                href="#"
                className="inline-flex rounded-xl items-center gap-3 border border-brand hover:border-brand text-brand hover:text-brand font-body text-sm px-8 py-4 transition-colors duration-200"
              >
                Our Brand Story
              </Link>
            </div>
          </div>

          <div className=" flex items-center justify-center">
            <div className="w-full">
              <img
                src="/shoe.png"
                alt="Zufeet palm"
                className="object-contain rounded-2xl object-center drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

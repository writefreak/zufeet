export default function BrandStatement() {
  return (
    <div className="bg-white/80">
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-12 items-center">
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full pb-10">
              <img
                src="/male footwear.jpg"
                alt="Zufeet shoe"
                className="object-contain rounded-2xl object-center drop-shadow-xl "
              />
            </div>
          </div>
          <div>
            <div className="md:pt-0 pt-16">
              <h2 className="font-display md:text-[46px] text-3xl font-semibold text-text leading-tight">
                <span className="text-brand">Born in Nigeria,</span>
                <br />
                Built for the World.
              </h2>
            </div>
            <div>
              <p className="font-body hidden md:block text-black/60 text-sm py-7">
                Zufeet started with a simple conviction that everyday footwear
                should feel as good as it looks. The brand was built from the
                ground up with a clear standard in mind, crafting quality palms
                that bring genuine comfort and a clean, confident aesthetic into
                every pair. Every piece that carries the Zufeet name reflects
                that original commitment, designed for people who move through
                their day with intention and refuse to settle for footwear that
                forces them to choose between feeling good and looking it.
              </p>
              <p className="font-body md:hidden text-black/60 text-sm pt-7">
                Zufeet started with a simple conviction that everyday footwear
                should feel as good as it looks. The brand was built from the
                ground up with a clear standard in mind, crafting quality palms
                that bring genuine comfort and a clean, confident aesthetic into
                every pair.
              </p>
            </div>
            <div className="relative md:hidden py-7 items-center justify-center">
              <div className="relative w-full ">
                <img
                  src="/male footwear.jpg"
                  alt="Zufeet shoe"
                  className="object-contain rounded-2xl object-center drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

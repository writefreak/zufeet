import { BRAND_VALUES, BrandValue } from "@/lib/data/products";

export default function BrandValues() {
  return (
    <section className="bg-white/80">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {(BRAND_VALUES as BrandValue[]).map(
            ({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col items-start bg-white/30 shadow-md gap-3 border border-gray-200 p-4 md:p-5 rounded-xl"
              >
                <div className="w-8 h-8 flex rounded-full items-center justify-center bg-brand text-brand text-lg">
                  <Icon size={16} color="white" />
                </div>
                <h3 className="font-display font-semibold text-text">
                  {title}
                </h3>
                <p className="font-body text-[12px] text-text-muted leading-relaxed">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

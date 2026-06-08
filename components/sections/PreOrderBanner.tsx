import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PreOrderBanner() {
  return (
    <div className="bg-white/80">
      <section className="max-w-5xl py-10 md:py-18 mx-auto px-6 pb-16">
        <div className="relative bg-brand rounded-2xl overflow-hidden p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="relative z-10">
            <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-white">
              Secure Your Pair Today
            </h2>
            <p className="font-body text-white/80 pt-1 text-xs md:text-sm max-w-md leading-relaxed">
              Place an order to step into a quality pair of Zufeet footwear{" "}
              <br /> that your feet will thank you for.
            </p>
          </div>

          <Link
            href="/preorder"
            className="relative border border-white/80 rounded-2xl z-10 flex items-center whitespace-nowrap bg-brand hover:bg-brand-light text-brand-fg font-body font-medium px-8 py-4 text-sm transition-colors duration-200"
          >
            Pre-Order Now <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

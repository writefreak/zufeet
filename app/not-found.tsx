export default function NotFound() {
  return (
    <div className="md:relative md:bg-white/80 md:h-screen flex flex-col md:flex md:items-center overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand opacity-10 md:opacity-15 blur-[120px] pointer-events-none z-0" />

      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand opacity-10 md:opacity-30 blur-[120px] pointer-events-none z-0" />

      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col gap-4 items-center justify-center">
        <h1 className="text-2xl text-[46px] font-semibold text-navy">404</h1>
        <p className="text-brand pt-4">Oops! This page doesn't exist.</p>

        <a
          href="/"
          className="bg-brand font-display text-white px-6 py-3 rounded-2xl text-sm transition-colors"
        >
          Return to home page
        </a>
      </div>
    </div>
  );
}

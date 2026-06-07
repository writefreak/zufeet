// ─── Zufeet Brand Config ───────────────────────────────────────────────────
// This is the SINGLE SOURCE OF TRUTH for all brand colors.
// Change `primary` here and it propagates everywhere via CSS custom properties.

const brand = {
  name: "Zufeet",
  tagline: "Walk in Comfort. Stand in Style.",
  primary: "#C8860A",        // brand amber/gold
  primaryLight: "#E5A020",   // lighter variant for hover states
  primaryDark: "#9E6A08",    // deeper variant for pressed/active
  primaryForeground: "#FFFFFF",
  background: "#0A0A0A",     // near-black site base
  surface: "#111111",        // card/section surface
  surfaceHover: "#1A1A1A",
  border: "#222222",
  text: "#F5F0EB",           // warm off-white body text
  textMuted: "#888888",
  textSubtle: "#555555",
} as const;

export type BrandConfig = typeof brand;
export default brand;

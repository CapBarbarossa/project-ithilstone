export const BreathingGradient = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Purple orb */}
      <div
        className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-purple-500/40 blur-[140px] will-change-transform animate-breathe-slow"
        style={{
          transform: "translateZ(0)",
          imageRendering: "high-quality",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        aria-hidden="true"
      />

      {/* Cyan orb */}
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-[460px] w-[460px] rounded-full bg-cyan-400/40 blur-[160px] will-change-transform animate-breathe-medium"
        style={{
          transform: "translateZ(0)",
          imageRendering: "high-quality",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        aria-hidden="true"
      />

      {/* Fuchsia orb */}
      <div
        className="pointer-events-none absolute bottom-[-160px] left-1/4 h-[520px] w-[520px] rounded-full bg-fuchsia-500/40 blur-[180px] will-change-transform animate-breathe-fast"
        style={{
          transform: "translateZ(0)",
          imageRendering: "high-quality",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
        }}
        aria-hidden="true"
      />

      {/* High-resolution noise overlay - reduced opacity and improved quality */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
          imageRendering: "crisp-edges",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
};


export function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ contain: "strict" }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0B0F" }} />
      {/* Primary grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.10) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transform: "translateZ(0)",
        }}
      />
      {/* Sub-grid for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "15px 15px",
          transform: "translateZ(0)",
        }}
      />
      {/* Edge vignette so the grid fades outward */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 35%, rgba(11,11,15,0.75) 100%)",
        }}
      />
      {/* Soft pink glow to warm the scene */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(65% 55% at 50% 35%, rgba(255,84,156,0.10), transparent 70%)",
        }}
      />
      {/* Horizontal pink beam sweeping top → bottom */}
      <div className="global-horizontal-beam absolute left-0 right-0 top-0 h-[3px] will-change-transform motion-reduce:hidden" />
    </div>

  );
}

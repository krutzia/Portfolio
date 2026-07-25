export function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0B0F" }} />
      {/* Subtle grid — faint texture */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.065) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.065) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Sub-grid for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.024) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.024) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Soft pink vignette to warm the scene */}
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

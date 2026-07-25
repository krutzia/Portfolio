export function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0B0F" }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Soft radial vignette to add depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 40%, rgba(255,84,156,0.08), transparent 70%)",
        }}
      />
      {/* Horizontal pink beam traveling top → bottom */}
      <div className="global-horizontal-beam absolute left-0 right-0 top-0 h-[2px] will-change-transform motion-reduce:hidden" />
    </div>
  );
}

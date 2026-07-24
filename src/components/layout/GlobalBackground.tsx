export function GlobalBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: "#0B0B0F" }} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 0%, rgba(255,84,156,0.18), transparent 55%)" }} />
      <div className="global-light-beam absolute left-1/2 top-0 h-56 w-[6px] -translate-x-1/2 will-change-transform motion-reduce:hidden" />
    </div>
  );
}

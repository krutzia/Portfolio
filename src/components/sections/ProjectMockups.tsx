/**
 * Realistic SaaS product mockups rendered as pure SVG/CSS — no images required.
 * Designed to read clearly inside a small browser-frame preview.
 */

export function ResuMatchMockup() {
  return (
    <div className="flex h-full bg-[oklch(0.14_0.005_260)] text-[10px] text-foreground/90">
      {/* Sidebar */}
      <div className="hidden w-[34%] flex-col gap-3 border-r border-border bg-[oklch(0.12_0.005_260)] p-3 sm:flex">
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-violet-500/20 text-[10px] font-bold text-violet-300">
            R
          </div>
          <span className="text-[11px] font-semibold">ResuMatch</span>
        </div>
        <div className="mt-1 space-y-1">
          {["Dashboard", "Resumes", "Job Matches", "Analytics", "Settings"].map((l, i) => (
            <div
              key={l}
              className={
                "flex items-center gap-1.5 rounded px-1.5 py-1 text-[9px] " +
                (i === 0 ? "bg-foreground/8 text-foreground" : "text-muted-foreground")
              }
            >
              <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
              {l}
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-md border border-border bg-background/40 p-2">
          <div className="text-[9px] text-muted-foreground">Plan</div>
          <div className="text-[10px] font-semibold">Pro · Active</div>
        </div>
      </div>

      {/* Main */}
      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold">ATS Dashboard</div>
            <div className="text-[9px] text-muted-foreground">
              Senior Frontend Engineer · Vercel
            </div>
          </div>
          <div className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-medium text-emerald-300">
            Match 87%
          </div>
        </div>

        {/* Match score ring + stats */}
        <div className="flex items-center gap-3 rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2.5">
          <Ring value={87} color="oklch(0.78 0.18 145)" />
          <div className="flex-1 space-y-1.5">
            {[
              ["Keywords", 92],
              ["Skills match", 81],
              ["Experience", 88],
            ].map(([l, v]) => (
              <div key={l as string}>
                <div className="mb-0.5 flex justify-between text-[8.5px] text-muted-foreground">
                  <span>{l}</span>
                  <span className="tabular-nums text-foreground/80">{v}%</span>
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-background/60">
                  <div
                    className="h-full rounded-full bg-violet-400/80"
                    style={{ width: `${v}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing skills */}
        <div className="rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2.5">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[9.5px] font-medium">Missing keywords</span>
            <span className="text-[8.5px] text-muted-foreground">3 suggested</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {["GraphQL", "Playwright", "Edge Functions"].map((t) => (
              <span
                key={t}
                className="rounded border border-border bg-background/40 px-1.5 py-0.5 text-[8.5px] text-muted-foreground"
              >
                + {t}
              </span>
            ))}
          </div>
        </div>

        {/* Job list */}
        <div className="flex-1 space-y-1">
          {[
            ["Stripe", "Frontend Engineer", 91],
            ["Linear", "Full Stack Engineer", 84],
          ].map(([co, role, m]) => (
            <div
              key={co as string}
              className="flex items-center justify-between rounded border border-border bg-[oklch(0.16_0.005_260)] px-2 py-1.5"
            >
              <div>
                <div className="text-[9.5px] font-medium">{role}</div>
                <div className="text-[8.5px] text-muted-foreground">{co}</div>
              </div>
              <div className="text-[9px] font-semibold text-emerald-300">{m}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function FitTrackMockup() {
  const bars = [40, 65, 50, 80, 58, 90, 72];
  return (
    <div className="flex h-full bg-[oklch(0.14_0.005_260)] p-3 text-[10px] text-foreground/90">
      <div className="flex w-full flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="grid h-5 w-5 place-items-center rounded bg-cyan-500/20 text-[10px] font-bold text-cyan-300">
              F
            </div>
            <span className="text-[11px] font-semibold">FitTrack</span>
          </div>
          <div className="flex items-center gap-1 text-[8.5px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Workout active
          </div>
        </div>

        {/* Stat row */}
        <div className="grid grid-cols-3 gap-1.5">
          {[
            ["Calories", "612", "kcal"],
            ["Active min", "48", "min"],
            ["Streak", "12", "days"],
          ].map(([l, v, u]) => (
            <div key={l} className="rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2">
              <div className="text-[8.5px] text-muted-foreground">{l}</div>
              <div className="mt-0.5 text-[13px] font-semibold tabular-nums">
                {v}
                <span className="ml-0.5 text-[8.5px] font-normal text-muted-foreground">{u}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly chart */}
        <div className="rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2.5">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="text-[9.5px] font-medium">Weekly progress</span>
            <span className="text-[8.5px] text-muted-foreground">+18% vs last week</span>
          </div>
          <div className="flex h-14 items-end gap-1.5">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={"w-full rounded-sm " + (i === 5 ? "bg-cyan-400/90" : "bg-cyan-400/30")}
                  style={{ height: `${h}%` }}
                />
                <div className="text-[7.5px] text-muted-foreground">{"MTWTFSS"[i]}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Workout list */}
        <div className="space-y-1">
          {[
            ["Upper body strength", "5 × 8 · 42 min"],
            ["HIIT — sprint intervals", "8 rounds · 22 min"],
          ].map(([t, s]) => (
            <div
              key={t}
              className="flex items-center justify-between rounded border border-border bg-[oklch(0.16_0.005_260)] px-2 py-1.5"
            >
              <div>
                <div className="text-[9.5px] font-medium">{t}</div>
                <div className="text-[8.5px] text-muted-foreground">{s}</div>
              </div>
              <div className="rounded bg-foreground px-1.5 py-0.5 text-[8.5px] font-medium text-background">
                Start
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiloMockup() {
  return (
    <div className="flex h-full bg-[oklch(0.14_0.005_260)] text-[10px] text-foreground/90">
      <div className="hidden w-[30%] flex-col gap-2 border-r border-border bg-[oklch(0.12_0.005_260)] p-3 sm:flex">
        <div className="flex items-center gap-1.5">
          <div className="grid h-5 w-5 place-items-center rounded bg-pink-500/20 text-[10px] font-bold text-pink-300">
            S
          </div>
          <span className="text-[11px] font-semibold">Silo</span>
        </div>
        <div className="mt-1 text-[8.5px] uppercase tracking-wider text-muted-foreground">
          Today
        </div>
        {[
          ["DSA — Graphs", "1h 30m"],
          ["System Design", "45m"],
          ["AWS notes", "20m"],
        ].map(([t, d]) => (
          <div key={t} className="rounded border border-border bg-background/30 p-1.5">
            <div className="text-[9.5px] font-medium">{t}</div>
            <div className="text-[8.5px] text-muted-foreground">{d}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[11px] font-semibold">AI Study Planner</div>
            <div className="text-[8.5px] text-muted-foreground">Week 7 · Placement prep</div>
          </div>
          <div className="rounded bg-pink-500/15 px-1.5 py-0.5 text-[9px] font-medium text-pink-300">
            On track
          </div>
        </div>

        {/* AI assistant card */}
        <div className="rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2.5">
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-pink-500/20 text-[9px] font-bold text-pink-300">
              AI
            </span>
            <span className="text-[9.5px] font-medium">Study assistant</span>
          </div>
          <div className="rounded bg-background/40 p-1.5 text-[8.5px] leading-snug text-muted-foreground">
            Summarized your 12 notes on graph traversal. Suggested 6 follow-up questions →
          </div>
        </div>

        {/* Progress ring + tasks */}
        <div className="flex items-center gap-3 rounded-md border border-border bg-[oklch(0.16_0.005_260)] p-2.5">
          <Ring value={72} color="oklch(0.78 0.16 350)" />
          <div className="flex-1 space-y-1">
            <div className="text-[9.5px] font-medium">Weekly goals</div>
            {[
              ["DSA problems", 18, 25],
              ["Mock interviews", 3, 5],
              ["Notes reviewed", 42, 50],
            ].map(([l, a, b]) => (
              <div
                key={l as string}
                className="flex justify-between text-[8.5px] text-muted-foreground"
              >
                <span>{l}</span>
                <span className="tabular-nums text-foreground/80">
                  {a}/{b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar strip */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: 7 }).map((_, i) => (
            <div
              key={i}
              className={
                "grid aspect-square place-items-center rounded text-[8.5px] " +
                (i === 3
                  ? "bg-pink-500/30 text-pink-100"
                  : i < 3
                    ? "bg-foreground/8 text-muted-foreground"
                    : "border border-border text-muted-foreground")
              }
            >
              {i + 8}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ring({ value, color }: { value: number; color: string }) {
  const r = 16;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative h-12 w-12 flex-shrink-0">
      <svg viewBox="0 0 40 40" className="h-full w-full -rotate-90">
        <circle cx="20" cy="20" r={r} stroke="oklch(1 0 0 / 0.08)" strokeWidth="4" fill="none" />
        <circle
          cx="20"
          cy="20"
          r={r}
          stroke={color}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={off}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-[10px] font-semibold tabular-nums">
        {value}%
      </div>
    </div>
  );
}

export function GenericMockup({
  title,
  tag,
  tech,
  accent = "oklch(0.72 0.31 350)",
}: {
  title: string;
  tag: string;
  tech: string[];
  accent?: string;
}) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="relative flex h-full flex-col bg-[oklch(0.13_0.005_260)] p-4 text-[10px] text-foreground/90">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(60% 60% at 80% 0%, ${accent}22, transparent 60%), radial-gradient(50% 50% at 0% 100%, ${accent}18, transparent 60%)`,
        }}
      />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="grid h-6 w-6 place-items-center rounded-md text-[10px] font-bold text-background"
            style={{ background: accent }}
          >
            {initials}
          </div>
          <div>
            <div className="text-[11px] font-semibold leading-none">{title}</div>
            <div className="mt-1 text-[9px] text-muted-foreground">{tag}</div>
          </div>
        </div>
        <div className="flex gap-1">
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
        </div>
      </div>

      <div className="relative mt-3 grid flex-1 grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-border bg-background/40 p-2">
            <div className="h-1 w-6 rounded-full bg-foreground/50" />
            <div
              className="mt-2 h-6 rounded-sm"
              style={{ background: `linear-gradient(135deg, ${accent}55, ${accent}11)` }}
            />
            <div className="mt-1.5 h-1 w-8 rounded-full bg-muted-foreground/30" />
            <div className="mt-1 h-1 w-5 rounded-full bg-muted-foreground/20" />
          </div>
        ))}
      </div>

      <div className="relative mt-3 rounded-md border border-border bg-background/40 p-2">
        <div className="flex items-center justify-between">
          <div className="h-1 w-10 rounded-full bg-muted-foreground/40" />
          <div className="text-[8px] font-mono text-muted-foreground">v1.0</div>
        </div>
        <div className="mt-2 flex flex-wrap gap-1">
          {tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-sm border border-border bg-secondary/50 px-1 py-0.5 text-[8px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Check } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { SectionLabel } from "@/components/sections/About";
import { profile, socials } from "@/config/portfolio";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative px-4 pb-24 pt-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Let's build something <span className="gradient-text">remarkable</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl glass p-7">
              <div className="space-y-5">
                <InfoRow Icon={Mail} label="Email" value={profile.email} href={socials.email} />
                <InfoRow
                  Icon={Github}
                  label="GitHub"
                  value="github.com/krutzia"
                  href={socials.github}
                />
                <InfoRow
                  Icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/krutzia"
                  href={socials.linkedin}
                />
                <InfoRow Icon={MapPin} label="Location" value={profile.location} />
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-muted-foreground">
                Currently open to internships, full-time roles, and interesting collaborations.
                Typical response time: under 24 hours.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7"
            >
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--cosmos-violet)] opacity-20 blur-3xl" />
              <div className="grid gap-5">
                <Field name="name" label="Your name" placeholder="Jane Recruiter" />
                <Field
                  name="email"
                  type="email"
                  label="Email"
                  placeholder="jane@company.com"
                />
                <Field
                  name="message"
                  label="Message"
                  placeholder="Tell me about the role or project..."
                  textarea
                />
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--cosmos-violet)] via-primary to-[var(--cosmos-cyan)] px-6 py-3.5 text-sm font-medium text-background shadow-[0_10px_40px_-10px_oklch(0.72_0.2_295/0.6)] transition-transform hover:scale-[1.02]"
                >
                  {sent ? (
                    <>
                      <Check className="h-4 w-4" /> Opening your mail app…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Kashish. Crafted with care.</p>
          <p>Designed and built in React, TypeScript & Framer Motion.</p>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-xl p-2 transition-colors hover:bg-white/5">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  textarea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const base =
    "peer w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-all focus:border-[var(--cosmos-violet)] focus:bg-white/[0.06] focus:ring-2 focus:ring-[var(--cosmos-violet)]/30";
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} required rows={5} placeholder={placeholder} className={base} />
      ) : (
        <input name={name} type={type} required placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

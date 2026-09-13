import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, MapPin, Check, AlertCircle, Loader2 } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";
import { profile, socials } from "@/config/portfolio";
import { trackEvent, type TrackEventName } from "@/lib/analytics";
import { sendContactEmail } from "@/lib/api/contact.functions";

type SubmitState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitState === "sending") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    setSubmitState("sending");
    setErrorMsg("");

    try {
      await sendContactEmail({ name, email, message });
      setSubmitState("sent");
      form.reset();
      setTimeout(() => setSubmitState("idle"), 5000);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setSubmitState("error");
      setTimeout(() => setSubmitState("idle"), 6000);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 pb-16 pt-24"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
            <span className="inline-flex h-6 items-center rounded-sm border border-brand-pink/70 px-2 text-brand-pink">
              04
            </span>
            <span className="h-px w-6 bg-border" />
            <span>Contact — let's make something</span>
          </div>
          <div className="mt-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground">
            <span className="relative inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-pink opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-pink" />
            </span>
            status: open to software engineering opportunities
          </div>

          <h2 className="mt-10 font-extrabold uppercase leading-[0.88] tracking-[-0.045em] text-foreground text-[clamp(3.2rem,12vw,10.5rem)]">
            <span className="block">Let's build</span>
            <span className="block">something</span>
            <span
              className="block text-transparent"
              style={{
                WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.22)",
              }}
            >
              unreasonable
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="panel flex h-full flex-col justify-between rounded-lg p-6">
              <div className="space-y-2">
                <InfoRow Icon={Mail} label="Email" value={profile.email} href={socials.email} />
                <InfoRow
                  Icon={Github}
                  label="GitHub"
                  value="github.com/krutzia"
                  href={socials.github}
                  event="github_click"
                />
                <InfoRow
                  Icon={Linkedin}
                  label="LinkedIn"
                  value="linkedin.com/in/krutzia"
                  href={socials.linkedin}
                  event="linkedin_click"
                />

                <InfoRow Icon={MapPin} label="Location" value={profile.location} />
              </div>
              <div className="mt-4 rounded-md border border-border bg-background/40 p-4 text-xs leading-relaxed text-muted-foreground">
                Currently open to software engineering internships and full-time opportunities.
                Typical response under 24 hours.
              </div>
            </div>
          </Reveal>

          {/*
           * The Reveal wrapper provides the entrance animation for the form panel.
           * The <form> itself is wrapped in a plain <div> so that after the entry
           * animation completes, Framer Motion has no ongoing authority over the
           * form's layout or transform — preventing re-trigger on input focus.
           */}
          <Reveal delay={0.08}>
            <form
              onSubmit={handleSubmit}
              aria-label="Contact form"
              className="panel rounded-lg p-6"
            >
              <div className="grid gap-4">
                <Field name="name" label="Your name" placeholder="Jane Recruiter" />
                <Field name="email" type="email" label="Email" placeholder="jane@company.com" />
                <Field
                  name="message"
                  label="Message"
                  placeholder="Tell me about the role or project…"
                  textarea
                />

                {/* Error banner */}
                {submitState === "error" && errorMsg && (
                  <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2.5 text-xs text-destructive">
                    <AlertCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === "sending" || submitState === "sent"}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState === "sending" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                    </>
                  )}
                  {submitState === "sent" && (
                    <>
                      <Check className="h-4 w-4" /> Message sent!
                    </>
                  )}
                  {(submitState === "idle" || submitState === "error") && (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>

                <p aria-live="polite" className="sr-only">
                  {submitState === "sent" ? "Your message has been sent successfully." : ""}
                  {submitState === "error" ? `Error: ${errorMsg}` : ""}
                </p>
              </div>
            </form>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Kashish.</p>
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
  event,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  event?: TrackEventName;
}) {
  const inner = (
    <div className="group flex items-center gap-4 rounded-md p-2 transition-colors hover:bg-secondary/60">
      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-md border border-border bg-secondary">
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={event ? () => trackEvent(event, { location: "contact" }) : undefined}
      className="block"
    >
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
    "w-full rounded-md border border-border bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-foreground/30 focus:bg-background";
  const id = `contact-${name}`;
  return (
    <div className="block">
      <label htmlFor={id} className="mb-1.5 block text-xs text-muted-foreground">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required
          rows={5}
          placeholder={placeholder}
          className={base}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required
          autoComplete={name === "email" ? "email" : name === "name" ? "name" : undefined}
          placeholder={placeholder}
          className={base}
        />
      )}
    </div>
  );
}

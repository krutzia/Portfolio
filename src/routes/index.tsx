import { createFileRoute } from "@tanstack/react-router";
import { AnimationModeProvider } from "@/context/AnimationModeContext";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GlobalBackground } from "@/components/layout/GlobalBackground";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillConstellation } from "@/components/sections/SkillConstellation";
import { Projects } from "@/components/sections/Projects";
import { Achievements } from "@/components/sections/Achievements";
import { LeetCode } from "@/components/sections/LeetCode";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kashish — Full Stack Developer" },
      {
        name: "description",
        content:
          "Final-year CSE student at JSS Academy of Technical Education. Full Stack Developer building production web products with React, Node, and TypeScript.",
      },
      { property: "og:title", content: "Kashish — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Kashish — React, Node, and TypeScript across the stack. ResuMatch, FitTrack, Silo Study AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <AnimationModeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 grid-bg opacity-70" />
        <ScrollProgress />


        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillConstellation />
          <Projects />
          <Achievements />
          <LeetCode />
          <Contact />
        </main>
      </div>
    </AnimationModeProvider>
  );
}

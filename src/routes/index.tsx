import { createFileRoute } from "@tanstack/react-router";
import { AnimationModeProvider } from "@/context/AnimationModeContext";
import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { GlobalBackground } from "@/components/layout/GlobalBackground";

import { Hero } from "@/components/sections/Hero";
import { SkillConstellation } from "@/components/sections/SkillConstellation";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { LeetCode } from "@/components/sections/LeetCode";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kashish — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Kashish — final-year CSE student and full stack developer building production web products with React, Next.js, Node, and TypeScript. See projects, skills, and contact.",
      },
      { property: "og:title", content: "Kashish — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Full stack developer building thoughtful, production-grade products with React, Node, and TypeScript. Explore MediCompare, Nomad, ResuMatch and more.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Kashish — Portfolio" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/favicon.ico" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kashish — Full Stack Developer Portfolio" },
      {
        name: "twitter:description",
        content:
          "Full stack developer building thoughtful, production-grade products with React, Node, and TypeScript.",
      },
      { name: "twitter:image", content: "/favicon.ico" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kashish",
          jobTitle: "Full Stack Developer",
          url: "/",
          sameAs: ["https://github.com/krutzia", "https://www.linkedin.com/in/krutzia/"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <AnimationModeProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        <GlobalBackground />

        <ScrollProgress />


        <Navbar />
        <main>
          <Hero />
          <SkillConstellation />
          <Projects />
          <Experience />
          <LeetCode />
          <Contact />
        </main>
      </div>
    </AnimationModeProvider>
  );
}

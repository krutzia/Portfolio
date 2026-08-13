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
      { property: "og:url", content: "https://cosmos-canvas-kashish.lovable.app/" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eee2604a-6649-4ea1-8783-112ce61b8e02/id-preview-8b30c416--5a36e112-dca6-4c8b-bc5d-13adc9542c3d.lovable.app-1780313356574.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Kashish — Full Stack Developer Portfolio" },
      {
        name: "twitter:description",
        content:
          "Full stack developer building thoughtful, production-grade products with React, Node, and TypeScript.",
      },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/eee2604a-6649-4ea1-8783-112ce61b8e02/id-preview-8b30c416--5a36e112-dca6-4c8b-bc5d-13adc9542c3d.lovable.app-1780313356574.png" },
    ],
    links: [{ rel: "canonical", href: "https://cosmos-canvas-kashish.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kashish",
          jobTitle: "Full Stack Developer",
          url: "https://cosmos-canvas-kashish.lovable.app/",
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

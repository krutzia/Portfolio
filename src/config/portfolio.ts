/**
 * Portfolio configuration — single source of truth.
 */

// Use local static portrait file copied into `public/assets/`.
// Kept as a static path to preserve exact cropping and styling from the published site.
const PORTRAIT_URL = "/assets/kashish-portrait.png";
import { validateSocials } from "@/lib/social-links";

export const profile = {
  name: "Kashish",
  tagline: "Building scalable, intelligent web experiences.",
  intro:
    "Final-year Computer Science student at JSS Academy of Technical Education, Noida — turning ideas into polished full-stack products.",
  location: "Noida, India",
  email: "kashish860458@gmail.com",
  phone: "+91 8604585161",
  portraitUrl: PORTRAIT_URL,
  education: {
    school: "JSS Academy of Technical Education, Noida",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sept 2023 – May 2027",
  },

  resumeUrl: "/resume.pdf",
};

export const roles = [
  "Full Stack Developer",
  "React Developer",
  "Problem Solver",
  "Software Engineer",
];

const rawSocials = {
  github: "https://github.com/krutzia",
  linkedin: "https://www.linkedin.com/in/krutzia/",
  leetcode: "https://leetcode.com/u/krutzia/",
  email: "mailto:kashish860458@gmail.com",
};

/** Validated + normalized at module load — typos are logged and auto-corrected. */
export const socialValidation = validateSocials(rawSocials);

export const socials = socialValidation.hrefs;


export type Skill = { name: string; level: number };
export type SkillCategory = {
  name: string;
  accent: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accent: "var(--cosmos-violet)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Figma", level: 78 },
    ],
  },
  {
    name: "Backend",
    accent: "var(--cosmos-cyan)",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    name: "AI & LLM",
    accent: "var(--cosmos-pink)",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Claude API", level: 80 },
      { name: "Prompt Engineering", level: 86 },
      { name: "Embeddings", level: 74 },
    ],
  },
  {
    name: "Databases",
    accent: "var(--cosmos-pink)",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 78 },
      { name: "Supabase", level: 84 },
    ],
  },
  {
    name: "Developer Tools",
    accent: "var(--cosmos-amber)",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 76 },
      { name: "AWS", level: 74 },
      { name: "Vercel", level: 86 },
    ],
  },
  {
    name: "Languages",
    accent: "var(--cosmos-emerald)",
    skills: [
      { name: "C / C++", level: 90 },
      { name: "Java", level: 82 },
      { name: "Python", level: 82 },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 82 },
      { name: "HTML / CSS", level: 92 },
    ],
  },
];


import shotNomad from "@/assets/shot-9.png.asset.json";
import shotMedi from "@/assets/shot-10.png.asset.json";
import shotSilo from "@/assets/shot-11.png.asset.json";
import shotSmartLecture from "@/assets/shot-12.png.asset.json";
import shotResuMatch from "@/assets/shot-13.png.asset.json";
import shotCodeInsight from "@/assets/shot-14.png.asset.json";
import shotCampusKart from "@/assets/shot-15.png.asset.json";
import shotFitTrack from "@/assets/shot-16.png.asset.json";

export type Project = {
  name: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  accent: string;
  mockup: "resumatch" | "fittrack" | "silo" | "generic";
  image?: string;
};

export const projects: Project[] = [
  {
    name: "MediCompare",
    category: "Healthcare · Web App",
    tagline: "Compare medical test prices across hospitals",
    description:
      "Price transparency for healthcare — compare MRI scans, blood tests, and consultations across verified hospitals, with real availability and clear savings before you book.",
    highlights: [
      "Rich comparison UI with search, filters, and savings insights",
      "TypeScript-first architecture with reusable component primitives",
      "Deployed on Vercel with fast, mobile-first performance",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://medi-compare-theta.vercel.app",
    githubUrl: "https://github.com/krutzia/MediCompare",
    accent: "var(--cosmos-emerald)",
    mockup: "generic",
    image: shotMedi.url,
  },
  {
    name: "Nomad",
    category: "Travel · Web App",
    tagline: "Collaborative trip planner for crews",
    description:
      "Trip planning app that turns a single draggable route into day-by-day itineraries, budgets, packing lists, and real-time companions — keeping every adventurer on the same page.",
    highlights: [
      "Draggable route builder with day-by-day itinerary generation",
      "Real-time collaboration, budgets, and shared packing lists",
      "Works offline and shareable with anyone — no credit card needed",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://nomad-fawn-tau.vercel.app",
    githubUrl: "https://github.com/krutzia/Nomad",
    accent: "var(--cosmos-emerald)",
    mockup: "generic",
    image: shotNomad.url,
  },
  {
    name: "ResuMatch",
    category: "Career · AI Tool",
    tagline: "Resume analysis & ATS scoring",
    description:
      "Matches a resume against a job description to produce an ATS score, surface missing skills, and recommend concrete rewrites — with parsing, auth, and storage handled end to end.",
    highlights: [
      "Resume upload & parsing with Supabase Storage + Auth",
      "Scoring and rewrite suggestions via serverless Edge Functions",
      "Personalized dashboards with filtering and job recommendations",
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ai-powered-resume-and-jobmatcher.vercel.app/",
    githubUrl: "https://github.com/krutzia/ai-powered-resume-and-jobmatcher",
    accent: "var(--cosmos-violet)",
    mockup: "resumatch",
    image: shotResuMatch.url,
  },
  {
    name: "CampusKart",
    category: "Marketplace · Full Stack",
    tagline: "Campus marketplace for students",
    description:
      "Full-stack marketplace for college students to buy, sell, and discover study resources — with listing management, search, and recommendations built on a REST API.",
    highlights: [
      "Assisted listing descriptions and relevance-ranked recommendations",
      "Secure REST APIs, auth, product management on Node + Express + MongoDB",
      "Responsive UI with React, TypeScript, Tailwind & shadcn/ui — deployed on Vercel",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI"],
    liveUrl: "https://studystack-market.vercel.app",
    githubUrl: "https://github.com/krutzia/CampusKart",
    accent: "var(--cosmos-violet)",
    mockup: "generic",
    image: shotCampusKart.url,
  },
  {
    name: "CodeInsight",
    category: "Developer · AI Tool",
    tagline: "Automated code review & optimization",
    description:
      "Code analysis platform that reviews source files, flags issues, and returns optimization and debugging suggestions alongside a quality score.",
    highlights: [
      "Before/after diffs with line-by-line suggestions",
      "Developer-focused UX with secure auth and scalable REST services",
      "Built with React, TypeScript, Tailwind — deployed on Vercel",
    ],
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenAI"],
    liveUrl: "https://code-insight-nine.vercel.app",
    githubUrl: "https://github.com/krutzia/CodeInsight",
    accent: "var(--cosmos-cyan)",
    mockup: "generic",
    image: shotCodeInsight.url,
  },
  {
    name: "SmartLecture AI",
    category: "Edtech · AI Tool",
    tagline: "Turn lectures into study superpowers",
    description:
      "Upload a lecture recording and get transcripts, summaries, flashcards, and a study chatbot grounded in your own material — one workspace instead of five tools.",
    highlights: [
      "Audio transcription with generated summaries and flashcards",
      "Study buddy chatbot grounded in your own lecture content",
      "Playful, responsive UI deployed on Vercel",
    ],
    tech: ["React", "TypeScript", "AI APIs", "Tailwind CSS"],
    liveUrl: "https://smart-lecture-git-main-krutzias-projects.vercel.app",
    githubUrl: "https://github.com/krutzia/SmartLecture-AI",
    accent: "var(--cosmos-amber)",
    mockup: "generic",
    image: shotSmartLecture.url,
  },
  {
    name: "Silo Study AI",
    category: "Edtech · AI Tool",
    tagline: "Adaptive study planner",
    description:
      "Creates personalized study plans that adapt to your progress, keeps you accountable with friends, and helps you crush every exam.",
    highlights: [
      "Adaptive study planning with content assistance",
      "Responsive modern UI for cross-device experience",
      "Backend APIs, database integration, and deployment workflows",
    ],
    tech: ["React", "Node.js", "AI APIs", "Tailwind CSS"],
    liveUrl: "https://silo-study-j0u6igfpu-krutzias-projects.vercel.app/",
    githubUrl: "https://github.com/krutzia/Silo-study-ai",
    accent: "var(--cosmos-pink)",
    mockup: "silo",
    image: shotSilo.url,
  },
  {
    name: "FitTrack",
    category: "Fitness · Full Stack",
    tagline: "Fitness tracking platform",
    description:
      "Full-stack fitness web app to monitor workouts, progress, and health activities with a modern responsive UI.",
    highlights: [
      "Authentication, workout management, and progress tracking",
      "Built with React, Node.js, Express, and MongoDB",
      "Deployed on Vercel for seamless performance",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://fittrack-ai-eta.vercel.app/",
    githubUrl: "https://github.com/krutzia/FitTrack",
    accent: "var(--cosmos-cyan)",
    mockup: "fittrack",
    image: shotFitTrack.url,
  },
];

export type Achievement = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
};

export const achievements: Achievement[] = [
  { value: 500, suffix: "+", label: "LeetCode Problems Solved", sub: "DSA, algorithms & system design" },
  { value: 2, suffix: "", label: "AWS Certifications", sub: "Cloud & AI Practitioner" },
  { value: 8, suffix: "", label: "Full Stack Projects Shipped", sub: "Live in production" },
];


export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    detail: "Cloud fundamentals: compute, storage, networking, and security services.",
  },
  {
    name: "AWS AI Practitioner Challenge",
    issuer: "Udacity · AWS",
    detail: "AI concepts and AWS AI services for modern cloud-based applications.",
  },
];

/**
 * Portfolio configuration — single source of truth.
 */

import portrait from "@/assets/kashish-portrait.png.asset.json";

export const profile = {
  name: "Kashish",
  tagline: "Building scalable, intelligent web experiences.",
  intro:
    "Final-year Computer Science student at JSS Academy of Technical Education, Noida — turning ideas into polished full-stack products.",
  location: "Noida, India",
  email: "kashish860458@gmail.com",
  phone: "+91 8604585161",
  portraitUrl: portrait.url,
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

export const socials = {
  github: "https://github.com/krutzia",
  linkedin: "https://linkedin.com/in/krutzia",
  leetcode: "https://leetcode.com/u/krutzia/",
  email: "mailto:kashish860458@gmail.com",
};

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
      { name: "AngularJS", level: 70 },
      { name: "Figma", level: 78 },
    ],
  },
  {
    name: "Backend",
    accent: "var(--cosmos-cyan)",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "PHP", level: 68 },
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
      { name: "Netlify", level: 82 },
      { name: "Render", level: 78 },
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


export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  accent: string;
  mockup: "resumatch" | "fittrack" | "silo" | "generic";
};

export const projects: Project[] = [
  {
    name: "CampusKart",
    tagline: "AI-powered marketplace for students",
    description:
      "Full-stack marketplace for college students to buy, sell, and discover study resources — with AI-generated listings, intelligent search, and personalized recommendations.",
    highlights: [
      "OpenAI-powered product descriptions and smart recommendations",
      "Secure REST APIs, auth, product management on Node + Express + MongoDB",
      "Responsive UI with React, TypeScript, Tailwind & shadcn/ui — deployed on Vercel",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI"],
    liveUrl: "https://studystack-market.vercel.app",
    githubUrl: "https://github.com/krutzia/CampusKart",
    accent: "var(--cosmos-violet)",
    mockup: "generic",
  },
  {
    name: "CodeInsight",
    tagline: "AI code review & optimization platform",
    description:
      "AI-powered code analysis platform that reviews source code, flags issues, and returns intelligent optimization and debugging suggestions.",
    highlights: [
      "OpenAI + prompt engineering for code explanations and fixes",
      "Developer-focused UX with secure auth and scalable REST services",
      "Built with React, TypeScript, Tailwind — deployed on Vercel",
    ],
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenAI"],
    liveUrl: "https://code-insight-nine.vercel.app",
    githubUrl: "https://github.com/krutzia/CodeInsight",
    accent: "var(--cosmos-cyan)",
    mockup: "generic",
  },
  {
    name: "ResuMatch",
    tagline: "AI-powered resume analysis & ATS scoring",
    description:
      "Analyzes resumes against job descriptions, generates ATS match scores, identifies missing skills, and suggests optimized improvements.",
    highlights: [
      "Resume upload & parsing with Supabase Storage + Auth",
      "AI-driven optimization via Edge Functions and external AI APIs",
      "Personalized dashboards with filtering and job recommendations",
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ai-powered-resume-and-jobmatcher.vercel.app/",
    githubUrl: "https://github.com/krutzia/ai-powered-resume-and-jobmatcher",
    accent: "var(--cosmos-violet)",
    mockup: "resumatch",
  },
  {
    name: "MediCompare",
    tagline: "Compare medicines, prices & alternatives",
    description:
      "A responsive web app that helps users compare medicines, discover generic alternatives, and make informed choices with a clean, data-dense interface.",
    highlights: [
      "Rich comparison UI with filters, search, and detail views",
      "TypeScript-first architecture with reusable component primitives",
      "Deployed on Vercel with fast, mobile-first performance",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://medi-compare-theta.vercel.app",
    githubUrl: "https://github.com/krutzia/MediCompare",
    accent: "var(--cosmos-emerald)",
    mockup: "generic",
  },
  {
    name: "FitTrack",
    tagline: "AI-powered fitness tracking platform",
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
  },
  {
    name: "Silo Study AI",
    tagline: "AI-powered study assistant",
    description:
      "Helps students organize learning resources and improve study efficiency with intelligent content assistance.",
    highlights: [
      "AI-based study support and intelligent content assistance",
      "Responsive modern UI for cross-device experience",
      "Backend APIs, database integration, and deployment workflows",
    ],
    tech: ["React", "Node.js", "AI APIs", "Tailwind CSS"],
    liveUrl: "https://silo-study-j0u6igfpu-krutzias-projects.vercel.app/",
    githubUrl: "https://github.com/krutzia/Silo-study-ai",
    accent: "var(--cosmos-pink)",
    mockup: "silo",
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
  { value: 6, suffix: "+", label: "Full Stack Projects Shipped", sub: "Live in production" },
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

/**
 * Portfolio configuration — single source of truth.
 */

import portrait from "@/assets/kashish-portrait.jpg.asset.json";

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
    cgpa: "7.17 / 10",
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
      { name: "React", level: 92 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    accent: "var(--cosmos-cyan)",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    name: "Database",
    accent: "var(--cosmos-pink)",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "Supabase", level: 82 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    name: "Tools & Cloud",
    accent: "var(--cosmos-amber)",
    skills: [
      { name: "Git / GitHub", level: 88 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
    ],
  },
  {
    name: "Languages",
    accent: "var(--cosmos-emerald)",
    skills: [
      { name: "C++", level: 90 },
      { name: "Java", level: 82 },
      { name: "Python", level: 80 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    name: "Problem Solving",
    accent: "var(--cosmos-violet)",
    skills: [
      { name: "Data Structures", level: 90 },
      { name: "Algorithms", level: 88 },
      { name: "System Design", level: 72 },
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
  mockup: "resumatch" | "fittrack" | "silo";
};

export const projects: Project[] = [
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
    githubUrl: "https://github.com/krutzia",
    accent: "var(--cosmos-violet)",
    mockup: "resumatch",
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
    githubUrl: "https://github.com/krutzia",
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
    githubUrl: "https://github.com/krutzia",
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
  { value: 600, suffix: "+", label: "LeetCode Problems Solved", sub: "DSA, algorithms & system design" },
  { value: 2, suffix: "", label: "AWS Certifications", sub: "Cloud & AI Practitioner" },
  { value: 3, suffix: "", label: "Full Stack Projects Shipped", sub: "Live in production" },
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

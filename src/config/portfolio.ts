/**
 * Portfolio configuration — single source of truth.
 * Edit this file to update any content on the site.
 */

export const profile = {
  name: "Kashish",
  tagline: "Building scalable, intelligent web experiences.",
  intro:
    "Final-year Computer Science student at JSS Academy of Technical Education, Noida — turning ideas into polished full-stack products.",
  location: "Noida, India",
  email: "kashish860458@gmail.com",
  phone: "+91 8604585161",
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

export type SkillCategory = {
  name: string;
  accent: string; // oklch token name
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    accent: "var(--cosmos-violet)",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    accent: "var(--cosmos-cyan)",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    name: "Database",
    accent: "var(--cosmos-pink)",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    name: "Tools",
    accent: "var(--cosmos-amber)",
    skills: ["Git", "GitHub", "Docker", "AWS", "Netlify", "Render"],
  },
  {
    name: "Languages",
    accent: "var(--cosmos-emerald)",
    skills: ["C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
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
  },
];

export type Achievement = {
  value: number;
  suffix?: string;
  label: string;
  sub?: string;
};

export const achievements: Achievement[] = [
  { value: 450, suffix: "+", label: "LeetCode Problems Solved", sub: "DSA & algorithms" },
  { value: 2, suffix: "", label: "AWS Certifications", sub: "Cloud & AI Practitioner" },
  { value: 3, suffix: "", label: "Shipped Projects", sub: "Live on production" },
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

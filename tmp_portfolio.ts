const PORTRAIT_URL = "/assets/kashish-portrait.png";
import { validateSocials } from "/src/lib/social-links.ts";
export const profile = {
  name: "Kashish",
  tagline: "Building scalable, intelligent web experiences.",
  intro: "Final-year Computer Science student at JSS Academy of Technical Education, Noida — turning ideas into polished full-stack products.",
  location: "Noida, India",
  email: "kashish860458@gmail.com",
  phone: "+91 8604585161",
  portraitUrl: PORTRAIT_URL,
  education: {
    school: "JSS Academy of Technical Education, Noida",
    degree: "B.Tech in Computer Science and Engineering",
    period: "Sept 2023 – May 2027"
  },
  resumeUrl: "/resume.pdf"
};
export const roles = [
  "Full Stack Developer",
  "React Developer",
  "Problem Solver",
  "Software Engineer"
];
const rawSocials = {
  github: "https://github.com/krutzia",
  linkedin: "https://www.linkedin.com/in/krutzia/",
  leetcode: "https://leetcode.com/u/krutzia/",
  email: "mailto:kashish860458@gmail.com"
};
export const socialValidation = validateSocials(rawSocials);
export const socials = socialValidation.hrefs;
export const skillCategories = [
  {
    name: "Frontend",
    accent: "var(--cosmos-violet)",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 82 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Figma", level: 78 }
    ]
  },
  {
    name: "Backend",
    accent: "var(--cosmos-cyan)",
    skills: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 88 }
    ]
  },
  {
    name: "AI & LLM",
    accent: "var(--cosmos-pink)",
    skills: [
      { name: "OpenAI API", level: 85 },
      { name: "Claude API", level: 80 },
      { name: "Prompt Engineering", level: 86 },
      { name: "Embeddings", level: 74 }
    ]
  },
  {
    name: "Databases",
    accent: "var(--cosmos-pink)",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 78 },
      { name: "MySQL", level: 78 },
      { name: "Supabase", level: 84 }
    ]
  },
  {
    name: "Developer Tools",
    accent: "var(--cosmos-amber)",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "Linux", level: 76 },
      { name: "AWS", level: 74 },
      { name: "Vercel", level: 86 }
    ]
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
      { name: "HTML / CSS", level: 92 }
    ]
  }
];
import shotNomad from "/src/assets/shot-9.png.asset.json?import";
import shotMedi from "/src/assets/shot-10.png.asset.json?import";
import shotSilo from "/src/assets/shot-11.png.asset.json?import";
import shotSmartLecture from "/src/assets/shot-12.png.asset.json?import";
import shotResuMatch from "/src/assets/shot-13.png.asset.json?import";
import shotCodeInsight from "/src/assets/shot-14.png.asset.json?import";
import shotCampusKart from "/src/assets/shot-15.png.asset.json?import";
import shotFitTrack from "/src/assets/shot-16.png.asset.json?import";
export const projects = [
  {
    name: "MediCompare",
    category: "Healthcare · Web App",
    tagline: "Compare medical test prices across hospitals",
    description: "Price transparency for healthcare — compare MRI scans, blood tests, and consultations across verified hospitals, with real availability and clear savings before you book.",
    highlights: [
      "Rich comparison UI with search, filters, and savings insights",
      "TypeScript-first architecture with reusable component primitives",
      "Deployed on Vercel with fast, mobile-first performance"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://medi-compare-theta.vercel.app",
    githubUrl: "https://github.com/krutzia/MediCompare",
    accent: "var(--cosmos-emerald)",
    mockup: "generic",
    image: shotMedi.url
  },
  {
    name: "Nomad",
    category: "Travel · Web App",
    tagline: "Collaborative trip planner for crews",
    description: "Trip planning app that turns a single draggable route into day-by-day itineraries, budgets, packing lists, and real-time companions — keeping every adventurer on the same page.",
    highlights: [
      "Draggable route builder with day-by-day itinerary generation",
      "Real-time collaboration, budgets, and shared packing lists",
      "Works offline and shareable with anyone — no credit card needed"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://nomad-fawn-tau.vercel.app",
    githubUrl: "https://github.com/krutzia/Nomad",
    accent: "var(--cosmos-emerald)",
    mockup: "generic",
    image: shotNomad.url
  },
  {
    name: "ResuMatch",
    category: "Career · AI Tool",
    tagline: "Resume analysis & ATS scoring",
    description: "Matches a resume against a job description to produce an ATS score, surface missing skills, and recommend concrete rewrites — with parsing, auth, and storage handled end to end.",
    highlights: [
      "Resume upload & parsing with Supabase Storage + Auth",
      "Scoring and rewrite suggestions via serverless Edge Functions",
      "Personalized dashboards with filtering and job recommendations"
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://ai-powered-resume-and-jobmatcher.vercel.app/",
    githubUrl: "https://github.com/krutzia/ai-powered-resume-and-jobmatcher",
    accent: "var(--cosmos-violet)",
    mockup: "resumatch",
    image: shotResuMatch.url
  },
  {
    name: "CampusKart",
    category: "Marketplace · Full Stack",
    tagline: "Campus marketplace for students",
    description: "Full-stack marketplace for college students to buy, sell, and discover study resources — with listing management, search, and recommendations built on a REST API.",
    highlights: [
      "Assisted listing descriptions and relevance-ranked recommendations",
      "Secure REST APIs, auth, product management on Node + Express + MongoDB",
      "Responsive UI with React, TypeScript, Tailwind & shadcn/ui — deployed on Vercel"
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI"],
    liveUrl: "https://studystack-market.vercel.app",
    githubUrl: "https://github.com/krutzia/CampusKart",
    accent: "var(--cosmos-violet)",
    mockup: "generic",
    image: shotCampusKart.url
  },
  {
    name: "CodeInsight",
    category: "Developer · AI Tool",
    tagline: "Automated code review & optimization",
    description: "Code analysis platform that reviews source files, flags issues, and returns optimization and debugging suggestions alongside a quality score.",
    highlights: [
      "Before/after diffs with line-by-line suggestions",
      "Developer-focused UX with secure auth and scalable REST services",
      "Built with React, TypeScript, Tailwind — deployed on Vercel"
    ],
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "OpenAI"],
    liveUrl: "https://code-insight-nine.vercel.app",
    githubUrl: "https://github.com/krutzia/CodeInsight",
    accent: "var(--cosmos-cyan)",
    mockup: "generic",
    image: shotCodeInsight.url
  },
  {
    name: "SmartLecture AI",
    category: "Edtech · AI Tool",
    tagline: "Turn lectures into study superpowers",
    description: "Upload a lecture recording and get transcripts, summaries, flashcards, and a study chatbot grounded in your own material — one workspace instead of five tools.",
    highlights: [
      "Audio transcription with generated summaries and flashcards",
      "Study buddy chatbot grounded in your own lecture content",
      "Playful, responsive UI deployed on Vercel"
    ],
    tech: ["React", "TypeScript", "AI APIs", "Tailwind CSS"],
    liveUrl: "https://smart-lecture-git-main-krutzias-projects.vercel.app",
    githubUrl: "https://github.com/krutzia/SmartLecture-AI",
    accent: "var(--cosmos-amber)",
    mockup: "generic",
    image: shotSmartLecture.url
  },
  {
    name: "Silo Study AI",
    category: "Edtech · AI Tool",
    tagline: "Adaptive study planner",
    description: "Creates personalized study plans that adapt to your progress, keeps you accountable with friends, and helps you crush every exam.",
    highlights: [
      "Adaptive study planning with content assistance",
      "Responsive modern UI for cross-device experience",
      "Backend APIs, database integration, and deployment workflows"
    ],
    tech: ["React", "Node.js", "AI APIs", "Tailwind CSS"],
    liveUrl: "https://silo-study-j0u6igfpu-krutzias-projects.vercel.app/",
    githubUrl: "https://github.com/krutzia/Silo-study-ai",
    accent: "var(--cosmos-pink)",
    mockup: "silo",
    image: shotSilo.url
  },
  {
    name: "FitTrack",
    category: "Fitness · Full Stack",
    tagline: "Fitness tracking platform",
    description: "Full-stack fitness web app to monitor workouts, progress, and health activities with a modern responsive UI.",
    highlights: [
      "Authentication, workout management, and progress tracking",
      "Built with React, Node.js, Express, and MongoDB",
      "Deployed on Vercel for seamless performance"
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://fittrack-ai-eta.vercel.app/",
    githubUrl: "https://github.com/krutzia/FitTrack",
    accent: "var(--cosmos-cyan)",
    mockup: "fittrack",
    image: shotFitTrack.url
  }
];
export const achievements = [
  { value: 500, suffix: "+", label: "LeetCode Problems Solved", sub: "DSA, algorithms & system design" },
  { value: 2, suffix: "", label: "AWS Certifications", sub: "Cloud & AI Practitioner" },
  { value: 8, suffix: "", label: "Full Stack Projects Shipped", sub: "Live in production" }
];
export const certifications = [
  {
    name: "AWS Cloud Practitioner Essentials",
    issuer: "AWS",
    detail: "Cloud fundamentals: compute, storage, networking, and security services."
  },
  {
    name: "AWS AI Practitioner Challenge",
    issuer: "Udacity · AWS",
    detail: "AI concepts and AWS AI services for modern cloud-based applications."
  }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUG9ydGZvbGlvIGNvbmZpZ3VyYXRpb24g4oCUIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGguXHJcbiAqL1xyXG5cclxuLy8gVXNlIGxvY2FsIHN0YXRpYyBwb3J0cmFpdCBmaWxlIGNvcGllZCBpbnRvIGBwdWJsaWMvYXNzZXRzL2AuXHJcbi8vIEtlcHQgYXMgYSBzdGF0aWMgcGF0aCB0byBwcmVzZXJ2ZSBleGFjdCBjcm9wcGluZyBhbmQgc3R5bGluZyBmcm9tIHRoZSBwdWJsaXNoZWQgc2l0ZS5cclxuY29uc3QgUE9SVFJBSVRfVVJMID0gXCIvYXNzZXRzL2thc2hpc2gtcG9ydHJhaXQuanBnXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlU29jaWFscyB9IGZyb20gXCJAL2xpYi9zb2NpYWwtbGlua3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlID0ge1xyXG4gIG5hbWU6IFwiS2FzaGlzaFwiLFxyXG4gIHRhZ2xpbmU6IFwiQnVpbGRpbmcgc2NhbGFibGUsIGludGVsbGlnZW50IHdlYiBleHBlcmllbmNlcy5cIixcclxuICBpbnRybzpcclxuICAgIFwiRmluYWwteWVhciBDb21wdXRlciBTY2llbmNlIHN0dWRlbnQgYXQgSlNTIEFjYWRlbXkgb2YgVGVjaG5pY2FsIEVkdWNhdGlvbiwgTm9pZGEg4oCUIHR1cm5pbmcgaWRlYXMgaW50byBwb2xpc2hlZCBmdWxsLXN0YWNrIHByb2R1Y3RzLlwiLFxyXG4gIGxvY2F0aW9uOiBcIk5vaWRhLCBJbmRpYVwiLFxyXG4gIGVtYWlsOiBcImthc2hpc2g4NjA0NThAZ21haWwuY29tXCIsXHJcbiAgcGhvbmU6IFwiKzkxIDg2MDQ1ODUxNjFcIixcclxuICBwb3J0cmFpdFVybDogUE9SVFJBSVRfVVJMLFxyXG4gIGVkdWNhdGlvbjoge1xyXG4gICAgc2Nob29sOiBcIkpTUyBBY2FkZW15IG9mIFRlY2huaWNhbCBFZHVjYXRpb24sIE5vaWRhXCIsXHJcbiAgICBkZWdyZWU6IFwiQi5UZWNoIGluIENvbXB1dGVyIFNjaWVuY2UgYW5kIEVuZ2luZWVyaW5nXCIsXHJcbiAgICBwZXJpb2Q6IFwiU2VwdCAyMDIzIOKAkyBNYXkgMjAyN1wiLFxyXG4gIH0sXHJcblxyXG4gIHJlc3VtZVVybDogXCIvcmVzdW1lLnBkZlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJvbGVzID0gW1xyXG4gIFwiRnVsbCBTdGFjayBEZXZlbG9wZXJcIixcclxuICBcIlJlYWN0IERldmVsb3BlclwiLFxyXG4gIFwiUHJvYmxlbSBTb2x2ZXJcIixcclxuICBcIlNvZnR3YXJlIEVuZ2luZWVyXCIsXHJcbl07XHJcblxyXG5jb25zdCByYXdTb2NpYWxzID0ge1xyXG4gIGdpdGh1YjogXCJodHRwczovL2dpdGh1Yi5jb20va3J1dHppYVwiLFxyXG4gIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rcnV0emlhL1wiLFxyXG4gIGxlZXRjb2RlOiBcImh0dHBzOi8vbGVldGNvZGUuY29tL3Uva3J1dHppYS9cIixcclxuICBlbWFpbDogXCJtYWlsdG86a2FzaGlzaDg2MDQ1OEBnbWFpbC5jb21cIixcclxufTtcclxuXHJcbi8qKiBWYWxpZGF0ZWQgKyBub3JtYWxpemVkIGF0IG1vZHVsZSBsb2FkIOKAlCB0eXBvcyBhcmUgbG9nZ2VkIGFuZCBhdXRvLWNvcnJlY3RlZC4gKi9cclxuZXhwb3J0IGNvbnN0IHNvY2lhbFZhbGlkYXRpb24gPSB2YWxpZGF0ZVNvY2lhbHMocmF3U29jaWFscyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc29jaWFscyA9IHNvY2lhbFZhbGlkYXRpb24uaHJlZnM7XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU2tpbGwgPSB7IG5hbWU6IHN0cmluZzsgbGV2ZWw6IG51bWJlciB9O1xyXG5leHBvcnQgdHlwZSBTa2lsbENhdGVnb3J5ID0ge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhY2NlbnQ6IHN0cmluZztcclxuICBza2lsbHM6IFNraWxsW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxDYXRlZ29yaWVzOiBTa2lsbENhdGVnb3J5W10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJGcm9udGVuZFwiLFxyXG4gICAgYWNjZW50OiBcInZhcigtLWNvc21vcy12aW9sZXQpXCIsXHJcbiAgICBza2lsbHM6IFtcclxuICAgICAgeyBuYW1lOiBcIlJlYWN0LmpzXCIsIGxldmVsOiA5MiB9LFxyXG4gICAgICB7IG5hbWU6IFwiTmV4dC5qc1wiLCBsZXZlbDogODIgfSxcclxuICAgICAgeyBuYW1lOiBcIlR5cGVTY3JpcHRcIiwgbGV2ZWw6IDg4IH0sXHJcbiAgICAgIHsgbmFtZTogXCJUYWlsd2luZCBDU1NcIiwgbGV2ZWw6IDkyIH0sXHJcbiAgICAgIHsgbmFtZTogXCJGaWdtYVwiLCBsZXZlbDogNzggfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkJhY2tlbmRcIixcclxuICAgIGFjY2VudDogXCJ2YXIoLS1jb3Ntb3MtY3lhbilcIixcclxuICAgIHNraWxsczogW1xyXG4gICAgICB7IG5hbWU6IFwiTm9kZS5qc1wiLCBsZXZlbDogODYgfSxcclxuICAgICAgeyBuYW1lOiBcIkV4cHJlc3MuanNcIiwgbGV2ZWw6IDg0IH0sXHJcbiAgICAgIHsgbmFtZTogXCJSRVNUIEFQSXNcIiwgbGV2ZWw6IDg4IH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBSSAmIExMTVwiLFxyXG4gICAgYWNjZW50OiBcInZhcigtLWNvc21vcy1waW5rKVwiLFxyXG4gICAgc2tpbGxzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJPcGVuQUkgQVBJXCIsIGxldmVsOiA4NSB9LFxyXG4gICAgICB7IG5hbWU6IFwiQ2xhdWRlIEFQSVwiLCBsZXZlbDogODAgfSxcclxuICAgICAgeyBuYW1lOiBcIlByb21wdCBFbmdpbmVlcmluZ1wiLCBsZXZlbDogODYgfSxcclxuICAgICAgeyBuYW1lOiBcIkVtYmVkZGluZ3NcIiwgbGV2ZWw6IDc0IH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJEYXRhYmFzZXNcIixcclxuICAgIGFjY2VudDogXCJ2YXIoLS1jb3Ntb3MtcGluaylcIixcclxuICAgIHNraWxsczogW1xyXG4gICAgICB7IG5hbWU6IFwiTW9uZ29EQlwiLCBsZXZlbDogODIgfSxcclxuICAgICAgeyBuYW1lOiBcIlBvc3RncmVTUUxcIiwgbGV2ZWw6IDc4IH0sXHJcbiAgICAgIHsgbmFtZTogXCJNeVNRTFwiLCBsZXZlbDogNzggfSxcclxuICAgICAgeyBuYW1lOiBcIlN1cGFiYXNlXCIsIGxldmVsOiA4NCB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRGV2ZWxvcGVyIFRvb2xzXCIsXHJcbiAgICBhY2NlbnQ6IFwidmFyKC0tY29zbW9zLWFtYmVyKVwiLFxyXG4gICAgc2tpbGxzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJHaXQgLyBHaXRIdWJcIiwgbGV2ZWw6IDkwIH0sXHJcbiAgICAgIHsgbmFtZTogXCJEb2NrZXJcIiwgbGV2ZWw6IDcwIH0sXHJcbiAgICAgIHsgbmFtZTogXCJMaW51eFwiLCBsZXZlbDogNzYgfSxcclxuICAgICAgeyBuYW1lOiBcIkFXU1wiLCBsZXZlbDogNzQgfSxcclxuICAgICAgeyBuYW1lOiBcIlZlcmNlbFwiLCBsZXZlbDogODYgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxhbmd1YWdlc1wiLFxyXG4gICAgYWNjZW50OiBcInZhcigtLWNvc21vcy1lbWVyYWxkKVwiLFxyXG4gICAgc2tpbGxzOiBbXHJcbiAgICAgIHsgbmFtZTogXCJDIC8gQysrXCIsIGxldmVsOiA5MCB9LFxyXG4gICAgICB7IG5hbWU6IFwiSmF2YVwiLCBsZXZlbDogODIgfSxcclxuICAgICAgeyBuYW1lOiBcIlB5dGhvblwiLCBsZXZlbDogODIgfSxcclxuICAgICAgeyBuYW1lOiBcIkphdmFTY3JpcHRcIiwgbGV2ZWw6IDkyIH0sXHJcbiAgICAgIHsgbmFtZTogXCJTUUxcIiwgbGV2ZWw6IDgyIH0sXHJcbiAgICAgIHsgbmFtZTogXCJIVE1MIC8gQ1NTXCIsIGxldmVsOiA5MiB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmltcG9ydCBzaG90Tm9tYWQgZnJvbSBcIkAvYXNzZXRzL3Nob3QtOS5wbmcuYXNzZXQuanNvblwiO1xyXG5pbXBvcnQgc2hvdE1lZGkgZnJvbSBcIkAvYXNzZXRzL3Nob3QtMTAucG5nLmFzc2V0Lmpzb25cIjtcclxuaW1wb3J0IHNob3RTaWxvIGZyb20gXCJAL2Fzc2V0cy9zaG90LTExLnBuZy5hc3NldC5qc29uXCI7XHJcbmltcG9ydCBzaG90U21hcnRMZWN0dXJlIGZyb20gXCJAL2Fzc2V0cy9zaG90LTEyLnBuZy5hc3NldC5qc29uXCI7XHJcbmltcG9ydCBzaG90UmVzdU1hdGNoIGZyb20gXCJAL2Fzc2V0cy9zaG90LTEzLnBuZy5hc3NldC5qc29uXCI7XHJcbmltcG9ydCBzaG90Q29kZUluc2lnaHQgZnJvbSBcIkAvYXNzZXRzL3Nob3QtMTQucG5nLmFzc2V0Lmpzb25cIjtcclxuaW1wb3J0IHNob3RDYW1wdXNLYXJ0IGZyb20gXCJAL2Fzc2V0cy9zaG90LTE1LnBuZy5hc3NldC5qc29uXCI7XHJcbmltcG9ydCBzaG90Rml0VHJhY2sgZnJvbSBcIkAvYXNzZXRzL3Nob3QtMTYucG5nLmFzc2V0Lmpzb25cIjtcclxuXHJcbmV4cG9ydCB0eXBlIFByb2plY3QgPSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGNhdGVnb3J5OiBzdHJpbmc7XHJcbiAgdGFnbGluZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaGlnaGxpZ2h0czogc3RyaW5nW107XHJcbiAgdGVjaDogc3RyaW5nW107XHJcbiAgbGl2ZVVybDogc3RyaW5nO1xyXG4gIGdpdGh1YlVybD86IHN0cmluZztcclxuICBhY2NlbnQ6IHN0cmluZztcclxuICBtb2NrdXA6IFwicmVzdW1hdGNoXCIgfCBcImZpdHRyYWNrXCIgfCBcInNpbG9cIiB8IFwiZ2VuZXJpY1wiO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJNZWRpQ29tcGFyZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiSGVhbHRoY2FyZSDCtyBXZWIgQXBwXCIsXHJcbiAgICB0YWdsaW5lOiBcIkNvbXBhcmUgbWVkaWNhbCB0ZXN0IHByaWNlcyBhY3Jvc3MgaG9zcGl0YWxzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJQcmljZSB0cmFuc3BhcmVuY3kgZm9yIGhlYWx0aGNhcmUg4oCUIGNvbXBhcmUgTVJJIHNjYW5zLCBibG9vZCB0ZXN0cywgYW5kIGNvbnN1bHRhdGlvbnMgYWNyb3NzIHZlcmlmaWVkIGhvc3BpdGFscywgd2l0aCByZWFsIGF2YWlsYWJpbGl0eSBhbmQgY2xlYXIgc2F2aW5ncyBiZWZvcmUgeW91IGJvb2suXCIsXHJcbiAgICBoaWdobGlnaHRzOiBbXHJcbiAgICAgIFwiUmljaCBjb21wYXJpc29uIFVJIHdpdGggc2VhcmNoLCBmaWx0ZXJzLCBhbmQgc2F2aW5ncyBpbnNpZ2h0c1wiLFxyXG4gICAgICBcIlR5cGVTY3JpcHQtZmlyc3QgYXJjaGl0ZWN0dXJlIHdpdGggcmV1c2FibGUgY29tcG9uZW50IHByaW1pdGl2ZXNcIixcclxuICAgICAgXCJEZXBsb3llZCBvbiBWZXJjZWwgd2l0aCBmYXN0LCBtb2JpbGUtZmlyc3QgcGVyZm9ybWFuY2VcIixcclxuICAgIF0sXHJcbiAgICB0ZWNoOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJUYWlsd2luZCBDU1NcIiwgXCJWZXJjZWxcIl0sXHJcbiAgICBsaXZlVXJsOiBcImh0dHBzOi8vbWVkaS1jb21wYXJlLXRoZXRhLnZlcmNlbC5hcHBcIixcclxuICAgIGdpdGh1YlVybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J1dHppYS9NZWRpQ29tcGFyZVwiLFxyXG4gICAgYWNjZW50OiBcInZhcigtLWNvc21vcy1lbWVyYWxkKVwiLFxyXG4gICAgbW9ja3VwOiBcImdlbmVyaWNcIixcclxuICAgIGltYWdlOiBzaG90TWVkaS51cmwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIk5vbWFkXCIsXHJcbiAgICBjYXRlZ29yeTogXCJUcmF2ZWwgwrcgV2ViIEFwcFwiLFxyXG4gICAgdGFnbGluZTogXCJDb2xsYWJvcmF0aXZlIHRyaXAgcGxhbm5lciBmb3IgY3Jld3NcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRyaXAgcGxhbm5pbmcgYXBwIHRoYXQgdHVybnMgYSBzaW5nbGUgZHJhZ2dhYmxlIHJvdXRlIGludG8gZGF5LWJ5LWRheSBpdGluZXJhcmllcywgYnVkZ2V0cywgcGFja2luZyBsaXN0cywgYW5kIHJlYWwtdGltZSBjb21wYW5pb25zIOKAlCBrZWVwaW5nIGV2ZXJ5IGFkdmVudHVyZXIgb24gdGhlIHNhbWUgcGFnZS5cIixcclxuICAgIGhpZ2hsaWdodHM6IFtcclxuICAgICAgXCJEcmFnZ2FibGUgcm91dGUgYnVpbGRlciB3aXRoIGRheS1ieS1kYXkgaXRpbmVyYXJ5IGdlbmVyYXRpb25cIixcclxuICAgICAgXCJSZWFsLXRpbWUgY29sbGFib3JhdGlvbiwgYnVkZ2V0cywgYW5kIHNoYXJlZCBwYWNraW5nIGxpc3RzXCIsXHJcbiAgICAgIFwiV29ya3Mgb2ZmbGluZSBhbmQgc2hhcmVhYmxlIHdpdGggYW55b25lIOKAlCBubyBjcmVkaXQgY2FyZCBuZWVkZWRcIixcclxuICAgIF0sXHJcbiAgICB0ZWNoOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJUYWlsd2luZCBDU1NcIiwgXCJWZXJjZWxcIl0sXHJcbiAgICBsaXZlVXJsOiBcImh0dHBzOi8vbm9tYWQtZmF3bi10YXUudmVyY2VsLmFwcFwiLFxyXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rcnV0emlhL05vbWFkXCIsXHJcbiAgICBhY2NlbnQ6IFwidmFyKC0tY29zbW9zLWVtZXJhbGQpXCIsXHJcbiAgICBtb2NrdXA6IFwiZ2VuZXJpY1wiLFxyXG4gICAgaW1hZ2U6IHNob3ROb21hZC51cmwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlJlc3VNYXRjaFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiQ2FyZWVyIMK3IEFJIFRvb2xcIixcclxuICAgIHRhZ2xpbmU6IFwiUmVzdW1lIGFuYWx5c2lzICYgQVRTIHNjb3JpbmdcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIk1hdGNoZXMgYSByZXN1bWUgYWdhaW5zdCBhIGpvYiBkZXNjcmlwdGlvbiB0byBwcm9kdWNlIGFuIEFUUyBzY29yZSwgc3VyZmFjZSBtaXNzaW5nIHNraWxscywgYW5kIHJlY29tbWVuZCBjb25jcmV0ZSByZXdyaXRlcyDigJQgd2l0aCBwYXJzaW5nLCBhdXRoLCBhbmQgc3RvcmFnZSBoYW5kbGVkIGVuZCB0byBlbmQuXCIsXHJcbiAgICBoaWdobGlnaHRzOiBbXHJcbiAgICAgIFwiUmVzdW1lIHVwbG9hZCAmIHBhcnNpbmcgd2l0aCBTdXBhYmFzZSBTdG9yYWdlICsgQXV0aFwiLFxyXG4gICAgICBcIlNjb3JpbmcgYW5kIHJld3JpdGUgc3VnZ2VzdGlvbnMgdmlhIHNlcnZlcmxlc3MgRWRnZSBGdW5jdGlvbnNcIixcclxuICAgICAgXCJQZXJzb25hbGl6ZWQgZGFzaGJvYXJkcyB3aXRoIGZpbHRlcmluZyBhbmQgam9iIHJlY29tbWVuZGF0aW9uc1wiLFxyXG4gICAgXSxcclxuICAgIHRlY2g6IFtcIlJlYWN0XCIsIFwiVHlwZVNjcmlwdFwiLCBcIlN1cGFiYXNlXCIsIFwiVGFpbHdpbmQgQ1NTXCIsIFwiRnJhbWVyIE1vdGlvblwiXSxcclxuICAgIGxpdmVVcmw6IFwiaHR0cHM6Ly9haS1wb3dlcmVkLXJlc3VtZS1hbmQtam9ibWF0Y2hlci52ZXJjZWwuYXBwL1wiLFxyXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rcnV0emlhL2FpLXBvd2VyZWQtcmVzdW1lLWFuZC1qb2JtYXRjaGVyXCIsXHJcbiAgICBhY2NlbnQ6IFwidmFyKC0tY29zbW9zLXZpb2xldClcIixcclxuICAgIG1vY2t1cDogXCJyZXN1bWF0Y2hcIixcclxuICAgIGltYWdlOiBzaG90UmVzdU1hdGNoLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQ2FtcHVzS2FydFwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiTWFya2V0cGxhY2UgwrcgRnVsbCBTdGFja1wiLFxyXG4gICAgdGFnbGluZTogXCJDYW1wdXMgbWFya2V0cGxhY2UgZm9yIHN0dWRlbnRzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGdWxsLXN0YWNrIG1hcmtldHBsYWNlIGZvciBjb2xsZWdlIHN0dWRlbnRzIHRvIGJ1eSwgc2VsbCwgYW5kIGRpc2NvdmVyIHN0dWR5IHJlc291cmNlcyDigJQgd2l0aCBsaXN0aW5nIG1hbmFnZW1lbnQsIHNlYXJjaCwgYW5kIHJlY29tbWVuZGF0aW9ucyBidWlsdCBvbiBhIFJFU1QgQVBJLlwiLFxyXG4gICAgaGlnaGxpZ2h0czogW1xyXG4gICAgICBcIkFzc2lzdGVkIGxpc3RpbmcgZGVzY3JpcHRpb25zIGFuZCByZWxldmFuY2UtcmFua2VkIHJlY29tbWVuZGF0aW9uc1wiLFxyXG4gICAgICBcIlNlY3VyZSBSRVNUIEFQSXMsIGF1dGgsIHByb2R1Y3QgbWFuYWdlbWVudCBvbiBOb2RlICsgRXhwcmVzcyArIE1vbmdvREJcIixcclxuICAgICAgXCJSZXNwb25zaXZlIFVJIHdpdGggUmVhY3QsIFR5cGVTY3JpcHQsIFRhaWx3aW5kICYgc2hhZGNuL3VpIOKAlCBkZXBsb3llZCBvbiBWZXJjZWxcIixcclxuICAgIF0sXHJcbiAgICB0ZWNoOiBbXCJSZWFjdFwiLCBcIlR5cGVTY3JpcHRcIiwgXCJOb2RlLmpzXCIsIFwiRXhwcmVzc1wiLCBcIk1vbmdvREJcIiwgXCJPcGVuQUlcIl0sXHJcbiAgICBsaXZlVXJsOiBcImh0dHBzOi8vc3R1ZHlzdGFjay1tYXJrZXQudmVyY2VsLmFwcFwiLFxyXG4gICAgZ2l0aHViVXJsOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9rcnV0emlhL0NhbXB1c0thcnRcIixcclxuICAgIGFjY2VudDogXCJ2YXIoLS1jb3Ntb3MtdmlvbGV0KVwiLFxyXG4gICAgbW9ja3VwOiBcImdlbmVyaWNcIixcclxuICAgIGltYWdlOiBzaG90Q2FtcHVzS2FydC51cmwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNvZGVJbnNpZ2h0XCIsXHJcbiAgICBjYXRlZ29yeTogXCJEZXZlbG9wZXIgwrcgQUkgVG9vbFwiLFxyXG4gICAgdGFnbGluZTogXCJBdXRvbWF0ZWQgY29kZSByZXZpZXcgJiBvcHRpbWl6YXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIkNvZGUgYW5hbHlzaXMgcGxhdGZvcm0gdGhhdCByZXZpZXdzIHNvdXJjZSBmaWxlcywgZmxhZ3MgaXNzdWVzLCBhbmQgcmV0dXJucyBvcHRpbWl6YXRpb24gYW5kIGRlYnVnZ2luZyBzdWdnZXN0aW9ucyBhbG9uZ3NpZGUgYSBxdWFsaXR5IHNjb3JlLlwiLFxyXG4gICAgaGlnaGxpZ2h0czogW1xyXG4gICAgICBcIkJlZm9yZS9hZnRlciBkaWZmcyB3aXRoIGxpbmUtYnktbGluZSBzdWdnZXN0aW9uc1wiLFxyXG4gICAgICBcIkRldmVsb3Blci1mb2N1c2VkIFVYIHdpdGggc2VjdXJlIGF1dGggYW5kIHNjYWxhYmxlIFJFU1Qgc2VydmljZXNcIixcclxuICAgICAgXCJCdWlsdCB3aXRoIFJlYWN0LCBUeXBlU2NyaXB0LCBUYWlsd2luZCDigJQgZGVwbG95ZWQgb24gVmVyY2VsXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaDogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiTm9kZS5qc1wiLCBcIlRhaWx3aW5kIENTU1wiLCBcIk9wZW5BSVwiXSxcclxuICAgIGxpdmVVcmw6IFwiaHR0cHM6Ly9jb2RlLWluc2lnaHQtbmluZS52ZXJjZWwuYXBwXCIsXHJcbiAgICBnaXRodWJVcmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2tydXR6aWEvQ29kZUluc2lnaHRcIixcclxuICAgIGFjY2VudDogXCJ2YXIoLS1jb3Ntb3MtY3lhbilcIixcclxuICAgIG1vY2t1cDogXCJnZW5lcmljXCIsXHJcbiAgICBpbWFnZTogc2hvdENvZGVJbnNpZ2h0LnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU21hcnRMZWN0dXJlIEFJXCIsXHJcbiAgICBjYXRlZ29yeTogXCJFZHRlY2ggwrcgQUkgVG9vbFwiLFxyXG4gICAgdGFnbGluZTogXCJUdXJuIGxlY3R1cmVzIGludG8gc3R1ZHkgc3VwZXJwb3dlcnNcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlVwbG9hZCBhIGxlY3R1cmUgcmVjb3JkaW5nIGFuZCBnZXQgdHJhbnNjcmlwdHMsIHN1bW1hcmllcywgZmxhc2hjYXJkcywgYW5kIGEgc3R1ZHkgY2hhdGJvdCBncm91bmRlZCBpbiB5b3VyIG93biBtYXRlcmlhbCDigJQgb25lIHdvcmtzcGFjZSBpbnN0ZWFkIG9mIGZpdmUgdG9vbHMuXCIsXHJcbiAgICBoaWdobGlnaHRzOiBbXHJcbiAgICAgIFwiQXVkaW8gdHJhbnNjcmlwdGlvbiB3aXRoIGdlbmVyYXRlZCBzdW1tYXJpZXMgYW5kIGZsYXNoY2FyZHNcIixcclxuICAgICAgXCJTdHVkeSBidWRkeSBjaGF0Ym90IGdyb3VuZGVkIGluIHlvdXIgb3duIGxlY3R1cmUgY29udGVudFwiLFxyXG4gICAgICBcIlBsYXlmdWwsIHJlc3BvbnNpdmUgVUkgZGVwbG95ZWQgb24gVmVyY2VsXCIsXHJcbiAgICBdLFxyXG4gICAgdGVjaDogW1wiUmVhY3RcIiwgXCJUeXBlU2NyaXB0XCIsIFwiQUkgQVBJc1wiLCBcIlRhaWx3aW5kIENTU1wiXSxcclxuICAgIGxpdmVVcmw6IFwiaHR0cHM6Ly9zbWFydC1sZWN0dXJlLWdpdC1tYWluLWtydXR6aWFzLXByb2plY3RzLnZlcmNlbC5hcHBcIixcclxuICAgIGdpdGh1YlVybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J1dHppYS9TbWFydExlY3R1cmUtQUlcIixcclxuICAgIGFjY2VudDogXCJ2YXIoLS1jb3Ntb3MtYW1iZXIpXCIsXHJcbiAgICBtb2NrdXA6IFwiZ2VuZXJpY1wiLFxyXG4gICAgaW1hZ2U6IHNob3RTbWFydExlY3R1cmUudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTaWxvIFN0dWR5IEFJXCIsXHJcbiAgICBjYXRlZ29yeTogXCJFZHRlY2ggwrcgQUkgVG9vbFwiLFxyXG4gICAgdGFnbGluZTogXCJBZGFwdGl2ZSBzdHVkeSBwbGFubmVyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJDcmVhdGVzIHBlcnNvbmFsaXplZCBzdHVkeSBwbGFucyB0aGF0IGFkYXB0IHRvIHlvdXIgcHJvZ3Jlc3MsIGtlZXBzIHlvdSBhY2NvdW50YWJsZSB3aXRoIGZyaWVuZHMsIGFuZCBoZWxwcyB5b3UgY3J1c2ggZXZlcnkgZXhhbS5cIixcclxuICAgIGhpZ2hsaWdodHM6IFtcclxuICAgICAgXCJBZGFwdGl2ZSBzdHVkeSBwbGFubmluZyB3aXRoIGNvbnRlbnQgYXNzaXN0YW5jZVwiLFxyXG4gICAgICBcIlJlc3BvbnNpdmUgbW9kZXJuIFVJIGZvciBjcm9zcy1kZXZpY2UgZXhwZXJpZW5jZVwiLFxyXG4gICAgICBcIkJhY2tlbmQgQVBJcywgZGF0YWJhc2UgaW50ZWdyYXRpb24sIGFuZCBkZXBsb3ltZW50IHdvcmtmbG93c1wiLFxyXG4gICAgXSxcclxuICAgIHRlY2g6IFtcIlJlYWN0XCIsIFwiTm9kZS5qc1wiLCBcIkFJIEFQSXNcIiwgXCJUYWlsd2luZCBDU1NcIl0sXHJcbiAgICBsaXZlVXJsOiBcImh0dHBzOi8vc2lsby1zdHVkeS1qMHU2aWdmcHUta3J1dHppYXMtcHJvamVjdHMudmVyY2VsLmFwcC9cIixcclxuICAgIGdpdGh1YlVybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J1dHppYS9TaWxvLXN0dWR5LWFpXCIsXHJcbiAgICBhY2NlbnQ6IFwidmFyKC0tY29zbW9zLXBpbmspXCIsXHJcbiAgICBtb2NrdXA6IFwic2lsb1wiLFxyXG4gICAgaW1hZ2U6IHNob3RTaWxvLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRml0VHJhY2tcIixcclxuICAgIGNhdGVnb3J5OiBcIkZpdG5lc3MgwrcgRnVsbCBTdGFja1wiLFxyXG4gICAgdGFnbGluZTogXCJGaXRuZXNzIHRyYWNraW5nIHBsYXRmb3JtXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJGdWxsLXN0YWNrIGZpdG5lc3Mgd2ViIGFwcCB0byBtb25pdG9yIHdvcmtvdXRzLCBwcm9ncmVzcywgYW5kIGhlYWx0aCBhY3Rpdml0aWVzIHdpdGggYSBtb2Rlcm4gcmVzcG9uc2l2ZSBVSS5cIixcclxuICAgIGhpZ2hsaWdodHM6IFtcclxuICAgICAgXCJBdXRoZW50aWNhdGlvbiwgd29ya291dCBtYW5hZ2VtZW50LCBhbmQgcHJvZ3Jlc3MgdHJhY2tpbmdcIixcclxuICAgICAgXCJCdWlsdCB3aXRoIFJlYWN0LCBOb2RlLmpzLCBFeHByZXNzLCBhbmQgTW9uZ29EQlwiLFxyXG4gICAgICBcIkRlcGxveWVkIG9uIFZlcmNlbCBmb3Igc2VhbWxlc3MgcGVyZm9ybWFuY2VcIixcclxuICAgIF0sXHJcbiAgICB0ZWNoOiBbXCJSZWFjdFwiLCBcIk5vZGUuanNcIiwgXCJFeHByZXNzXCIsIFwiTW9uZ29EQlwiLCBcIlRhaWx3aW5kIENTU1wiXSxcclxuICAgIGxpdmVVcmw6IFwiaHR0cHM6Ly9maXR0cmFjay1haS1ldGEudmVyY2VsLmFwcC9cIixcclxuICAgIGdpdGh1YlVybDogXCJodHRwczovL2dpdGh1Yi5jb20va3J1dHppYS9GaXRUcmFja1wiLFxyXG4gICAgYWNjZW50OiBcInZhcigtLWNvc21vcy1jeWFuKVwiLFxyXG4gICAgbW9ja3VwOiBcImZpdHRyYWNrXCIsXHJcbiAgICBpbWFnZTogc2hvdEZpdFRyYWNrLnVybCxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IHR5cGUgQWNoaWV2ZW1lbnQgPSB7XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBzdWZmaXg/OiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzdWI/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWNoaWV2ZW1lbnRzOiBBY2hpZXZlbWVudFtdID0gW1xyXG4gIHsgdmFsdWU6IDUwMCwgc3VmZml4OiBcIitcIiwgbGFiZWw6IFwiTGVldENvZGUgUHJvYmxlbXMgU29sdmVkXCIsIHN1YjogXCJEU0EsIGFsZ29yaXRobXMgJiBzeXN0ZW0gZGVzaWduXCIgfSxcclxuICB7IHZhbHVlOiAyLCBzdWZmaXg6IFwiXCIsIGxhYmVsOiBcIkFXUyBDZXJ0aWZpY2F0aW9uc1wiLCBzdWI6IFwiQ2xvdWQgJiBBSSBQcmFjdGl0aW9uZXJcIiB9LFxyXG4gIHsgdmFsdWU6IDgsIHN1ZmZpeDogXCJcIiwgbGFiZWw6IFwiRnVsbCBTdGFjayBQcm9qZWN0cyBTaGlwcGVkXCIsIHN1YjogXCJMaXZlIGluIHByb2R1Y3Rpb25cIiB9LFxyXG5dO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjZXJ0aWZpY2F0aW9ucyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkFXUyBDbG91ZCBQcmFjdGl0aW9uZXIgRXNzZW50aWFsc1wiLFxyXG4gICAgaXNzdWVyOiBcIkFXU1wiLFxyXG4gICAgZGV0YWlsOiBcIkNsb3VkIGZ1bmRhbWVudGFsczogY29tcHV0ZSwgc3RvcmFnZSwgbmV0d29ya2luZywgYW5kIHNlY3VyaXR5IHNlcnZpY2VzLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBV1MgQUkgUHJhY3RpdGlvbmVyIENoYWxsZW5nZVwiLFxyXG4gICAgaXNzdWVyOiBcIlVkYWNpdHkgwrcgQVdTXCIsXHJcbiAgICBkZXRhaWw6IFwiQUkgY29uY2VwdHMgYW5kIEFXUyBBSSBzZXJ2aWNlcyBmb3IgbW9kZXJuIGNsb3VkLWJhc2VkIGFwcGxpY2F0aW9ucy5cIixcclxuICB9LFxyXG5dO1xyXG4iXSwibWFwcGluZ3MiOiJBQU1BLE1BQU0sZUFBZTtBQUNyQixTQUFTLHVCQUF1QjtBQUV6QixhQUFNLFVBQVU7QUFBQSxFQUNyQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsRUFDVCxPQUNFO0FBQUEsRUFDRixVQUFVO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsRUFDVjtBQUFBLEVBRUEsV0FBVztBQUNiO0FBRU8sYUFBTSxRQUFRO0FBQUEsRUFDbkI7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFDRjtBQUVBLE1BQU0sYUFBYTtBQUFBLEVBQ2pCLFFBQVE7QUFBQSxFQUNSLFVBQVU7QUFBQSxFQUNWLFVBQVU7QUFBQSxFQUNWLE9BQU87QUFDVDtBQUdPLGFBQU0sbUJBQW1CLGdCQUFnQixVQUFVO0FBRW5ELGFBQU0sVUFBVSxpQkFBaUI7QUFVakMsYUFBTSxrQkFBbUM7QUFBQSxFQUM5QztBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLE1BQ04sRUFBRSxNQUFNLFlBQVksT0FBTyxHQUFHO0FBQUEsTUFDOUIsRUFBRSxNQUFNLFdBQVcsT0FBTyxHQUFHO0FBQUEsTUFDN0IsRUFBRSxNQUFNLGNBQWMsT0FBTyxHQUFHO0FBQUEsTUFDaEMsRUFBRSxNQUFNLGdCQUFnQixPQUFPLEdBQUc7QUFBQSxNQUNsQyxFQUFFLE1BQU0sU0FBUyxPQUFPLEdBQUc7QUFBQSxJQUM3QjtBQUFBLEVBQ0Y7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsTUFDTixFQUFFLE1BQU0sV0FBVyxPQUFPLEdBQUc7QUFBQSxN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
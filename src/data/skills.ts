import type { LucideIcon } from "lucide-react";
import { Code, Cloud, Database, Globe, Settings } from "lucide-react";

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  colorClass: string;
  gradientClass: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Globe,
    colorClass: "text-accent-neon",
    gradientClass: "from-accent-neon/20 to-accent-neon/5",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Bootstrap", level: 88 },
      { name: "Responsive Design", level: 92 },
      { name: "PWA", level: 80 },
      { name: "Performance Optimization", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: Code,
    colorClass: "text-accent-electric",
    gradientClass: "from-accent-electric/20 to-accent-electric/5",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "RESTful APIs", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "Microservices", level: 75 },
      { name: "Auth (Authentication & Authorization)", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    colorClass: "text-accent-neon",
    gradientClass: "from-accent-neon/20 to-accent-neon/5",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Firebase", level: 80 },
      { name: "Convex", level: 70 },
      { name: "MongoDB", level: 80 },
      { name: "Database Optimization", level: 80 },
      { name: "Data Migration & Recovery", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    colorClass: "text-accent-purple",
    gradientClass: "from-accent-purple/20 to-accent-purple/5",
    skills: [
      { name: "AWS (EC2, S3, IAM, Lambda)", level: 80 },
      { name: "Vercel", level: 85 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Git & GitHub Actions", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Server Management", level: 85 },
    ],
  },
  {
    title: "IT Support",
    icon: Settings,
    colorClass: "text-accent-electric",
    gradientClass: "from-accent-electric/20 to-accent-electric/5",
    skills: [
      { name: "Network Design & Implementation", level: 88 },
      { name: "LAN/WAN Configuration", level: 88 },
      { name: "Hardware Diagnostics", level: 90 },
      { name: "System Administration", level: 85 },
    ],
  },
];

export const coreCompetencies = [
  "Full-Stack Development",
  "Cloud Architecture",
  "Network Administration",
  "System Integration",
  "Digital Transformation",
  "Agile Methodologies",
  "UI/UX Design",
  "Database Management",
  "DevOps Practices",
  "Technical Leadership",
];

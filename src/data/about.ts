import type { LucideIcon } from "lucide-react";
import { BookOpen, Code, Gamepad2, Heart, MapPin, Phone, Mail } from "lucide-react";

export type Interest = {
  icon: LucideIcon;
  label: string;
  colorClass: string;
};

export type AchievementStat = {
  label: string;
  value: string;
  colorClass: string;
};

export type Language = {
  name: string;
  proficiency: string;
  progressClass: string;
  progressWidth: string;
  labelClass: string;
};

export const professionalSummary: string[] = [
  "Dynamic Fullstack Engineer and ICT professional with 4+ years of experience delivering end-to-end digital solutions across government, legal, and private sectors. Expertise spans full-stack web development, enterprise IT infrastructure management, and user-centric design. Proven track record of architecting scalable applications, optimizing system performance, and leading digital transformation initiatives.",
  "Passionate about leveraging cutting-edge technologies to solve complex business challenges while ensuring robust security and exceptional user experiences.",
];

export const interests: Interest[] = [
  { icon: BookOpen, label: "Reading", colorClass: "text-accent-electric" },
  { icon: Code, label: "Programming", colorClass: "text-accent-neon" },
  { icon: Gamepad2, label: "Chess", colorClass: "text-accent-purple" },
  { icon: Heart, label: "Swimming", colorClass: "text-accent-pink" },
];

export const achievementStats: AchievementStat[] = [
  { value: "200+", label: "Staff Supported", colorClass: "text-accent-electric" },
  { value: "99.9%", label: "System Uptime", colorClass: "text-accent-neon" },
  { value: "25%", label: "Response Improvement", colorClass: "text-accent-purple" },
  { value: "6+", label: "Websites Built", colorClass: "text-accent-pink" },
];

export const languages: Language[] = [
  {
    name: "English",
    proficiency: "Fluent",
    progressClass: "bg-gradient-primary",
    progressWidth: "w-full",
    labelClass: "text-accent-electric",
  },
  {
    name: "Kiswahili",
    proficiency: "Conversational",
    progressClass: "bg-gradient-secondary",
    progressWidth: "w-3/4",
    labelClass: "text-accent-neon",
  },
];

export type ContactDetail = {
  icon: LucideIcon;
  value: string;
  colorClass: string;
};

export const contactDetails: ContactDetail[] = [
  { icon: MapPin, value: "Gatundu, Kenya", colorClass: "text-accent-electric" },
  { icon: Phone, value: "+254 792 618 156", colorClass: "text-accent-neon" },
  { icon: Mail, value: "wrootmike@gmail.com", colorClass: "text-accent-purple" },
];

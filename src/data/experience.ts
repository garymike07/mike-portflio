import type { LucideIcon } from "lucide-react";
import { Award, Shield, Users, TrendingUp } from "lucide-react";

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  icon: LucideIcon;
  badgeClassName: string;
  dotClassName: string;
  gradientClassName: string;
  iconClassName: string;
};

export const experiences: ExperienceItem[] = [
  {
    title: "ICT Intern",
    company: "Council of Legal Education",
    period: "Jan 2024 – Feb 2025",
    location: "Kenya",
    type: "Internship",
    description:
      "Delivered comprehensive tier-1 & tier-2 IT support and led key digital initiatives across the organization.",
    achievements: [
      "Delivered comprehensive tier-1 & tier-2 IT support to 200+ staff across four regional offices.",
      "Engineered PowerShell automation scripts reducing incident response time by 25%.",
      "Orchestrated enterprise-wide migration to SharePoint Online with zero data loss.",
      "Implemented robust backup strategies ensuring 99.9% system availability.",
      "Conducted staff training sessions increasing digital literacy across organization.",
    ],
    icon: Award,
    badgeClassName: "bg-accent-electric/20 text-accent-electric",
    dotClassName: "bg-accent-electric",
    gradientClassName: "from-accent-electric/20 to-accent-electric/5",
    iconClassName: "text-accent-electric",
  },
  {
    title: "IEBC ICT Officer",
    company: "Independent Electoral & Boundaries Commission – Gatundu South",
    period: "Aug 2022",
    location: "Kenya",
    type: "Contract",
    description:
      "Configured, maintained, and supported election technology infrastructure during a critical period.",
    achievements: [
      "Configured and maintained 80+ KEIMS kits achieving 99.9% uptime during elections.",
      "Architected secure LAN/WAN infrastructure for constituency tallying center.",
      "Provided real-time network troubleshooting with <5 minute resolution time.",
      "Trained 100+ temporary election clerks on system operation.",
      "Developed emergency response procedures adopted by other constituencies.",
    ],
    icon: Shield,
    badgeClassName: "bg-accent-neon/20 text-accent-neon",
    dotClassName: "bg-accent-neon",
    gradientClassName: "from-accent-neon/20 to-accent-neon/5",
    iconClassName: "text-accent-neon",
  },
  {
    title: "ICT Attaché",
    company: "Gatundu Law Courts",
    period: "Jan 2023 – Apr 2023",
    location: "Gatundu, Kenya",
    type: "Attachment",
    description:
      "Maintained systems and improved process efficiency within the judiciary environment.",
    achievements: [
      "Managed high-priority support tickets maintaining 95% SLA compliance.",
      "Performed weekly updates on Judiciary Case Management System (CMS).",
      "Created comprehensive network documentation and SOPs.",
      "Implemented proactive monitoring reducing system downtime by 40%.",
      "Collaborated with legal staff to improve case processing efficiency.",
    ],
    icon: Users,
    badgeClassName: "bg-accent-purple/20 text-accent-purple",
    dotClassName: "bg-accent-purple",
    gradientClassName: "from-accent-purple/20 to-accent-purple/5",
    iconClassName: "text-accent-purple",
  },
  {
    title: "Junior Software Developer (Freelance)",
    company: "Self-Employed",
    period: "Jul 2021 – Feb 2022",
    location: "Remote",
    type: "Freelance",
    description:
      "Built and optimized client-facing web applications and integrations with a focus on performance and SEO.",
    achievements: [
      "Architected and deployed 6 responsive, SEO-optimized websites using React.",
      "Integrated payment systems (PayPal, M-Pesa APIs) generating 40% revenue increase.",
      "Developed reusable React components reducing development time by 30%.",
      "Achieved 50% faster page load times through performance optimization.",
      "Established long-term client relationships with 90% retention rate.",
    ],
    icon: TrendingUp,
    badgeClassName: "bg-accent-pink/20 text-accent-pink",
    dotClassName: "bg-accent-pink",
    gradientClassName: "from-accent-pink/20 to-accent-pink/5",
    iconClassName: "text-accent-pink",
  },
];

export const ongoingWork = {
  title: "Freelance Graphic Designer",
  period: "Feb 2021 – Present",
  description: "Created 50+ brand identity packages and delivered end-to-end design solutions.",
  stats:
    "80% of clients reported increased engagement; productivity up 60% via automated workflows",
};

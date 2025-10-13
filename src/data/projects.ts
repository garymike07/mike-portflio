export type Project = {
  id: string;
  title: string;
  summary: string;
  contributions: string[];
  techStack: string[];
  image: string;
  imageWebp: string;
  url: string;
  roleLabel: string;
  metrics: string;
};

export const featuredProjects: Project[] = [
  {
    id: "taxease",
    title: "TaxEase Compliance Portal",
    summary:
      "A streamlined web portal guiding small businesses through tax preparation, filings, and compliance tracking with step-by-step workflows.",
    contributions: [
      "Implemented guided filing wizard with contextual tips and validation at every step.",
      "Connected financial data inputs to dynamic calculators for instant liability estimates.",
      "Optimized responsive layouts so filers can complete workflows comfortably on mobile.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/taxease-thumbnail.png",
    imageWebp: "/taxease-thumbnail.webp",
    url: "https://taxease-one.vercel.app/",
    roleLabel: "Product Engineer",
    metrics: "5-step guided flow | 98% task completion in user tests",
  },
  {
    id: "net-ten",
    title: "Net Ten Digital Services",
    summary:
      "A polished services microsite spotlighting managed network support, cybersecurity readiness, and rapid response capabilities for Kenyan SMEs.",
    contributions: [
      "Implemented scroll-triggered storytelling that guides visitors through each service pillar.",
      "Crafted high-contrast hero and CTA sections to drive consultation requests.",
      "Optimized responsive layouts to maintain clarity across desktop, tablet, and mobile breakpoints.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/placeholder.svg",
    imageWebp: "/placeholder.svg",
    url: "https://net-ten-delta.vercel.app/",
    roleLabel: "Lead Frontend Engineer",
    metrics: "3 core service tracks | Contact CTA above-the-fold",
  },
];

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
    id: "techlearn",
    title: "TechLearn LMS Platform",
    summary:
      "An interactive learning management system providing curated tech courses, instructor dashboards, and progress tracking for students.",
    contributions: [
      "Architected responsive course browsing experience with animated hero and trackable milestones.",
      "Integrated reusable UI patterns powered by shadcn/ui for consistent design language.",
      "Optimized content delivery for fast navigation across modules and lessons.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "/techlearn-thumbnail.png",
    imageWebp: "/techlearn-thumbnail.webp",
    url: "https://techlearn-pi.vercel.app/",
    roleLabel: "Product Lead",
    metrics: "1k+ demo visitors | Sub-second route transitions",
  },
  {
    id: "network-three-tau",
    title: "Network Infrastructure Showcase",
    summary:
      "A modern landing experience highlighting enterprise network services, on-prem support, and managed cloud monitoring.",
    contributions: [
      "Crafted narrative-driven sections weaving together services, testimonials, and call-to-actions.",
      "Implemented gradient-heavy glassmorphism system for premium visual storytelling.",
      "Delivered accessibility-friendly layout with keyboard and screen reader support.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/network-three-tau-thumbnail.png",
    imageWebp: "/network-three-tau-thumbnail.webp",
    url: "https://network-three-tau.vercel.app/",
    roleLabel: "Lead Frontend Engineer",
    metrics: "4 service verticals | 100% Lighthouse accessibility score",
  },
  {
    id: "artful-bice",
    title: "Artful Creative Studio",
    summary:
      "A bold portfolio for a creative studio featuring gallery reels, service breakdowns, and brand storytelling moments.",
    contributions: [
      "Designed immersive hero transitions with layered parallax and spotlight effects.",
      "Built modular content blocks enabling rapid iteration on campaigns and offerings.",
      "Optimized imagery with lazy loading strategies to keep interactions smooth.",
    ],
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/artful-bice-thumbnail.png",
    imageWebp: "/artful-bice-thumbnail.webp",
    url: "https://artful-bice.vercel.app/",
    roleLabel: "Design Technologist",
    metrics: "30+ portfolio pieces | <1.5s Largest Contentful Paint",
  },
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
    id: "pharma-three-rho",
    title: "Pharma Distribution Dashboard",
    summary:
      "Operational dashboard for pharmaceutical distributors with inventory visibility, cold-chain monitoring, and order fulfillment insights.",
    contributions: [
      "Assembled KPI-driven overview combining real-time stock levels and shipment status cards.",
      "Built interactive filtering and search to slice inventory by region, condition, and supplier.",
      "Implemented notification surface for compliance alerts and temperature excursions.",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "TanStack Query"],
    image: "/pharma-thumbnail.png",
    imageWebp: "/pharma-thumbnail.webp",
    url: "https://pharma-three-rho.vercel.app/",
    roleLabel: "Data Experience Lead",
    metrics: "12 live KPIs | 3 regional drilldowns | Real-time alert feed",
  },
];

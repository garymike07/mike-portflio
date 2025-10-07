export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  description: string;
  hours?: string;
  expectedDate?: string;
};

export const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "South Eastern Kenya University",
    period: "2015-2019",
    location: "Kitui, Kenya",
    description:
      "Comprehensive program covering software development, database management, networking, and system analysis.",
    highlights: [],
  },
  {
    degree: "Kenya Certificate of Secondary Education (KCSE) - Grade B",
    institution: "Muhoho High School",
    period: "2011-2014",
    location: "Kenya",
    description:
      "Strong foundation in mathematics, sciences, and languages with focus on analytical thinking.",
    highlights: [],
  },
  {
    degree: "Kenya Certificate of Primary Education (KCPE) - 345/500",
    institution: "Samrose Academy",
    period: "2010",
    location: "Kenya",
    description:
      "Solid primary education foundation with excellence in science and mathematics.",
    highlights: [],
  },
];

export const professionalCertifications: Certification[] = [
  {
    id: "google-analytics",
    title: "Google Analytics for Beginners",
    issuer: "Google",
    date: "2023",
    credentialId: "GA-2023-MKW-001",
    skills: ["Web Analytics", "Data Analysis", "Digital Marketing"],
    description:
      "Comprehensive certification covering GA4, conversion tracking, and advanced reporting.",
  },
  {
    id: "freecodecamp-responsive",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    hours: "300+ hours",
    credentialId: "RWD-2022-MKW-001",
    skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
    description:
      "Hands-on certification with 5 responsive web design projects and modern CSS techniques.",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "In Progress",
    expectedDate: "Q2 2024",
    skills: ["Cloud Computing", "AWS Services", "Cloud Security", "Cost Optimization"],
    description:
      "Foundation-level certification covering AWS cloud concepts, services, and best practices.",
  },
];

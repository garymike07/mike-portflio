import type { LucideIcon } from "lucide-react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Layers,
  GraduationCap,
  ScrollText,
  Mail,
} from "lucide-react";

export type NavigationItem = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Layers },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "certificates", label: "Certificates", icon: ScrollText },
  { id: "contact", label: "Contact", icon: Mail },
];

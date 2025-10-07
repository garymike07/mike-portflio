import type { LucideIcon } from "lucide-react";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  colorClass: string;
};

export type SocialLink = {
  icon: LucideIcon;
  label: string;
  href: string;
  colorClass: string;
  username: string;
};

export type Reference = {
  name: string;
  title: string;
  phone: string;
};

export const contactInformation: ContactInfo[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 792 618 156",
    href: "tel:+254792618156",
    colorClass: "text-accent-electric",
  },
  {
    icon: Mail,
    label: "Email",
    value: "wrootmike@gmail.com",
    href: "mailto:wrootmike@gmail.com",
    colorClass: "text-accent-neon",
  },
  {
    icon: Globe,
    label: "Website",
    value: "mike-portfolio.vercel.app",
    href: "https://mike-portfolio.vercel.app",
    colorClass: "text-accent-pink",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Gatundu, Kenya",
    href: "#",
    colorClass: "text-accent-purple",
  },
];

export const socialLinks: SocialLink[] = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mike-waitindi-654bb2344/",
    colorClass: "text-accent-electric",
    username: "mike-waitindi-654bb2344",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/garymike07",
    colorClass: "text-accent-neon",
    username: "garymike07",
  },
];

export const professionalReferences: Reference[] = [
  {
    name: "Returning Officer",
    title: "Gatundu South",
    phone: "+254 723 698 430",
  },
  {
    name: "Samuel Muiruri",
    title: "Vice-Chairman, Metropolitan Sacco",
    phone: "+254 724 509 778",
  },
];

export const primaryEmail = "wrootmike@gmail.com";
export const primaryPhone = "+254 792 618 156";

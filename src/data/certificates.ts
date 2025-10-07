export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  file: string;
  downloadName: string;
};

export const certificates: Certificate[] = [
  {
    id: "internship",
    title: "ICT Internship Certificate",
    issuer: "Council of Legal Education",
    year: "2024",
    file: "/certificates/internship.pdf",
    downloadName: "Mike-Kagera-ICT-Internship.pdf",
  },
  {
    id: "resume",
    title: "Professional Résumé",
    issuer: "Mike Kagera Waitindi",
    year: "2025",
    file: "/certificates/mike-resume.pdf",
    downloadName: "Mike-Kagera-Resume.pdf",
  },
  {
    id: "degree",
    title: "BSc Information Technology",
    issuer: "South Eastern Kenya University",
    year: "2019",
    file: "/certificates/degree.pdf",
    downloadName: "Mike-Kagera-BSc-IT-Degree.pdf",
  },
  {
    id: "kcse",
    title: "KCSE Certificate",
    issuer: "Muhoho High School",
    year: "2014",
    file: "/certificates/kcse.pdf",
    downloadName: "Mike-Kagera-KCSE.pdf",
  },
];

export const CERTIFICATE_DOWNLOAD_PASSWORD = "Shutters500#";

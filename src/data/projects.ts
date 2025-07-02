import DeskMateImage from "/images/DeskMate/Deskmate.png";
import NoImageYet from "/images/NoImageYet.png";
import ComingSoon from "/images/ComingSoon.png";
export interface ProjectCardData {
  img: string;
  title: string;
  description: string;
  keywords: string[];
  projectId: string;
}

export const projectsCardData: ProjectCardData[] = [
  {
    img: DeskMateImage,
    title: "DeskMate",
    description:
      "A lightweight desktop companion with useful quick access widgets",
    keywords: ["Desktop Application", "Tkinter", "Python", "Design Patterns"],
    projectId: "deskmate",
  },
  {
    img: NoImageYet,
    title: "Personal Site",
    description: "The website you are currently viewing.",
    keywords: ["React", "Typescript", "Vite", "Three.js", "Tailwind"],
    projectId: "personal-site",
  },
  {
    img: ComingSoon,
    title: "A.I.fred",
    description:
      "A private, local assistant for advice, conversation, emails, reminders, calendars, and texts",
    keywords: ["Ollama", "Local LLM"],
    projectId: "alfred",
  },
  {
    img: NoImageYet,
    title: "Mother to Mother",
    description:
      "Built a full stack application with admin portal for a nonprofit connecting mothers to resources.",
    keywords: ["React", "Vite", "Next.js", "Express", "Node"],
    projectId: "m2m",
  },
  {
    img: NoImageYet,
    title: "JCurve",
    description: "Built a fully functional store using shopify.",
    keywords: ["Shopify", "Figma"],
    projectId: "jcurve",
  },
  {
    img: NoImageYet,
    title: "CountMeds",
    description:
      "With Vanderbilt Medical Center we developed a mobile app for prescription adherence.",
    keywords: [
      "Object Detection",
      "Expo",
      "React Native",
      "Docker",
      "Firebase",
      "Redcap",
    ],
    projectId: "count-meds",
  },
  {
    img: NoImageYet,
    title: "Mini's Collections",
    description: "A collection of small projects.",
    keywords: [],
    projectId: "mini-collections",
  },
];

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
    projectId: "personal-site",
  },
];

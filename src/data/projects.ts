import DeskMateImage from "/images/DeskMate/index.png";
import PersonalWebsiteImage from "/images/PersonalWebsite/index.png";
import M2MImage from "/images/M2M/index.png";
import JCurveImage from "/images/JCurve/index.png";
import PasswordManagerImage from "/images/PasswordManager/index.png";
import LeetHubImage from "/images/Leethub/index.png";
import MinisCollectionImage from "/images/MinisCollection/index.png";
import NoImageYet from "/images/NoImageYet.png";
import ComingSoon from "/images/ComingSoon.png";
export interface ProjectCardData {
  img: string;
  title: string;
  description: string;
  keywords: string[];
  projectId: string;
  status: "live" | "paused" | "inactive" | null;
  userCount: number | null;
}

export const projectsCardData: ProjectCardData[] = [
  {
    img: DeskMateImage,
    title: "DeskMate",
    description:
      "A lightweight desktop companion with useful quick access widgets",
    keywords: ["Desktop Application", "Tkinter", "Python", "Design Patterns"],
    projectId: "deskmate",
    status: "live",
    userCount: 1,
  },
  {
    img: PersonalWebsiteImage,
    title: "Personal Site",
    description: "The website you are currently viewing.",
    keywords: ["React", "Typescript", "Vite", "Three.js", "Tailwind"],
    projectId: "personal-site",
    status: "live",
    userCount: 1,
  },
  {
    img: ComingSoon,
    title: "A.I.fred",
    description:
      "A private, local assistant for advice, conversation, emails, reminders, calendars, and texts",
    keywords: ["Ollama", "Local LLM"],
    projectId: "alfred",
    status: "inactive",
    userCount: null,
  },
  {
    img: M2MImage,
    title: "Mother to Mother",
    description:
      "Built a full-stack solution connecting donors, recipients, and staff while digitizing workflows through an admin portal.",
    keywords: ["React", "Express", "Node", "AWS", "SQL"],
    projectId: "m2m",
    status: "live",
    userCount: 400,
  },
  {
    img: JCurveImage,
    title: "JCurve",
    description: "Built a fully functional store using shopify.",
    keywords: ["Shopify", "Figma"],
    projectId: "jcurve",
    status: "live",
    userCount: null,
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
    status: "inactive",
    userCount: null,
  },
  {
    img: PasswordManagerImage,
    title: "PassWin",
    description: "A password manager for myself.",
    keywords: ["AWS", "Cryptography", "Express", "MongoDB", "Chrome"],
    projectId: "passwin",
    status: "live",
    userCount: 6,
  },
  {
    img: LeetHubImage,
    title: "LeetHub",
    description: "Automate putting solved Leetcode problems to Github.",
    keywords: [],
    projectId: "leethub",
    status: "paused",
    userCount: null,
  },
  // {
  //   img: NoImageYet,
  //   title: "MoneyMap",
  //   description: "A personal and clear roadmap of your finances.",
  //   keywords: [],
  //   projectId: "leethub",
  //   status: "paused",
  //   userCount: null,
  // },
  {
    img: MinisCollectionImage,
    title: "Mini's Collections",
    description: "A collection of small projects.",
    keywords: [],
    projectId: "mini-collections",
    status: null,
    userCount: null,
  },
];

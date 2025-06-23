import DeskMateImage from "/images/DeskMate/Deskmate.png";

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
];

// const projectsDetailData:

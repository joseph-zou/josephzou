import Ekreb from "/images/MiniCollection/ekreb.png";
import Mini1 from "/images/MiniCollection/mini1.png";
import Mini2 from "/images/MiniCollection/mini2.png";
import Mini3 from "/images/MiniCollection/mini3.png";
import Mini4 from "/images/MiniCollection/mini4.png";
import Mini5 from "/images/MiniCollection/mini5.png";
import Mini6 from "/images/MiniCollection/mini6.png";

export interface miniProjectCardData {
  img: string;
  title: string;
  description: string;
}

export const miniProjectsData: miniProjectCardData[] = [
  {
    img: Ekreb,
    title: "Ekreb",
    description:
      "A word guesser game. Project challenge submission for acceptance into Change++",
  },
  {
    img: Mini1,
    title: "Mini 1",
    description: "Placeholder description for Mini 1 project.",
  },
  {
    img: Mini2,
    title: "Mini 2",
    description: "Placeholder description for Mini 2 project.",
  },
  {
    img: Mini3,
    title: "Mini 3",
    description: "Placeholder description for Mini 3 project.",
  },
  {
    img: Mini4,
    title: "Mini 4",
    description: "Placeholder description for Mini 4 project.",
  },
  {
    img: Mini5,
    title: "Mini 5",
    description: "Placeholder description for Mini 5 project.",
  },
  {
    img: Mini6,
    title: "Mini 6",
    description: "Placeholder description for Mini 6 project.",
  },
];

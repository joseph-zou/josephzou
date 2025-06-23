import { Link } from "@tanstack/react-router";
import type { ProjectCardData } from "@/data/projects";

const ProjectCard = ({
  img,
  title,
  description,
  keywords,
  projectId,
}: ProjectCardData) => {
  return (
    <Link
      // @ts-ignore
      to={`/projects/${projectId}`}
      params={{ projectId }}
      className="block"
    >
      <div
        className="
          rounded-xl shadow-md overflow-hidden p-3 bg-background
          transform transition duration-300 hover:scale-105
        "
      >
        <img src={img} alt={title} className="w-full h-full object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 md:text-4xl">{title}</h3>
          <p className="text-p text-sm mb-2 md:text-2xl">{description}</p>
          <p className="text-xs text-muted md:text-xl">
            {keywords.join(" | ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

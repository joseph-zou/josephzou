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
      className="block h-fit"
    >
      <div
        className="
      h-[300px] md:h-[350px] flex flex-col justify-between
      rounded-xl shadow-md overflow-hidden bg-background
      transform transition duration-300 hover:scale-105
    "
      >
        <div className="aspect-[16/9] w-full overflow-hidden rounded-md">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-xl font-semibold mb-2 md:text-2xl">{title}</h3>
          <p className="text-p text-sm mb-2 md:text-md line-clamp-3">
            {description}
          </p>
          <p className="text-xs text-p text-muted md:text-md h-[25px] mt-auto">
            {keywords.join(" | ")}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

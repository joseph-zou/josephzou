import { Link } from "@tanstack/react-router";
import type { ProjectCardData } from "@/data/projects";
import { FaUser } from "react-icons/fa";

const ProjectCard = ({
  img,
  title,
  description,
  keywords,
  projectId,
  status,
  userCount,
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
          <div>
            <h3 className="text-xl font-semibold mb-2 md:text-2xl">{title}</h3>
            <div className="flex items-center gap-4 text-sm mb-1">
              <span className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`
        animate-ping absolute inline-flex h-full w-full rounded-full
        ${status === "live" ? "bg-green-400" : status === "paused" ? "bg-yellow-400" : "bg-red-400"}
        opacity-75
      `}
                  ></span>
                  <span
                    className={`
        relative inline-flex rounded-full h-2.5 w-2.5
        ${status === "live" ? "bg-green-500" : status === "paused" ? "bg-yellow-500" : "bg-red-500"}
      `}
                  ></span>
                </span>
                <span className="text-black">
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </span>

              {userCount && (
                <span className="inline-flex items-center gap-x-1 text-xs text-muted">
                  <FaUser className="h-3.5 w-3.5" />
                  {userCount}
                </span>
              )}
            </div>
          </div>

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

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { projectsCardData, type ProjectCardData } from "@/data/projects";

type ProjectStatus = Exclude<ProjectCardData["status"], null>;

const Projects = () => {
  const [status, setStatus] = useState<ProjectStatus[]>([]);
  const [filteredProjectsCardData, setFilteredProjectsCardData] =
    useState<ProjectCardData[]>(projectsCardData);

  const toggleStatus = (value: ProjectStatus) => {
    setStatus((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    if (status.length === 0) {
      // No filters → show all
      setFilteredProjectsCardData(projectsCardData);
    } else {
      setFilteredProjectsCardData(
        projectsCardData.filter((p) => p.status && status.includes(p.status))
      );
    }
  }, [status]);

  return (
    <>
      <div className="flex flex-col">
        <div className="p-4 flex gap-4 justify-center">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={status.includes("live")}
              onChange={() => toggleStatus("live")}
            />
            Live
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={status.includes("dev")}
              onChange={() => toggleStatus("dev")}
            />
            Dev
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={status.includes("inactive")}
              onChange={() => toggleStatus("inactive")}
            />
            Inactive
          </label>
        </div>
        <div className="min-h-screen min-w-screen bg-background grid grid-cols-[repeat(auto-fit,_250px)] grid-rows-[300px] md:grid-rows-[350px] md:grid-cols-[repeat(auto-fit,_300px)] justify-center gap-8 p-6 ">
          {filteredProjectsCardData.map((project) => (
            <ProjectCard key={project.projectId} {...project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

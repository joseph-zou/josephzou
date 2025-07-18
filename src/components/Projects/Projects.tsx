import ProjectCard from "./ProjectCard";
import { projectsCardData } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-background grid grid-cols-[repeat(auto-fit,_250px)] grid-rows-[300px] md:grid-rows-[350px] md:grid-cols-[repeat(auto-fit,_300px)] justify-center gap-8 p-6 ">
        {projectsCardData.map((project) => (
          <ProjectCard key={project.projectId} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;

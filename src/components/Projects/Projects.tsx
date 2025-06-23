import ProjectCard from "./ProjectCard";
import { projectsCardData } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <div className="min-h-screen w-screen grid grid-cols-[repeat(auto-fit,_550px)] justify-center gap-8 p-6 ">
        {projectsCardData.map((project) => (
          <ProjectCard
            key={project.projectId}
            img={project.img}
            title={project.title}
            description={project.description}
            keywords={project.keywords}
            projectId={project.projectId}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;

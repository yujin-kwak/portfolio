import { Project } from "@/types";
import { projectsData } from "@/data/projectsData";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
  ref: React.Ref<HTMLElement>;
}

const ProjectsSection = (props: ProjectsSectionProps) => {
  const { onProjectClick, ref } = props;

  return (
    <section
      id="projects"
      ref={ref}
      data-color="#4b5563"
      className="min-h-screen py-24 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-indigo-400">
          Projects
        </h2>

        <div className="space-y-16">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

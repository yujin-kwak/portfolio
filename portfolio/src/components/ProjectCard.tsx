import { Project } from "@/types";
import { techColorMap } from "@/data/projectsData";
import PlusIcon from "./icons/PlusIcon";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard = ({ project, onClick }: ProjectCardProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
    {/* 왼쪽 카드 (클릭 가능) */}
    <div
      className="lg:col-span-2 group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={onClick}
    >
      <div className="card-bg bg-[rgba(17,24,39,0.6)] p-6 rounded-lg group-hover:blur-sm group-hover:scale-[1.02] transition-all duration-300 h-full">
        <h3 className="text-2xl font-bold text-white mb-2">
          {project.title}
          <span className="text-base font-medium text-gray-400 ml-2">
            {project.isTeamProject ? "(팀 프로젝트)" : "(개인 프로젝트)"}
          </span>
        </h3>
        <p className="text-indigo-300 font-semibold mb-4">{project.subtitle}</p>
        <p className="mb-2 text-gray-300">
          <strong className="font-semibold text-gray-300">기간: </strong>
          {project.period}
        </p>
        <div className="mt-4">
          <h4 className="font-bold text-gray-300 mb-4">My Role: Front-end</h4>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            {project.role.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* 마우스 올리면 나타나는 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
        <PlusIcon className="h-10 w-10 text-white mb-4" />
        <p className="font-bold text-white text-xl">프로젝트 자세히 보기</p>
      </div>
    </div>
    {/* 오른쪽 카드 (설명) */}
    <div className="lg:col-span-3 card-bg bg-[rgba(17,24,39,0.6)] p-6 rounded-lg">
      <p className="mb-4 text-gray-300">{project.description}</p>
      <p className="font-semibold text-gray-200 mb-2">사용 기술:</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className={`${
              techColorMap[tech] || "bg-gray-500/50"
            } text-white text-sm font-medium px-3 py-1 rounded-full`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;

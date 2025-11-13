import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center p-4 z-[100]"
      onClick={onClose}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      aria-describedby="modal-description"
    >
      <div
        className="card-bg bg-[rgba(17,24,39,0.6)] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl leading-none"
        >
          &times;
        </button>

        <h3
          id="modal-title"
          className="text-2xl md:text-3xl font-bold text-indigo-300 mb-4"
        >
          {project.title}
        </h3>

        <div className="w-full aspect-video bg-gray-900 rounded-md mb-6 shadow-lg">
          <video
            key={project.id}
            src={project.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain rounded-md"
            poster={`https://placehold.co/1280x720/1f2937/a5b4fc?text=Loading+Video...`}
          >
            비디오를 지원하지 않는 브라우저입니다.
          </video>
        </div>

        <p
          id="modal-description"
          className="text-gray-300 leading-relaxed whitespace-pre-wrap"
        >
          {project.details}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;

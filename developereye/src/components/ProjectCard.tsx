import { motion } from "framer-motion";
import { Project } from "../types";
import { staggerItem, hoverLift } from "../utils/motion";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

const ProjectCard = ({ project, className = "" }: ProjectCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverLift.whileHover}
      transition={hoverLift.transition}
      className={`bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <img
        src={project.imageUrl}
        alt={project.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-secondary-dark bg-secondary-light px-2.5 py-1 rounded-full mb-3">
          {project.category}
        </span>
        <h3 className="text-lg font-semibold text-slate-900 mb-2">
          {project.name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <button className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md">
          View Project →
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

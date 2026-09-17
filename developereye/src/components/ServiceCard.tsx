import { motion } from "framer-motion";
import {
  FiCpu,
  FiGitBranch,
  FiGlobe,
  FiLayout,
  FiMessageSquare,
  FiServer,
  FiStar,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { Service } from "../types";
import { staggerItem, hoverLift } from "../utils/motion";

type ServiceCardProps = {
  service: Service;
  className?: string;
};

const ServiceCard = ({ service, className = "" }: ServiceCardProps) => {
  const navigate = useNavigate();
  const serviceIcons: Record<string, IconType> = {
    BrainCircuit: FiCpu,
    Globe: FiGlobe,
    LayoutDashboard: FiLayout,
    MessageSquareText: FiMessageSquare,
    Workflow: FiGitBranch,
    Server: FiServer,
  };
  const IconComponent = serviceIcons[service.icon] || FiStar;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={hoverLift.whileHover}
      transition={hoverLift.transition}
      className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/10 text-secondary-dark mb-5">
        <IconComponent size={22} aria-hidden={true} />
      </span>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        {service.description}
      </p>
      <button
        onClick={() => navigate("/services")}
        className="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md"
      >
        Learn More →
      </button>
    </motion.div>
  );
};

export default ServiceCard;

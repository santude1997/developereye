import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { JobOpening } from "../types";
import { staggerItem } from "../utils/motion";
import Button from "./Button";

type JobCardProps = {
  job: JobOpening;
  onApply: (job: JobOpening) => void;
  className?: string;
};

const JobCard = ({ job, onApply, className = "" }: JobCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <h3 className="text-lg font-semibold text-slate-900 mb-2">
        {job.position}
      </h3>
      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <FiMapPin size={14} aria-hidden="true" />
          {job.location}
        </span>
        <span className="flex items-center gap-1.5">
          <FiBriefcase size={14} aria-hidden="true" />
          {job.employmentType}
        </span>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed mb-5">
        {job.description}
      </p>
      <Button size="sm" onClick={() => onApply(job)}>
        Apply Now
      </Button>
    </motion.div>
  );
};

export default JobCard;

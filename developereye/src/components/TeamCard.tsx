import { motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { TeamMember } from "../types";
import { staggerItem } from "../utils/motion";

type TeamCardProps = {
  member: TeamMember;
  className?: string;
};

const TeamCard = ({ member, className = "" }: TeamCardProps) => {
  return (
    <motion.div
      variants={staggerItem}
      className={`bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    >
      <div className="relative mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200">
        <img
          src="/logo/logo.png"
          alt="Developer Eye logo"
          className="absolute left-1/2 top-[-0.5rem] h-32 w-32 max-w-none -translate-x-1/2"
        />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-secondary-dark font-medium mb-3">
        {member.role}
      </p>
      <p className="text-sm text-slate-600 leading-relaxed">{member.bio}</p>
      <div className="mt-5 flex items-center justify-center gap-2">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn for ${member.role}`}
          className="rounded-lg p-2 text-primary-600 transition-colors hover:bg-primary-50 hover:text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <FaLinkedinIn size={17} aria-hidden="true" />
        </a>
        <a
          href="mailto:info@developereye.in"
          aria-label={`Email Developer Eye about ${member.role}`}
          className="rounded-lg p-2 text-primary-600 transition-colors hover:bg-primary-50 hover:text-secondary-dark focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <FiMail size={17} aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
};

export default TeamCard;

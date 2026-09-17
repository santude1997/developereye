import {
  FaAws,
  FaBrain,
  FaCode,
  FaDocker,
  FaEye,
  FaGitAlt,
  FaGithub,
  FaLanguage,
  FaLinux,
  FaPython,
  FaReact,
  FaRobot,
} from "react-icons/fa6";
import {
  SiCloudflare,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FiGlobe } from "react-icons/fi";
import type { IconType } from "react-icons";

type TechBadgeProps = {
  name: string;
  className?: string;
  decorative?: boolean;
};

const techIcons: Record<string, IconType> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Python: FaPython,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  LLMs: FaRobot,
  RAG: FaBrain,
  "AI Agents": FaRobot,
  "Machine Learning": FaBrain,
  "Computer Vision": FaEye,
  NLP: FaBrain,
  AWS: FaAws,
  Docker: FaDocker,
  Linux: FaLinux,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Cloudflare: SiCloudflare,
  English: FaLanguage,
  Hindi: FaLanguage,
  "Regional Languages": FiGlobe,
  "Multilingual AI": FaLanguage,
};

const TechBadge = ({
  name,
  className = "",
  decorative = false,
}: TechBadgeProps) => {
  const Icon = techIcons[name] ?? FaCode;

  return (
    <span
      title={name}
      aria-label={name}
      aria-hidden={decorative}
      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary-700 shadow-sm ring-1 ring-slate-200 transition-all duration-200 hover:-translate-y-1 hover:text-secondary ${className}`}
    >
      <Icon size={23} aria-hidden="true" />
    </span>
  );
};

export default TechBadge;

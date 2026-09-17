import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "center",
  light = false,
  className = "",
}: SectionHeadingProps) => {
  const Heading = as;

  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true }}
      transition={fadeUp.transition}
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-wider mb-3 ${light ? "text-primary-300" : "text-primary-600"}`}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={`text-base md:text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

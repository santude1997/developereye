import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "../utils/motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, users and requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define features, architecture and technology.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the UI/UX and user experience.",
  },
  {
    number: "04",
    title: "Develop",
    description: "Build the frontend, backend, APIs and integrations.",
  },
  {
    number: "05",
    title: "Test",
    description: "Test security, performance, functionality and usability.",
  },
  {
    number: "06",
    title: "Deploy",
    description: "Deploy the application to production infrastructure.",
  },
  {
    number: "07",
    title: "Support",
    description: "Maintain, improve and scale the product.",
  },
];

const ProcessTimeline = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {steps.map((step) => (
        <motion.div
          key={step.number}
          variants={staggerItem}
          className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <span className="text-3xl font-bold gradient-text mb-3 block">
            {step.number}
          </span>
          <h3 className="text-base font-semibold text-slate-900 mb-2">
            {step.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProcessTimeline;

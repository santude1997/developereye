import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiCpu,
  FiFileText,
  FiGitBranch,
  FiLayers,
  FiLink,
  FiMessageSquare,
  FiMic,
  FiSearch,
} from "react-icons/fi";
import { staggerContainer, staggerItem } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

const capabilities = [
  {
    icon: FiMessageSquare,
    label: "AI Chatbots",
    description:
      "Conversational assistants that answer questions and guide users instantly.",
  },
  {
    icon: FiCpu,
    label: "AI Agents",
    description:
      "Autonomous agents that complete multi-step business tasks on their own.",
  },
  {
    icon: FiSearch,
    label: "AI Search",
    description: "Smart search that understands intent, not just keywords.",
  },
  {
    icon: FiLayers,
    label: "RAG Applications",
    description:
      "Retrieval-augmented AI that answers using your own business data.",
  },
  {
    icon: FiFileText,
    label: "Document Intelligence",
    description:
      "Extract and understand information from contracts, forms and reports.",
  },
  {
    icon: FiMic,
    label: "Voice Assistants",
    description:
      "Voice-driven interfaces for hands-free business interactions.",
  },
  {
    icon: FiBarChart2,
    label: "Data Analysis",
    description: "AI-powered insights that turn raw data into decisions.",
  },
  {
    icon: FiGitBranch,
    label: "Workflow Automation",
    description: "Automated pipelines that remove manual, repetitive steps.",
  },
  {
    icon: FiLink,
    label: "Custom AI Integrations",
    description: "Connect AI capabilities directly into your existing tools.",
  },
  {
    icon: FiCpu,
    label: "AI-powered Business Tools",
    description:
      "Purpose-built tools that bring AI directly into daily operations.",
  },
];

const AISolutions = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          eyebrow="AI Solutions"
          title="Practical AI for Real Business"
          description="We focus on useful AI that solves real problems, not AI built only for demonstration."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-600 mb-4">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => navigate("/contact")}>
            Build Your AI Solution
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;

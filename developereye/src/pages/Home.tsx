import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiFileText,
  FiGitBranch,
  FiHeadphones,
  FiLayers,
  FiLink,
  FiMessageSquare,
  FiMic,
  FiSearch,
  FiTool,
} from "react-icons/fi";
import { services } from "../data/servicesData";
import { projects } from "../data/projectsData";
import { techStack } from "../data/techData";
import { staggerContainer } from "../utils/motion";
import Hero from "../components/Hero";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import TechBadge from "../components/TechBadge";
import ProcessTimeline from "../components/ProcessTimeline";
import Button from "../components/Button";

const aiCapabilities = [
  { icon: FiMessageSquare, label: "AI Chatbots" },
  { icon: FiCpu, label: "AI Agents" },
  { icon: FiSearch, label: "AI Search" },
  { icon: FiLayers, label: "RAG Applications" },
  { icon: FiFileText, label: "Document Intelligence" },
  { icon: FiMic, label: "Voice Assistants" },
  { icon: FiBarChart2, label: "Data Analysis" },
  { icon: FiGitBranch, label: "Workflow Automation" },
  { icon: FiLink, label: "Custom AI Integrations" },
  { icon: FiCpu, label: "AI-powered Business Tools" },
];

const webAppTypes = [
  "CRM Systems",
  "ERP Systems",
  "Business Management Systems",
  "Admin Dashboards",
  "Customer Portals",
  "Employee Portals",
  "Booking Systems",
  "Inventory Systems",
  "Payment Systems",
  "SaaS Platforms",
  "Reporting Systems",
  "Internal Business Tools",
];

const whyUs = [
  {
    icon: FiTool,
    title: "Business-Focused",
    description:
      "We understand the business problem before building the technology.",
  },
  {
    icon: FiLayers,
    title: "Modern Technology",
    description: "We use modern frameworks, cloud technologies and AI tools.",
  },
  {
    icon: FiActivity,
    title: "Scalable Architecture",
    description:
      "Applications are designed so they can grow with your business.",
  },
  {
    icon: FiHeadphones,
    title: "Long-Term Support",
    description:
      "We can continue improving, maintaining and scaling your product after launch.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="What We Build"
          description="Six core capabilities that help businesses modernize, automate and grow."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </section>

      <section className="py-20 lg:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="AI Solutions"
            title="Practical AI for Real Business"
            description="We focus on useful AI that solves real problems, not AI built only for demonstration."
            light
          />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12"
          >
            {aiCapabilities.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  className="glass rounded-xl p-5 text-center"
                >
                  <Icon
                    size={22}
                    className="text-primary-300 mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-slate-200 font-medium">
                    {item.label}
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
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Custom Software"
          title="Software Built Around Your Business"
          description="We don't believe every business should use the same software. Developer Eye creates customized applications around your workflow, users and business requirements."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
        >
          {webAppTypes.map((item) => (
            <motion.div
              key={item}
              variants={{
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
              }}
              className="bg-white rounded-xl border border-slate-200 p-5 text-center hover:border-primary-300 transition-colors"
            >
              <p className="text-sm font-medium text-slate-700">{item}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => navigate("/contact")}>
            Discuss Your Project
          </Button>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Why Us" title="Why Developer Eye?" />
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    initial: { opacity: 0, y: 16 },
                    animate: { opacity: 1, y: 0 },
                  }}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-50 text-primary-600 mb-4">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Stack"
          title="Technology We Use"
          description="Modern, proven tools chosen for reliability and scale."
        />
        <div className="mt-12 space-y-4">
          {[techStack, [...techStack].reverse()].map((stack, rowIndex) => (
            <div
              key={rowIndex}
              className="tech-marquee"
              aria-label={rowIndex === 0 ? "Technology stack" : undefined}
            >
              <div
                className={`tech-marquee-track ${rowIndex === 1 ? "tech-marquee-track-reverse" : ""}`}
              >
                {[...stack, ...stack].map((tech, index) => (
                  <TechBadge
                    key={`${tech.id}-${rowIndex}-${index}`}
                    name={tech.name}
                    decorative={index >= stack.length}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Build"
            description="A clear, proven process from first conversation to long-term support."
          />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          description="A look at the kind of products we build for businesses."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {projects.slice(0, 6).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </Button>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something Smart
          </h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">
            Tell us about your business and we'll help you find the right AI or
            software solution.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate("/contact")}
          >
            Start a Project
          </Button>
        </div>
      </section>
    </>
  );
};

export default Home;

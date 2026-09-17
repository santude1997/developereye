import { motion } from "framer-motion";
import { projects } from "../data/projectsData";
import { staggerContainer } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Portfolio"
        title="Selected Projects"
        description="A look at the kind of products we build for businesses across industries."
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;

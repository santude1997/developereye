import { motion } from "framer-motion";
import { services } from "../data/servicesData";
import { staggerContainer } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Our Services"
        title="What We Build"
        description="Practical technology solutions designed to solve real business problems."
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
    </div>
  );
};

export default Services;

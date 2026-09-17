import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiEye,
  FiHeart,
  FiMessageCircle,
  FiShield,
  FiStar,
  FiTarget,
  FiZap,
} from "react-icons/fi";
import { teamMembers } from "../data/teamData";
import { staggerContainer } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import TeamCard from "../components/TeamCard";

const values = [
  { icon: FiZap, label: "Innovation" },
  { icon: FiStar, label: "Simplicity" },
  { icon: FiShield, label: "Quality" },
  { icon: FiMessageCircle, label: "Transparency" },
  { icon: FiBookOpen, label: "Continuous Learning" },
];

const About = () => {
  return (
    <div>
      <div className="py-20 lg:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading
          as="h1"
          eyebrow="About Us"
          title="Technology With a Purpose"
          description="Developer Eye is a technology startup focused on creating modern digital products, intelligent AI solutions and customized web applications for businesses. We combine software engineering, artificial intelligence and business understanding to create technology that solves real-world problems."
        />
      </div>

      <div className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <FiTarget
              className="text-primary-600 mb-4"
              size={24}
              aria-hidden="true"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To help businesses use modern technology to work smarter and grow
              faster.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <FiEye
              className="text-primary-600 mb-4"
              size={24}
              aria-hidden="true"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Vision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To become a trusted technology partner for businesses building
              their digital future.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <FiHeart
              className="text-primary-600 mb-4"
              size={24}
              aria-hidden="true"
            />
            <h3 className="font-semibold text-slate-900 mb-2">Values</h3>
            <ul className="space-y-1.5 mt-2">
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <li
                    key={v.label}
                    className="flex items-center gap-2 text-sm text-slate-600"
                  >
                    <Icon
                      size={14}
                      className="text-primary-500"
                      aria-hidden="true"
                    />{" "}
                    {v.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our People"
          title="Meet Our Team"
          description="The people building Developer Eye. Team information will be updated as we grow."
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;

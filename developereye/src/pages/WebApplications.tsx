import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiBarChart2,
  FiBox,
  FiBriefcase,
  FiCalendar,
  FiCreditCard,
  FiFileText,
  FiGrid,
  FiLayers,
  FiMonitor,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import { staggerContainer, staggerItem } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";

const appTypes = [
  {
    title: "CRM Systems",
    description: "Manage leads, customers and sales pipelines in one place.",
    icon: FiUsers,
  },
  {
    title: "ERP Systems",
    description:
      "Coordinate operations, finance and resources across departments.",
    icon: FiLayers,
  },
  {
    title: "Business Management Systems",
    description: "Centralize day-to-day operations into a single platform.",
    icon: FiBriefcase,
  },
  {
    title: "Admin Dashboards",
    description: "Give teams visibility and control over business data.",
    icon: FiGrid,
  },
  {
    title: "Customer Portals",
    description: "Let customers manage accounts, orders and support requests.",
    icon: FiMonitor,
  },
  {
    title: "Employee Portals",
    description: "Streamline internal HR, tasks and communication.",
    icon: FiUsers,
  },
  {
    title: "Booking Systems",
    description: "Handle appointments, reservations and scheduling.",
    icon: FiCalendar,
  },
  {
    title: "Inventory Systems",
    description: "Track stock, orders and supply chain in real time.",
    icon: FiBox,
  },
  {
    title: "Payment Systems",
    description: "Integrate secure billing and payment processing.",
    icon: FiCreditCard,
  },
  {
    title: "SaaS Platforms",
    description: "Multi-tenant products with subscriptions and user roles.",
    icon: FiSettings,
  },
  {
    title: "Reporting Systems",
    description: "Turn business data into clear, actionable reports.",
    icon: FiBarChart2,
  },
  {
    title: "Internal Business Tools",
    description: "Custom tools built around your team's exact workflow.",
    icon: FiFileText,
  },
];

const WebApplications = () => {
  const navigate = useNavigate();
  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Custom Software"
        title="Software Built Around Your Business"
        description="We don't believe every business should use the same software. Developer Eye creates customized applications around your workflow, users and business requirements."
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {appTypes.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10"
            >
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-primary-700 via-primary-500 to-secondary transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-6 flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <Icon size={21} aria-hidden="true" />
                </span>
                <span className="font-heading text-xs font-semibold tracking-[0.18em] text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-base font-semibold text-slate-900 transition-colors group-hover:text-primary-700">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      <div className="text-center mt-12">
        <Button size="lg" onClick={() => navigate("/contact")}>
          Discuss Your Project
        </Button>
      </div>
    </div>
  );
};

export default WebApplications;

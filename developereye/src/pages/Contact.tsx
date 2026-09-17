import { motion } from "framer-motion";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { staggerContainer, staggerItem } from "../utils/motion";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "info@developereye.in",
    href: "mailto:info@developereye.in",
  },
  { icon: FiPhone, label: "Phone", value: "+91 00000 00000" },
  { icon: FiMapPin, label: "Location", value: "India (Remote-first team)" },
  {
    icon: FiClock,
    label: "Business Hours",
    value: "Mon – Fri, 10:00 AM – 6:00 PM IST",
  },
];

const Contact = () => {
  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Contact"
        title="Let's Build Something Smart"
        description="Tell us about your business and we'll help you find the right AI or software solution."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-12">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="space-y-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow duration-300 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/10"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-600 shrink-0">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-0.5 block text-sm text-primary-600 transition-colors hover:text-secondary-dark"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-0.5 text-sm text-slate-700">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiCode, FiLayout, FiMonitor, FiStar } from "react-icons/fi";
import { fadeUp, fadeIn } from "../utils/motion";
import Button from "./Button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-dark overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern [background-size:24px_24px] opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={fadeUp.transition}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-3 py-1.5 rounded-full mb-6">
            <FiStar size={14} aria-hidden="true" /> AI &amp; Software Studio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Build Smarter. Automate Faster.{" "}
            <span className="gradient-text">Grow Better.</span>
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
            Developer Eye builds intelligent AI solutions, custom websites and
            scalable web applications designed around your business.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" onClick={() => navigate("/contact")}>
              Start a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate("/services")}
            >
              Explore Solutions
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="glass rounded-2xl p-6 shadow-2xl">
            <img
              src="https://picsum.photos/560/280?random=201"
              alt="Web application dashboard mockup showing charts and interface panels"
              loading="lazy"
              className="w-full h-40 object-cover rounded-xl mb-5"
            />
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-secondary">
                <FiLayout size={20} className="text-dark" aria-hidden="true" />
              </span>
              <div>
                <p className="text-white font-semibold text-sm">
                  Live Build Status
                </p>
                <p className="text-slate-400 text-xs">
                  Deploying your web application
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "UI Components", icon: FiMonitor },
                { label: "API Integration", icon: FiCode },
                { label: "Workflow Automation", icon: FiLayout },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-3"
                >
                  <span className="flex items-center gap-2 text-sm text-slate-200">
                    <item.icon
                      size={14}
                      className="text-secondary"
                      aria-hidden="true"
                    />
                    {item.label}
                  </span>
                  <span className="text-xs text-secondary font-medium">
                    {95 - i * 8}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

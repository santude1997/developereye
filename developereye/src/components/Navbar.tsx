import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import Button from "./Button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "AI Solutions", path: "/ai-solutions" },
  { label: "Web Applications", path: "/web-applications" },
  { label: "Projects", path: "/projects" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const DevEyeLogo = () => (
  <span className="flex h-12 w-40 shrink-0 items-center bg-transparent drop-shadow-sm sm:h-14 sm:w-52">
    <img
      src="/logo/navlog.png"
      alt="Developer Eye logo"
      className="h-full w-full object-contain object-left"
    />
  </span>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 bg-white/75 shadow-[0_8px_30px_rgba(23,66,154,0.06)] backdrop-blur-xl">
      <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Developer Eye home"
          className="group flex min-w-0 items-center gap-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          <DevEyeLogo />
        </Link>

        <ul className="hidden items-center gap-1 rounded-full bg-slate-50/80 p-1 shadow-inner shadow-slate-200/50 lg:flex">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`block rounded-full px-3 py-2 text-[13px] font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#129fe5] focus:ring-offset-2 ${
                  location.pathname === link.path
                    ? "bg-white text-[#17429a] shadow-sm shadow-slate-200/80"
                    : "text-slate-600 hover:bg-white/70 hover:text-[#129fe5]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            size="md"
            className="rounded-xl bg-[#17429a] px-4 shadow-lg shadow-[#17429a]/15 hover:bg-[#12357d]"
            onClick={() => navigate("/contact")}
          >
            Start a Project
            <FiArrowUpRight size={16} aria-hidden="true" />
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="rounded-xl p-2.5 text-[#17429a] transition-colors hover:bg-[#e8f7fc] focus:outline-none focus:ring-2 focus:ring-[#129fe5] lg:hidden"
        >
          {isOpen ? (
            <FiX size={22} aria-hidden="true" />
          ) : (
            <FiMenu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-3 mb-3 overflow-hidden rounded-2xl bg-white/95 shadow-xl shadow-[#17429a]/10 lg:hidden"
          >
            <ul className="flex flex-col gap-1 p-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block rounded-xl px-4 py-3 text-base transition-colors ${
                      location.pathname === link.path
                        ? "bg-[#e8f7fc] font-semibold text-[#17429a]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#129fe5]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="px-3 pb-3">
              <Button
                size="md"
                className="w-full rounded-xl bg-[#17429a] shadow-lg shadow-[#17429a]/15 hover:bg-[#12357d]"
                onClick={() => navigate("/contact")}
              >
                Start a Project
                <FiArrowUpRight size={17} aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

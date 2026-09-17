import { Link } from "react-router-dom";
import { FaBluesky, FaDiscord, FaGithub, FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

const DevEyeLogo = () => (
  <span className="flex h-12 w-40 shrink-0 items-center rounded-xl bg-transparent px-2 drop-shadow-sm transition-transform duration-200 group-hover:scale-[1.02] sm:h-14 sm:w-52">
    <img
      src="/logo/navlog.png"
      alt="Developer Eye logo"
      className="h-full w-full object-contain object-left"
    />
  </span>
);

const SocialIcon = ({ icon: Icon }: { icon: IconType }) => (
  <Icon className="h-5 w-5" aria-hidden="true" />
);

const Footer = () => {
  return (
    <footer className="bg-dark text-slate-300">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-5 lg:px-8">
        <div className="col-span-2 lg:col-span-2">
          <Link
            to="/"
            aria-label="Developer Eye home"
            className="group mb-3 flex w-fit max-w-full items-center gap-3 rounded-xl font-heading text-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-dark"
          >
            <DevEyeLogo />
          </Link>
          <p className="text-sm text-slate-400 mb-4">
            AI Solutions • Custom Websites • Web Applications
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <SocialIcon icon={FaGithub} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <SocialIcon icon={FaDiscord} />
            </a>
            <a
              href="https://bsky.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Bluesky"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <SocialIcon icon={FaBluesky} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
            >
              <SocialIcon icon={FaXTwitter} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition-colors">
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/careers"
                className="hover:text-white transition-colors"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/ai-solutions"
                className="hover:text-white transition-colors"
              >
                AI Solutions
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                to="/web-applications"
                className="hover:text-white transition-colors"
              >
                Web Applications
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors"
              >
                Automation
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Technology</h4>
          <ul className="space-y-2 text-sm">
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>AI</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center text-sm text-slate-400 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Developer Eye. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:justify-end">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

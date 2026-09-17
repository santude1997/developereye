import { Link } from "react-router-dom";
import { FiFileText } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const Terms = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <Link to="/" aria-label="Developer Eye home" className="mb-10 inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
        <span className="relative h-12 w-12 overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200">
          <img src="/logo/logo.png" alt="Developer Eye logo" className="absolute left-1/2 top-[-0.3rem] h-20 w-20 max-w-none -translate-x-1/2" />
        </span>
        <span className="font-heading text-lg font-bold text-primary-700">Developer Eye</span>
      </Link>
      <SectionHeading
        as="h1"
        align="left"
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The basic terms for using the Developer Eye website and starting a project with us."
      />
      <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400"><FiFileText aria-hidden="true" /> Last updated: September 15, 2026</div>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
        <p>These Terms & Conditions govern your use of the Developer Eye website. By browsing this site or submitting information through a form, you agree to use the site responsibly and in accordance with these terms.</p>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Use of the Website</h2>
          <p>This website provides information about Developer Eye, our capabilities, projects and career opportunities. You must not use the site to transmit malicious code, interfere with its operation, impersonate another person or access information without permission.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Project Discussions and Engagements</h2>
          <p>Submitting an inquiry does not create a client relationship, reserve availability or guarantee a proposal. Any project scope, delivery dates, fees, ownership, support and confidentiality obligations will be defined in a separate written agreement accepted by both parties.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Intellectual Property</h2>
          <p>Unless otherwise stated, the Developer Eye name, logo, written content, design and other materials on this website belong to Developer Eye or its licensors. You may view the site for personal or business evaluation, but you may not reproduce, modify or redistribute its materials without written permission.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Third-Party Links and Availability</h2>
          <p>The site may link to third-party websites or services. We are not responsible for their content, policies or availability. We aim to keep the site accurate and available, but we do not guarantee that every page will always be complete, current or uninterrupted.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Disclaimer and Changes</h2>
          <p>Website information is provided for general information and does not constitute professional, legal or financial advice. We may update these terms as the site or our services change. The latest version will be published on this page.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Contact Us</h2>
          <p>For questions about these terms, email <a href="mailto:info@developereye.in" className="font-medium text-primary-600 hover:text-secondary-dark">info@developereye.in</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;

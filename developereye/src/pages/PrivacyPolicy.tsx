import { Link } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const PrivacyPolicy = () => {
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
        title="Privacy Policy"
        description="How Developer Eye handles information shared through this website."
      />
      <div className="mt-5 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-400"><FiLock aria-hidden="true" /> Last updated: September 15, 2026</div>
      <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate-600">
        <p>Developer Eye ("we", "our" or "us") respects your privacy. This policy explains what information you may share with us, why we use it and the choices available to you when you use developereye.in.</p>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Information You Provide</h2>
          <p>When you contact us or apply for a role, you may provide your name, email address, phone number, company, service interests, budget, resume details and message content. Please avoid sending passwords, payment card details or other sensitive information through these forms.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">How We Use Information</h2>
          <p>We use submitted information to respond to project inquiries, understand your requirements, communicate about potential work, review applications and improve our website and services. We do not sell personal information.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Forms and Service Providers</h2>
          <p>The current website validates form submissions in the browser and may connect to services used to operate, secure or improve the site. If we introduce a production form backend, analytics provider or email platform, we will use those services only for legitimate business purposes and update this policy when appropriate.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Cookies and Security</h2>
          <p>We may use essential browser storage or similar technologies when needed for site functionality. No method of transmission or storage is completely secure, but we take reasonable steps to protect information and limit access to people who need it.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Your Choices</h2>
          <p>You can ask what personal information we hold, request correction or deletion where applicable, or withdraw from future communication by contacting us. We may retain limited records when necessary for legitimate business, security or legal purposes.</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-semibold text-slate-900">Contact Us</h2>
          <p>For privacy questions or requests, email <a href="mailto:info@developereye.in" className="font-medium text-primary-600 hover:text-secondary-dark">info@developereye.in</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { contactService } from "../services/contactService";
import { useToast } from "../context/ToastContext";
import { isValidEmail } from "../utils/helpers";
import { ContactFormData, SubmissionStatus } from "../types";
import { fadeUp } from "../utils/motion";
import Button from "./Button";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  serviceRequired: "",
  budget: "",
  message: "",
};

const serviceOptions = [
  "AI Solution",
  "AI Chatbot",
  "AI Agent",
  "Website",
  "Web Application",
  "SaaS Application",
  "Business Automation",
  "API Development",
  "Other",
];
const budgetOptions = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not Sure",
];

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const { showToast } = useToast();

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.serviceRequired)
      newErrors.serviceRequired = "Please select a service";
    if (!formData.message.trim())
      newErrors.message = "Please tell us about your project";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await contactService.submitInquiry(formData);
      setStatus("success");
      showToast(
        "Your inquiry has been sent. We will get back to you soon!",
        "success",
      );
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <motion.form
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={{ once: true }}
      transition={fadeUp.transition}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Name <span className="text-error">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            aria-required="true"
            aria-describedby={errors.name ? "name-error" : undefined}
            className={`w-full h-11 px-4 rounded-lg border ${errors.name ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-error mt-1">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Email <span className="text-error">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full h-11 px-4 rounded-lg border ${errors.email ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-error mt-1">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="serviceRequired"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Service Required <span className="text-error">*</span>
          </label>
          <select
            id="serviceRequired"
            value={formData.serviceRequired}
            onChange={(e) => handleChange("serviceRequired", e.target.value)}
            aria-required="true"
            className={`w-full h-11 px-4 rounded-lg border ${errors.serviceRequired ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceRequired && (
            <p className="text-sm text-error mt-1">{errors.serviceRequired}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Budget
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => handleChange("budget", e.target.value)}
            className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors bg-white"
          >
            <option value="">Select a budget range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none`}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-error mt-1">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        loading={status === "loading"}
        className="w-full sm:w-auto"
      >
        <FiSend size={16} aria-hidden="true" /> Send Inquiry
      </Button>
    </motion.form>
  );
};

export default ContactForm;

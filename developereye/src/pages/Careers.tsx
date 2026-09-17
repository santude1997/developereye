import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUploadCloud } from "react-icons/fi";
import { jobOpenings } from "../data/jobsData";
import { careerService } from "../services/careerService";
import { useToast } from "../context/ToastContext";
import { isValidEmail } from "../utils/helpers";
import { CareerApplicationData, JobOpening, SubmissionStatus } from "../types";
import { staggerContainer } from "../utils/motion";
import SectionHeading from "../components/SectionHeading";
import JobCard from "../components/JobCard";
import Button from "../components/Button";
import Modal from "../components/Modal";

const initialData: CareerApplicationData = {
  name: "",
  email: "",
  phone: "",
  positionApplied: "",
  message: "",
  resumeFileName: null,
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [formData, setFormData] = useState<CareerApplicationData>(initialData);
  const [errors, setErrors] = useState<
    Partial<Record<keyof CareerApplicationData, string>>
  >({});
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const { showToast } = useToast();

  const openApplyModal = (job: JobOpening) => {
    setSelectedJob(job);
    setFormData({ ...initialData, positionApplied: job.position });
  };

  const openGeneralApplyModal = () => {
    setSelectedJob(null);
    setFormData({ ...initialData, positionApplied: "General Application" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData((prev) => ({
      ...prev,
      resumeFileName: file ? file.name : null,
    }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof CareerApplicationData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!isValidEmail(formData.email))
      newErrors.email = "Enter a valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await careerService.submitApplication(formData);
      showToast(
        "Your application has been submitted. We will be in touch!",
        "success",
      );
      setSelectedJob(null);
      setFormData(initialData);
    } catch {
      showToast("Something went wrong. Please try again.", "error");
    } finally {
      setStatus("idle");
    }
  };

  const isModalOpen =
    selectedJob !== null || formData.positionApplied === "General Application";

  return (
    <div className="py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        as="h1"
        eyebrow="Careers"
        title="Build the Future With Us"
        description="We are looking for developers, AI engineers, designers and technology enthusiasts who want to build meaningful products."
      />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12"
      >
        {jobOpenings.map((job) => (
          <JobCard key={job.id} job={job} onApply={openApplyModal} />
        ))}
      </motion.div>

      <div className="text-center mt-14 py-10 border-t border-slate-100">
        <p className="text-slate-600 mb-4">
          Don't see the right role? Send us your profile.
        </p>
        <Button variant="outline" onClick={openGeneralApplyModal}>
          Send Your Profile
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setSelectedJob(null)}
        title={`Apply for ${formData.positionApplied || "Position"}`}
      >
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label
              htmlFor="applicant-name"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Name <span className="text-error">*</span>
            </label>
            <input
              id="applicant-name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              aria-required="true"
              className={`w-full h-11 px-4 rounded-lg border ${errors.name ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
            />
            {errors.name && (
              <p className="text-sm text-error mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="applicant-email"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Email <span className="text-error">*</span>
            </label>
            <input
              id="applicant-email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              aria-required="true"
              className={`w-full h-11 px-4 rounded-lg border ${errors.email ? "border-error" : "border-slate-300"} focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors`}
            />
            {errors.email && (
              <p className="text-sm text-error mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="applicant-phone"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Phone
            </label>
            <input
              id="applicant-phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="w-full h-11 px-4 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="resume"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Resume
            </label>
            <label
              htmlFor="resume"
              className="flex items-center gap-2 h-11 px-4 rounded-lg border border-dashed border-slate-300 text-sm text-slate-500 cursor-pointer hover:border-primary-400 transition-colors"
            >
              <FiUploadCloud size={16} aria-hidden="true" />
              {formData.resumeFileName || "Upload PDF or DOC"}
            </label>
            <input
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          <div>
            <label
              htmlFor="applicant-message"
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              Message
            </label>
            <textarea
              id="applicant-message"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            loading={status === "loading"}
            className="w-full"
          >
            <FiSend size={16} aria-hidden="true" /> Submit Application
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default Careers;

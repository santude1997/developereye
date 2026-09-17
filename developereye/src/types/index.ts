export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface JobOpening {
  id: string;
  position: string;
  location: string;
  employmentType: string;
  description: string;
}

export interface TechItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI" | "Cloud & DevOps";
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceRequired: string;
  budget: string;
  message: string;
}

export interface CareerApplicationData {
  name: string;
  email: string;
  phone: string;
  positionApplied: string;
  message: string;
  resumeFileName: string | null;
}

export type SubmissionStatus = "idle" | "loading" | "success" | "error";

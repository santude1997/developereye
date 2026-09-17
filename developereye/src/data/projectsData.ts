import { Project } from "../types";

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "AI Business Assistant",
    category: "AI Solution",
    description:
      "An intelligent assistant designed to help businesses access information and automate common tasks.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "LLMs", "RAG", "React"],
  },
  {
    id: "proj-2",
    name: "Business Management Platform",
    category: "Web Application",
    description:
      "A centralized platform for managing operations, staff and business workflows in one place.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "proj-3",
    name: "Smart Analytics Dashboard",
    category: "Business Intelligence",
    description:
      "A real-time dashboard that visualizes key business metrics to support faster decision making.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&sat=-50",
    technologies: ["React", "FastAPI", "PostgreSQL"],
  },
  {
    id: "proj-4",
    name: "Customer Portal",
    category: "Web Application",
    description:
      "A secure self-service portal allowing customers to manage accounts, orders and support requests.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Node.js", "MySQL"],
  },
  {
    id: "proj-5",
    name: "AI Document Processing",
    category: "AI Automation",
    description:
      "An automated pipeline that extracts, classifies and summarizes information from business documents.",
    imageUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    technologies: ["Python", "Computer Vision", "NLP"],
  },
  {
    id: "proj-6",
    name: "SaaS Management Platform",
    category: "SaaS",
    description:
      "A multi-tenant SaaS platform with subscription billing, user roles and usage analytics.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&sat=-30",
    technologies: ["React", "Express", "AWS"],
  },
];

import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Experience.css";

const experiences = [
  {
    role: "Research Student — Mathematics for ML",
    company: "LNMIT",
    duration: "May 2024 – July 2024",
    description:
      "Explored mathematical foundations of machine learning, focusing on optimization and linear algebra applications.",
    tags: ["Python", "NumPy", "Pandas", "Mathematics"],
    icon: "🧠",
  },
  {
    role: "Azure Cloud & Security Intern",
    company: "Celebal Technologies",
    duration: "May 2024 – June 2024",
    description:
      "Worked on Azure cloud deployments, security configurations, and performance optimizations.",
    tags: ["Azure", "Cloud Security", "PowerShell"],
    icon: "☁️",
  },
  {
    role: "Research Intern — Fake Video Detection",
    company: "MNIT",
    duration: "March 2025 – June 2025",
    description:
      "Contributed to research on detecting deepfake and fake videos using advanced ML techniques.",
    tags: ["Machine Learning", "Deepfake Detection", "Python"],
    icon: "🔍",
  },
  {
    role: "Java Full Stack Developer — GOJOB",
    company: "Zidio Technologies",
    duration: "May 2025 – July 2025",
    description:
      "Developed GOJOB, a job portal with integrated resume analysis and smart job recommendations.",
    tags: ["React", "Spring Boot", "MySQL"],
    icon: "💻",
  },
  {
    role: "Full Stack Developer — Event Management System",
    company: "GIP Technologies",
    duration: "July 2025 – September 2025",
    description:
      "Built a platform for managing events, registrations, and ticketing.",
    tags: ["React", "SpringBoot", "SQL","AI"],
    icon: "📅",
  },
];

export default function Experience() {
  return (
    <>
    <h1 className="exp" id="experience">Experience</h1>
    <div className="timeline">
      {experiences.map((exp, index) => (
        <Slide direction={index % 2 === 0 ? "right" : "left"} duration={1500} triggerOnce>
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="connector">
            <span className="icon-controller">{exp.icon}</span>
            <span className="horizontal-line"></span>
          </div>
          <div className="timeline-content">
            <h3>{exp.role}</h3>
            <h4>
              <span className="company">{exp.company}</span> | {exp.duration}
            </h4>
            <p>{exp.description}</p>
            <div className="tags">
              {exp.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
        </Slide>
      ))}
    </div>
    </>
  );
}

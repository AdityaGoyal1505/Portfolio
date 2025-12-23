import React, { useState } from "react";
import {
  FaTrophy,
  FaLaptopCode,
  FaCertificate,
  FaGithub,
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";
import "./Achievements.css";
import { Slide } from "react-awesome-reveal";

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Top 5 in Internal SIH Hackathon",
    short:
      "Led a team to the Top 5 in the Internal Smart India Hackathon, building a full-stack prototype.",
    detail:
      "Role: Team Lead • Tech: React, Node, MySQL • Focus: rapid prototyping & demo-ready UI",
    tag: "Hackathon",
    icon: <FaTrophy />,
  },
  {
    id: 2,
    title: "48-Hour Bug Detection Maker Challenge",
    short:
      "Built a web page to detect & highlight UI bugs in 48 hours, focused on UX clarity.",
    detail:
      "Used: React + ESLint + custom heuristics • Outcome: Demo + README with test cases",
    tag: "Hackathon",
    icon: <FaLaptopCode />,
  },
  {
    id: 3,
    title: "Certified in Multiple Technologies",
    short:
      "DSA with JAVA (NPTEL), HTML/CSS/JS (Udemy), C/C++ (Infosys Springboard) and more.",
    detail: "Certificates available on request / linked on profile.",
    tag: "Certification",
    icon: <FaCertificate />,
  },
  {
    id: 4,
    title: "250+ GitHub Contributions",
    short:
      "Active open-source contributor & frequent commits across personal projects.",
    detail:
      "Highlights: repo maintenance, PR reviews, issue triaging, and community replies.",
    tag: "Open Source",
    icon: <FaGithub />,
  },
  {
    id: 5,
    title: "1st Rank — 12th Grade",
    short:
      "Secured 1st position in 12th grade — consistent academic performance.",
    detail:
      "Strong fundamentals which helped during problem solving in interviews and contests.",
    tag: "Academic",
    icon: <FaGraduationCap />,
  },
  {
    id: 6,
    title: "4+ Internships Completed",
    short: "Internships in AI/ML, Web Development and Full-Stack roles.",
    detail:
      "Worked on pipelines, backend APIs, and production-ready frontends.",
    tag: "Experience",
    icon: <FaBriefcase />,
  },
];


export default function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedId, setExpandedId] = useState(null);

  const filtered = selectedCategory === "All"
    ? ACHIEVEMENTS
    : ACHIEVEMENTS.filter(a => a.tag === selectedCategory);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="achievements">
      <h2 className="title" id="achievements">Achievements</h2>

      <div className="cards">
        {filtered.map(item => (
          <Slide direction="up" triggerOnce>
          <div
            className="card"
            key={item.id}
            onClick={() => toggleExpand(item.id)}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{expandedId === item.id ? item.detail : item.short}</p>
            <span className="tag">{item.tag}</span>
          </div>
          </Slide>
        ))}
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'GoJob',
    thumbnail: '/images/GoJob.png',
    description: 'A job board application built with a modern tech stack. It features job search, user authentication, and a dashboard for managing applications.',
    techStack: ['React','CSS','SpringBoot', 'SQL'],
    github: 'https://github.com/AdityaGoyal1505/Recruitment',
    liveDemo: 'https://jobportal-omega-lac.vercel.app/',
  },
  {
    title: 'RGCS',
    thumbnail: '/images/RGCS.png',
    description: 'A consultancy services website made for RG Consultancy Services. It includes services like brand, technology, career, research and etc. It is a full stack application. Do not have its GitHub repo as it was made for a client.',
    techStack: ['React', 'MongoDB', 'NodeJS', 'Express'],
    github: '',
    liveDemo: 'https://rgcs.co.in/',
  },
  {
    title: 'Festora',
    thumbnail: '/images/Festora.png',
    description: 'An event management system that allows users to create, manage, and participate in events. It includes features like event creation, ticket booking, and user profiles.',
    techStack: ['React','CSS', 'SpringBoot', 'MySQL'],
    github: 'https://github.com/AdityaGoyal1505/EventManagmentSystem/tree/main/ems-frontend',
    liveDemo: 'https://project-three-demo.com',
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[index];

  return (
    <>
    <h1 id='project-tit'>Projects</h1>
    <div className="carousel-container">
      <button className="arrow left" onClick={prevSlide}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="carousel-slide">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="project-card"
          >
            <div className="card-content">
                <div className="thumbnail-container">
                    <img
                        src={currentProject.thumbnail}
                        alt={currentProject.title}
                        className="thumbnail"
                    />
                </div>
                <div className="project-details">
                    <h2 className="project-title">{currentProject.title}</h2>
                    <p className="desc">{currentProject.description}</p>
                    <div className="tech-stack">
                        {currentProject.techStack.map((tech, i) => (
                            <span key={i} className="tech-item">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="links">
                        <a href={currentProject.github} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href={currentProject.liveDemo} target="_blank" rel="noopener noreferrer">
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="arrow right" onClick={nextSlide}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
    </>
  );
};

export default Projects;
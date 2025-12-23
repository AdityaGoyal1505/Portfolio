import React from 'react';
import './SkillsMarquee.css';

const skills = [
  { name: 'React', src: '/logo/react.svg' },
  { name: 'HTML', src: '/logo/html.svg' },
  { name: 'CSS', src: '/logo/css.svg' },
  { name: 'JavaScript', src: '/logo/js.svg' },
  { name: 'Java', src: '/logo/java.svg' },
  { name: 'Python', src: '/logo/python.svg' },
  { name: 'MySQL', src: '/logo/mysql.svg' },
  { name: 'Spring Boot', src: '/logo/spring.svg' },
  { name: 'MongoDB', src: '/logo/mongo.svg' },
  { name: 'Postman', src: '/logo/postman.svg' },
  { name: 'GitHub', src: '/logo/github.svg' },
];

const SkillsMarquee = () => {
  return (
    <div className="skills-marquee-container">
      <h1>My Skills</h1>
      <div className="marquee">
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div className="skill-icon" key={index}>
              <img src={skill.src} alt={skill.name} />
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>
        {/* Duplicate content for infinite scroll */}
        <div className="marquee-content">
          {skills.map((skill, index) => (
            <div className="skill-icon" key={`copy-${index}`}>
              <img src={skill.src} alt={skill.name} />
              <span className="skill-label">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;

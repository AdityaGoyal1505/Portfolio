import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="subtitle">Aditya Goyal, Developer</p>
        <h1 className="title">
          DEVELOPER THAT BUILDS <br />
          CLEAN & SCALABLE <br />
          WEB EXPERIENCES
        </h1>
        <p className="description">
          Let’s build fast, modern, and elegant websites that solve real problems and create memorable experiences.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn primary">Contact Me</a>
          <a href="#video" className="btn secondary">Projects</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="video-frame">
          <img src={`${process.env.PUBLIC_URL}/images/Me.png`} alt="Developer at work" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

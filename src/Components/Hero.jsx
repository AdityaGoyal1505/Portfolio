import React from 'react';
import './Hero.css';
import { Fade, Slide } from 'react-awesome-reveal';

const Hero = () => {
return (
    <section className="hero">
        <Fade direction="left" cascade triggerOnce>
            <div className="hero-content">
                <p className="subtitle">Aditya Goyal, Full Stack Developer</p>
                <h1 className="title">
                    FULL STACK <span>DEVELOPER</span> THAT BUILDS <br />
                    <span>MODERN </span>& SCALABLE <br />
                    WEB EXPERIENCES
                </h1>
                <p className="description">
                    Translating innovative ideas into polished, high-performing web applications that deliver measurable results.
                </p>
                <div className="hero-buttons">
                    <a href="https://drive.google.com/file/d/1RnjyfS6eypQm-VEHDWNXzWczTLDW3qE8/view?usp=sharing" className="btn primary">Resume</a>
                    <a href="#project-tit" className="btn secondary">Projects</a>
                </div>
            </div>
        </Fade>

        <Slide direction="right" triggerOnce>
            <div className="hero-image">
                <div className="video-frame">
                    <img src={`${process.env.PUBLIC_URL}/images/Me.png`} alt="Full Stack Developer at work" />
                </div>
            </div>
        </Slide>
    </section>
);
};

export default Hero;

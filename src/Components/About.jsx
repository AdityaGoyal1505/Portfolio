import React from 'react';
import './About.css';
import { Fade, Slide } from 'react-awesome-reveal';

const About = () => { 
return (
    <section className="about" id='about'>
        <Slide direction="left" triggerOnce>
            <div className="about-image">
                <div className="video">
                    <img src={`${process.env.PUBLIC_URL}/images/About.png`} alt="Developer at work" />
                </div>
            </div>
        </Slide>
        <Fade direction="right" cascade triggerOnce>
            <div className="about-content">
                <p className="subtitle-about">Know About Me</p>
                <p className="description-about">
                    "I'm Aditya Goyal, a dedicated full-stack developer with expertise in HTML, CSS, JavaScript, React, and Java Spring Boot. I specialize in building modern, scalable web applications that deliver exceptional user experiences.<br />
                    I am currently pursuing a B.Tech in CSE from BIT Mesra. I completed my schooling at Morning Star Saint Anselm's School, Jaipur, and I am always eager to learn and build new things.
                </p>
                <div className="about-button">
                    <a href="#achievements" className="btn primary-contact">Explore More</a>
                </div>
            </div>
        </Fade>
    </section>
);
};

export default About;

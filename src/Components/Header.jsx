import React from 'react';
import './Header.css';
import { FaInstagram, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <section className='header-wrapper'>
    <header className="header">
      <div className="header__left">Aditya Goyal</div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project-tit">Projects</a></li>
          <li><a href="#achievements">Achievements</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </nav>
      <div className="header__right">
        {/* <a href="https://www.instagram.com/adityagoyal579" target="_blank" rel="noreferrer"><FaInstagram /></a> */}
        <a href="https://github.com/AdityaGoyal1505" target="_blank" rel="noreferrer"><FaGithub /></a>
      </div>
    </header>
    </section>
  );
}

export default Header;

import React from 'react';
import './Header.css';

function Header() {
  return (
    <section className='header-wrapper'>
    <header className="header">
      <div className="header__left">Aditya Goyal</div>
      <nav className="header__nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Projects</a></li>
          <li><a href="/achievements">Achievements</a></li>
          <li><a href="/experience">Experience</a></li>
        </ul>
      </nav>
      <div className="header__right">
        <a href="/contact">Contact</a>
      </div>
    </header>
    </section>
  );
}

export default Header;

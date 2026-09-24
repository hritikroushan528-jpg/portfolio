import React from 'react';
import { IconArrowUp, IconGithub, IconLinkedin, IconMail } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="section-container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">Hritik<span className="gradient-text">.dev</span></h3>
            <p className="footer-desc">
              Computer Science & Engineering Student at RIT Roorkee. Building responsive web applications with modern technologies.
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-links-title">Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-socials-group">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://github.com/hritikroushan528-jpg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <IconGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/hritik-roushan-7a2a0636b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedin size={18} />
              </a>
              <a
                href="mailto:hritikroushan528@gmail.com"
                aria-label="Email"
              >
                <IconMail size={18} />
              </a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Hritik Roushan. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            Back to top <IconArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

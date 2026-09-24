import React from 'react';
import { IconGithub, IconLinkedin, IconMail, IconDownload, IconSparkles } from './Icons';

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      <div className="section-container hero-container">
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge">
              <IconSparkles size={14} style={{ marginRight: '6px' }} />
              CSE Student & Web Developer
            </span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Hritik Roushan</span>
          </h1>

          <p className="hero-subtitle">
            Computer Science & Engineering Student | Web Developer | Programmer
          </p>

          <p className="hero-description">
            Passionate about building responsive web applications, learning modern software technologies, 
            and solving real-world problems with clean, efficient code.
          </p>

          <div className="hero-actions">
            <a 
              href="#projects" 
              onClick={(e) => handleScrollTo(e, '#projects')} 
              className="btn btn-primary"
            >
              View Projects
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleScrollTo(e, '#contact')} 
              className="btn btn-secondary"
            >
              Contact Me
            </a>

            <a 
              href="/resume.pdf" 
              download="Hritik_Roushan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <IconDownload size={16} />
              Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect with me:</span>
            <div className="social-icon-group">
              <a 
                href="https://github.com/hritikroushan528-jpg" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="social-icon-link"
              >
                <IconGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/hritik-roushan-7a2a0636b" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="social-icon-link"
              >
                <IconLinkedin size={20} />
              </a>
              <a 
                href="mailto:hritikroushan528@gmail.com" 
                aria-label="Email Me"
                className="social-icon-link"
              >
                <IconMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

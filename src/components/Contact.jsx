import React, { useState } from 'react';
import { IconMail, IconGithub, IconLinkedin } from './Icons';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hritikroushan528@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">
          Feel free to reach out for project collaborations, technical inquiries, or networking opportunities.
        </p>

        <div className="contact-card-wrapper">
          <div className="glass-card contact-card">
            <h3 className="contact-heading">Let's Connect</h3>
            <p className="contact-subtext">
              I am always open to discussing new opportunities, computer science projects, and software development concepts.
            </p>

            <div className="contact-buttons-grid">
              <a
                href="mailto:hritikroushan528@gmail.com"
                className="btn btn-primary contact-btn"
              >
                <IconMail size={20} />
                Send Email
              </a>

              <a
                href="https://github.com/hritikroushan528-jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary contact-btn"
              >
                <IconGithub size={20} />
                GitHub Profile
              </a>

              <a
                href="https://www.linkedin.com/in/hritik-roushan-7a2a0636b"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline contact-btn"
              >
                <IconLinkedin size={20} />
                LinkedIn Profile
              </a>
            </div>

            <div className="email-copy-bar">
              <span className="email-address">hritikroushan528@gmail.com</span>
              <button 
                onClick={handleCopyEmail} 
                className="copy-btn"
                aria-label="Copy email address"
              >
                {copied ? 'Copied!' : 'Copy Email'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

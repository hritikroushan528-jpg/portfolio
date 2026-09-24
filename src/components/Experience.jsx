import React from 'react';
import { IconBriefcase } from './Icons';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">Internship & <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">
          Practical experience gained through internships and technical programs.
        </p>

        <div className="timeline-container">
          <div className="glass-card timeline-card">
            <div className="timeline-header">
              <div className="timeline-icon">
                <IconBriefcase size={22} />
              </div>
              <div className="timeline-title-area">
                <h3 className="role-title">Full Stack Web Development Intern</h3>
                <h4 className="company-name">RabTech Academy</h4>
              </div>
              <div className="timeline-status">
                <span className="badge">Internship</span>
              </div>
            </div>

            <div className="timeline-content">
              <p className="experience-desc">
                Engaged in web development tasks focusing on frontend user interfaces, 
                responsive web components, dynamic applications, and modern web development standards.
              </p>
              <div className="experience-tags">
                <span className="badge-outline">Full Stack Web Development</span>
                <span className="badge-outline">Frontend Components</span>
                <span className="badge-outline">Web Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

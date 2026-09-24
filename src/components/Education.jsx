import React from 'react';
import { IconGraduationCap } from './Icons';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education <span className="gradient-text">Journey</span></h2>
        <p className="section-subtitle">
          My academic foundation in computer science and engineering.
        </p>

        <div className="education-card-wrapper">
          <div className="glass-card education-card">
            <div className="education-header">
              <div className="education-icon-box">
                <IconGraduationCap size={28} />
              </div>
              <div className="education-main-info">
                <h3 className="degree-title">Bachelor of Technology (B.Tech)</h3>
                <h4 className="major-title">Computer Science & Engineering</h4>
                <p className="institution-name">Roorkee Institute of Technology, Roorkee</p>
              </div>
              <div className="education-badge-box">
                <span className="badge">Expected 2029</span>
              </div>
            </div>

            <hr className="divider" />

            <div className="education-body">
              <h5 className="body-heading">Key Academic Focus Areas</h5>
              <ul className="focus-list">
                <li>Computer Science Fundamentals & Programming (C / C++)</li>
                <li>Web Development Technologies (HTML5, CSS3, JavaScript, React)</li>
                <li>Software Engineering & Version Control (Git & GitHub)</li>
                <li>Problem Solving & Data Structures</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

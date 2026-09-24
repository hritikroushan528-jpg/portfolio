import React from 'react';
import { IconCode, IconGraduationCap, IconBriefcase } from './Icons';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">
          A dedicated Computer Science & Engineering student focused on building strong foundational skills in programming and web development.
        </p>

        <div className="about-grid">
          <div className="glass-card about-bio-card">
            <h3>Who I Am</h3>
            <p>
              I am currently pursuing my <strong>B.Tech in Computer Science & Engineering</strong> at 
              <strong> Roorkee Institute of Technology, Roorkee</strong> (Expected Graduation: 2029). 
              My academic journey is centered around mastering core computer science concepts, programming fundamentals, 
              and modern web application development.
            </p>
            <p>
              I enjoy translating theoretical concepts into practical web projects. From building accessible client applications 
              to exploring backend integration, I focus on writing clean, readable code and expanding my technical toolkit continuously.
            </p>
          </div>

          <div className="about-highlights-grid">
            <div className="glass-card highlight-card">
              <div className="highlight-icon">
                <IconGraduationCap size={24} />
              </div>
              <div className="highlight-content">
                <h4>Education</h4>
                <p>B.Tech in CSE at RIT Roorkee (2025 – 2029)</p>
              </div>
            </div>

            <div className="glass-card highlight-card">
              <div className="highlight-icon">
                <IconCode size={24} />
              </div>
              <div className="highlight-content">
                <h4>Core Focus</h4>
                <p>C, C++, JavaScript, React & Web Standards</p>
              </div>
            </div>

            <div className="glass-card highlight-card">
              <div className="highlight-icon">
                <IconBriefcase size={24} />
              </div>
              <div className="highlight-content">
                <h4>Hands-On Experience</h4>
                <p>Full Stack Internship & Practical Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

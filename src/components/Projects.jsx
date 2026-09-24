import React from 'react';
import { IconGithub, IconExternalLink, IconFolder } from './Icons';

export default function Projects() {
  const projectList = [
    {
      id: 1,
      title: 'Smart Hospital Management System',
      description: 'A web-based hospital management concept focused on patient registration and improving the management of hospital-related information.',
      tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Web App'],
      githubUrl: null,
      demoUrl: null,
      statusMessage: 'Source code & demo available upon request'
    },
    {
      id: 2,
      title: 'BudgetBuddy – Personal Budget Tracker',
      description: 'A personal budget tracking application built with HTML, CSS, and JavaScript that uses localStorage for persisting user financial entries.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
      githubUrl: null,
      demoUrl: null,
      statusMessage: 'Client-side storage application'
    },
    {
      id: 3,
      title: 'AI-Powered Vernacular Pedagogy & Real-Time Translation Tool',
      description: 'An AI-based education project designed to support mother-tongue-based primary education through vernacular language support, pedagogy, and real-time translation.',
      tags: ['AI Pedagogy', 'Web Development', 'Translation Tool', 'Education Tech'],
      githubUrl: null,
      demoUrl: null,
      statusMessage: 'Educational Innovation Project'
    },
    {
      id: 4,
      title: 'Accessibility Audit / Accessible Web Project',
      description: 'A web accessibility-focused project involving semantic HTML, accessible components, ARIA standard compliance, and an accessibility audit dashboard concept.',
      tags: ['React', 'Semantic HTML', 'Accessibility (a11y)', 'WCAG'],
      githubUrl: null,
      demoUrl: null,
      statusMessage: 'Accessibility Standard Project'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">
          A selection of projects demonstrating my skills in web development, application design, and accessibility.
        </p>

        <div className="projects-grid grid-2">
          {projectList.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-card-header">
                <div className="project-folder-icon">
                  <IconFolder size={26} />
                </div>
                <span className="project-badge">Project #{project.id}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge-outline">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <IconGithub size={16} /> Code
                  </a>
                ) : (
                  <button className="btn btn-disabled btn-sm" disabled title="GitHub Repository link coming soon">
                    <IconGithub size={16} /> Code Unavailable
                  </button>
                )}

                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    <IconExternalLink size={16} /> Live Demo
                  </a>
                ) : (
                  <button className="btn btn-disabled btn-sm" disabled title="Live Demo link coming soon">
                    <IconExternalLink size={16} /> Demo Unavailable
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

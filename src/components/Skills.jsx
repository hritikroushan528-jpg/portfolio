import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 'Core' },
        { name: 'C++', level: 'Core' },
        { name: 'JavaScript', level: 'Core' },
        { name: 'Python', level: 'Learning', isLearning: true }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 'Core' },
        { name: 'CSS3', level: 'Core' },
        { name: 'JavaScript (ES6+)', level: 'Core' },
        { name: 'React', level: 'Core' }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 'Foundational' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 'Tool' },
        { name: 'GitHub', level: 'Tool' },
        { name: 'VS Code', level: 'Tool' }
      ]
    },
    {
      title: 'Core Concepts',
      skills: [
        { name: 'Responsive Web Design', level: 'Concept' },
        { name: 'Web Development', level: 'Concept' },
        { name: 'Web Accessibility (a11y)', level: 'Concept' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">
          Technologies and tools I work with as part of my computer science studies and web development projects.
        </p>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card skill-card">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-chip">
                    <span className="skill-name">{skill.name}</span>
                    {skill.isLearning && (
                      <span className="badge badge-learning">Learning</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

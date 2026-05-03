import { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

const categories = ['All', 'Languages', 'Backend', 'AI / ML', 'Cloud', 'DevOps', 'Data'];

export default function Skills() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState('All');

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active);

  const catColor = {
    'Languages': 'var(--cyan)',
    'Backend': 'var(--violet)',
    'AI / ML': '#f97316',
    'Cloud': '#22c55e',
    'DevOps': '#e879f9',
    'Data': '#fbbf24',
  };

  return (
    <section className="skills" id="skills" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Skills</p>
        <h2 className="section-title fade-in">
          Technical <span className="title-accent">Arsenal</span>
        </h2>
        <p className="skills-sub fade-in">Focused on backend systems, AI/ML pipelines, and cloud infrastructure.</p>

        <div className="cat-tabs fade-in">
          {categories.map(cat => (
            <button
              key={cat}
              className={`cat-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-grid fade-in">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="skill-pill"
              style={{
                '--accent': catColor[skill.category] || 'var(--cyan)',
                animationDelay: `${i * 0.04}s`,
              }}
            >
              <span className="skill-dot" />
              {skill.name}
              <span className="skill-cat">{skill.category}</span>
            </div>
          ))}
        </div>

        <div className="skills-legend fade-in">
          {Object.entries(catColor).map(([cat, color]) => (
            <div key={cat} className="legend-item">
              <span className="legend-dot" style={{ background: color }} />
              {cat}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

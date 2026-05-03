import { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotY = ((x - cx) / cx) * 8;
    const rotX = -((y - cy) / cy) * 5;
    card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      className="project-card fade-in"
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ animationDelay: `${index * 0.15}s`, '--card-color': project.color }}
    >
      <div className="card-top">
        <span className="card-num">{'0' + (index + 1)}</span>
        <div className="card-color-bar" style={{ background: project.color }} />
      </div>
      <div className="card-subtitle">{project.subtitle}</div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-desc">{project.description}</p>
      <div className="card-tech">
        {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects grid-bg" id="projects" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Projects</p>
        <h2 className="section-title fade-in">
          Production <span className="title-accent">Work</span>
        </h2>
        <p className="projects-sub fade-in">
          Real systems built and deployed at iServeU Technology — not side projects.
        </p>
        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

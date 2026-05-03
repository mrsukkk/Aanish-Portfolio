import { useEffect, useRef } from 'react';
import { personalInfo, education } from '../data/portfolio';
import './About.css';

const stats = [
  { value: '1+', label: 'Year\nExperience' },
  { value: '3', label: 'Production\nProjects' },
  { value: '20+', label: 'Tools &\nTechnologies' },
  { value: 'GCP', label: 'Cloud\nPlatform' },
];

function PhotoCard() {
  const cardRef = useRef(null);

  const onMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotY = ((x - cx) / cx) * 12;
    const rotX = -((y - cy) / cy) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  };

  const onMouseLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="photo-scene">
      {/* Orbiting ring */}
      <div className="orbit-ring ring-1" />
      <div className="orbit-ring ring-2" />
      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`float-dot dot-${i}`} />
      ))}
      {/* Main card */}
      <div
        className="photo-card"
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <div className="photo-frame">
          <img
            src="/aanish.png"
            alt="Aanish Patnaik"
            className="photo-img"
            draggable={false}
          />
          <div className="photo-overlay" />
          <div className="photo-corner tl" />
          <div className="photo-corner tr" />
          <div className="photo-corner bl" />
          <div className="photo-corner br" />
        </div>
        <div className="photo-glow" />
      </div>
      {/* Label badge */}
      <div className="photo-badge">
        <span className="badge-dot2" />
        Open to work
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about grid-bg" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-label fade-in">About</p>
            <h2 className="section-title fade-in">
              Backend Engineer.<br />
              <span className="title-accent">AI/ML Builder.</span>
            </h2>
            <p className="about-bio fade-in">{personalInfo.summary}</p>
            <p className="about-bio fade-in" style={{ marginTop: '16px' }}>
              Currently at <span className="highlight">iServeU Technology</span>, I work at the intersection of computer vision, LLM agents, and scalable data infrastructure — building systems that process real financial transactions in production.
            </p>
            <div className="about-actions fade-in">
              <a href="mailto:aanishpatnaik31@gmail.com" className="btn-primary">Get in Touch</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-ghost">GitHub →</a>
            </div>
            <div className="stats-row fade-in">
              {stats.map((s, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="edu-card fade-in">
              <div className="edu-icon">🎓</div>
              <div>
                <div className="edu-degree">{education.degree}</div>
                <div className="edu-school">{education.institution}</div>
                <div className="edu-period">{education.period}</div>
              </div>
            </div>
          </div>
          <div className="about-right fade-in">
            <PhotoCard />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
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
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="container">
        <p className="section-label fade-in">Experience</p>
        <h2 className="section-title fade-in">
          Where I've <span className="title-accent">Worked</span>
        </h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <div key={i} className="timeline-item fade-in">
              <div className="timeline-left">
                <div className="tl-dot" />
                <div className="tl-period">{job.period}</div>
                <div className="tl-loc">{job.location}</div>
              </div>
              <div className="timeline-card">
                <div className="tl-header">
                  <h3 className="tl-company">{job.company}</h3>
                  <span className="tl-badge">Current</span>
                </div>
                <div className="tl-role">{job.role}</div>
                <ul className="tl-highlights">
                  {job.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications fade-in">
          <div className="cert-label">Certifications</div>
          <div className="cert-grid">
            <div className="cert-card">
              <span className="cert-icon">☁️</span>
              <div>
                <div className="cert-name">DevOps on AWS</div>
                <div className="cert-issuer">Coursera Specialization</div>
              </div>
            </div>
            <div className="cert-card">
              <span className="cert-icon">🔌</span>
              <div>
                <div className="cert-name">Programming the IoT</div>
                <div className="cert-issuer">Coursera Specialization</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

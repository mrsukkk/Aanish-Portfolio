import { useEffect, useRef } from 'react';
import { personalInfo } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
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
    <section className="contact grid-bg" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left fade-in">
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Let's <span className="title-accent">Connect</span>
            </h2>
            <p className="contact-desc">
              Open to interesting backend, AI/ML, or data engineering roles. If you're building something challenging, let's talk.
            </p>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <span className="ci-icon">✉</span>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value">{personalInfo.email}</div>
                </div>
                <span className="ci-arrow">→</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact-item">
                <span className="ci-icon">⌥</span>
                <div>
                  <div className="ci-label">GitHub</div>
                  <div className="ci-value">github.com/aanishpatnaik</div>
                </div>
                <span className="ci-arrow">→</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact-item">
                <span className="ci-icon">◈</span>
                <div>
                  <div className="ci-label">LinkedIn</div>
                  <div className="ci-value">linkedin.com/in/aanishpatnaik</div>
                </div>
                <span className="ci-arrow">→</span>
              </a>
              <div className="contact-item no-link">
                <span className="ci-icon">◎</span>
                <div>
                  <div className="ci-label">Phone</div>
                  <div className="ci-value">{personalInfo.phone}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-right fade-in">
            <div className="contact-card">
              <div className="cc-header">
                <div className="cc-dots">
                  <span style={{ background: '#ff5f57' }} />
                  <span style={{ background: '#febc2e' }} />
                  <span style={{ background: '#28c840' }} />
                </div>
                <span className="cc-label">aanish@terminal</span>
              </div>
              <div className="cc-body">
                <div className="cc-line"><span className="cc-prompt">$</span> whoami</div>
                <div className="cc-out">Aanish Patnaik — SDE @ iServeU</div>
                <div className="cc-line"><span className="cc-prompt">$</span> cat expertise.txt</div>
                <div className="cc-out">Python | FastAPI | YOLOv8 | LangGraph</div>
                <div className="cc-out">GCP | Docker | Kubernetes | Airflow</div>
                <div className="cc-line"><span className="cc-prompt">$</span> echo $LOCATION</div>
                <div className="cc-out">Bhubaneswar, India</div>
                <div className="cc-line"><span className="cc-prompt">$</span> curl -X POST /contact</div>
                <div className="cc-out cc-success">→ aanishpatnaik31@gmail.com</div>
                <div className="cc-cursor">_</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

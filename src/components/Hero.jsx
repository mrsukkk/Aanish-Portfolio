import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // --- Particle nodes ---
    const nodeCount = 120;
    const positions = new Float32Array(nodeCount * 3);
    const nodeData = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 14;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      nodeData.push({ x, y, z, vx: (Math.random() - 0.5) * 0.003, vy: (Math.random() - 0.5) * 0.003 });
    }

    const nodeGeo = new THREE.BufferGeometry();
    nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const nodeMat = new THREE.PointsMaterial({ color: 0x00d4ff, size: 0.04, transparent: true, opacity: 0.7 });
    const nodes = new THREE.Points(nodeGeo, nodeMat);
    scene.add(nodes);

    // --- Connection lines ---
    const maxDist = 2.5;
    const linePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodeData[i].x - nodeData[j].x;
        const dy = nodeData[i].y - nodeData[j].y;
        const dz = nodeData[i].z - nodeData[j].z;
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < maxDist) {
          linePositions.push(nodeData[i].x, nodeData[i].y, nodeData[i].z);
          linePositions.push(nodeData[j].x, nodeData[j].y, nodeData[j].z);
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x7c3aed, transparent: true, opacity: 0.12 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // --- Large glowing sphere (background) ---
    const sphereGeo = new THREE.SphereGeometry(2.5, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      transparent: true,
      opacity: 0.03,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    sphere.position.set(3, 0, -2);
    scene.add(sphere);

    // --- Animate ---
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Slow node drift
      for (let i = 0; i < nodeCount; i++) {
        nodeData[i].x += nodeData[i].vx;
        nodeData[i].y += nodeData[i].vy;
        if (Math.abs(nodeData[i].x) > 7) nodeData[i].vx *= -1;
        if (Math.abs(nodeData[i].y) > 5) nodeData[i].vy *= -1;
        positions[i * 3] = nodeData[i].x;
        positions[i * 3 + 1] = nodeData[i].y;
      }
      nodeGeo.attributes.position.needsUpdate = true;

      sphere.rotation.y += 0.001;
      sphere.rotation.x += 0.0005;

      // Subtle camera parallax
      camera.position.x += (mouse.x * 0.3 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 0.2 - camera.position.y) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <div className="hero-badge fade-in">
          <span className="badge-dot" />
          Available for opportunities
        </div>
        <h1 className="hero-name fade-in">
          AANISH<br />
          <span className="hero-name-accent">PATNAIK</span>
        </h1>
        <p className="hero-role fade-in">
          <span className="role-line" />
          Software Developer Engineer
        </p>
        <p className="hero-tagline fade-in">
          {personalInfo.tagline}
        </p>
        <div className="hero-actions fade-in">
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-ghost">Contact Me</a>
        </div>
        <div className="hero-meta fade-in">
          <span>📍 {personalInfo.location}</span>
          <span>iServeU Technology</span>
          <span>1+ yr experience</span>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

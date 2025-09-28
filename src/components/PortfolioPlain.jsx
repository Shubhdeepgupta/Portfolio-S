import React, { useEffect, useState } from "react";
import "./portfolio-plain.css";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export default function PortfolioPlain() {
  // persist theme: read saved choice or fall back to OS preference
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem("pp-dark");
      if (v === "1") return true;
      if (v === "0") return false;
      return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
    } catch {
      return false;
    }
  });

  // keep .pp-root class in sync and persist changes
  useEffect(() => {
    try {
      localStorage.setItem("pp-dark", dark ? "1" : "0");
    } catch {}
  }, [dark]);

  // trigger subtle enter animations after mount
  useEffect(() => {
    const id = setTimeout(() => {
      document.querySelector(".pp-root")?.classList.add("enter");
    }, 80);
    return () => clearTimeout(id);
  }, []);

  const projects = [
    {
      title: "Aurora — Design System",
      desc: "A component library & design system with accessibility-first components and tokens.",
      tags: ["React", "TypeScript", "Storybook"],
      img: "https://placehold.co/400x250/edf2ff/4338ca?text=Aurora",
      demo: "#",
      repo: "#",
    },
    {
      title: "Pulse Analytics Dashboard",
      desc: "Real-time analytics dashboard with streaming charts and exportable reports.",
      tags: ["React", "D3", "WebSockets"],
      img: "https://placehold.co/400x250/ecfeff/06b6d4?text=Pulse",
      demo: "#",
      repo: "#",
    },
    {
      title: "Converse AI Chatbot",
      desc: "Conversational interface powering customer help flows and automated triage.",
      tags: ["Next.js", "Node", "AI"],
      img: "https://placehold.co/400x250/fff7ed/f97316?text=ConverseAI",
      demo: "#",
      repo: "#",
    },
  ];

  const skills = [
    "React / Next.js",
    "TypeScript / JavaScript",
    "Tailwind CSS / CSS-in-JS",
    "Node.js / Express",
    "Testing (Jest, RTL)",
    "CI/CD / Docker",
  ];

  useEffect(() => {
    // add subtle shadow when scrolling
    const header = document.querySelector(".pp-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("sticky-shadow", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Vite-friendly base path support (works in dev and GitHub Pages production)
  const base =
    typeof import.meta !== "undefined" && import.meta.env
      ? import.meta.env.BASE_URL || "/"
      : "/";

  return (
    <div className={`pp-root ${dark ? "dark" : ""}`}>
      {/* Skip link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only pp-skip">
        Skip to content
      </a>

      {/* Header */}
      <header className="pp-header">
        <div className="pp-brand">{/* logo area (optional) */}</div>

        <nav className="pp-nav" aria-label="Primary">
          <a href="#projects">Projects</a> 
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="https://github.com/" aria-label="Github" title="Github" className="pp-icon-link">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sakshipasalkar/" aria-label="LinkedIn" title="LinkedIn" className="pp-icon-link">
            <Linkedin size={18} />
          </a>
        </nav>

        {/* Theme toggle */}
        <button
          onClick={() => setDark((s) => !s)}
          className="pp-btn ghost small-toggle"
          aria-label="Toggle theme"
          title="Toggle theme"
          style={{ padding: "8px 10px" }}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </header>

      {/* Hero */}
      <main className="pp-main" id="main-content">
        <section className="pp-hero">
          <div className="pp-hero-left">
            
            <h1>
              Hi, I am <span className="pp-highlight">Sakshi Pasalkar</span>
            </h1>
            <div className="pp-pill">Open to work • Available for contract & full-time</div>
            <p className="pp-lead">
              A DevOps Engineer & Senior Technical Specialist who deals with automation, cloud,
              and system optimization — leveraging modern tools and practices to streamline workflows,
              enhance reliability, and deliver scalable solutions with passion and precision.
            </p>

            <div className="pp-cta-row">
              <div className="pp-meta">Currently: Avaya India Pvt Ltd</div>
              <a className="pp-btn ghost" href="#contact" aria-label="Contact">
                <Mail size={16} /> Contact Me
              </a>
            </div>
          </div>

          {/* Single polished portrait card — centered and prominent */}
          <div className="pp-hero-right">
            <div
              className="pp-photo-card pp-portrait-card"
              role="img"
              aria-label="Portrait of Sakshi Pasalkar"
            >
              {/* responsive picture (uses BASE_URL so it works on GitHub Pages too) */}
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${base}images/me-320.webp 320w, ${base}images/me-800.webp 800w, ${base}images/me-1200.webp 1200w`}
                  sizes="(max-width: 600px) 100vw, 320px"
                />
                <source
                  type="image/jpeg"
                  srcSet={`${base}images/me-320.jpg 320w, ${base}images/me-800.jpg 800w, ${base}images/me-1200.jpg 1200w`}
                  sizes="(max-width: 600px) 100vw, 320px"
                />
                <img
                  src={`${base}images/me-800.jpg`}
                  alt="Portrait of Sakshi Pasalkar — DevOps & Technical Specialist"
                  className="pp-portrait-large"
                  width={320}
                  height={400}
                  loading="eager"
                  decoding="async"
                  style={{ display: "block", maxWidth: "100%", height: "auto" }}
                />
              </picture>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="pp-section">
          <h2>Projects</h2>
          <div className="pp-grid">
            {projects.map((p) => (
              <article
                key={p.title}
                className="pp-card"
                aria-labelledby={`proj-${p.title.replace(/\s+/g, "-")}`}
              >
                <img src={p.img} alt={`${p.title} screenshot`} className="pp-card-img" />
                <div className="pp-card-body">
                  <div className="pp-card-top">
                    <h3 id={`proj-${p.title.replace(/\s+/g, "-")}`}>{p.title}</h3>
                    <div className="pp-case">Case Study</div>
                  </div>

                  <p className="pp-desc">{p.desc}</p>

                  <div className="pp-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="pp-tag">{t}</span>
                    ))}
                  </div>

                  <div className="pp-card-actions">
                    <a className="pp-link" href={p.demo} target="_blank" rel="noopener noreferrer">Live</a>
                    <a className="pp-link" href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="pp-section">
          <h2>Skills & Tools</h2>
          <div className="pp-two">
            <div className="pp-box">
              <h4>Core Technologies</h4>
              <div className="pp-skill-list">
                {skills.map((s) => (
                  <span key={s} className="pp-skill">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="pp-section">
          <h2>About Me</h2>
          <div className="pp-two">
            <div className="pp-about">
              <p>
                Dynamic Senior Technical Specialist with 3+ years of expertise in DevOps, cloud infrastructure,
                and automation engineering. Proven track record in building and managing CI/CD pipelines,
                containerized applications with Kubernetes, and infrastructure-as-code using Terraform,
                driving faster, more reliable deployments.
              </p>
              <div className="pp-stats">
                <div>
                  <small>Years experience</small>
                  <div className="pp-stat">3+</div>
                </div>
                <div>
                  <small>Open to</small>
                  <div className="pp-stat">Remote / Hybrid roles</div>
                </div>
              </div>
            </div>

            <aside className="pp-aside">{/* reserved for avatar/actions */}</aside>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="pp-section">
          <h2>Get in touch</h2>
          <div className="pp-two">
            <form className="pp-form" onSubmit={(e) => e.preventDefault()}>
              <label>
                Your name
                <input placeholder="Name" />
              </label>
              <label>
                Email
                <input placeholder="you@email.com" />
              </label>
              <label>
                Message
                <textarea placeholder="Hi! I'm interested in..." rows="5" />
              </label>
              <div className="pp-form-row">
                <button type="submit" className="pp-btn primary">
                  <Mail size={16} /> Send
                </button>
                <div className="pp-small">Or reach me at <strong>you@mail.com</strong></div>
              </div>
            </form>

            <div className="pp-box">
              <h4>Experience highlights</h4>
              <ul>
                <li>Built component libraries used across multiple apps.</li>
                <li>Reduced bundle size by 40% through code-splitting and tree-shaking.</li>
                <li>Improved core accessibility coverage and keyboard navigation.</li>
              </ul>
              <div className="pp-resume">
                <a className="pp-link" href="/resume.pdf" download>Download PDF</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="pp-footer">© {new Date().getFullYear()} Sakshi Pasalkar</footer>
    </div>
  );
}

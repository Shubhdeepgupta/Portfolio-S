import React, { Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Codepen,
  Menu,
  Briefcase,
  Sparkles,
} from "lucide-react";

// Lazy-load heavy hero previews to reduce initial bundle
const HeroPreview = lazy(() => import("./components/HeroPreview"));

export default function Portfolio() {
  const projects = [
    {
      title: "Aurora — Design System",
      desc: "A component library & design system with accessibility-first components and tokens.",
      tags: ["React", "TypeScript", "Storybook"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Pulse Analytics Dashboard",
      desc: "Real-time analytics dashboard with streaming charts and exportable reports.",
      tags: ["React", "D3", "WebSockets"],
      demo: "#",
      repo: "#",
    },
    {
      title: "Converse AI Chatbot",
      desc: "Conversational interface powering customer help flows and automated triage.",
      tags: ["Next.js", "Node", "AI"],
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

  // Respect user's prefer-reduced-motion setting
  const reduceMotion = useReducedMotion();

  // Centralized variants (uses the reduced-motion preference)
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 12 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: reduceMotion ? 0.01 : 0.42, ease: "easeOut" },
    }),
  };

  const hoverLiftProps = reduceMotion
    ? {}
    : { whileHover: { y: -6, scale: 1.01 }, transition: { type: "spring", stiffness: 200, damping: 18 } };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-indigo-900 to-sky-900 text-slate-100 antialiased">
      {/* Top navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/5 border-b border-white/6">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 90 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold">SD</div>
            <div>
              <div className="text-sm font-semibold">Shubhdeep Gupta</div>
              <div className="text-xs text-slate-300">Frontend Developer • UI / UX Enthusiast</div>
            </div>
          </motion.div>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <div className="flex gap-3 items-center">
              <a href="#" aria-label="Github" title="Github">
                <Github size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </nav>

          {/* mobile menu icon */}
          <div className="md:hidden">
            <Menu size={20} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12" id="main-content">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUpVariant}
            custom={0}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/6 w-max">
              <Sparkles size={18} />
              <span className="text-xs">Open to work • Available for contract & full-time</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              I build <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white to-yellow-300">fast, delightful</span> web apps.
            </h1>

            <p className="text-slate-300 max-w-xl">
              I'm a frontend developer focused on modern React applications, accessible UI, and performance. I love turning design systems into pixel-perfect, maintainable code with delightful micro-interactions.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 shadow-lg hover:scale-105 transform transition"
              >
                <Briefcase size={16} /> View Projects
              </a>

              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:bg-white/3 transition">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="mt-6 text-sm text-slate-400">
              <strong>Currently:</strong> Freelancing on UI systems • <strong>Previously:</strong> Avaya (Contact Center)
            </div>

            <div className="flex gap-3 mt-6">
              <a aria-label="Github" href="#"><Github /></a>
              <a aria-label="LinkedIn" href="#"><Linkedin /></a>
              <a aria-label="Codepen" href="#"><Codepen /></a>
            </div>
          </motion.div>

          {/* Hero visual (lazy-loaded to keep initial bundle light) */}
          <Suspense fallback={<div style={{ minHeight: 260 }} aria-hidden="true" />}>
            <HeroPreview reduceMotion={reduceMotion} />
          </Suspense>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
            Selected Projects
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                custom={i}
                variants={fadeUpVariant}
                initial="hidden"
                animate="show"
                {...hoverLiftProps}
                className="group bg-white/4 rounded-2xl p-5 border border-white/6 shadow-md will-change-transform"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-slate-300 text-sm mt-2">{p.desc}</p>
                  </div>
                  <div className="text-xs text-slate-400">Case Study</div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/6">{t}</span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <a href={p.demo} className="text-sm px-3 py-2 rounded-md bg-white/6 hover:bg-white/8">Live</a>
                  <a href={p.repo} className="text-sm px-3 py-2 rounded-md border border-white/6">Code</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-16">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
            Skills & Tools
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white/3 rounded-2xl p-6 border border-white/6">
              <h4 className="font-semibold mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-2 bg-white/6 rounded-md text-sm">{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-white/3 rounded-2xl p-6 border border-white/6">
              <h4 className="font-semibold mb-3">What I care about</h4>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Performance & Lighthouse scores</li>
                <li>Accessible markup & keyboard flows</li>
                <li>Design systems & component-driven dev</li>
                <li>Thoughtful animations & motion design</li>
              </ul>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-16">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
            About Me
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 bg-white/4 rounded-2xl p-6 border border-white/6">
              <p className="text-slate-300">I'm Shubhdeep — a UI-focused developer with a background in contact center products. I enjoy improving usability through thoughtful interaction design and clean code.</p>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400">Years experience</div>
                  <div className="font-semibold text-xl">2+</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Open to</div>
                  <div className="font-semibold text-xl">Remote / Hybrid roles</div>
                </div>
              </div>
            </div>

            <div className="bg-white/6 p-6 rounded-2xl border border-white/6 flex flex-col items-center">
              <div className="w-28 h-28 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-black font-bold">SD</div>
              <div className="mt-4 text-center text-sm text-slate-300">Available for hire • Based in India</div>
              <a href="#contact" className="mt-4 px-4 py-2 rounded-md bg-white/6">Say hi</a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 pb-24">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-bold">
            Get in touch
          </motion.h2>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <motion.form
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/4 rounded-2xl p-6 border border-white/6"
            >
              <div className="grid gap-3">
                <label className="text-xs text-slate-300">Your name</label>
                <input className="px-3 py-2 rounded-md bg-transparent border border-white/6" placeholder="Name" />

                <label className="text-xs text-slate-300">Email</label>
                <input className="px-3 py-2 rounded-md bg-transparent border border-white/6" placeholder="you@email.com" />

                <label className="text-xs text-slate-300">Message</label>
                <textarea className="px-3 py-2 rounded-md bg-transparent border border-white/6 h-28" placeholder="Hi! I'm interested in..." />

                <div className="flex items-center justify-between mt-3">
                  <button type="button" className="px-4 py-2 rounded-md bg-gradient-to-r from-indigo-600 to-sky-500">Send</button>
                  <div className="text-xs text-slate-400">Or reach me at <strong>you@mail.com</strong></div>
                </div>
              </div>
            </motion.form>

            <div className="bg-white/4 rounded-2xl p-6 border border-white/6">
              <h4 className="font-semibold">Experience highlights</h4>
              <ul className="mt-3 text-slate-300 list-disc list-inside space-y-2">
                <li>Built component libraries used across multiple apps.</li>
                <li>Reduced bundle size by 40% through code-splitting and tree-shaking.</li>
                <li>Improved core accessibility coverage and keyboard navigation.</li>
              </ul>

              <div className="mt-6">
                <h5 className="text-sm text-slate-400">Resume</h5>
                <a className="inline-block mt-2 px-4 py-2 rounded-md border border-white/6">Download PDF</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/6 mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-slate-400">
          <div>© {new Date().getFullYear()} Shubhdeep Gupta</div>
          <div className="flex gap-4 items-center">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

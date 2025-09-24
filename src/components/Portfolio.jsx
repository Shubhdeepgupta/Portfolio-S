import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Codepen,
  Menu,
  X,
  Briefcase,
  Sparkles,
} from "lucide-react";

// Modern single-file portfolio component
// Usage: place this file in a React app (Vite / Create React App / Next.js page)
// Requirements: tailwindcss, framer-motion, lucide-react installed and configured.

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-indigo-900 to-sky-900 text-slate-100 antialiased">
      {/* Top navigation */}


<header className="sticky top-0 z-50 backdrop-blur-md bg-white/6 border-b border-white/8">
  <div className="max-w-6xl mx-auto px-6 py-5 md:py-6 flex items-center justify-between">
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90 }}
      className="flex items-center gap-4"
    >
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold text-lg md:text-xl">
        SD
      </div>
      <div className="hidden md:block">
        <div className="text-sm md:text-base font-semibold">Shubhdeep Gupta</div>
        <div className="text-xs md:text-sm text-slate-300">Frontend Developer • UI / UX Enthusiast</div>
      </div>
    </motion.div>

    <nav className="hidden md:flex gap-8 items-center text-sm md:text-base">
      <a href="#projects" className="hover:underline py-2 px-3">Projects</a>
      <a href="#skills" className="hover:underline py-2 px-3">Skills</a>
      <a href="#about" className="hover:underline py-2 px-3">About</a>
      <a href="#contact" className="hover:underline py-2 px-3">Contact</a>
      <div className="flex gap-4 items-center ml-2">
        <a href="#" aria-label="Github" title="Github" className="p-2 rounded-md hover:bg-white/6">
          <Github size={20} />
        </a>
        <a href="#" aria-label="LinkedIn" title="LinkedIn" className="p-2 rounded-md hover:bg-white/6">
          <Linkedin size={20} />
        </a>
      </div>
    </nav>

    {/* mobile menu icon */}
    <div className="md:hidden flex items-center gap-3">
      <button className="p-2 rounded-md border border-white/8 bg-white/3">
        <Menu size={22} />
      </button>
    </div>
  </div>
</header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
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

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.12 }}
            className="relative"
          >
            <div className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-tr from-white/6 to-white/3 border border-white/5 p-6 backdrop-blur-sm">
              {/* Example animated cards */}
              <div className="flex gap-4">
                <motion.div whileHover={{ y: -8 }} className="flex-1 bg-white/4 p-4 rounded-xl">
                  <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-500/30 to-sky-500/20 flex items-center justify-center">Project Preview</div>
                </motion.div>
                <motion.div whileHover={{ y: -8 }} className="w-48 bg-white/4 p-4 rounded-xl">
                  <div className="h-36 rounded-lg bg-gradient-to-br from-pink-400/30 to-yellow-400/10 flex items-center justify-center">UI Snippet</div>
                </motion.div>
              </div>

              <div className="mt-4 text-xs text-slate-400">Interactive previews showcase animations and micro-interactions.</div>
            </div>

            {/* subtle floating blobs */}
            <div className="pointer-events-none absolute -right-8 -top-8 opacity-30 blur-2xl w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 mix-blend-screen" />
            <div className="pointer-events-none absolute -left-16 -bottom-8 opacity-20 blur-3xl w-56 h-56 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 mix-blend-screen" />
          </motion.div>
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
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                whileHover={{ scale: 1.02 }}
                className="group bg-white/4 rounded-2xl p-5 border border-white/6 shadow-md"
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

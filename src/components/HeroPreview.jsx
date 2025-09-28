// src/components/HeroPreview.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HeroPreview({ reduceMotion = false }) {
  const cardHover = reduceMotion ? {} : { whileHover: { y: -8 }, transition: { type: "spring", stiffness: 200 } };

  return (
    <div className="relative">
      <div className="w-full h-72 md:h-96 rounded-2xl bg-gradient-to-tr from-white/6 to-white/3 border border-white/5 p-6 backdrop-blur-sm">
        <div className="flex gap-4">
          <motion.div {...cardHover} className="flex-1 bg-white/4 p-4 rounded-xl will-change-transform">
            <div className="h-36 rounded-lg bg-gradient-to-br from-indigo-500/30 to-sky-500/20 flex items-center justify-center">
              Project Preview
            </div>
          </motion.div>
          <motion.div {...cardHover} className="w-48 bg-white/4 p-4 rounded-xl will-change-transform">
            <div className="h-36 rounded-lg bg-gradient-to-br from-pink-400/30 to-yellow-400/10 flex items-center justify-center">
              UI Snippet
            </div>
          </motion.div>
        </div>

        <div className="mt-4 text-xs text-slate-400">Interactive previews showcase animations and micro-interactions.</div>
      </div>

      <div className="pointer-events-none absolute -right-8 -top-8 opacity-30 blur-2xl w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 mix-blend-screen" />
      <div className="pointer-events-none absolute -left-16 -bottom-8 opacity-20 blur-3xl w-56 h-56 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 mix-blend-screen" />
    </div>
  );
}

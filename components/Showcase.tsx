"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "VELOCITYHQ",
    category: "Product acceleration platform",
    stat: "Launch signups ↑ 61%",
    description:
      "Immersive demand capture experience with layered storytelling, motion cues, and interaction-led proof points."
  },
  {
    name: "SYNTHORA",
    category: "AI research collective",
    stat: "Funding pipeline ↑ 2.4×",
    description:
      "Narrative-led landing page blending scientific credibility with vibrant futurescapes and animated data stories."
  },
  {
    name: "TIDALYNX",
    category: "Climate intelligence suite",
    stat: "Partner conversions ↑ 43%",
    description:
      "Rich storytelling system with interactive climate dashboards, cinematic transitions, and frictionless flows."
  }
];

export default function Showcase() {
  return (
    <section className="mb-24">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Selected Launches</p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Category-defining stories engineered for momentum.
          </h2>
        </div>
        <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
          View full reel →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-glow"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] opacity-90 transition duration-500 group-hover:opacity-100" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/60">
                  <span>{project.category}</span>
                  <span>{project.stat}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-white/75">{project.description}</p>
              </div>
              <div className="mt-8 flex items-center justify-between text-sm text-white/60">
                <span>View case study</span>
                <span className="text-white">↗</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

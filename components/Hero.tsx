"use client";

import { motion } from "framer-motion";

const gradientText = "text-gradient";

const stats = [
  { label: "Experience Lift", value: "4.2×" },
  { label: "Average Conversion", value: "+38%" },
  { label: "Launch Timeline", value: "14 days" }
];

export default function Hero() {
  return (
    <section className="relative mb-28">
      <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-brand-500/30 blur-[120px]" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-panel relative overflow-hidden rounded-3xl px-8 pt-16 pb-20"
      >
        <div className="absolute -right-10 -top-20 h-60 w-60 rounded-full bg-white/10 blur-[80px]" />
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-white/10 bg-white/5 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/70">
              Elevate your presence
            </span>
            <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Illuminate the web with{" "}
              <span className={gradientText}>conversion-ready experiences.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-white/80">
              LumaSphere is a boutique creative studio crafting immersive landing pages that fuse motion,
              storytelling, and technology. We help visionary brands launch with clarity, confidence, and
              measurable impact.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-brand-400 via-teal-300 to-orange-300 px-6 py-3 text-sm font-semibold text-brand-900 shadow-glow transition-transform duration-200 hover:scale-[1.01]"
              >
                <span className="absolute inset-0 translate-x-full bg-white/30 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
                Book Immersion Call
              </a>
              <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
                View Latest Launch ↗
              </a>
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
              className="glass-panel relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-80" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Vision Flow</span>
                  <span>Live</span>
                </div>
                <div className="relative mt-10 grid gap-3">
                  <div className="rounded-2xl bg-gradient-to-br from-brand-500/40 via-brand-400/20 to-white/10 p-6 shadow-card backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.4em] text-white/60">Orbit</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Signature Narrative Engine</h3>
                    <p className="mt-3 text-sm text-white/75">
                      Modular storytelling system blending micro-interactions with clarity-centered copy.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-6 text-center"
                      >
                        <p className="text-xs uppercase tracking-[0.3em] text-white/50">{stat.label}</p>
                        <p className="mt-2 text-xl font-semibold text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-between text-xs text-white/60">
                  <span>Meticulous design + motion craft</span>
                  <span>EST. 2021</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

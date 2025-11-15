"use client";

import { motion } from "framer-motion";

const phases = [
  {
    title: "01. Immersion",
    copy:
      "Collaborative discovery dives into your narrative, positioning, and launch targets. We align the visual direction with your growth roadmap."
  },
  {
    title: "02. Experience Engine",
    copy:
      "Our team designs modular sections and interaction rhythms that articulate your value with clarity, rhythm, and emotional resonance."
  },
  {
    title: "03. Momentum Launch",
    copy:
      "High-touch QA, analytics activation, and optimization loops ensure your brand goes live polished, performant, and ready to scale."
  }
];

export default function Story() {
  return (
    <section className="mb-24">
      <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-10"
        >
          <div className="absolute inset-0 bg-glass-gradient opacity-80" />
          <div className="relative">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Our Process</p>
            <h2 className="mt-4 max-w-lg text-3xl font-semibold text-white md:text-4xl">
              Clarity-driven methodology for launches that feel inevitable.
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">
              We treat each engagement as a cinematic arc. From the first hero frame to the CTA crescendo, every
              moment is intentionally composed to guide your audience with purpose.
            </p>
            <div className="mt-8 grid gap-6">
              {phases.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-white/80 backdrop-blur"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm">{phase.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-brand-500/30 via-teal-300/10 to-white/10 p-8 text-white backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Signal Intelligence</p>
            <h3 className="mt-4 text-2xl font-semibold">Launch telemetry & experimentation baked in.</h3>
            <p className="mt-3 text-sm text-white/80">
              Auto-configured analytics, scroll depth tracking, and demand capture experiments give your team
              immediate launch clarity.
            </p>
            <div className="mt-6 grid gap-4 text-sm text-white/80">
              <div className="flex items-center justify-between">
                <span>Adaptive experience variants</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Live
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Realtime narrative scoring</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Beta
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/70 backdrop-blur">
            <p>
              “The LumaSphere team choreographed our most successful launch to date. The narrative precision and
              motion polish elevated our positioning overnight.”
            </p>
            <div className="mt-4 text-xs uppercase tracking-[0.3em] text-white/50">Nova Chen — CMO, Aeon Labs</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

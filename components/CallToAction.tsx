"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative mb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel relative overflow-hidden rounded-3xl px-10 py-16 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_transparent_55%)] opacity-80" />
        <div className="absolute -left-20 bottom-0 h-40 w-40 rounded-full bg-teal-300/30 blur-3xl" />
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Launch with luminosity</p>
          <h2 className="mt-4 text-4xl font-semibold text-white">
            Ready to engineer a landing experience that converts curiosity into momentum?
          </h2>
          <p className="mt-4 text-white/75">
            Schedule a 30-minute immersion session with our creative directors. We’ll co-map the story,
            interactions, and performance guardrails your next launch deserves.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-teal-300 via-brand-400 to-orange-300 px-8 py-3 text-sm font-semibold text-brand-900 shadow-glow transition-transform duration-200 hover:scale-[1.02]"
            >
              <span className="absolute inset-0 translate-x-full bg-white/40 opacity-0 transition duration-500 group-hover:translate-x-0 group-hover:opacity-100" />
              Start Project
            </a>
            <a href="#" className="text-sm font-medium text-white/70 transition hover:text-white">
              Download launch deck →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

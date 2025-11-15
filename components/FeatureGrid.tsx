"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Strategic Storycraft",
    description:
      "We distill your vision into a conversion narrative that guides visitors from curiosity to commitment.",
    accent: "from-brand-400/40 to-teal-300/20"
  },
  {
    title: "Motion-Infused Interfaces",
    description:
      "Tasteful interactions and cinematic sequences reinforce trust while showcasing the depth of your offer.",
    accent: "from-teal-300/40 to-orange-200/20"
  },
  {
    title: "Launch Intelligence",
    description:
      "Insight dashboards and pre-built optimization experiments arm your team with real-time launch clarity.",
    accent: "from-orange-300/40 to-brand-400/20"
  },
  {
    title: "Conversion Architecture",
    description:
      "We choreograph CTAs, social proof, and frictionless flows to convert demand into measurable outcomes.",
    accent: "from-brand-400/30 to-white/10"
  }
];

export default function FeatureGrid() {
  return (
    <section className="mb-24">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">Where imagination meets intent</h2>
          <p className="mt-3 max-w-xl text-white/70">
            LumaSphere transforms SaaS, fintech, and climate innovators into category-leading experiences.
            We partner through strategy, design, and launch orchestration.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Partner Program
          </div>
          <div className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
            Seamless Handover
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-card backdrop-blur"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-100 transition duration-500`}
            />
            <div className="relative">
              <div className="mb-4 h-12 w-12 rounded-full border border-white/20 bg-white/10" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/75">{feature.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

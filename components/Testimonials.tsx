"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "They engineered a new category narrative that captured investor, customer, and partner excitement in a single immersive experience.",
    name: "Avery Holt",
    title: "CEO, CircuitFlow"
  },
  {
    quote:
      "From the first wireframe to launch day, we felt like we were co-directing a cinematic brand story. The conversion metrics followed.",
    name: "Mia Lang",
    title: "Head of Growth, Apexline"
  },
  {
    quote:
      "LumaSphere's motion design and copy choreography made our complex platform feel intuitive. The best launch partner we've had.",
    name: "Rahul Das",
    title: "Product Lead, Orbit Labs"
  }
];

export default function Testimonials() {
  return (
    <section className="mb-24">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60">Trusted by visionaries</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Launch partnerships that last.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-8 text-sm text-white/80 backdrop-blur"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-brand-400 via-teal-300 to-orange-300" />
            <p className="text-base leading-relaxed">
              “{testimonial.quote}”
            </p>
            <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-white/60">
              {testimonial.name} — {testimonial.title}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = ["Studio", "Work", "Approach", "Insights", "Contact"];

export default function NavigationBar() {
  return (
    <header className="sticky top-6 z-20 mb-24">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel flex items-center justify-between rounded-full px-6 py-3"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg font-semibold text-white">
            LS
          </div>
          <span className="text-sm uppercase tracking-[0.4em] text-white/70">LumaSphere</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="relative transition duration-300 hover:text-white"
            >
              <span>{item}</span>
              <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-300 via-teal-200 to-orange-200 transition-transform duration-300 hover:scale-x-100" />
            </Link>
          ))}
        </nav>
        <Link
          href="#"
          className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
        >
          Launch Workshop
        </Link>
      </motion.div>
    </header>
  );
}

import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import Story from "@/components/Story";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-900/60 via-brand-700/30 to-brand-500/20 opacity-70 blur-3xl" />
        <div className="absolute -left-48 top-10 h-96 w-96 animate-pulseGlow rounded-full bg-brand-500/50 blur-[110px]" />
        <div className="absolute bottom-20 -right-40 h-96 w-96 animate-pulseGlow rounded-full bg-cyan-400/30 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-72 w-72 animate-float-slow rounded-full border border-white/10 bg-gradient-to-br from-white/15 to-transparent blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-grid-radial opacity-60" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <NavigationBar />
        <Hero />
        <FeatureGrid />
        <Story />
        <Showcase />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </main>
  );
}

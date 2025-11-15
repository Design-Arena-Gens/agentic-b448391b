export default function Footer() {
  return (
    <footer className="mb-16 flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-sm text-white/60 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-sm uppercase tracking-[0.3em] text-white/70">LumaSphere Studio</h3>
        <p className="mt-2 max-w-md text-white/60">
          Crafting luminous digital experiences for teams shipping the future. Operating globally from New
          York, Berlin, and Singapore.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.3em] text-white/50">
        <a href="#">LinkedIn</a>
        <a href="#">Dribbble</a>
        <a href="#">Behance</a>
        <a href="#">Newsletter</a>
      </div>
    </footer>
  );
}

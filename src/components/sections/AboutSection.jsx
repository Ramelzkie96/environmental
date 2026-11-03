import AboutHero from "./AboutHero";

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-20">
      {/* Faint corner blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-brand-light/80 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-40 size-[28rem] rounded-full bg-brand-light/80 blur-2xl"
      />

      <AboutHero />
    </section>
  );
}
import SectionBadge from "./SectionBadge";

export default function SectionHeading({ badge, title, highlight, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionBadge>{badge}</SectionBadge>

      <h2 className="mt-5 text-4xl leading-tight font-extrabold tracking-tight text-forest md:text-5xl lg:text-6xl">
        {title} <span className="text-brand">{highlight}</span>
      </h2>

      <p className="mt-4 text-lg text-ink md:text-xl">{subtitle}</p>
    </div>
  );
}
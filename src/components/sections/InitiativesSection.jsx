import { Leaf } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import InitiativeFeatureCard from "../ui/InitiativeFeatureCard";
import WaveDivider from "../ui/WaveDivider";
import { initiativeCards } from "../../data/content";

export default function InitiativesSection() {
  return (
    <section
      id="initiatives"
      className="relative overflow-hidden pt-28 pb-40 md:pb-56"
    >
      {/* Decorative pale leaves (hidden on small screens) */}
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -left-20 hidden size-80 -rotate-12 fill-brand-light text-brand-light md:block"
      />
      <Leaf
        aria-hidden="true"
        className="pointer-events-none absolute top-10 -right-24 hidden size-96 rotate-[20deg] fill-brand-light text-brand-light md:block"
      />

      <WaveDivider />

      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <SectionHeading
          badge="Our Initiatives"
          title="Small Actions."
          highlight="Big Change."
          subtitle="Discover our key initiatives to build a greener and healthier planet."
        />

        <div className="mx-auto mt-14 grid max-w-7xl gap-8 md:grid-cols-3">
          {initiativeCards.map((card) => (
            <InitiativeFeatureCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
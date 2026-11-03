import { ChevronRight } from "lucide-react";
import SectionBadge from "../ui/SectionBadge";
import FeatureItem from "../ui/FeatureItem";
import BlobImage from "../ui/BlobImage";
import Button from "../ui/Button";
import { aboutFeatures } from "../../data/content";
import aboutSeedling from "../../assets/images/about-seedling.png";

export default function AboutHero() {
  return (
    <section className="relative z-10 grid items-center gap-12 px-6 pt-8 pb-20 md:px-12 lg:grid-cols-2 lg:gap-8 lg:px-16 lg:pt-10 lg:pb-28">
      {/* Left column */}
      <div>
        <SectionBadge>About Us</SectionBadge>

        <h1 className="mt-6 text-5xl leading-[1.05] font-extrabold tracking-tight text-forest md:text-6xl lg:text-7xl">
          Together for
          <br />a <span className="text-brand">Greener</span> Tomorrow
        </h1>

        <p className="mt-8 max-w-lg text-xl leading-relaxed text-ink">
          EcoSphere is an environmental awareness platform committed to
          educating, inspiring, and empowering people to live sustainably and
          protect our planet.
        </p>

        <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brand/25">
          {aboutFeatures.map((feature) => (
            <FeatureItem key={feature.title} {...feature} />
          ))}
        </div>

        <Button
          size="lg"
          className="mt-12"
          iconRight={<ChevronRight className="size-4" />}
        >
          Learn More
        </Button>
      </div>

      {/* Right column */}
      <BlobImage src={aboutSeedling} alt="A young seedling growing from soil" />
    </section>
  );
}
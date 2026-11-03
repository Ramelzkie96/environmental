import { Sprout, ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import heroLandscape from "../../assets/images/hero-landscape.png";

export default function Hero() {
  return (
    // No `relative` on this section on purpose: the absolute layers below
    // stretch across the whole white card (navbar → cards), like the design.
    <section className="px-6 pt-10 pb-24 md:px-12 lg:px-16 lg:pt-24 lg:pb-40">
      {/* Background landscape */}
      <img
        src={heroLandscape}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-right opacity-25 md:w-[70%] md:opacity-100"
      />
      {/* Fade image into white on the left and bottom */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-white from-30% via-white/60 via-50% to-transparent to-75% md:from-35%" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-white/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl leading-[1.05] font-extrabold tracking-tight text-forest md:text-7xl lg:text-[5.5rem]">
          Protect Nature,
          <br />
          Preserve <span className="text-brand">Our Future.</span>
        </h1>

        <p className="mt-8 max-w-md text-xl leading-snug text-ink md:text-2xl">
          Small choices today can create a healthier planet for generations to
          come.
        </p>

        <Button
          size="lg"
          className="mt-10"
          icon={<Sprout className="size-5" />}
          iconRight={<ChevronRight className="size-4" />}
        >
          Explore Our Mission
        </Button>
      </div>
    </section>
  );
}
import { ChevronRight } from "lucide-react";
import Button from "./Button";

export default function InitiativeFeatureCard({
  icon: Icon,
  title,
  description,
  image,
}) {
  return (
    <article className="flex flex-col rounded-[2rem] border border-white bg-white/80 p-2.5 pb-8 text-center shadow-xl shadow-forest/10 backdrop-blur-md transition hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="aspect-[16/10] w-full rounded-3xl object-cover"
      />

      {/* Icon circle overlapping the bottom edge of the photo */}
      <span className="relative z-10 mx-auto -mt-10 grid size-20 place-items-center rounded-full bg-brand-light text-forest ring-4 ring-white/80">
        <Icon className="size-9" strokeWidth={2} />
      </span>

      <h3 className="mt-4 text-2xl font-bold text-forest">{title}</h3>
      <p className="mx-auto mt-3 max-w-xs text-lg leading-snug text-ink/80">
        {description}
      </p>

      <div className="mt-6">
        <Button variant="outline" iconRight={<ChevronRight className="size-4" />}>
          Learn More
        </Button>
      </div>
    </article>
  );
}
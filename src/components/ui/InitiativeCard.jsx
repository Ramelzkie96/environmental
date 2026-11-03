import { ArrowRight } from "lucide-react";

export default function InitiativeCard({
  title,
  description,
  image,
  href = "#",
}) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-3xl border border-white bg-white/80 p-3 shadow-lg shadow-forest/10 backdrop-blur-md transition hover:-translate-y-1 hover:shadow-xl"
    >
      <img
        src={image}
        alt={title}
        className="size-28 shrink-0 rounded-2xl object-cover sm:size-32"
      />

      <div className="min-w-0 flex-1">
        <h3 className="text-xl font-bold text-forest">{title}</h3>
        <p className="mt-1 text-sm leading-snug text-ink/80">{description}</p>
      </div>

      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-light text-forest transition group-hover:bg-brand group-hover:text-white">
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}
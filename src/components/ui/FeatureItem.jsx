export default function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="flex flex-col items-center px-3 text-center sm:px-5">
      <span className="grid size-16 place-items-center rounded-full bg-brand-light text-forest">
        <Icon className="size-7" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-forest">{title}</h3>
      <p className="mt-1 text-sm leading-snug text-ink/80">{description}</p>
    </div>
  );
}
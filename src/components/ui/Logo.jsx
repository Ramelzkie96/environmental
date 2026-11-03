import { Sprout } from "lucide-react";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <Sprout className="size-10 text-brand" strokeWidth={2.2} />
      <span className="text-3xl font-bold tracking-tight text-forest">
        EcoSphere
      </span>
    </a>
  );
}
import { Sprout } from "lucide-react";

export default function SectionBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-brand-light px-5 py-2.5 text-lg font-semibold text-forest">
      <Sprout className="size-5 text-brand" />
      {children}
    </span>
  );
}
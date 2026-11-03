import InitiativeCard from "../ui/InitiativeCard";
import { initiatives } from "../../data/content";

export default function InitiativeCards() {
  return (
    <section className="relative z-10 grid gap-4 px-6 pb-8 md:px-12 lg:grid-cols-3 lg:px-10">
      {initiatives.map((item) => (
        <InitiativeCard key={item.title} {...item} />
      ))}
    </section>
  );
}
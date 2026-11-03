import Hero from "./Hero";
import InitiativeCards from "./InitiativeCards";

export default function HomeSection() {
  return (
    // `relative` so the hero landscape and its fades are positioned inside
    // this section. `pt-20` clears the fixed navbar.
    <section id="home" className="relative overflow-hidden pt-20">
      <Hero />
      <InitiativeCards />
    </section>
  );
}
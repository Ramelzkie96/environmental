import { Globe, Sprout, Users, Recycle, Trash2, TreePine } from "lucide-react";
import forest from "../assets/images/forest.jpg";
import turtle from "../assets/images/turtle.jpg";
import seedling from "../assets/images/seedling.jpg";
import conserveResources from "../assets/images/conserve-resources.jpg";
import reducePollution from "../assets/images/reduce-pollution.jpg";
import restoreNature from "../assets/images/restore-nature.jpg";

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Initiatives", id: "initiatives" },
  { label: "Our Impact", id: "impact" },
  { label: "Contact", id: "contact" },
];

// Small cards at the bottom of the Home hero
export const initiatives = [
  {
    title: "Forest Conservation",
    description: "Protecting our planet's green lungs",
    image: forest,
  },
  {
    title: "Ocean Protection",
    description: "Keeping marine ecosystems thriving",
    image: turtle,
  },
  {
    title: "Climate Action",
    description: "Building a cleaner future together",
    image: seedling,
  },
];

// Mission / Vision / Impact row in the About section
export const aboutFeatures = [
  {
    icon: Globe,
    title: "Our Mission",
    description: "Spread awareness and promote sustainable living.",
  },
  {
    icon: Sprout,
    title: "Our Vision",
    description: "A cleaner, greener, and healthier planet.",
  },
  {
    icon: Users,
    title: "Our Impact",
    description: "A sustainable future for generations to come.",
  },
];

// Large cards in the Initiatives section
export const initiativeCards = [
  {
    icon: Recycle,
    title: "Conserve Resources",
    description: "Use resources wisely and reduce unnecessary waste.",
    image: conserveResources,
  },
  {
    icon: Trash2,
    title: "Reduce Pollution",
    description: "Minimize pollution and keep our environment clean.",
    image: reducePollution,
  },
  {
    icon: TreePine,
    title: "Restore Nature",
    description: "Support reforestation and protect natural habitats.",
    image: restoreNature,
  },
];
import Navbar from "./components/layout/Navbar";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import InitiativesSection from "./components/sections/InitiativesSection";

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <HomeSection />
        <AboutSection />
        <InitiativesSection />
      </main>
    </div>
  );
}
import { useEffect, useState } from "react";
import { Heart, Users, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { navLinks } from "../../data/content";

const ids = navLinks.map((link) => link.id);

// Returns the id of the section currently at ~35% of the viewport height
function useActiveSection() {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const line = window.innerHeight * 0.35;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return active;
}

function NavButtons() {
  return (
    <>
      <Button variant="dark" icon={<Heart className="size-4 fill-current" />}>
        Donate
      </Button>
      <Button variant="outline" icon={<Users className="size-4" />}>
        Get Involved
      </Button>
    </>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-6 py-4 transition-all duration-300 md:px-12 lg:px-16 ${
        scrolled || open
          ? "bg-white/85 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative py-2 text-[15px] font-medium transition-colors ${
                active === id
                  ? "text-brand after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand"
                  : "text-ink hover:text-brand"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <NavButtons />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="grid size-11 place-items-center rounded-full bg-white/80 text-forest shadow backdrop-blur lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-4 rounded-3xl bg-white p-6 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`text-lg font-medium ${
                  active === id ? "text-brand" : "text-ink"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <NavButtons />
          </div>
        </div>
      )}
    </header>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre mí", href: "sobre-mi" },
  { label: "Proyectos", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Servicios", href: "services" },
  { label: "Contacto", href: "contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1A1A2E" : "none",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-xl font-bold tracking-wide"
          style={{ color: "#5B21B6" }}
        >
          BL
          <span
            className="mx-1 text-xs font-sans font-normal"
            style={{ color: "#3A3A5A" }}
          >
            .
          </span>
          <span
            className="text-xs font-sans font-normal tracking-widest"
            style={{ color: "#3A3A5A" }}
          >
            dev
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "#3A3A5A" }}
              onMouseEnter={(e) => (e.target.style.color = "#A78BFA")}
              onMouseLeave={(e) => (e.target.style.color = "#3A3A5A")}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="text-xs tracking-widest uppercase px-5 py-2 transition-all duration-300"
            style={{
              border: "1px solid #5B21B6",
              color: "#A78BFA",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#5B21B6";
              e.target.style.color = "#F5F0E8";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
              e.target.style.color = "#A78BFA";
            }}
          >
            Trabajemos
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.span
            animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
            className="block w-5 h-px"
            style={{ background: "#5B21B6" }}
          />
          <motion.span
            animate={{ opacity: menuOpen ? 0 : 1 }}
            className="block w-5 h-px"
            style={{ background: "#5B21B6" }}
          />
          <motion.span
            animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
            className="block w-5 h-px"
            style={{ background: "#5B21B6" }}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.98)",
              borderBottom: "1px solid #1A1A2E",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-xs tracking-widest uppercase text-left py-2"
                  style={{
                    color: "#6B6B7B",
                    borderBottom: "1px solid #1A1A2E",
                  }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="text-xs tracking-widest uppercase py-3 mt-2"
                style={{ background: "#5B21B6", color: "#F5F0E8" }}
              >
                Trabajemos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

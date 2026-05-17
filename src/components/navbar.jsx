import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/languageContext";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);
  const { lang, t, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const scrollTo = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const links = [
    { label: t?.nav?.about || "Sobre mi", href: "about" },
    { label: t?.nav?.projects || "Proyectos", href: "projects" },
    { label: t?.nav?.skills || "Skills", href: "skills" },
    { label: t?.nav?.services || "Servicios", href: "services" },
  ];

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
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "#3A3A5A" }}
              onMouseEnter={(e) => (e.target.style.color = "#A78BFA")}
              onMouseLeave={(e) => (e.target.style.color = "#3A3A5A")}
            >
              {link.label}
            </button>
          ))}

          {/* Language dropdown */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-xs tracking-widest uppercase px-3 py-1.5 transition-all duration-300"
              style={{ border: "1px solid #1A1A2E", color: "#6B6B7B" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#5B21B6";
                e.currentTarget.style.color = "#A78BFA";
              }}
              onMouseLeave={(e) => {
                if (!langOpen) {
                  e.currentTarget.style.borderColor = "#1A1A2E";
                  e.currentTarget.style.color = "#6B6B7B";
                }
              }}
            >
              {lang === "es" ? "ES" : "EN"}
              <motion.span
                animate={{ rotate: langOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                style={{ fontSize: 8 }}
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 overflow-hidden"
                  style={{
                    background: "#111111",
                    border: "1px solid #1A1A2E",
                    minWidth: 100,
                  }}
                >
                  {["es", "en"].map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        if (l !== lang) toggleLang();
                        setLangOpen(false);
                      }}
                      className="w-full text-left px-4 py-2.5 text-xs tracking-widest uppercase transition-colors"
                      style={{
                        color: l === lang ? "#A78BFA" : "#6B6B7B",
                        background:
                          l === lang ? "rgba(91,33,182,0.1)" : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        if (l !== lang)
                          e.currentTarget.style.background =
                            "rgba(91,33,182,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        if (l !== lang)
                          e.currentTarget.style.background = "transparent";
                      }}
                    >
                      {l === "es" ? "Español" : "English"}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            {t?.nav?.cta || "Trabajemos"}
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
                  key={link.href}
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
              <div className="flex gap-3">
                {["es", "en"].map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      if (l !== lang) toggleLang();
                    }}
                    className="text-xs tracking-widest uppercase px-4 py-2"
                    style={{
                      background:
                        l === lang ? "rgba(91,33,182,0.15)" : "transparent",
                      border: `1px solid ${l === lang ? "#5B21B6" : "#1A1A2E"}`,
                      color: l === lang ? "#A78BFA" : "#6B6B7B",
                    }}
                  >
                    {l === "es" ? "Español" : "English"}
                  </button>
                ))}
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="text-xs tracking-widest uppercase py-3 mt-2"
                style={{ background: "#5B21B6", color: "#F5F0E8" }}
              >
                {t?.nav?.cta || "Trabajemos"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;

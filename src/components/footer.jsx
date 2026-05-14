function Footer() {
  const scrollTo = (href) => {
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Sobre mi", href: "sobre-mi" },
    { label: "Proyectos", href: "proyectos" },
    { label: "Skills", href: "skills" },
    { label: "Servicios", href: "servicios" },
    { label: "Contacto", href: "contacto" },
  ];

  const contactLinks = [
    {
      label: "brunolopezx.dev@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&to=brunolopezx.dev@gmail.com",
    },
    { label: "github.com/brunolopezx", href: "https://github.com/brunolopezx" },
    { label: "Cordoba, Argentina", href: null },
  ];

  return (
    <footer style={{ background: "#0A0A0A", borderTop: "1px solid #1A1A2E" }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
        <div>
          <p
            className="font-serif text-2xl font-bold mb-1"
            style={{ color: "#5B21B6" }}
          >
            BL
          </p>
          <p
            className="text-xs tracking-widest uppercase mb-6"
            style={{ color: "#3A3A5A" }}
          >
            Frontend Developer
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "#3A3A5A" }}>
            Diseno y desarrollo interfaces web y mobile modernas. Cordoba,
            Argentina.
          </p>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#3A3A5A" }}
          >
            Navegacion
          </p>
          <div className="flex flex-col gap-3">
            {navLinks.map(function (item) {
              return (
                <button
                  key={item.label}
                  onClick={function () {
                    scrollTo(item.href);
                  }}
                  className="text-xs text-left transition-colors"
                  style={{ color: "#3A3A5A" }}
                  onMouseEnter={function (e) {
                    e.target.style.color = "#A78BFA";
                  }}
                  onMouseLeave={function (e) {
                    e.target.style.color = "#3A3A5A";
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#3A3A5A" }}
          >
            Contacto
          </p>
          <div className="flex flex-col gap-3 mb-8">
            {contactLinks.map(function (item) {
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs transition-colors"
                    style={{ color: "#3A3A5A" }}
                    onMouseEnter={function (e) {
                      e.target.style.color = "#A78BFA";
                    }}
                    onMouseLeave={function (e) {
                      e.target.style.color = "#3A3A5A";
                    }}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <p
                  key={item.label}
                  className="text-xs"
                  style={{ color: "#3A3A5A" }}
                >
                  {item.label}
                </p>
              );
            })}
          </div>
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "#5B21B6", boxShadow: "0 0 8px #5B21B6" }}
            />
            <p className="text-xs" style={{ color: "#3A3A5A" }}>
              Disponible para proyectos
            </p>
          </div>
        </div>
      </div>

      <div
        style={{ borderTop: "1px solid #1A1A2E" }}
        className="py-6 text-center"
      >
        <p className="text-xs" style={{ color: "#2A2A3A" }}>
          2026 Bruno Lopez Scidá - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}

export default Footer;

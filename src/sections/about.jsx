import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import { useRef, useEffect } from "react";

function Counter({ to, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { stiffness: 80, damping: 20 });
  const displayRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = Math.round(v) + "+";
      }
    });
  }, [rounded]);

  return (
    <div ref={ref} className="text-center">
      <p
        ref={displayRef}
        className="font-serif text-5xl font-bold mb-2"
        style={{ color: "#5B21B6" }}
      >
        0+
      </p>
      <p
        className="text-xs uppercase tracking-widest"
        style={{ color: "#6B6B7B" }}
      >
        {label}
      </p>
    </div>
  );
}

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="py-28 px-6"
      style={{ background: "#0D0D0D" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#5B21B6" }} />
              <p
                className="text-xs tracking-[.4em] uppercase"
                style={{ color: "#A78BFA" }}
              >
                Sobre mí
              </p>
            </div>
            <h2
              className="font-serif text-5xl font-bold mb-8 leading-tight"
              style={{ color: "#F5F0E8" }}
            >
              Construyo productos
              <br />
              <span style={{ color: "#5B21B6" }}>que importan.</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#6B6B7B" }}
            >
              Soy Bruno Lopez, técnico en programación y desarrollador frontend
              de Córdoba, Argentina. Me especializo en construir interfaces web
              y mobile que combinan buen diseño con código limpio y performante.
            </p>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#6B6B7B" }}
            >
              Trabajo con React, Flutter y Angular para crear experiencias
              digitales que los usuarios disfrutan usar. Tengo experiencia en
              proyectos de e-commerce, landing pages, dashboards y aplicaciones
              mobile.
            </p>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "#6B6B7B" }}
            >
              Inglés C1 — puedo trabajar con clientes y equipos internacionales
              sin problema.
            </p>

            <div className="flex flex-wrap gap-3">
              {["Disponible para proyectos", "Freelance", "Remote"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="text-xs px-4 py-2"
                    style={{
                      background: "rgba(91,33,182,0.1)",
                      color: "#A78BFA",
                      border: "1px solid rgba(91,33,182,0.3)",
                    }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>

          {/* Imagen / decoración */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div
              className="aspect-square relative overflow-hidden"
              style={{ background: "#111111", border: "1px solid #1A1A2E" }}
            >
              {/* Decoración geométrica */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 70%, rgba(91,33,182,0.2) 0%, transparent 60%)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="font-serif text-8xl font-bold mb-4"
                    style={{ color: "#1A1A2E" }}
                  >
                    BL
                  </p>
                  <div
                    className="w-16 h-px mx-auto mb-4"
                    style={{ background: "#5B21B6" }}
                  />
                  <p
                    className="text-xs tracking-widest uppercase"
                    style={{ color: "#3A3A5A" }}
                  >
                    Frontend Developer
                  </p>
                </div>
              </div>
              {/* Esquinas decorativas */}
              <div
                className="absolute top-4 left-4 w-8 h-8"
                style={{
                  borderTop: "1px solid #5B21B6",
                  borderLeft: "1px solid #5B21B6",
                }}
              />
              <div
                className="absolute top-4 right-4 w-8 h-8"
                style={{
                  borderTop: "1px solid #5B21B6",
                  borderRight: "1px solid #5B21B6",
                }}
              />
              <div
                className="absolute bottom-4 left-4 w-8 h-8"
                style={{
                  borderBottom: "1px solid #5B21B6",
                  borderLeft: "1px solid #5B21B6",
                }}
              />
              <div
                className="absolute bottom-4 right-4 w-8 h-8"
                style={{
                  borderBottom: "1px solid #5B21B6",
                  borderRight: "1px solid #5B21B6",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Contadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16"
          style={{ borderTop: "1px solid #1A1A2E" }}
        >
          <Counter to={3} label="Proyectos en portfolio" />
          <Counter to={10} label="Tecnologías" />
          <Counter to={2} label="Años de experiencia" />
          <Counter to={100} label="% Comprometido" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;

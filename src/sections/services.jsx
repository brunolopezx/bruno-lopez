import { motion } from "framer-motion";

const servicios = [
  {
    id: "01",
    title: "Landing Page",
    description:
      "Página de presentación para tu negocio o emprendimiento. Diseño moderno, responsive y optimizado para conversión.",
    features: [
      "Diseño personalizado",
      "Formulario de contacto",
      "Animaciones",
      "Deploy incluido",
    ],
    tiempo: "1 — 2 semanas",
    desde: "Desde USD 300",
  },
  {
    id: "02",
    title: "Tienda Online",
    description:
      "E-commerce completo con catálogo de productos, carrito de compras y checkout. Listo para vender.",
    features: [
      "Catálogo con filtros",
      "Carrito de compras",
      "Checkout",
      "Panel de gestión",
    ],
    tiempo: "3 — 4 semanas",
    desde: "Desde USD 800",
  },
  {
    id: "03",
    title: "App Mobile",
    description:
      "Aplicación móvil para iOS y Android con Flutter. Una sola base de código, dos plataformas.",
    features: [
      "iOS y Android",
      "Diseño nativo",
      "API integration",
      "Publicación en stores",
    ],
    tiempo: "4 — 8 semanas",
    desde: "Desde USD 1200",
  },
  {
    id: "04",
    title: "Dashboard / Panel",
    description:
      "Panel de administración o métricas para tu negocio. Gráficos, tablas y gestión de datos.",
    features: [
      "Gráficos interactivos",
      "Gestión de usuarios",
      "Reportes",
      "Exportar datos",
    ],
    tiempo: "2 — 4 semanas",
    desde: "Desde USD 600",
  },
];

function Services({ onConsultar }) {
  return (
    <section
      id="services"
      className="py-28 px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ background: "#5B21B6" }} />
            <p
              className="text-xs tracking-[.4em] uppercase"
              style={{ color: "#A78BFA" }}
            >
              Lo que ofrezco
            </p>
          </div>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 group transition-all duration-300"
              style={{
                background: "#111111",
                border: "1px solid #1A1A2E",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#5B21B6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "#1A1A2E")
              }
            >
              <div className="flex justify-between items-start mb-6">
                <span
                  className="font-serif text-4xl font-bold"
                  style={{ color: "#1A1A2E" }}
                >
                  {s.id}
                </span>
                <span
                  className="text-xs px-3 py-1"
                  style={{
                    background: "rgba(91,33,182,0.1)",
                    color: "#A78BFA",
                    border: "1px solid rgba(91,33,182,0.3)",
                  }}
                >
                  {s.tiempo}
                </span>
              </div>

              <h3
                className="font-serif text-2xl font-bold mb-3"
                style={{ color: "#F5F0E8" }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "#6B6B7B" }}
              >
                {s.description}
              </p>

              <div className="flex flex-col gap-2 mb-8">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <span style={{ color: "#5B21B6", fontSize: 12 }}>✦</span>
                    <p className="text-xs" style={{ color: "#6B6B7B" }}>
                      {f}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="flex justify-between items-center pt-6"
                style={{ borderTop: "1px solid #1A1A2E" }}
              >
                <p className="text-sm font-medium" style={{ color: "#6B6B7B" }}>
                  Precio a convenir
                </p>
                <button
                  className="text-xs tracking-widest uppercase px-4 py-2 transition-all duration-300"
                  style={{
                    border: "1px solid #5B21B6",
                    color: "#A78BFA",
                    background: "transparent",
                  }}
                  onClick={() => onConsultar(s.id)}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#5B21B6";
                    e.target.style.color = "#F5F0E8";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = "#A78BFA";
                  }}
                >
                  Consultar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

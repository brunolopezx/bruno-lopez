import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/languageContext";

function BudgetModal({ servicio, onClose }) {
  const { t, lang } = useLanguage();
  const bm = t?.budget || {};

  const TIPOS = [
    { id: "landing", label: lang === "en" ? "Landing Page" : "Landing Page" },
    {
      id: "ecommerce",
      label: lang === "en" ? "Online Store" : "Tienda Online",
    },
    { id: "mobile", label: lang === "en" ? "Mobile App" : "App Mobile" },
    { id: "dashboard", label: lang === "en" ? "Dashboard" : "Dashboard" },
  ];

  const FEATURES = [
    {
      id: "responsive",
      label: lang === "en" ? "Responsive design" : "Diseño responsive",
    },
    { id: "animations", label: lang === "en" ? "Animations" : "Animaciones" },
    { id: "cms", label: lang === "en" ? "CMS / Blog" : "CMS / Blog" },
    {
      id: "auth",
      label: lang === "en" ? "Login / Register" : "Login / Registro",
    },
    {
      id: "api",
      label: lang === "en" ? "API integration" : "Integración con API",
    },
    {
      id: "payments",
      label: lang === "en" ? "Online payments" : "Pagos online",
    },
    {
      id: "admin",
      label: lang === "en" ? "Admin panel" : "Panel de administración",
    },
    { id: "seo", label: lang === "en" ? "SEO optimized" : "SEO optimizado" },
  ];

  const URGENCIA = [
    {
      id: "normal",
      label: lang === "en" ? "Normal" : "Normal",
      sublabel: lang === "en" ? "+30 days" : "+30 días",
    },
    {
      id: "rapido",
      label: lang === "en" ? "Fast" : "Rápido",
      sublabel: lang === "en" ? "15 — 30 days" : "15 — 30 días",
    },
    {
      id: "urgente",
      label: lang === "en" ? "Urgent" : "Urgente",
      sublabel: lang === "en" ? "Less than 15 days" : "Menos de 15 días",
    },
  ];

  const tipoInicial =
    TIPOS.find(
      (t) =>
        t.id === servicio ||
        t.label.toLowerCase() === (servicio ?? "").toLowerCase(),
    )?.id ?? null;

  const [step, setStep] = useState(tipoInicial ? 2 : 1);
  const [tipo, setTipo] = useState(tipoInicial);
  const [features, setFeatures] = useState([]);
  const [urgencia, setUrgencia] = useState("normal");
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const toggleFeature = (id) => {
    setFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id],
    );
  };

  const steps = [
    { num: 1, label: lang === "en" ? "Type" : "Tipo" },
    { num: 2, label: lang === "en" ? "Features" : "Funcionalidades" },
    { num: 3, label: lang === "en" ? "Urgency" : "Urgencia" },
  ];

  const handleContact = () => {
    const tipoLabel = TIPOS.find((t) => t.id === tipo)?.label ?? tipo;
    const featuresLabels = features.map(
      (fid) => FEATURES.find((f) => f.id === fid)?.label ?? fid,
    );
    const urgenciaLabel =
      URGENCIA.find((u) => u.id === urgencia)?.label ?? urgencia;

    window.dispatchEvent(
      new CustomEvent("budgetSelected", {
        detail: {
          tipo: tipoLabel,
          features: featuresLabels,
          urgencia: urgenciaLabel,
        },
      }),
    );

    onClose();
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const tipoLabel = TIPOS.find((t) => t.id === tipo)?.label ?? tipo;
  const urgenciaData = URGENCIA.find((u) => u.id === urgencia) ?? URGENCIA[0];
  const featuresLabels = features.map(
    (fid) => FEATURES.find((f) => f.id === fid)?.label,
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          style={{ background: "#0D0D0D", border: "1px solid #5B21B6" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center p-6"
            style={{ borderBottom: "1px solid #1A1A2E" }}
          >
            <div>
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "#A78BFA" }}
              >
                {lang === "en" ? "Budget" : "Presupuesto"}
              </p>
              <p
                className="font-serif text-xl font-bold"
                style={{ color: "#F5F0E8" }}
              >
                {lang === "en"
                  ? "Tell me about your project"
                  : "Contame sobre tu proyecto"}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-xl transition-colors"
              style={{ color: "#3A3A5A" }}
              onMouseEnter={(e) => (e.target.style.color = "#F5F0E8")}
              onMouseLeave={(e) => (e.target.style.color = "#3A3A5A")}
            >
              ✕
            </button>
          </div>

          <div className="p-6">
            {!done ? (
              <>
                {/* Indicador de pasos */}
                <div className="flex items-center gap-2 mb-8">
                  {steps.map((s, i) => (
                    <div key={s.num} className="flex items-center">
                      <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => s.num < step && setStep(s.num)}
                      >
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all duration-300"
                          style={{
                            background: step >= s.num ? "#5B21B6" : "#1A1A2E",
                            color: step >= s.num ? "#F5F0E8" : "#3A3A5A",
                          }}
                        >
                          {step > s.num ? "✓" : s.num}
                        </div>
                        <p
                          className="text-xs"
                          style={{
                            color: step === s.num ? "#A78BFA" : "#3A3A5A",
                          }}
                        >
                          {s.label}
                        </p>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className="w-6 h-px mx-2"
                          style={{
                            background: step > s.num ? "#5B21B6" : "#1A1A2E",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {/* Paso 1 */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-sm mb-4" style={{ color: "#6B6B7B" }}>
                        {lang === "en"
                          ? "What type of project do you need?"
                          : "Que tipo de proyecto necesitas?"}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {TIPOS.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setTipo(t.id)}
                            className="p-4 text-left transition-all duration-200"
                            style={{
                              background:
                                tipo === t.id
                                  ? "rgba(91,33,182,0.15)"
                                  : "#111111",
                              border: `1px solid ${tipo === t.id ? "#5B21B6" : "#1A1A2E"}`,
                            }}
                          >
                            <p
                              className="text-sm font-medium"
                              style={{
                                color: tipo === t.id ? "#F5F0E8" : "#6B6B7B",
                              }}
                            >
                              {t.label}
                            </p>
                            <p
                              className="text-xs mt-1"
                              style={{
                                color: tipo === t.id ? "#A78BFA" : "#3A3A5A",
                              }}
                            >
                              {lang === "en"
                                ? "Custom quote"
                                : "Presupuesto personalizado"}
                            </p>
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => tipo && setStep(2)}
                        className="px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300"
                        style={{
                          background: tipo ? "#5B21B6" : "#1A1A2E",
                          color: tipo ? "#F5F0E8" : "#3A3A5A",
                          cursor: tipo ? "pointer" : "not-allowed",
                        }}
                      >
                        {lang === "en" ? "Next →" : "Siguiente →"}
                      </button>
                    </motion.div>
                  )}

                  {/* Paso 2 */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-sm mb-4" style={{ color: "#6B6B7B" }}>
                        {lang === "en"
                          ? "What features do you need? (optional)"
                          : "Que funcionalidades necesitas? (opcional)"}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {FEATURES.map((f) => (
                          <button
                            key={f.id}
                            onClick={() => toggleFeature(f.id)}
                            className="p-3 text-left transition-all duration-200"
                            style={{
                              background: features.includes(f.id)
                                ? "rgba(91,33,182,0.15)"
                                : "#111111",
                              border: `1px solid ${features.includes(f.id) ? "#5B21B6" : "#1A1A2E"}`,
                            }}
                          >
                            <p
                              className="text-xs font-medium"
                              style={{
                                color: features.includes(f.id)
                                  ? "#F5F0E8"
                                  : "#6B6B7B",
                              }}
                            >
                              {f.label}
                            </p>
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="px-6 py-3 text-xs tracking-widest uppercase"
                          style={{
                            border: "1px solid #1A1A2E",
                            color: "#6B6B7B",
                          }}
                        >
                          {lang === "en" ? "← Back" : "← Atras"}
                        </button>
                        <button
                          onClick={() => setStep(3)}
                          className="px-8 py-3 text-xs tracking-widest uppercase"
                          style={{ background: "#5B21B6", color: "#F5F0E8" }}
                        >
                          {lang === "en" ? "Next →" : "Siguiente →"}
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Paso 3 */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="text-sm mb-4" style={{ color: "#6B6B7B" }}>
                        {lang === "en"
                          ? "How urgent is it?"
                          : "Con que urgencia lo necesitas?"}
                      </p>
                      <div className="flex flex-col gap-3 mb-6">
                        {URGENCIA.map((u) => (
                          <button
                            key={u.id}
                            onClick={() => setUrgencia(u.id)}
                            className="p-4 text-left transition-all duration-200"
                            style={{
                              background:
                                urgencia === u.id
                                  ? "rgba(91,33,182,0.15)"
                                  : "#111111",
                              border: `1px solid ${urgencia === u.id ? "#5B21B6" : "#1A1A2E"}`,
                            }}
                          >
                            <p
                              className="text-sm font-medium"
                              style={{
                                color:
                                  urgencia === u.id ? "#F5F0E8" : "#6B6B7B",
                              }}
                            >
                              {u.label}
                            </p>
                            <p
                              className="text-xs mt-0.5"
                              style={{
                                color:
                                  urgencia === u.id ? "#A78BFA" : "#3A3A5A",
                              }}
                            >
                              {u.sublabel}
                            </p>
                          </button>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button
                          onClick={() => setStep(2)}
                          className="px-6 py-3 text-xs tracking-widest uppercase"
                          style={{
                            border: "1px solid #1A1A2E",
                            color: "#6B6B7B",
                          }}
                        >
                          {lang === "en" ? "← Back" : "← Atras"}
                        </button>
                        <button
                          onClick={() => setDone(true)}
                          className="px-8 py-3 text-xs tracking-widest uppercase"
                          style={{ background: "#5B21B6", color: "#F5F0E8" }}
                        >
                          {lang === "en" ? "See summary" : "Ver resumen"}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl mx-auto mb-6"
                  style={{ background: "#5B21B6", color: "#F5F0E8" }}
                >
                  ✦
                </div>
                <p
                  className="font-serif text-3xl font-bold mb-6"
                  style={{ color: "#A78BFA" }}
                >
                  {lang === "en" ? "Ready to start!" : "Listo para arrancar!"}
                </p>

                <div
                  className="text-left mx-auto mb-8 p-5 flex flex-col gap-4"
                  style={{
                    background: "#111111",
                    border: "1px solid #1A1A2E",
                    maxWidth: "420px",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#3A3A5A" }}
                    >
                      {lang === "en" ? "Project type" : "Tipo de proyecto"}
                    </p>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "#F5F0E8" }}
                    >
                      {tipoLabel}
                    </p>
                  </div>
                  <div
                    className="flex justify-between items-start"
                    style={{
                      borderTop: "1px solid #1A1A2E",
                      paddingTop: "1rem",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#3A3A5A" }}
                    >
                      {lang === "en" ? "Features" : "Funcionalidades"}
                    </p>
                    {featuresLabels.length > 0 ? (
                      <div className="flex flex-col items-end gap-1">
                        {featuresLabels.map((label) => (
                          <span
                            key={label}
                            className="text-xs px-2 py-0.5"
                            style={{
                              background: "rgba(91,33,182,0.15)",
                              border: "1px solid #5B21B6",
                              color: "#A78BFA",
                            }}
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm" style={{ color: "#3A3A5A" }}>
                        {lang === "en" ? "None" : "Ninguna"}
                      </p>
                    )}
                  </div>
                  <div
                    className="flex justify-between items-center"
                    style={{
                      borderTop: "1px solid #1A1A2E",
                      paddingTop: "1rem",
                    }}
                  >
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#3A3A5A" }}
                    >
                      {lang === "en" ? "Urgency" : "Urgencia"}
                    </p>
                    <div className="text-right">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#F5F0E8" }}
                      >
                        {urgenciaData?.label}
                      </p>
                      <p className="text-xs" style={{ color: "#A78BFA" }}>
                        {urgenciaData?.sublabel}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm mb-8" style={{ color: "#3A3A5A" }}>
                  {lang === "en"
                    ? "Contact me and I will prepare a personalized quote with no commitment."
                    : "Contactame y te preparo un presupuesto personalizado sin compromiso."}
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={handleContact}
                    className="px-10 py-4 text-xs tracking-widest uppercase transition-all duration-300"
                    style={{ background: "#5B21B6", color: "#F5F0E8" }}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#4C1D95")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background = "#5B21B6")
                    }
                  >
                    {lang === "en" ? "Contact me" : "Contactame"}
                  </button>
                  <button
                    onClick={() => {
                      setDone(false);
                      setStep(1);
                      setFeatures([]);
                      setUrgencia("normal");
                    }}
                    className="px-10 py-4 text-xs tracking-widest uppercase"
                    style={{ border: "1px solid #1A1A2E", color: "#6B6B7B" }}
                    onMouseEnter={(e) =>
                      (e.target.style.borderColor = "#5B21B6")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.borderColor = "#1A1A2E")
                    }
                  >
                    {lang === "en" ? "Recalculate" : "Recalcular"}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default BudgetModal;

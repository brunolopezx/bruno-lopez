import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_hohkacq";
const EMAILJS_TEMPLATE_ID = "template_qy0pb1r";
const EMAILJS_PUBLIC_KEY = "IMVHmtuxHosf40S9E";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);

  // ==================== ESCUCHAR DATOS DEL BUDGET MODAL ====================
  useEffect(() => {
    const handleBudget = (e) => {
      const { tipo, features, urgencia } = e.detail;

      setValue("asunto", `Presupuesto: ${tipo}`);

      let mensaje = `Hola Bruno,\n\nEstoy interesado en un proyecto de ${tipo}.\n\n`;

      if (features && features.length > 0) {
        mensaje += `Funcionalidades que necesito:\n`;
        features.forEach((f) => {
          mensaje += `• ${f}\n`;
        });
        mensaje += `\n`;
      }

      mensaje += `Urgencia: ${urgencia}\n\n`;
      mensaje += `¿Podrías enviarme un presupuesto personalizado? Muchas gracias!`;

      setValue("mensaje", mensaje);
    };

    window.addEventListener("budgetSelected", handleBudget);
    return () => window.removeEventListener("budgetSelected", handleBudget);
  }, [setValue]);

  // ==================== ENVÍO CON EMAILJS ====================
  const onSubmit = async (data) => {
    setSending(true);
    setError(null);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.nombre,
          from_email: data.email,
          subject: data.asunto,
          message: data.mensaje,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Hubo un error al enviar el mensaje. Intentá de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle = (hasError) => ({
    background: "#111111",
    border: `1px solid ${hasError ? "#7C3AED" : "#1A1A2E"}`,
    color: "#F5F0E8",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    transition: "border-color 0.2s",
  });

  return (
    <section
      id="contact"
      className="py-28 px-6"
      style={{ background: "#0A0A0A" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* ====================== LADO IZQUIERDO ====================== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ background: "#5B21B6" }} />
              <p
                className="text-xs tracking-[.4em] uppercase"
                style={{ color: "#A78BFA" }}
              >
                Hablemos
              </p>
            </div>
            <h2
              className="font-serif text-5xl font-bold mb-6 leading-tight"
              style={{ color: "#F5F0E8" }}
            >
              Tenés un proyecto
              <br />
              <span style={{ color: "#5B21B6" }}>en mente?</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "#6B6B7B" }}
            >
              Estoy disponible para proyectos freelance, colaboraciones y
              oportunidades laborales. Contame tu idea y te respondo en menos de
              24 horas.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: "brunolopezx.dev@gmail.com",
                },
                { icon: "◎", label: "Ubicación", value: "Córdoba, Argentina" },
                {
                  icon: "◷",
                  label: "Disponibilidad",
                  value: "Lunes a Viernes · 9hs — 18hs",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <span className="text-xs mt-1" style={{ color: "#5B21B6" }}>
                    {icon}
                  </span>
                  <div>
                    <p
                      className="text-xs uppercase tracking-widest mb-0.5"
                      style={{ color: "#3A3A5A" }}
                    >
                      {label}
                    </p>
                    <p className="text-sm" style={{ color: "#F5F0E8" }}>
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              {[
                { label: "GitHub", url: "https://github.com/brunolopezx" },
                {
                  label: "LinkedIn",
                  url: "https://linkedin.com/in/bruno-lopez-scida",
                },
                { label: "WhatsApp", url: "https://wa.me/5493517509481" },
              ].map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase transition-colors"
                  style={{ color: "#3A3A5A" }}
                  onMouseEnter={(e) => (e.target.style.color = "#A78BFA")}
                  onMouseLeave={(e) => (e.target.style.color = "#3A3A5A")}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ====================== FORMULARIO ====================== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl mx-auto mb-6"
                  style={{ background: "#5B21B6", color: "#F5F0E8" }}
                >
                  ✓
                </div>
                <p
                  className="font-serif text-3xl font-bold mb-3"
                  style={{ color: "#F5F0E8" }}
                >
                  ¡Mensaje enviado!
                </p>
                <p className="text-sm" style={{ color: "#6B6B7B" }}>
                  Te respondo en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs tracking-widest uppercase px-6 py-3 transition-colors"
                  style={{ border: "1px solid #1A1A2E", color: "#6B6B7B" }}
                  onMouseEnter={(e) => (e.target.style.borderColor = "#5B21B6")}
                  onMouseLeave={(e) => (e.target.style.borderColor = "#1A1A2E")}
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      className="text-xs uppercase tracking-widest block mb-2"
                      style={{ color: "#3A3A5A" }}
                    >
                      Nombre
                    </label>
                    <input
                      {...register("nombre", { required: "Requerido" })}
                      placeholder="Tu nombre"
                      style={inputStyle(errors.nombre)}
                      onFocus={(e) => (e.target.style.borderColor = "#5B21B6")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.nombre
                          ? "#7C3AED"
                          : "#1A1A2E")
                      }
                    />
                    {errors.nombre && (
                      <p className="text-xs mt-1" style={{ color: "#7C3AED" }}>
                        {errors.nombre.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="text-xs uppercase tracking-widest block mb-2"
                      style={{ color: "#3A3A5A" }}
                    >
                      Email
                    </label>
                    <input
                      {...register("email", {
                        required: "Requerido",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email inválido",
                        },
                      })}
                      placeholder="tu@email.com"
                      style={inputStyle(errors.email)}
                      onFocus={(e) => (e.target.style.borderColor = "#5B21B6")}
                      onBlur={(e) =>
                        (e.target.style.borderColor = errors.email
                          ? "#7C3AED"
                          : "#1A1A2E")
                      }
                    />
                    {errors.email && (
                      <p className="text-xs mt-1" style={{ color: "#7C3AED" }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="text-xs uppercase tracking-widest block mb-2"
                    style={{ color: "#3A3A5A" }}
                  >
                    Asunto
                  </label>
                  <input
                    {...register("asunto", { required: "Requerido" })}
                    placeholder="¿En qué puedo ayudarte?"
                    style={inputStyle(errors.asunto)}
                    onFocus={(e) => (e.target.style.borderColor = "#5B21B6")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.asunto
                        ? "#7C3AED"
                        : "#1A1A2E")
                    }
                  />
                  {errors.asunto && (
                    <p className="text-xs mt-1" style={{ color: "#7C3AED" }}>
                      {errors.asunto.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="text-xs uppercase tracking-widest block mb-2"
                    style={{ color: "#3A3A5A" }}
                  >
                    Mensaje
                  </label>
                  <textarea
                    {...register("mensaje", { required: "Requerido" })}
                    placeholder="Contame sobre tu proyecto..."
                    rows={8}
                    style={{
                      ...inputStyle(errors.mensaje),
                      resize: "vertical",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#5B21B6")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.mensaje
                        ? "#7C3AED"
                        : "#1A1A2E")
                    }
                  />
                  {errors.mensaje && (
                    <p className="text-xs mt-1" style={{ color: "#7C3AED" }}>
                      {errors.mensaje.message}
                    </p>
                  )}
                </div>

                {/* Error de envío */}
                {error && (
                  <p
                    className="text-xs text-center py-2 px-4"
                    style={{
                      color: "#F87171",
                      background: "rgba(248,113,113,0.08)",
                      border: "1px solid rgba(248,113,113,0.2)",
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 text-xs tracking-widest uppercase transition-all duration-300 mt-2 rounded-xl"
                  style={{
                    background: sending ? "#3B1F7A" : "#5B21B6",
                    color: "#F5F0E8",
                    cursor: sending ? "not-allowed" : "pointer",
                    opacity: sending ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) e.target.style.background = "#4C1D95";
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) e.target.style.background = "#5B21B6";
                  }}
                >
                  {sending ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

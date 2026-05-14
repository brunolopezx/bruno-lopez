import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data) => {
    setSubmitted(true);
    reset();
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
          {/* Izquierda */}
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

          {/* Formulario */}
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
                    rows={5}
                    style={{ ...inputStyle(errors.mensaje), resize: "none" }}
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

                <button
                  type="submit"
                  className="w-full py-4 text-xs tracking-widest uppercase transition-all duration-300 mt-2"
                  style={{ background: "#5B21B6", color: "#F5F0E8" }}
                  onMouseEnter={(e) => (e.target.style.background = "#4C1D95")}
                  onMouseLeave={(e) => (e.target.style.background = "#5B21B6")}
                >
                  Enviar mensaje
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

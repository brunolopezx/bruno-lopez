import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/languageContext";

function TypingText({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (pause) {
      const t = setTimeout(() => {
        setDeleting(true);
        setPause(false);
      }, 1800);
      return () => clearTimeout(t);
    }
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60,
      );
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      setPause(true);
      return;
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, [displayed, deleting, pause, roleIndex, roles]);

  return (
    <span style={{ color: "#A78BFA" }}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7, ease: "steps(1)" }}
        style={{ color: "#5B21B6" }}
      >
        |
      </motion.span>
    </span>
  );
}

function CloudParticles() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const blobs = Array.from({ length: 18 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 180 + 80,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.07 + 0.02,
      pulse: Math.random() * Math.PI * 2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      blobs.forEach((b) => {
        b.pulse += 0.008;
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = canvas.width + b.r;
        if (b.x > canvas.width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = canvas.height + b.r;
        if (b.y > canvas.height + b.r) b.y = -b.r;
        const currentOpacity = b.opacity + Math.sin(b.pulse) * 0.02;
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `rgba(91, 33, 182, ${currentOpacity})`);
        grad.addColorStop(0.5, `rgba(139, 92, 246, ${currentOpacity * 0.5})`);
        grad.addColorStop(1, "rgba(91, 33, 182, 0)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

function Hero() {
  const { t } = useLanguage();
  const hero = t?.hero || {};

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse at 60% 50%, rgba(91,33,182,0.18) 0%, transparent 70%)",
            "radial-gradient(ellipse at 40% 60%, rgba(91,33,182,0.22) 0%, transparent 70%)",
            "radial-gradient(ellipse at 65% 40%, rgba(91,33,182,0.15) 0%, transparent 70%)",
            "radial-gradient(ellipse at 60% 50%, rgba(91,33,182,0.18) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <CloudParticles />
      <div
        className="absolute top-0 right-0 w-px h-full opacity-10"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #5B21B6, transparent)",
        }}
      />
      <div
        className="absolute top-0 left-1/3 w-px h-full opacity-5"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #5B21B6, transparent)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px" style={{ background: "#5B21B6" }} />
          <p
            className="text-xs tracking-[.4em] uppercase"
            style={{ color: "#6B6B7B" }}
          >
            {hero.available || "Disponible para proyectos"}
          </p>
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: "#5B21B6", boxShadow: "0 0 8px #5B21B6" }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-6xl md:text-8xl font-bold mb-4 leading-tight"
          style={{ color: "#F5F0E8" }}
        >
          Bruno
          <br />
          <span style={{ color: "#5B21B6" }}>Lopez.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-light mb-8 h-10"
        >
          <TypingText roles={hero.roles || ["Frontend Developer"]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base leading-relaxed mb-12 max-w-xl"
          style={{ color: "#6B6B7B" }}
        >
          {hero.description ||
            "Diseño y desarrollo interfaces web y mobile modernas."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300"
            style={{ background: "#5B21B6", color: "#F5F0E8" }}
            onMouseEnter={(e) => (e.target.style.background = "#4C1D95")}
            onMouseLeave={(e) => (e.target.style.background = "#5B21B6")}
          >
            {hero.btnProjects || "Ver proyectos"}
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300"
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
            {hero.btnContact || "Contactame"}
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-20"
        >
          <motion.div
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 50,
              background: "#5B21B6",
              transformOrigin: "top",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

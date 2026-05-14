// src/components/CustomCursor.jsx
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  const springConfig = { stiffness: 500, damping: 28, mass: 0.8 };
  const springCursorX = useSpring(cursorX, springConfig);
  const springCursorY = useSpring(cursorY, springConfig);
  const springDotX = useSpring(dotX, { stiffness: 900, damping: 25 });
  const springDotY = useSpring(dotY, { stiffness: 900, damping: 25 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    // === EFECTO HOVER AUTOMÁTICO ===
    const handleElementHover = (isHovering) => {
      if (!cursorRef.current) return;

      if (isHovering) {
        cursorRef.current.style.transform = "scale(2.2)";
        cursorRef.current.style.borderColor = "#F5F0E8";
        cursorRef.current.style.backgroundColor = "rgba(91, 33, 182, 0.1)";
      } else {
        cursorRef.current.style.transform = "scale(1)";
        cursorRef.current.style.borderColor = "#5B21B6";
        cursorRef.current.style.backgroundColor = "transparent";
      }
    };

    // Escuchar movimiento del mouse
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Detectar automáticamente elementos interactivos
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, label, [role="button"], .cursor-hover',
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => handleElementHover(true));
      el.addEventListener("mouseleave", () => handleElementHover(false));
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => handleElementHover(true));
        el.removeEventListener("mouseleave", () => handleElementHover(false));
      });
    };
  }, [cursorX, cursorY, dotX, dotY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 border border-[#5B21B6] rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference transition-colors duration-200"
        style={{
          x: springCursorX,
          y: springCursorY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <motion.div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 bg-[#F5F0E8] rounded-full -translate-x-1/2 -translate-y-1/2 z-[9999]"
        style={{
          x: springDotX,
          y: springDotY,
        }}
      />
    </>
  );
}

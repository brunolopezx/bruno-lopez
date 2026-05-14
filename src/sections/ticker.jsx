import { motion } from "framer-motion";

const techs = [
  "React",
  "Flutter",
  "Angular",
  "TypeScript",
  "JavaScript",
  "Dart",
  "Kotlin",
  "C#",
  "Java",
  "SQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "Postman",
  "Node.js",
  "HTML",
  "CSS",
];

function TickerRow({ direction = 1, speed = 30 }) {
  const items = [...techs, ...techs, ...techs];

  return (
    <div
      className="overflow-hidden py-3"
      style={{
        borderTop: "1px solid #1A1A2E",
        borderBottom: "1px solid #1A1A2E",
      }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: direction === 1 ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {items.map((tech, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-xs tracking-widest uppercase flex-shrink-0"
            style={{ color: i % 3 === 0 ? "#A78BFA" : "#2A2A3E" }}
          >
            <span style={{ color: "#5B21B6" }}>✦</span>
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Ticker() {
  return (
    <div className="flex flex-col gap-0" style={{ background: "#0A0A0A" }}>
      <TickerRow direction={1} speed={35} />
      <TickerRow direction={-1} speed={25} />
    </div>
  );
}

export default Ticker;

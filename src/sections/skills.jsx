import { motion } from "framer-motion";
import {
  SiReact,
  SiAngular,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiFlutter,
  SiKotlin,
  SiAndroidstudio,
  SiPostgresql,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiJira,
  SiDart,
  SiDotnet,
  SiVite,
  SiXcode,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skills = [
  { name: "React", category: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "Angular", category: "Frontend", Icon: SiAngular, color: "#DD0031" },
  {
    name: "JavaScript",
    category: "Frontend",
    Icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  { name: "HTML", category: "Frontend", Icon: SiHtml5, color: "#E34F26" },
  {
    name: "Tailwind",
    category: "Frontend",
    Icon: SiTailwindcss,
    color: "#06B6D4",
  },
  { name: "Flutter", category: "Mobile", Icon: SiFlutter, color: "#02569B" },
  { name: "Dart", category: "Mobile", Icon: SiDart, color: "#0175C2" },
  { name: "Kotlin", category: "Mobile", Icon: SiKotlin, color: "#7F52FF" },
  {
    name: "Android Studio",
    category: "Mobile",
    Icon: SiAndroidstudio,
    color: "#3DDC84",
  },
  { name: "C#", category: "Backend", Icon: SiDotnet, color: "#239120" },
  { name: "Java", category: "Backend", Icon: FaJava, color: "#ED8B00" },
  {
    name: "SQL / PL-SQL",
    category: "Backend",
    Icon: SiPostgresql,
    color: "#4169E1",
  },
  { name: "Node.js", category: "Backend", Icon: SiNodedotjs, color: "#339933" },
  { name: "Git", category: "Herramientas", Icon: SiGit, color: "#F05032" },
  {
    name: "GitHub",
    category: "Herramientas",
    Icon: SiGithub,
    color: "#F5F0E8",
  },
  {
    name: "Postman",
    category: "Herramientas",
    Icon: SiPostman,
    color: "#FF6C37",
  },
  { name: "Jira", category: "Herramientas", Icon: SiJira, color: "#0052CC" },
  { name: "Vite", category: "Herramientas", Icon: SiVite, color: "#646CFF" },
  {
    name: "XCode",
    category: "Herramientas",
    Icon: SiXcode,
    color: "#007ACC",
  },
];

function SkillCard({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="skill-card"
    >
      <div className="skill-card-inner">
        <skill.Icon size={42} style={{ color: "#4A4A5A" }} />
        <p
          style={{
            color: "#F5F0E8",
            fontSize: 13,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {skill.name}
        </p>
        <p
          style={{
            color: "#5B21B6",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          {skill.category}
        </p>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: "#0D0D0D" }}
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
              Tecnologias
            </p>
          </div>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            Habilidades
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 190px)",
            gap: 20,
          }}
        >
          {skills.map(function (skill, i) {
            return <SkillCard key={skill.name + i} skill={skill} index={i} />;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 pt-10"
          style={{ borderTop: "1px solid #1A1A2E" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-5"
            style={{ color: "#6B6B7B" }}
          >
            Idiomas
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Espanol — Nativo" },
              { name: "Ingles — C1 Advanced" },
            ].map(function (item) {
              return (
                <div
                  key={item.name}
                  className="flex items-center gap-2 px-4 py-2"
                  style={{
                    background: "rgba(91,33,182,0.1)",
                    border: "1px solid rgba(91,33,182,0.3)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: "#5B21B6",
                      boxShadow: "0 0 6px #5B21B6",
                    }}
                  />
                  <span className="text-xs" style={{ color: "#A78BFA" }}>
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

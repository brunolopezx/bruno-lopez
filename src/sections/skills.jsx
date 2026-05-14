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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90, Icon: SiReact, color: "#61DAFB" },
      { name: "Angular", level: 75, Icon: SiAngular, color: "#DD0031" },
      { name: "JavaScript", level: 90, Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", level: 80, Icon: SiTypescript, color: "#3178C6" },
      { name: "HTML", level: 95, Icon: SiHtml5, color: "#E34F26" },
      {
        name: "Tailwind CSS",
        level: 90,
        Icon: SiTailwindcss,
        color: "#06B6D4",
      },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "Flutter", level: 90, Icon: SiFlutter, color: "#02569B" },
      { name: "Dart", level: 90, Icon: SiDart, color: "#0175C2" },
      { name: "Kotlin", level: 70, Icon: SiKotlin, color: "#7F52FF" },
      {
        name: "Android Studio",
        level: 70,
        Icon: SiAndroidstudio,
        color: "#3DDC84",
      },
    ],
  },
  {
    category: "Backend y Base de datos",
    items: [
      { name: "C#", level: 75, Icon: SiDotnet, color: "#239120" },
      { name: "Java", level: 70, Icon: FaJava, color: "#ED8B00" },
      { name: "SQL / PL-SQL", level: 80, Icon: SiPostgresql, color: "#4169E1" },
      { name: "Node.js", level: 60, Icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git", level: 85, Icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: 85, Icon: SiGithub, color: "#F5F0E8" },
      { name: "Postman", level: 80, Icon: SiPostman, color: "#FF6C37" },
      { name: "Jira", level: 75, Icon: SiJira, color: "#0052CC" },
    ],
  },
];

const languages = [
  { lang: "Espanol", label: "Nativo", pct: "100%" },
  { lang: "Ingles", label: "C1 Advanced", pct: "88%" },
];

const tools = [
  "VS Code",
  "Visual Studio",
  "Eclipse",
  "Android Studio",
  "Xcode",
  "Postman",
  "Jira",
  "Git Flow",
  "Vercel",
  "Vite",
  "React Router",
  "Zustand",
  "React Hook Form",
  "Framer Motion",
  "REST APIs",
  "Responsive Design",
];

function SkillBar({ name, level, Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="mb-5"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon size={14} style={{ color: color }} />}
          <p className="text-sm" style={{ color: "#F5F0E8" }}>
            {name}
          </p>
        </div>
        <p className="text-xs" style={{ color: "#5B21B6" }}>
          {level}%
        </p>
      </div>
      <div className="h-px w-full" style={{ background: "#1A1A2E" }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level + "%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.06 + 0.3,
            ease: "easeOut",
          }}
          className="h-px"
          style={{ background: "linear-gradient(to right, #5B21B6, #A78BFA)" }}
        />
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
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-6 pb-4"
                style={{ color: "#5B21B6", borderBottom: "1px solid #1A1A2E" }}
              >
                {group.category}
              </p>
              {group.items.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  Icon={skill.Icon}
                  color={skill.color}
                  index={i}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 pt-12"
          style={{ borderTop: "1px solid #1A1A2E" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#6B6B7B" }}
          >
            Idiomas
          </p>
          <div className="flex flex-wrap gap-10 mb-12">
            {languages.map(function (item) {
              return (
                <div key={item.lang} className="flex flex-col gap-2">
                  <div className="flex justify-between gap-8 mb-1">
                    <p className="text-sm" style={{ color: "#F5F0E8" }}>
                      {item.lang}
                    </p>
                    <p className="text-xs" style={{ color: "#5B21B6" }}>
                      {item.label}
                    </p>
                  </div>
                  <div className="h-px w-48" style={{ background: "#1A1A2E" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: item.pct }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-px"
                      style={{
                        background:
                          "linear-gradient(to right, #5B21B6, #A78BFA)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "#6B6B7B" }}
          >
            Tambien trabajo con
          </p>
          <div className="flex flex-wrap gap-3">
            {tools.map(function (item, i) {
              return (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="text-xs px-4 py-2"
                  style={{
                    background: "rgba(91,33,182,0.08)",
                    color: "#6B6B7B",
                    border: "1px solid #1A1A2E",
                  }}
                >
                  {item}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { useLanguage } from "../context/languageContext";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiReactrouter,
  SiFlutter,
  SiVite,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const techIcons = {
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Framer Motion": SiFramer,
  "React Router": SiReactrouter,
  Flutter: SiFlutter,
  Vite: SiVite,
  "React Hook Form": TbBrandReactNative,
};

function ProjectCard({ project, index, demoLabel, lang }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden"
      style={{
        background: "#111111",
        border: "1px solid #1A1A2E",
        transition: "border-color 0.3s",
      }}
      onMouseEnter2={() => {}}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          border: hovered ? "1px solid #5B21B6" : "1px solid #1A1A2E",
          transition: "border-color 0.3s",
          zIndex: 10,
        }}
      />

      <div className="aspect-[16/9] overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.7s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, ${project.color} 100%)`,
            opacity: hovered ? 0.95 : 0.7,
            transition: "opacity 0.3s",
          }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center gap-4"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs tracking-widest uppercase"
            style={{ background: "#5B21B6", color: "#F5F0E8" }}
          >
            {demoLabel || "Ver demo"}
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs tracking-widest uppercase"
            style={{ border: "1px solid #A78BFA", color: "#A78BFA" }}
          >
            GitHub
          </a>
        </div>
        <div
          className="absolute top-3 left-3 px-2 py-1 text-xs tracking-widest uppercase"
          style={{ background: "rgba(91,33,182,0.8)", color: "#F5F0E8" }}
        >
          {typeof project.category === "object"
            ? project.category[lang]
            : project.category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3
            className="font-serif text-2xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            {project.title}
          </h3>
          <span
            className="font-serif text-3xl font-bold"
            style={{ color: "#1A1A2E" }}
          >
            0{project.id}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "#6B6B7B" }}
        >
          {typeof project.description === "object"
            ? project.description[lang]
            : project.description}
        </p>
        <div
          className="flex flex-wrap gap-2 pt-4"
          style={{ borderTop: "1px solid #1A1A2E" }}
        >
          {project.techs.map((tech) => {
            const Icon = techIcons[tech];
            return (
              <div
                key={tech}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5"
                style={{
                  background: "rgba(91,33,182,0.08)",
                  border: "1px solid #1A1A2E",
                  color: "#6B6B7B",
                }}
              >
                {Icon && <Icon size={12} style={{ color: "#A78BFA" }} />}
                {tech}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

function Projects() {
  const { t, lang } = useLanguage();
  const proj = t?.projects || {};

  return (
    <section id="projects" className="py-28 px-6">
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
              {proj.tag || "Mi trabajo"}
            </p>
          </div>
          <h2
            className="font-serif text-5xl font-bold"
            style={{ color: "#F5F0E8" }}
          >
            {proj.title || "Proyectos"}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              demoLabel={proj.demo}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

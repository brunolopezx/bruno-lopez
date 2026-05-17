import { createContext, useContext, useState } from "react";

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      services: "Servicios",
      cta: "Trabajemos",
    },
    hero: {
      available: "Disponible para proyectos",
      description:
        "Diseño y desarrollo interfaces web y mobile modernas, rápidas y funcionales. Especializado en React, Flutter y Angular. Inglés C1.",
      btnProjects: "Ver proyectos",
      btnContact: "Contactame",
      roles: [
        "Frontend Developer",
        "React Developer",
        "Flutter Developer",
        "UI/UX Enthusiast",
      ],
    },
    about: {
      tag: "Sobre mí",
      title: "Construyo productos",
      titleAccent: "que importan.",
      p1: "Soy Bruno Lopez, técnico en programación y desarrollador frontend de Córdoba, Argentina. Me especializo en construir interfaces web y mobile que combinan buen diseño con código limpio y performante.",
      p2: "Trabajo con React, Flutter y Angular para crear experiencias digitales que los usuarios disfrutan usar.",
      p3: "Inglés C1 — puedo trabajar con clientes y equipos internacionales sin problema.",
      tags: ["Disponible para proyectos", "Freelance", "Remote"],
      stats: [
        "Proyectos en portfolio",
        "Tecnologías",
        "Años de experiencia",
        "% Comprometido",
      ],
    },
    projects: {
      tag: "Mi trabajo",
      title: "Proyectos",
      demo: "Ver demo",
    },
    skills: {
      tag: "Tecnologias",
      title: "Habilidades",
      languages: "Idiomas",
      spanish: "Español — Nativo",
      english: "Inglés — C1 Advanced",
    },
    services: {
      tag: "Lo que ofrezco",
      title: "Servicios",
      time: "Tiempo estimado",
      price: "Precio a convenir",
      cta: "Consultar",
      items: [
        {
          title: "Landing Page",
          description:
            "Página de presentación para tu negocio. Diseño moderno, responsive y optimizado para conversión.",
          features: [
            "Diseño personalizado",
            "Formulario de contacto",
            "Animaciones",
            "Deploy incluido",
          ],
          time: "1 — 2 semanas",
        },
        {
          title: "Tienda Online",
          description:
            "E-commerce completo con catálogo, carrito y checkout. Listo para vender.",
          features: [
            "Catálogo con filtros",
            "Carrito de compras",
            "Checkout",
            "Panel de gestión",
          ],
          time: "3 — 4 semanas",
        },
        {
          title: "App Mobile",
          description:
            "Aplicación móvil para iOS y Android con Flutter. Una sola base de código, dos plataformas.",
          features: [
            "iOS y Android",
            "Diseño nativo",
            "API integration",
            "Publicación en stores",
          ],
          time: "4 — 8 semanas",
        },
        {
          title: "Dashboard",
          description:
            "Panel de administración o métricas para tu negocio. Gráficos, tablas y gestión de datos.",
          features: [
            "Gráficos interactivos",
            "Gestión de usuarios",
            "Reportes",
            "Exportar datos",
          ],
          time: "2 — 4 semanas",
        },
      ],
    },
    contact: {
      tag: "Hablemos",
      titleLine1: "¿Tenés un proyecto",
      titleLine2: "en mente?",
      subtitle: "Escribime y te respondo en menos de 24 horas.",
      available: "Disponible para proyectos",
      availableText:
        "Actualmente acepto nuevos proyectos freelance. Tiempo de respuesta: menos de 24hs.",
      locationLabel: "Ubicación",
      availabilityLabel: "Disponibilidad",
      availabilityValue: "Lunes a Viernes · 9hs - 18hs",
      name: "Nombre",
      email: "Email",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      subjectPlaceholder: "¿De qué se trata tu proyecto?",
      messagePlaceholder: "Contame sobre tu proyecto...",
      send: "Enviar mensaje",
      successTitle: "¡Mensaje enviado!",
      successText: "Te respondo en menos de 24 horas.",
      another: "Enviar otro mensaje",
      required: "Requerido",
      invalidEmail: "Email inválido",
    },
    footer: {
      description:
        "Diseño y desarrollo interfaces web y mobile modernas. Córdoba, Argentina.",
      nav: "Navegación",
      contact: "Contacto",
      available: "Disponible para proyectos",
      rights: "© 2026 Bruno Lopez Scidá | Todos los derechos reservados",
    },
  },
  en: {
    nav: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      services: "Services",
      cta: "Let's work",
    },
    hero: {
      available: "Available for projects",
      description:
        "I design and develop modern, fast and functional web and mobile interfaces. Specialized in React, Flutter and Angular.",
      btnProjects: "View projects",
      btnContact: "Contact me",
      roles: [
        "Frontend Developer",
        "React Developer",
        "Flutter Developer",
        "UI/UX Enthusiast",
      ],
    },
    about: {
      tag: "About me",
      title: "I build products",
      titleAccent: "that matter.",
      p1: "I'm Bruno Lopez, programming technician and a frontend developer from Córdoba, Argentina. I specialize in building web and mobile interfaces that combine great design with clean, performant code.",
      p2: "I work with React, Flutter and Angular to create digital experiences that users enjoy.",
      p3: "C1 English — I can work with international clients and teams without any issues.",
      tags: ["Available for projects", "Freelance", "Remote"],
      stats: [
        "Portfolio projects",
        "Technologies",
        "Years of experience",
        "% Committed",
      ],
    },
    projects: {
      tag: "My work",
      title: "Projects",
      demo: "View demo",
    },
    skills: {
      tag: "Technologies",
      title: "Skills",
      languages: "Languages",
      spanish: "Spanish — Native",
      english: "English — C1 Advanced",
    },
    services: {
      tag: "What I offer",
      title: "Services",
      time: "Estimated time",
      price: "Price on request",
      cta: "Get a quote",
      items: [
        {
          title: "Landing Page",
          description:
            "Presentation page for your business. Modern, responsive design optimized for conversion.",
          features: [
            "Custom design",
            "Contact form",
            "Animations",
            "Deploy included",
          ],
          time: "1 — 2 weeks",
        },
        {
          title: "Online Store",
          description:
            "Full e-commerce with catalog, cart and checkout. Ready to sell.",
          features: [
            "Filtered catalog",
            "Shopping cart",
            "Checkout",
            "Admin panel",
          ],
          time: "3 — 4 weeks",
        },
        {
          title: "Mobile App",
          description:
            "Mobile app for iOS and Android with Flutter. One codebase, two platforms.",
          features: [
            "iOS & Android",
            "Native design",
            "API integration",
            "Store publishing",
          ],
          time: "4 — 8 weeks",
        },
        {
          title: "Dashboard",
          description:
            "Admin panel or metrics dashboard for your business. Charts, tables and data management.",
          features: [
            "Interactive charts",
            "User management",
            "Reports",
            "Export data",
          ],
          time: "2 — 4 weeks",
        },
      ],
    },
    contact: {
      tag: "Let's talk",
      titleLine1: "Got a project ",
      titleLine2: "in mind?",
      subtitle: "Write to me and I will get back to you in less than 24 hours.",
      available: "Available for projects",
      availableText:
        "Currently accepting new freelance projects. Response time: less than 24hs.",
      locationLabel: "Location",
      availabilityLabel: "Availability",
      availabilityValue: "Monday to Friday · 9am - 6pm",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      subjectPlaceholder: "What is your project about?",
      messagePlaceholder: "Tell me about your project...",
      send: "Send message",
      successTitle: "Message sent!",
      successText: "I will get back to you in less than 24 hours.",
      another: "Send another message",
      required: "Required",
      invalidEmail: "Invalid email",
    },
    footer: {
      description:
        "I design and develop modern web and mobile interfaces. Córdoba, Argentina.",
      nav: "Navigation",
      contact: "Contact",
      available: "Available for projects",
      rights: "© 2026 Bruno Lopez Scidá | All rights reserved",
    },
  },
};
const LanguageContext = createContext({
  lang: "es",
  t: translations["es"],
  toggleLang: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("es");
  const t = translations[lang];
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

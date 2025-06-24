import { base_URL } from "./base";

export const aboutMe = {
  description: [
    "Disfruto resolver problemas complejos y aprendiendo nuevas habilidades. Me apasiona crear código de alta calidad que siga las mejores prácticas y estándares de la industria.",
    "Si quieres conocer más sobre mi trayectoria, habilidades y logros que he alcanzado, ¡te invito a descargar mi currículum actualizado! Estoy siempre abierto a nuevas oportunidades, colaboraciones y desafíos que me permitan seguir creciendo profesionalmente. ¡No dudes en contactarme si quieres conectar o trabajar juntos en algo increíble! 🚀",
  ],
  cvPath: base_URL + "/assets/CV.pdf", //
  cvFileNameAfterDownload: "Josué_Alvarez-CV.pdf",
};

export const technicalSkills: Record<string, string[]> = {
  // renombrar el tipo de habilidades, se renderiza dinámicamente.
  "Lenguajes de programación": [
    "JavaScript (Avanzado)",
    "PHP (Avanzado)",
    "TypeScript (Intermedio)",
    "C++ (Básico)",
    "Python (Básico)",
    "Java (Básico)",
    "Go (Básico)",
  ],
  "Frameworks y Librerías - Frontend": [
    "React (Avanzado)",
    "Angular (Básico)",
    "HTML5 (Intermedio)",
    "CSS3 (Intermedio)",
    "Bootstrap (Intermedio)",
    "Tailwind (Intermedio)",
    "Chakra UI (Intermedio)",
  ],
  "Frameworks, BD y Librerías - Backend": [
    "Node.js (Avanzado)",
    "CodeIgniter 4 (Avanzado)",
    "MySQL (Avanzado)",
    "Laravel (Intermedio)",
    "SQL (Intermedio)",
    "MongoDB (Básico)",
    "Django (Básico)",
  ],
  "UI/UX Diseño": ["Miro (Intermedio)", "Figma (Básico)"],
  "DevOps & Tecnologías": [
    "Docker (Intermedio)",
    "GCP (Intermedio)",
    "Contenido SEO (Intermedio)",
    "Git (BitBucket, GitLab, GitHub)",
    "Agile (Scrum, Jira, Kanban)",
  ],
  Habilidades: [
    "Alta capacidad resolutiva y creatividad en la solución de problemas",
    "Desarrollo de páginas web dinámicas y sistemas escalables",
    "Capacidad para liderar y trabajar en equipo",
    "Comportamiento profesional",
    "Presentación",
    "Comunicación",
  ],
};

export type ProjectCategory = "Full Stack" | "Frontend" | "Backend";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  description: string;
  highlights: string[];
  technologies: string[];
  accentClass: string;
  demoUrl: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    category: "Full Stack",
    year: "2026",
    description:
      "Plataforma colaborativa de gestión de proyectos con tableros Kanban en tiempo real, asignación de tareas y métricas de productividad.",
    highlights: [
      "Sincronización instantánea entre miembros del equipo",
      "Filtros avanzados por prioridad, estado y responsable",
      "Panel de métricas semanales de rendimiento",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    accentClass: "from-blue-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
  {
    id: "finanzapp-dashboard",
    title: "FinanzApp Dashboard",
    category: "Frontend",
    year: "2026",
    description:
      "Panel de control financiero personal con visualización de gastos mensuales, presupuestos por categoría y proyección de ahorros.",
    highlights: [
      "Gráficos interactivos y resumen mensual automático",
      "Modo oscuro y claro adaptativo",
      "Exportación de reportes en formato CSV",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    accentClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
  {
    id: "ecommerce-nexus",
    title: "Nexus Store",
    category: "Full Stack",
    year: "2025",
    description:
      "Tienda online moderna con catálogo filtrable, carrito persistente, checkout simulado y panel de administración de inventario.",
    highlights: [
      "Búsqueda instantánea y filtros por categoría y precio",
      "Gestión de stock y órdenes desde panel admin",
      "Optimización SEO y carga rápida de productos",
    ],
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe API"],
    accentClass: "from-violet-500/20 via-purple-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
  {
    id: "api-gateway-monitor",
    title: "Pulse API Monitor",
    category: "Backend",
    year: "2025",
    description:
      "Servicio de monitoreo de disponibilidad y latencia para microservicios, con alertas automáticas y registro histórico de incidentes.",
    highlights: [
      "Health checks programables cada 30 segundos",
      "Webhooks de notificación ante caídas o alta latencia",
      "API REST documentada con OpenAPI",
    ],
    technologies: ["Node.js", "TypeScript", "Redis", "Docker"],
    accentClass: "from-amber-500/20 via-orange-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
  {
    id: "devnotes-markdown",
    title: "DevNotes Studio",
    category: "Frontend",
    year: "2025",
    description:
      "Editor de notas técnicas en Markdown con vista previa en vivo, resaltado de sintaxis y organización por carpetas y etiquetas.",
    highlights: [
      "Soporte completo de GitHub Flavored Markdown",
      "Atajos de teclado para edición rápida",
      "Almacenamiento local automático sin pérdida de datos",
    ],
    technologies: ["Next.js", "TypeScript", "CSS Modules", "LocalStorage"],
    accentClass: "from-cyan-500/20 via-sky-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
  {
    id: "reservas-cloud",
    title: "ReservasCloud",
    category: "Backend",
    year: "2024",
    description:
      "Motor de reservas y turnos online multi-sucursal con prevención de solapamientos, recordatorios y gestión de disponibilidad.",
    highlights: [
      "Validación transaccional de horarios disponibles",
      "Soporte para múltiples zonas horarias",
      "Endpoints seguros con autenticación JWT",
    ],
    technologies: ["TypeScript", "Express", "PostgreSQL", "JWT"],
    accentClass: "from-rose-500/20 via-pink-500/10 to-transparent",
    demoUrl: "#proyectos",
    repoUrl: "#proyectos",
  },
];

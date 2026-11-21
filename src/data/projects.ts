export type ProjectCategory =
  | "Computación Cuántica"
  | "IA & Simulación 3D"
  | "Full Stack"
  | "Frontend"
  | "Backend";

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
    id: "qwind-qaoa-windfarm",
    title: "QWind: Optimización Cuántica de Parques Eólicos",
    category: "Computación Cuántica",
    year: "2026",
    description:
      "Cuando un molino de viento gira, frena el aire que pasa detrás y hace que el molino siguiente genere menos electricidad. QWind usa computación cuántica para decidir qué molinos conviene dejar encendidos y cuáles apagar cuando un parque eólico debe reducir su producción, evitando desperdiciar energía limpia.",
    highlights: [
      "Ejecutado en una computadora cuántica real (IonQ Forte 1 de 36 qubits) con 93% de precisión en las soluciones válidas",
      "Probado con datos reales de viento de parques eólicos en Escocia, Inglaterra y Argentina (Chubut y Bahía Blanca)",
      "Diseñado para entregar siempre combinaciones válidas (100%), superando a los métodos cuánticos tradicionales",
      "Proyecto presentado en el hackathon de Qollab & IonQ con apoyo de la Facultad de Ciencias Exactas (UNICEN)",
    ],
    technologies: ["Python", "Qiskit", "Computación Cuántica", "NumPy", "SciPy"],
    accentClass: "from-sky-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://youtu.be/UGVkgYGXkF4",
    repoUrl: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
  },
  {
    id: "nasa-mars-tango-horizon",
    title: "Tango Horizon: Simulador 3D e IA para Misiones en Marte",
    category: "IA & Simulación 3D",
    year: "2026",
    description:
      "En Marte, una señal de radio tarda entre 4 y 24 minutos en llegar desde la Tierra, por lo que los astronautas no pueden esperar ayuda inmediata. Tango Horizon es un simulador 3D construido sobre mapas reales de la NASA donde un sistema de Inteligencia Artificial y una flota de robots asisten a la tripulación por voz para cuidar su salud, anticipar tormentas y coordinar rescates.",
    highlights: [
      "Escenario 3D en tiempo real construido sobre mapas reales de la NASA del cráter Gale en Marte",
      "Asistente de Inteligencia Artificial por radio en 5 idiomas y control remoto desde el celular mediante código QR",
      "Robots y drones autónomos que recolectan muestras, vigilan signos vitales y ejecutan rescates de emergencia",
      "Desarrollado para el NASA Space Apps Challenge 2026 con apoyo de NASA, CONAE, Universidad de Palermo e IBM Argentina",
    ],
    technologies: [
      "TypeScript",
      "Three.js",
      "Node.js",
      "Python",
      "Inteligencia Artificial",
      "WebSocket",
    ],
    accentClass: "from-orange-500/20 via-rose-500/10 to-transparent",
    demoUrl: "https://tangohorizon.vercel.app",
    repoUrl: "https://github.com/agustindiazcano/nasa-mars-tango-horizon",
  },
];

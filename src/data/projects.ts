export type ProjectCategory =
  | "Quantum Computing"
  | "AI & 3D Simulation"
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
  demoUrl?: string;
  repoUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "qwind-qaoa-windfarm",
    title: "QWind: Quantum Optimization for Wind Farms",
    category: "Quantum Computing",
    year: "2026",
    description:
      "When a wind turbine spins, it slows down the air behind it and causes the next turbine to generate less electricity. QWind uses quantum computing to decide which turbines should stay on and which should turn off when a wind farm has to reduce output—avoiding wasted clean energy.",
    highlights: [
      "Executed on real quantum hardware (IonQ Forte 1, 36 qubits) reaching 93% of ideal success probability on valid samples",
      "Tested with real wind data from wind farms in Scotland, England, and Argentina (Chubut and Bahia Blanca)",
      "Engineered to output 100% valid turbine plans, outperforming standard penalty-based quantum formulations",
      "Submitted to the Qollab & IonQ hackathon with support from Facultad de Ciencias Exactas (UNICEN)",
    ],
    technologies: ["Python", "Qiskit", "Quantum Computing", "NumPy", "SciPy"],
    accentClass: "from-sky-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://youtu.be/UGVkgYGXkF4",
    repoUrl: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
  },
  {
    id: "nasa-mars-tango-horizon",
    title: "Tango Horizon: 3D & AI Mars Mission Simulator",
    category: "AI & 3D Simulation",
    year: "2026",
    description:
      "On Mars, a radio signal takes 4 to 24 minutes to travel from Earth, so astronauts cannot wait for real-time help in an emergency. Built on real NASA maps of Gale Crater, Tango Horizon pairs a 3D simulator with a voice AI assistant and autonomous robots to protect crew health, anticipate dust storms, and coordinate rescues.",
    highlights: [
      "Real-time 3D Martian terrain built over authentic NASA MRO HiRISE maps of Gale Crater",
      "Voice AI assistant supporting 5 languages over radio and smartphone QR remote control",
      "Autonomous rovers and coaxial drones for sample collection, biomedical monitoring, and emergency rescue",
      "Built for NASA Space Apps Challenge 2026 with support from NASA, CONAE, Universidad de Palermo, and IBM Argentina",
    ],
    technologies: [
      "TypeScript",
      "Three.js",
      "Node.js",
      "Python",
      "Artificial Intelligence",
      "WebSocket",
    ],
    accentClass: "from-orange-500/20 via-rose-500/10 to-transparent",
    demoUrl: "https://tangohorizon.vercel.app",
    repoUrl: "https://github.com/agustindiazcano/nasa-mars-tango-horizon",
  },
  {
    id: "argentina-postcards",
    title: "Argentina Postcards: Vintage Letters",
    category: "Full Stack",
    year: "2026",
    description:
      "A web application for writing, sealing, and sending vintage-style letters and postcards between friends. Users write messages on aged paper, choose from 100 real Argentine postage stamps organized by era, and watch step-by-step animations as the envelope is folded, sealed with red wax, and opened.",
    highlights: [
      "Catalog of 100 real Argentine postage stamps filterable by era (from before 1959 to 2010 onwards)",
      "Interactive writing, envelope folding, red wax-seal pressing, and unsealing animations",
      "Friend system powered by unique postal codes (POSTAL-XXXXXX), inbox, and sent letters management",
      "Node.js and Express backend with JWT authentication and Upstash Redis persistence",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Upstash Redis",
      "JWT",
    ],
    accentClass: "from-amber-500/20 via-rose-500/10 to-transparent",
    repoUrl: "https://github.com/S-Baltazar/argentina-postcards",
  },
];

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
  award?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
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
    award: "1st Place (Impact) & 3rd Place in Argentina — IonQ & Qollab",
    description:
      "When a wind turbine spins, it slows down the air behind it and causes the next turbine to generate less electricity. QWind uses quantum computing to decide which turbines should stay on and which should turn off when a wind farm has to reduce output—avoiding wasted clean energy.",
    highlights: [
      "1st Place Winner in the Impact Category and 3rd Place Overall in Argentina at the IonQ & Qollab Quantum Hackathon",
      "Executed on real quantum hardware (IonQ Forte 1, 36 qubits) reaching 93% of ideal success probability on valid samples",
      "Tested with real wind data from wind farms in Scotland, England, and Argentina (Chubut and Bahia Blanca)",
      "Engineered to output 100% valid turbine plans, outperforming standard penalty-based quantum formulations",
    ],
    technologies: ["Python", "Qiskit", "Quantum Computing", "NumPy", "SciPy"],
    imageUrl: "/projects/qwind.png",
    imageAlt: "QWind Quantum Optimization for Wind Farms banner",
    accentClass: "from-sky-500/20 via-indigo-500/10 to-transparent",
    demoUrl: "https://youtu.be/UGVkgYGXkF4",
    repoUrl: "https://github.com/agustindiazcano/qwind-qaoa-windfarm",
  },
  {
    id: "nasa-mars-tango-horizon",
    title: "Tango Horizon: 3D & AI Mars Mission Simulator",
    category: "AI & 3D Simulation",
    year: "2026",
    award: "Local Winner (Impact) — NASA Space Apps Challenge",
    description:
      "On Mars, a radio signal takes 4 to 24 minutes to travel from Earth, so astronauts cannot wait for real-time help in an emergency. Built on real NASA maps of Gale Crater, Tango Horizon pairs a 3D simulator with a voice AI assistant and autonomous robots to protect crew health, anticipate dust storms, and coordinate rescues.",
    highlights: [
      "1st Place Local Winner in the Impact Category at NASA Space Apps Challenge 2026 (Buenos Aires, supported by NASA, CONAE, Universidad de Palermo, and IBM Argentina)",
      "Real-time 3D Martian terrain built over authentic NASA MRO HiRISE maps of Gale Crater",
      "Voice AI assistant supporting 5 languages over radio and smartphone QR remote control",
      "Autonomous rovers and coaxial drones for sample collection, biomedical monitoring, and emergency rescue",
    ],
    technologies: [
      "TypeScript",
      "Three.js",
      "Node.js",
      "Python",
      "Artificial Intelligence",
      "WebSocket",
    ],
    imageUrl: "/projects/tango-horizon.png",
    imageAlt: "Tango Horizon 3D & AI Mars Mission Simulator banner",
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
    imageUrl: "/projects/argentina-postcards.jpg",
    imageAlt: "Argentina Postcards vintage Argentine stamp preview",
    accentClass: "from-amber-500/20 via-rose-500/10 to-transparent",
    demoUrl: "https://postales-vintage.vercel.app/",
    repoUrl: "https://github.com/S-Baltazar/argentina-postcards",
  },
  {
    id: "trains-station-3d",
    title: "3D Railway Station & Trivia Simulator",
    category: "Full Stack",
    year: "2026",
    description:
      "An interactive 3D railway station and trivia game built with React Three Fiber and Express. Players answer curated and procedurally generated trivia questions as trains pull into the station, earning coins to expand the terminal with shops, a second parallel platform, a covered pedestrian bridge, an electrical substation, animated city buses, and four custom 3D train formations.",
    highlights: [
      "Detailed procedural 3D models and textures in Three.js for four train types, brick archways, glass canopies, shops, turnstiles, and Argentine city buses",
      "Anti-repetition trivia engine combining curated questions, procedural math/geography generators, difficulty tiers, 60-second blitz mode, and achievements",
      "Progressive dual-station expansion featuring a second track, 18-step pedestrian overpass, modular substation, dynamic day/sunset/night cycle, and 3D rain",
      "Responsive desktop and mobile portrait/landscape UI with arrow-key free camera, Web Audio SFX, and serverless Express API deployed on Vercel",
    ],
    technologies: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Node.js",
      "Express",
      "Zustand",
      "Vercel",
    ],
    imageUrl: "/projects/trains-station.jpg",
    imageAlt: "3D Railway Station and Trivia Simulator architectural preview",
    accentClass: "from-sky-500/20 via-cyan-500/10 to-transparent",
    demoUrl: "https://trains-proyect.vercel.app",
    repoUrl: "https://github.com/S-Baltazar/trains-project",
  },
];

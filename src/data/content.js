export const profile = {
  name: "Vedant S. Khetmalis",
  roles: ["AI Developer", "Full Stack Developer", "Hackathon Team Leader"],
  education:
    "Bachelor of Technology in Computer Science Engineering/DS, Nxtwave Innovation of Advanced Technology, ADYPU, Pune",
  status: "Second Year (2026-27)",
  cgpa: "8.48 / 10.0",
  graduation: "Expected Graduation: 2029",
  goal:
    "Second-year Computer Science student with hands-on experience in full-stack development and AI integration, seeking an internship to contribute to challenging projects and grow as a developer.",
  email: "khetmalisvedant@gmail.com",
  phone: "+91-96730-07541",
  location: "Pune Maharashtra, India",
  linkedin: "https://linkedin.com/in/khetmalis-vedant-a9866b370",
  github: "https://github.com/khetmalisvedant-tech",
};

export const socials = [
  { name: "GitHub", url: "https://github.com/khetmalisvedant-tech", icon: "FaGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/khetmalis-vedant-a9866b370", icon: "FaLinkedin" },
  { name: "Email", url: "mailto:khetmalisvedant@gmail.com", icon: "FaEnvelope" },
];

export const skillGroups = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 90 },
      { name: "SQL", level: 75 },
      { name: "Mongo DB", level: 70},
      { name: "C++", level:70}
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React.js", level: 80 },
      { name: "REST APIs", level: 75 },
      { name: "Node.js", level: 80},
      { name: "Express.js", level:80},
    ],
  },
  {
    category: "AI / ML",
    skills: [
      { name: "AI Integration", level: 80 },
      { name: "LLM APIs", level: 78 },
      { name: "Prompt Engineering", level: 82 },
    ],
  },
  {
    category: "Databases & Tools",
    skills: [
      { name: "SQL", level: 75 },
      { name: "MongoDB (basic)", level: 55 },
      { name: "Git / GitHub", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export const softSkills = [
  "Team Leadership",
  "Cross-Functional Coordination",
  "Sprint Planning",
  "Communication",
  "Critical Thinking",
  "Real World Problem Solving",
  "Fast Learner",
  "Adaptability",
  "Critical Thinking",
];

export const projects = [
  {
    title: "AUTO-FLOW AI",
    role: "Team Leader — Economic Times Hackathon (Round 2)",
    period: "October 2024",
    description:
      "Led a cross-functional team of 4 developers to design and launch an AI-powered workflow automation tool that advanced to Round 2 (top 15%). Architected the core system with a React.js frontend and Python backend with REST API integration for third-party services, and implemented AI-driven task prioritization using LLM APIs — reducing manual workflow configuration time by ~40%.",
    tags: ["React.js", "Python", "REST API", "LLM APIs"],
    github: "https://github.com/khetmalisvedant-tech",
  },
  {
    title: "AI Audio Mentor & Analytics AI",
    role: "Full-Stack Developer — Murf AI Hackathon",
    period: "September 2024",
    description:
      "Built two complete, demo-ready AI applications in a single 48-hour hackathon (completed by only 3 teams). AI Audio Mentor is a voice-based guidance system using the Murf.ai API to generate personalized MP3 audio responses. Analytics AI is a real-time dashboard tracking user engagement, session data, and interaction patterns using React.js + Firebase. Shortlisted for the post-hackathon mentorship program.",
    tags: ["React.js", "Firebase", "Murf.ai API"],
    github: "https://github.com/khetmalisvedant-tech",
  },
 {
  title: "Algo Trade System",
  status: "In Development",
  description: "A full-stack algorithmic trading system with backend, frontend, and Supabase-powered data layer — currently under active development.",
  tech: ["Node.js", "Supabase", "Docker", "Netlify Functions"],
  github: "https://github.com/khetmalisvedant-tech/Algo-Trade-System",
  
},
  {
  title: "AutoFlow AI",
  status: "Semifinalist — ET AI Hackathon 2026",
  description: "A multi-agent autonomous workflow system built for the Economic Times AI Hackathon 2026, addressing Agentic AI for Autonomous Enterprise Workflows and Domain-Specialized AI Agents (Agriculture). Four collaborating agents — Decision, Action, Monitoring, and Verification — process real-time weather data to generate autonomous farming recommendations, with built-in fallback logic for demo-grade reliability.",
  tech: ["React", "Vite", "FastAPI", "Python", "Groq (LLaMA 3)", "Vercel", "Render"],
  achievement: "Advanced to the semifinal round",
  github: "https://github.com/khetmalisvedant-tech/ET_Hackathon",
  
},
];

export const experience = [
  {
    title: "Multi-Competition Team Leader",
    period: "2025 – Present",
    description:
      "Led teams across 5+ competitive events (hackathons, coding challenges); achieved Round 2 (Semifinalist) advancement in the Economic Times Hackathon.",
  },
  {
    title: "Civic-Tech Volunteer — Bharat Nirman Urban Development System",
    period: "September 2024",
    description:
      "Collaborated with experienced developers on an AI-driven urban planning solution for Goa's Civic-Tech Initiative; contributed to system architecture, research, and feature development.",
  },
];

export const timeline = [
  { year: "School", label: "Built a foundation in mathematics and logic." },
  { year: "2025-26", label: "Started B.Tech. Computer Science Engineering/DS at Nxtwave Innovation of Advanced Technology, Pune." },
  { year: "Aug 2025", label: "Built the Secure Wi-Fi Chat Application solo project." },
  { year: "Sep 2025", label: "Full-stack developer at the Murf AI Hackathon; civic-tech volunteer on Bharat Nirman." },
  { year: "Oct 2025", label: "Led AUTO-FLOW AI to Round 2 (top 15%) at the Economic Times Hackathon." },
  { year: "Future Goals", label: "Land an internship and grow into a product-focused AI Engineer." },
];

export const achievements = [
  { label: "Hackathons Led", value: 8 },
  { label: "Projects Built", value: 5 },
  { label: "Round 2 Finishes", value: 1 },
  { label: "CGPA", value: 8.48 },
];

export const services = [
  { title: "AI Integration", description: "Wiring LLM APIs and prompt-engineered flows into real applications." },
  { title: "Full-Stack Development", description: "React.js frontends backed by Python REST APIs." },
  { title: "Team Leadership", description: "Sprint planning, code reviews, and task delegation under deadline pressure." },
  { title: "Rapid Prototyping", description: "Turning an idea into a demo-ready app within a hackathon's time limit." },
  { title: "Secure Systems", description: "Socket programming, AES-256 encryption, and RSA key exchange." },
  { title: "Data & Dashboards", description: "Real-time analytics dashboards with React.js and Firebase." },
];

export const whyChooseMe = [
  { title: "Leadership", description: "Led cross-functional teams of 4+ across 5+ competitive events." },
  { title: "Under Pressure", description: "Shipped two complete AI apps in a single 48-hour hackathon." },
  { title: "Fast Learner", description: "Picks up new APIs and tools quickly, then ships with them." },
  { title: "Security-Minded", description: "Comfortable with encryption and secure communication design." },
  { title: "Teamwork", description: "Coordinates sprint planning, code reviews, and delegation smoothly." },
  { title: "Problem Solving", description: "Structured, architecture-first approach to ambiguous problems." },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science Engineering/DS",
  institute: "Nxtwave Innovation of Advanced Technology, Pune",
  graduation: "Expected Graduation: 2029",
  gpa: "Current CGPA: 8.48 / 10.0",
  year: "Second Year (2026-27)",
  coursework: [
    "Design and Analysis of Algorithm",
    "Object-Oriented Programming",
    "Data Structure Algorithm"
    "Web Development",
    "Database Management Systems",
    "Computer Networks",
  ],
};

export const recognitions = [
  {
    title: "Round 2 — Economic Times Hackathon",
    role: "Team Leader, AUTO-FLOW AI · October 2024",
    detail:
      "Advanced to Round 2 (top 15%) leading a team of 4 developers on an AI-powered workflow automation tool.",
  },
  {
    title: "Shortlisted — Murf AI Hackathon",
    role: "Full-Stack Developer · September 2024",
    detail:
      "Shipped two complete AI apps in 48 hours — one of only 3 teams to do so — and was shortlisted for the post-hackathon mentorship program.",
  },
  {
    title: "Civic-Tech Contribution",
    role: "Volunteer, Bharat Nirman Urban Development System · September 2024",
    detail:
      "Contributed to system architecture and research for an AI-driven urban planning solution with Goa's Civic-Tech Initiative.",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Native" },
  { name: "Marathi", level: "Native" },
  { name: "Konkani", level: "Native" },
];

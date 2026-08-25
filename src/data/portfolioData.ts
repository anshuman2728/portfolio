import type { Project, SkillCategory, Achievement, ExperienceOrEducation } from '../types';

export const PERSONAL_INFO = {
  name: 'Anshuman Singh',
  role: 'Full-Stack Software Engineer & AI Systems Builder',
  tagline: 'Architecting dynamic AI workflows, resilient full-stack systems, and high-performance digital platforms.',
  location: 'Noida, Uttar Pradesh, India',
  email: 'anshumanrock27@gmail.com',
  phone: '+91 8429412344',
  phoneDisplay: '+91 84294 12344',
  github: 'https://github.com/anshuman2728',
  githubUsername: 'anshuman2728',
  linkedin: 'https://linkedin.com/in/anshuman-singh-cse',
  linkedinUsername: 'anshuman-singh-cse',
  resumeUrl: '/assets/Anshuman_Singh_Resume.pdf',
  portraitUrl: '/assets/anshuman-portrait.jpg',
  sculptureUrl: '/assets/sculpture.jpg',
  status: 'Open for SDE / Full-Stack Engineer Opportunities',
  bio: `I am a Computer Science Engineer with a rigorous foundation in Data Structures, Algorithms, and modern web architectures. My work centers on engineering autonomous AI-driven systems, dynamic multi-tier applications, and ultra-responsive digital platforms. I bridge scalable backend infrastructure (Java, Spring Boot, Node.js, PostgreSQL/Supabase, MongoDB) with clean, high-craft frontend interfaces (React 19, Next.js 16, TypeScript, Tailwind CSS).`,
  quickMetrics: [
    { value: '150+', label: 'LeetCode DSA Solved', sublabel: 'Data Structures & Algorithms in Java' },
    { value: '2', label: 'Live Deployed Platforms', sublabel: 'IntervAI & Hemant Tiles Storefront' },
    { value: '2027', label: 'B.Tech CSE Graduation', sublabel: 'JSS Academy of Technical Education' },
    { value: '100%', label: 'Commitment to Craft', sublabel: 'Clean code & resilient architecture' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'intervai',
    title: 'IntervAI',
    tagline: 'Autonomous AI Technical Interviewer & Candidate Assessment Engine',
    category: 'AI & Full Stack',
    featured: true,
    liveUrl: 'https://interv-ai-weld.vercel.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A full-stack, autonomous technical interviewer engineered for multi-turn software engineering assessments. Features real-time AI evaluation, agentic system design feedback, and resilient heuristic fallbacks for enterprise-grade uptime.',
    highlights: [
      'Engineered dynamic, multi-turn AI interview sessions evaluating candidate answers across algorithms, system design, and coding patterns.',
      'Integrated OpenRouter API with custom structured evaluation prompts to generate comprehensive performance scorecards and rubric breakdown.',
      'Architected a dual-engine architecture with in-memory heuristic fallback systems ensuring zero downtime and graceful degradation during external API rate limits.',
      'Built a high-performance candidate portal with personalized learning telemetry, score history, and real-time response latency tracking.'
    ],
    techStack: ['Next.js 16', 'React', 'Node.js', 'Express.js', 'MongoDB', 'OpenRouter API', 'Tailwind CSS', 'TypeScript'],
    metrics: [
      { label: 'System Uptime', value: 'Zero-Downtime Fallback' },
      { label: 'Evaluation Engine', value: 'Multi-Turn AI' },
      { label: 'Deployment', value: 'Live on Vercel' }
    ],
    architectureSummary: 'Next.js 16 frontend communicating with an Express/Node micro-engine orchestrating OpenRouter LLM context streams, backed by MongoDB for candidate telemetry and local memory cache for rate-limit protection.'
  },
  {
    id: 'hemant-tiles',
    title: 'Hemant Tiles & Building Materials',
    tagline: 'Modern Digital Storefront, Catalog Discovery & Commercial Inquiry Platform',
    category: 'E-Commerce & Frontend',
    featured: true,
    liveUrl: 'https://hemanttilesandbuildingmaterial.lovable.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A modern, responsive digital commerce portal optimizing product discovery, material visual exploration, and commercial order inquiries for high-end tiles and architectural supplies.',
    highlights: [
      'Developed a responsive, high-speed digital catalog optimizing product discovery and customer navigation across hundreds of material categories.',
      'Built scalable, modular UI components utilizing React 19, TypeScript, and Tailwind CSS for seamless multi-device shopping experiences.',
      'Integrated Supabase (PostgreSQL) for secure, real-time backend data management and inventory catalog persistence.',
      'Implemented structured form handling with Zod schema validation and React Hook Form to streamline customer quotation inquiries and reduce entry errors.'
    ],
    techStack: ['React 19', 'TypeScript', 'Vite', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'Zod', 'React Hook Form'],
    metrics: [
      { label: 'Frontend Engine', value: 'React 19 + TypeScript' },
      { label: 'Database', value: 'Supabase PostgreSQL' },
      { label: 'Validation', value: 'Type-Safe Zod Schemas' }
    ],
    architectureSummary: 'React 19 single-page application powered by Vite with Supabase BaaS PostgreSQL integration, Zod runtime validation, and atomic UI component architecture.'
  },
  {
    id: 'jeevan-setu',
    title: 'Jeevan Setu',
    tagline: 'Gamified Disaster Management & Real-Time Emergency Education System',
    category: 'Full Stack System',
    featured: false,
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A full-stack gamified educational web platform designed to prepare students for disaster safety protocols through interactive simulation games, live emergency feeds, and intelligent emergency guidance.',
    highlights: [
      'Developed an interactive gamified web portal to educate users on natural disaster precautions through simulated challenges and interactive scenario quizzes.',
      'Integrated live third-party APIs to stream real-time national disaster advisories, news feeds, and critical emergency alerts directly to users.',
      'Designed dynamic REST API microservices for handling quiz state machines, user progress telemetry, and scoring leaderboards.',
      'Applied core game design principles and accessible UI mechanics to elevate engagement and protocol retention.'
    ],
    techStack: ['Node.js', 'Spring Boot / REST APIs', 'JavaScript', 'HTML5/CSS3', 'MySQL / Real-Time Data'],
    metrics: [
      { label: 'Core Mechanism', value: 'Gamified Learning Engine' },
      { label: 'Data Ingestion', value: 'Real-Time Emergency APIs' }
    ],
    architectureSummary: 'Full-stack REST API server feeding an interactive state-driven frontend with live broadcast integration and user progress persistence.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Programming Languages',
    iconName: 'Code2',
    skills: [
      { name: 'Java', level: 'Core / OOP / DSA', highlighted: true },
      { name: 'TypeScript', level: 'Advanced / Strict Types', highlighted: true },
      { name: 'JavaScript (ES6+)', level: 'Modern Web / Async', highlighted: true },
      { name: 'SQL', level: 'Relational Queries & DDL', highlighted: true },
      { name: 'C', level: 'Procedural & Memory Fundamentals' },
      { name: 'HTML5 & CSS3', level: 'Semantic & Responsive' }
    ]
  },
  {
    name: 'Frontend Ecosystem',
    iconName: 'Layout',
    skills: [
      { name: 'React 19', level: 'Concurrent / Hooks', highlighted: true },
      { name: 'Next.js 16', level: 'App Router / SSR', highlighted: true },
      { name: 'Tailwind CSS', level: 'Design Systems / Fluid', highlighted: true },
      { name: 'Radix UI', level: 'Accessible Headless' },
      { name: 'Framer Motion', level: 'Physics & Transitions', highlighted: true },
      { name: 'Zod & React Hook Form', level: 'Schema Validation' }
    ]
  },
  {
    name: 'Backend, APIs & Databases',
    iconName: 'Server',
    skills: [
      { name: 'Node.js & Express.js', level: 'REST APIs / Microservices', highlighted: true },
      { name: 'Spring Boot (Java)', level: 'Enterprise Services & APIs', highlighted: true },
      { name: 'Supabase (PostgreSQL)', level: 'Relational & Auth', highlighted: true },
      { name: 'MongoDB', level: 'Document DB / NoSQL', highlighted: true },
      { name: 'ChromaDB', level: 'Vector Embeddings / RAG' },
      { name: 'OpenRouter & LLM APIs', level: 'Agentic AI Orchestration', highlighted: true }
    ]
  },
  {
    name: 'Core CS, Tools & Practices',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms', level: '150+ Solved in Java', highlighted: true },
      { name: 'System Design & OOP', level: 'Clean Architecture' },
      { name: 'Git & GitHub', level: 'Version Control / CI', highlighted: true },
      { name: 'Vite & Build Tooling', level: 'Modern Bundlers' },
      { name: 'Postman', level: 'API Testing & Contracts' },
      { name: 'Agile / Scrum & Prompt Engineering', level: 'Modern Workflow' }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: '150+ LeetCode DSA Problems Solved',
    issuer: 'LeetCode (Competitive Programming)',
    date: 'Ongoing Focus',
    badge: 'Algorithmic Mastery',
    iconName: 'Terminal',
    description: 'Demonstrated analytical rigor and complex problem-solving capabilities utilizing Java for array manipulations, trees, dynamic programming, graphs, and system algorithms.'
  },
  {
    title: 'Java (Basic) Certified',
    issuer: 'HackerRank',
    date: 'Verified',
    badge: 'Industry Certification',
    link: 'https://hackerrank.com',
    iconName: 'Award',
    description: 'Officially certified in core Java concepts including Object-Oriented Programming, Exception Handling, Collections Framework, and Multithreading principles.'
  },
  {
    title: 'Smart India Hackathon (SIH) Contender',
    issuer: 'Ministry of Education / AICTE',
    date: 'National Level',
    badge: 'Collaborative Engineering',
    iconName: 'Zap',
    description: 'Collaborated in an agile technical team under intense time constraints to conceptualize, architect, and prototype technology-driven software solutions for nationwide challenges.'
  },
  {
    title: 'High Commendation — Youth Parliament',
    issuer: 'National Youth Parliament Forum (2025)',
    date: '2025',
    badge: 'Leadership & Debate',
    iconName: 'Mic2',
    description: 'Awarded High Commendation for exceptional public articulation, policy analysis, negotiation, and high-stakes cross-functional critical thinking.'
  }
];

export const TIMELINE: ExperienceOrEducation[] = [
  {
    title: 'Bachelor of Technology (B.Tech) in Computer Science & Engineering',
    organization: 'JSS Academy of Technical Education (AKTU)',
    location: 'Noida, Uttar Pradesh',
    period: '2023 – 2027',
    type: 'Education',
    description: [
      'Comprehensive study of Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and Computer Networks.',
      'Active participant in technical hackathons, coding workshops, and collaborative software projects.'
    ],
    skillsOrTags: ['Computer Science', 'DSA', 'OOP', 'DBMS', 'Operating Systems']
  },
  {
    title: 'Core Member — Photography & Literature Clubs',
    organization: 'JSS Academy of Technical Education',
    location: 'Noida, UP',
    period: '2023 – Present (2 Years)',
    type: 'Extracurricular',
    description: [
      'Fostered creative collaboration, visual composition, storytelling, and event curation across campus-wide initiatives.',
      'Cultivated an editorial eye for visual aesthetics, color grading, and user-centric narrative presentation.'
    ],
    skillsOrTags: ['Creative Direction', 'Visual Aesthetics', 'Storytelling', 'Team Coordination']
  }
];

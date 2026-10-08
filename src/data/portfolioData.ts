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
  bio: `Results-oriented Software Engineer and Full-Stack Developer with strong expertise in Java, React, Node.js, and scalable web architectures. Proven track record in developing autonomous AI-driven assessment tools, responsive e-commerce platforms, and interactive Java applications. Possesses a solid foundation in Data Structures and Algorithms (DSA), complex problem-solving, API design, and database management. Adept at building clean, performance-optimised solutions for modern IT and AI environments.`,
  quickMetrics: [
    { value: '175+', label: 'LeetCode DSA Solved', sublabel: 'Data Structures & Algorithms in Java' },
    { value: '3', label: 'Flagship Systems', sublabel: 'IntervAI, Hemant Tiles & Cyber Heist' },
    { value: '2027', label: 'B.Tech CSE Graduation', sublabel: 'JSS Academy of Technical Education' },
    { value: '100%', label: 'Commitment to Craft', sublabel: 'Clean code & resilient architecture' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'intervai',
    title: 'IntervAI',
    tagline: 'Autonomous AI Technical Interviewer | Next.js, Node.js, Express, MongoDB, OpenRouter API',
    category: 'AI & Full Stack',
    featured: true,
    liveUrl: 'https://interv-ai-weld.vercel.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A full-stack, autonomous technical interviewer engineered for multi-turn software engineering assessments. Evaluates system design and agentic workflows, generating detailed performance scorecards with dual-engine heuristic fallback resilience.',
    highlights: [
      'Engineered a full-stack AI technical interviewer for dynamic, multi-turn software engineering assessments.',
      'Integrated OpenRouter API to evaluate system design and agentic workflows, generating detailed performance scorecards.',
      'Architected a dual-engine system with in-memory heuristic fallbacks, ensuring zero downtime during API rate limits.',
      'Built a responsive React and Tailwind CSS candidate portal with personalised learning telemetry data.'
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
    title: 'Hemant Tiles & Building Material Platform',
    tagline: 'Digital Storefront & Building Supplies Platform | React 19, TypeScript, Vite, Supabase',
    category: 'E-Commerce & Frontend',
    featured: true,
    liveUrl: 'https://hemanttilesandbuildingmaterial.lovable.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A modern, responsive digital storefront optimizing product discovery, seamless customer navigation, and commercial inquiries for building materials and tiles.',
    highlights: [
      'Developed a responsive digital storefront optimising product discovery and seamless customer navigation.',
      'Built scalable UI components using React 19 and TypeScript, integrating Supabase for secure backend data management.',
      'Implemented structured form handling with Zod validation and React Hook Form to streamline customer inquiries.'
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
    id: 'cyber-heist',
    title: 'Cyber Heist',
    tagline: 'Interactive Java Application | Core Java, OOP, Multithreading, UI/UX',
    category: 'Core Java & OOP',
    featured: true,
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A fully functional standalone game applying core Java concepts, including advanced object-oriented programming (OOP), multithreading, and event handling with custom physics and game loops.',
    highlights: [
      'Developed a fully functional standalone game applying core Java concepts, including advanced object-oriented programming (OOP), multithreading, and event handling.',
      'Engineered custom game loops, collision detection algorithms, and dynamic entity state management to ensure smooth and responsive runtime execution.',
      'Optimised asset rendering and memory management routines to maintain consistent frame rates and optimal performance without memory leaks.'
    ],
    techStack: ['Core Java', 'OOP', 'Multithreading', 'Event Handling', 'Game Loops', 'Collision Detection', 'UI/UX'],
    metrics: [
      { label: 'Runtime Engine', value: 'Core Java / JVM' },
      { label: 'Concurrency', value: 'Multithreaded Loops' },
      { label: 'Performance', value: 'Zero Memory Leaks' }
    ],
    architectureSummary: 'Standalone Core Java desktop architecture built with custom multithreaded game loops, decoupled entity state managers, event-driven listener patterns, and optimized graphic rendering cycles.'
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
      { name: 'Java', level: 'Core / OOP / Multithreading', highlighted: true },
      { name: 'JavaScript', level: 'ES6+ / Modern Web / Async', highlighted: true },
      { name: 'TypeScript', level: 'Strict Types / Generics', highlighted: true },
      { name: 'HTML5/CSS3', level: 'Semantic & Responsive', highlighted: true },
      { name: 'SQL', level: 'Relational Queries & DDL', highlighted: true },
      { name: 'C', level: 'Memory & Procedural Fundamentals' }
    ]
  },
  {
    name: 'Core Competencies',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', level: '175+ Solved on LeetCode', highlighted: true },
      { name: 'Complex Problem Solving', level: 'Algorithmic Optimization', highlighted: true },
      { name: 'System Design', level: 'Scalable Architectures', highlighted: true },
      { name: 'Object-Oriented Programming (OOP)', level: 'Design Patterns & Principles', highlighted: true }
    ]
  },
  {
    name: 'Frontend Technologies',
    iconName: 'Layout',
    skills: [
      { name: 'React 19', level: 'Concurrent / Hooks / State', highlighted: true },
      { name: 'Next.js 16', level: 'App Router / SSR / Full-Stack', highlighted: true },
      { name: 'Tailwind CSS', level: 'Design Systems & Utility', highlighted: true },
      { name: 'Radix UI', level: 'Accessible Headless Primitives', highlighted: true },
      { name: 'Framer Motion', level: 'Physics & Micro-Interactions', highlighted: true },
      { name: 'Zod & React Hook Form', level: 'Type-Safe Validation' }
    ]
  },
  {
    name: 'Backend & Databases',
    iconName: 'Server',
    skills: [
      { name: 'Node.js', level: 'Async Runtime & Services', highlighted: true },
      { name: 'Express.js', level: 'RESTful APIs & Middleware', highlighted: true },
      { name: 'RESTful APIs', level: 'Contract Design & Endpoints', highlighted: true },
      { name: 'MongoDB', level: 'NoSQL / Aggregations', highlighted: true },
      { name: 'Supabase (PostgreSQL)', level: 'Relational DB & BaaS', highlighted: true },
      { name: 'ChromaDB', level: 'Vector Embeddings / RAG' }
    ]
  },
  {
    name: 'Tools & Methodologies',
    iconName: 'Wrench',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control / Workflows', highlighted: true },
      { name: 'Vite', level: 'High-Speed Bundling', highlighted: true },
      { name: 'Postman', level: 'API Testing & Telemetry', highlighted: true },
      { name: 'Agile/Scrum', level: 'Iterative Engineering', highlighted: true },
      { name: 'Prompt Engineering', level: 'Agentic AI & Evaluation', highlighted: true }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Algorithmic Problem Solving (175+ LeetCode DSA)',
    issuer: 'LeetCode (Competitive Programming)',
    date: 'Ongoing Focus',
    badge: 'Algorithmic Rigor',
    iconName: 'Terminal',
    description: 'Successfully solved 175+ Data Structures and Algorithms (DSA) problems on LeetCode utilising Java, demonstrating analytical rigor in arrays, dynamic programming, trees, graphs, and system algorithms.'
  },
  {
    title: 'Java (Basic) Certificate',
    issuer: 'HackerRank',
    date: 'Verified',
    badge: 'Industry Certification',
    link: 'https://hackerrank.com',
    iconName: 'Award',
    description: 'Officially certified in core Java concepts including Object-Oriented Programming (OOP), Collections Framework, Exception Handling, and Multithreading principles.'
  },
  {
    title: 'Hackathon Excellence: Finalist & Qualifier',
    issuer: 'ABtalks / SIH / Adobe Hackathons',
    date: 'National Level',
    badge: 'Hackathon Excellence',
    iconName: 'Zap',
    description: 'Finalist in ABtalks Hackathon; Qualified for Round 2 of both the Smart India Hackathon (SIH) and the Adobe Student Hackathon, delivering high-impact solutions under intense agile constraints.'
  },
  {
    title: 'Leadership & Communication: High Commendation',
    issuer: 'Youth Parliament (2025)',
    date: '2025',
    badge: 'Youth Parliament',
    iconName: 'Mic2',
    description: 'Awarded High Commendation at Youth Parliament (2025) for exceptional debate, public articulation, policy analysis, and high-stakes critical thinking.'
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

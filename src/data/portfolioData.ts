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
  leetcode: 'https://leetcode.com/u/anshuman2728/',
  leetcodeUsername: 'anshuman2728',
  resumeUrl: '/assets/Anshuman_Singh_Resume.pdf',
  portraitUrl: '/assets/anshuman-portrait.jpg',
  sculptureUrl: '/assets/sculpture.jpg',
  status: 'Open for SDE / Full-Stack Engineer Opportunities',
  bio: `Results-oriented Software Engineer and Full-Stack Developer with strong expertise in Java, React, Node.js, and scalable web architectures. Proven track record in developing autonomous AI-driven assessment tools, responsive e-commerce platforms, and interactive Java applications. Possesses a solid foundation in Data Structures and Algorithms (DSA), complex problem-solving, API design, and database management. Adept at building clean, performance-optimised solutions for modern IT and AI environments.`,
  quickMetrics: [
    { value: '175+', label: 'LeetCode DSA Solved', sublabel: 'Data Structures & Algorithms in Java' },
    { value: '4', label: 'Engineering Systems', sublabel: 'IntervAI, Hemant Tiles, Cyber Heist, Jeevan Setu' },
    { value: '2027', label: 'B.Tech CSE Graduation', sublabel: 'JSS Academy of Technical Education' },
    { value: 'SIH', label: 'Smart India Hackathon', sublabel: 'Round 2 Qualifier' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'intervai',
    title: 'IntervAI',
    tagline: 'Autonomous AI Technical Interviewer | Next.js, Node.js, Express, MongoDB, OpenRouter API',
    category: 'AI & Full Stack',
    filterCategory: 'AI',
    featured: true,
    liveUrl: 'https://interv-ai-weld.vercel.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A full-stack, autonomous technical interviewer engineered for dynamic, multi-turn software engineering assessments. Evaluates system design and agentic workflows, generating detailed performance scorecards with dual-engine heuristic fallback resilience.',
    problem: 'Traditional technical screening faces severe scheduling bottlenecks, subjective evaluation variance, and static question sets that cannot test candidate depth in architecture or adaptive reasoning.',
    solution: 'Engineered an autonomous AI interviewer integrating OpenRouter LLM context streams to dynamically evaluate candidate answers, pose context-aware follow-up challenges, and generate rubric scorecards with in-memory heuristic fallback systems.',
    myContribution: 'Full-Stack Architect & Core Developer. Designed prompt engineering evaluation pipelines, implemented Next.js candidate portal with learning telemetry, and engineered the dual-engine fallback system.',
    highlights: [
      'Engineered a full-stack AI technical interviewer for dynamic, multi-turn software engineering assessments.',
      'Integrated OpenRouter API to evaluate system design and agentic workflows, generating detailed performance scorecards.',
      'Architected a dual-engine system with in-memory heuristic fallbacks, ensuring zero downtime during API rate limits.',
      'Built a responsive React and Tailwind CSS candidate portal with personalised learning telemetry data.'
    ],
    keyFeatures: [
      'Dynamic multi-turn software engineering assessments across DSA and System Design',
      'Structured rubric breakdown and automated scorecard generation',
      'Dual-engine architecture with in-memory heuristic fallbacks preventing downtime',
      'Personalized candidate learning telemetry with response latency diagnostics'
    ],
    technicalChallenges: 'Maintaining continuous evaluation state during external LLM API rate limits and network degradation without interrupting candidate assessments. Solved via an in-memory heuristic evaluation engine.',
    outcome: 'Live deployed platform on Vercel with zero downtime fallback resilience and end-to-end telemetry analytics.',
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
    filterCategory: 'WEB',
    featured: true,
    liveUrl: 'https://hemanttilesandbuildingmaterial.lovable.app/',
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A modern, responsive digital storefront optimizing product discovery, seamless customer navigation, and commercial inquiries for building materials and tiles.',
    problem: 'Architectural supplies and tile retailers frequently struggle with slow physical catalog browsing, disjointed quotation requests, and delayed customer inquiry turnarounds.',
    solution: 'Developed a high-speed, responsive digital catalog and commercial inquiry storefront leveraging React 19, TypeScript, and Supabase PostgreSQL with type-safe schema validation.',
    myContribution: 'Frontend Architect & BaaS Database Integrator. Designed responsive atomic UI components in React 19, implemented Zod form pipelines, and configured Supabase data management.',
    highlights: [
      'Developed a responsive digital storefront optimising product discovery and seamless customer navigation.',
      'Built scalable UI components using React 19 and TypeScript, integrating Supabase for secure backend data management.',
      'Implemented structured form handling with Zod validation and React Hook Form to streamline customer inquiries.'
    ],
    keyFeatures: [
      'High-speed digital catalog optimizing product discovery across hundreds of categories',
      'Supabase PostgreSQL persistence for inventory records and commercial inquiries',
      'Strict schema validation using Zod and React Hook Form to eliminate bad inquiries',
      'Modular atomic UI component library built with React 19 and Tailwind CSS'
    ],
    technicalChallenges: 'Managing stateful customer quotation forms with multiple dynamic item selections and ensuring zero client-side schema mismatches before sending to Supabase.',
    outcome: 'Live deployed commercial digital storefront driving product discovery and structured inquiry management.',
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
    filterCategory: 'OTHER',
    featured: true,
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A fully functional standalone game applying core Java concepts, including advanced object-oriented programming (OOP), multithreading, and event handling with custom physics and game loops.',
    problem: 'Building high-performance, real-time desktop game loops in Java without external game engines requires fine-grained control over thread synchronization, rendering cycles, and memory allocation to prevent frame drops.',
    solution: 'Constructed a fully functional standalone action game applying advanced OOP, multithreading, and event handling, featuring custom game loops, collision algorithms, and dynamic entity state management.',
    myContribution: 'Core Java Engine Developer. Engineered multithreaded game loops, deterministic collision detection algorithms, event listener subsystems, and memory cleanup routines.',
    highlights: [
      'Developed a fully functional standalone game applying core Java concepts, including advanced object-oriented programming (OOP), multithreading, and event handling.',
      'Engineered custom game loops, collision detection algorithms, and dynamic entity state management to ensure smooth and responsive runtime execution.',
      'Optimised asset rendering and memory management routines to maintain consistent frame rates and optimal performance without memory leaks.'
    ],
    keyFeatures: [
      'Independent multithreaded loops separating physics updates and screen rendering',
      'Custom boundary collision detection algorithms and dynamic entity state machines',
      'Event-driven keyboard and action listener pipelines',
      'Memory-optimized sprite rendering routines maintaining consistent frame rates'
    ],
    technicalChallenges: 'Eliminating frame stutter caused by JVM garbage collection and non-synchronized thread access during rapid collision events. Resolved via object pooling and deterministic delta-time game loops.',
    outcome: 'Standalone Java desktop application demonstrating strong OOP principles, thread synchronization, and leak-free memory management.',
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
    filterCategory: 'FULL STACK',
    featured: false,
    githubUrl: 'https://github.com/anshuman2728',
    description: 'A full-stack gamified educational web platform designed to prepare students for disaster safety protocols through interactive simulation games, live emergency feeds, and intelligent emergency guidance.',
    problem: 'Disaster safety protocol instructions are often dense, passive, and poorly retained by students during real-world crises.',
    solution: 'Designed a full-stack gamified web portal that transforms disaster preparedness training into interactive decision-tree scenario simulations paired with real-time national emergency alert ingestion.',
    myContribution: 'Full-Stack Developer. Built state machine quiz logic, integrated third-party emergency alert APIs, and developed RESTful services with Spring Boot and Node.js.',
    highlights: [
      'Developed an interactive gamified web portal to educate users on natural disaster precautions through simulated challenges and interactive scenario quizzes.',
      'Integrated live third-party APIs to stream real-time national disaster advisories, news feeds, and critical emergency alerts directly to users.',
      'Designed dynamic REST API microservices for handling quiz state machines, user progress telemetry, and scoring leaderboards.',
      'Applied core game design principles and accessible UI mechanics to elevate engagement and protocol retention.'
    ],
    keyFeatures: [
      'Interactive scenario simulation challenges demonstrating disaster safety procedures',
      'Live streaming of national disaster advisories via third-party emergency alert APIs',
      'RESTful state machine handling user progress telemetry and scoring leaderboards',
      'Engaging, accessible user interface optimized for high protocol retention'
    ],
    technicalChallenges: 'Ingesting external heterogeneous disaster advisory feeds in real time while maintaining rapid quiz interaction response times.',
    outcome: 'Comprehensive educational platform bridging interactive gamification with live crisis advisory telemetry.',
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
    name: 'LANGUAGES',
    iconName: 'Code2',
    skills: [
      { name: 'Java', level: 'Core / OOP / Multithreading', highlighted: true },
      { name: 'JavaScript', level: 'ES6+ / Modern Web / Async', highlighted: true },
      { name: 'TypeScript', level: 'Strict Types & Contracts', highlighted: true },
      { name: 'SQL', level: 'Relational Queries & DDL', highlighted: true },
      { name: 'HTML5/CSS3', level: 'Semantic Structure & Responsive', highlighted: true },
      { name: 'C', level: 'Memory & Procedural Fundamentals' }
    ]
  },
  {
    name: 'FRONTEND',
    iconName: 'Layout',
    skills: [
      { name: 'React 19', level: 'Concurrent / Hooks / State', highlighted: true },
      { name: 'Next.js 16', level: 'App Router / SSR / Full-Stack', highlighted: true },
      { name: 'HTML5', level: 'Semantic HTML5 Standards', highlighted: true },
      { name: 'CSS3', level: 'Modern Layouts & Animations', highlighted: true },
      { name: 'Tailwind CSS', level: 'Design Systems & Utility', highlighted: true },
      { name: 'Radix UI', level: 'Accessible Headless Primitives' },
      { name: 'Framer Motion', level: 'Micro-Interactions & Spring Physics' },
      { name: 'Zod & React Hook Form', level: 'Type-Safe Validation Contracts' }
    ]
  },
  {
    name: 'BACKEND',
    iconName: 'Server',
    skills: [
      { name: 'Spring Boot', level: 'Enterprise Java / REST Services', highlighted: true },
      { name: 'REST APIs', level: 'Endpoint Design & Contracts', highlighted: true },
      { name: 'Node.js', level: 'Asynchronous Event-Driven Runtime', highlighted: true },
      { name: 'Express.js', level: 'Microservices & Middleware', highlighted: true }
    ]
  },
  {
    name: 'DATABASE',
    iconName: 'Database',
    skills: [
      { name: 'MySQL', level: 'Relational Schemas & Indexing', highlighted: true },
      { name: 'MongoDB', level: 'NoSQL Document Store & Aggregations', highlighted: true },
      { name: 'Supabase (PostgreSQL)', level: 'Relational Cloud DB & BaaS', highlighted: true },
      { name: 'ChromaDB', level: 'Vector Embeddings / Semantic RAG' }
    ]
  },
  {
    name: 'CORE CS',
    iconName: 'Cpu',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', level: '175+ Solved in Java on LeetCode', highlighted: true },
      { name: 'Object-Oriented Programming (OOP)', level: 'Encapsulation, Polymorphism, Design Patterns', highlighted: true },
      { name: 'Database Management Systems (DBMS)', level: 'ACID, Normalization, Transactions', highlighted: true },
      { name: 'Computer Networks', level: 'TCP/IP, HTTP/HTTPS, DNS, Sockets', highlighted: true },
      { name: 'Operating Systems', level: 'Threads, Process Scheduling, Memory Management', highlighted: true }
    ]
  },
  {
    name: 'TOOLS',
    iconName: 'Wrench',
    skills: [
      { name: 'Git', level: 'Version Control & Distributed Branching', highlighted: true },
      { name: 'GitHub', level: 'Code Collaboration & CI Workflows', highlighted: true },
      { name: 'Vite', level: 'High-Speed Modern Bundling', highlighted: true },
      { name: 'Postman', level: 'API Testing & Telemetry', highlighted: true },
      { name: 'Vercel', level: 'Edge Deployment & Observability', highlighted: true }
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

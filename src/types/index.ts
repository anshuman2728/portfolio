export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'AI & Full Stack' | 'E-Commerce & Frontend' | 'Full Stack System' | 'Core Java & OOP';
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  architectureSummary: string;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  skills: { name: string; level?: string; icon?: string; highlighted?: boolean }[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  badge: string;
  link?: string;
  iconName: string;
}

export interface ExperienceOrEducation {
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'Education' | 'Extracurricular' | 'Honor';
  description: string[];
  skillsOrTags?: string[];
}

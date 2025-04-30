export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  image: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  icon?: string;
}

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NavItem {
  label: string;
  href: string;
}
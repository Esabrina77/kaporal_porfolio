export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  location: string;
  availability: string;
  linkedin: string;
  github: string;
  portfolio: string;
  company: string;
}

export interface Summary {
  overview: string;
  keyStrengths: string[];
  targetRoles: string[];
}

export interface KaweplaInfo {
  name: string;
  url: string;
  description: string;
  technologies: string[];
  innovations: string[];
}

export interface Entrepreneurial {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  kawepla: KaweplaInfo;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
  focus?: string;
  projects: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  details: string;
  code?: string;
}

export interface TechnicalSkill {
  name: string;
  level?: string;
}

export interface SkillCategory {
  category: string;
  items: TechnicalSkill[];
}

export interface SoftSkill {
  name: string;
  emoji: string;
  level?: string;
}

export interface Skills {
  technical: SkillCategory[];
  soft: SoftSkill[];
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  personal: PersonalInfo;
  summary: Summary;
  entrepreneurial: Entrepreneurial;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: Skills;
  languages: Language[];
  interests: string[];
}

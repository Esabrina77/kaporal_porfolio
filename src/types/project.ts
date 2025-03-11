export interface Project {
    title: string;
    period: string;
    technologies: string[];
    description: string;
    points: string[];
    image?: string;
    link?: string;
    github?: string;  // Ajout de cette ligne
  }
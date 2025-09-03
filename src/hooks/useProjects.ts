"use client";
import { useMemo } from 'react';
import projectsData from '@/data/projects.json';
import { Project } from '@/types/project';

export function useProjects(): Project[] {
  const projects = useMemo(() => {
    return (projectsData.projects || []) as Project[];
  }, []);

  return projects;
}

export function useRecentProjects(limit: number = 2): Project[] {
  const projects = useProjects();
  return projects.slice(0, limit);
}

export function useProjectsByStatus(status?: string): Project[] {
  const projects = useProjects();
  if (!status) return projects;
  
  return projects.filter(project => project.status === status);
}

export function useFeaturedProjects(): Project[] {
  const projects = useProjects();
  // Retourne les projets avec une entreprise (projets entrepreneuriaux)
  return projects.filter(project => project.company && project.company.includes('Kaporelo'));
}

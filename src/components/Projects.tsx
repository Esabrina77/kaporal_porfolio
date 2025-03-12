"use client";

import { useState } from 'react';
import styles from '@/styles/components/Projects.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Project } from '@/types/project';
import projectsData from '@/data/projects.json';
import Image from 'next/image';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);
  const { projects }: { projects: Project[] } = projectsData;

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Projets Récents</h2>
        
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article 
              key={project.title}
              className={`${styles.projectCard} ${index === activeProject ? styles.active : ''}`}
              onMouseEnter={() => setActiveProject(index)}
            >
              {project.image && (
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    objectFit="cover"
                  />
                </div>
              )}
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectPeriod}>{project.period}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.projectPoints}>
                  {project.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                <div className={styles.projectLinks}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                    <span>Voir le projet</span>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      <span>Code source</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 
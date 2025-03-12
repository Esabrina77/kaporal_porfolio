import { Metadata } from 'next';
import Image from 'next/image';
import projectsData from '@/data/projects.json';
import styles from './projects.module.css';

export const metadata: Metadata = {
  title: 'Projets | Sabrina Eloundou',
  description: 'Découvrez tous mes projets en développement web, AR et data science.',
};

export default function ProjectsPage() {
  const { projects } = projectsData;

  return (
    <div className={styles.projectsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Mes Projets</h1>
        
        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
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
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectPeriod}>{project.period}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <ul className={styles.projectPoints}>
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                
                <div className={styles.projectLinks}>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Voir le projet
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Code source
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 
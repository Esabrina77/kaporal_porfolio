import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/Projects.module.css';
import projectsData from '@/data/projects.json';

export default function RecentProjects() {
  // Prendre seulement les 2 projets les plus récents
  const recentProjects = projectsData.projects.slice(0, 2);

  return (
    <div className={styles.projectsGrid}>
      {recentProjects.map((project) => (
        <article 
          key={project.title}
          className={styles.projectCard}
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
              {/* Badge de statut */}
              {project.status && (
                <div className={styles.statusBadge}>
                  <span className={styles.statusText}>{project.status}</span>
                </div>
              )}
            </div>
          )}
          
          <div className={styles.projectContent}>
            <div className={styles.projectHeader}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.company && (
                <span className={styles.companyBadge}>{project.company}</span>
              )}
            </div>
            
            <p className={styles.projectPeriod}>{project.period}</p>
            
            {project.role && (
              <p className={styles.projectRole}>{project.role}</p>
            )}
            
            <div className={styles.technologies}>
              {project.technologies.map((tech: string) => (
                <span key={tech} className={styles.tech}>{tech}</span>
              ))}
            </div>
            
            <p className={styles.projectDescription}>{project.description}</p>
            
            {/* Highlights si disponibles */}
            {project.highlights && project.highlights.length > 0 && (
              <div className={styles.projectHighlights}>
                <h4 className={styles.highlightsTitle}>Points Clés :</h4>
                <ul className={styles.highlightsList}>
                  {project.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index} className={styles.highlightItem}>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Liens vers le projet */}
            <div className={styles.projectLinks}>
              {project.github && (
                <Link href={project.github} className={styles.projectLink} target="_blank">
                  GitHub
                </Link>
              )}
              {project.link && (
                <Link href={project.link} className={styles.projectLink} target="_blank">
                  Voir le projet
                </Link>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 
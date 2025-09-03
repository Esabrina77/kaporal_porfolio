import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useProjects } from '@/hooks/useProjects';
import styles from '@/styles/app/project/projects.module.css';

export const metadata: Metadata = {
  title: 'Projets | Sabrina ELOUNDOU - Architecte de Solutions Numériques',
  description: 'Découvrez tous mes projets innovants : Kawepla, Infrastructure DevOps, IoT, AR/VR et Data Science. Expertise technique et vision entrepreneuriale.',
  keywords: ['projets tech', 'Kawepla', 'DevOps', 'IoT', 'AR/VR', 'Data Science', 'Next.js', 'Startup'],
};

export default function ProjectsPage() {
  // Import direct des données pour éviter l'erreur côté serveur
  const projectsData = require('@/data/projects.json');
  const projects = projectsData.projects || [];

  return (
    <div className={`${styles.projectsPage} ${styles.pageContainer}`}>
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
                    style={{ objectFit: 'cover' }}
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
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  {project.company && (
                    <span className={styles.companyBadge}>{project.company}</span>
                  )}
                </div>
                
                <p className={styles.projectPeriod}>{project.period}</p>
                
                {project.role && (
                  <p className={styles.projectRole}>{project.role}</p>
                )}
                
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className={styles.projectSection}>
                    <h4 className={styles.sectionTitle}>Points Clés :</h4>
                    <ul className={styles.projectPoints}>
                      {project.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Technical Achievements */}
                {project.technicalAchievements && project.technicalAchievements.length > 0 && (
                  <div className={styles.projectSection}>
                    <h4 className={styles.sectionTitle}>Réalisations Techniques :</h4>
                    <ul className={styles.projectPoints}>
                      {project.technicalAchievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Business Impact */}
                {(project.businessImpact || project.businessValue) && (
                  <div className={styles.projectSection}>
                    <h4 className={styles.sectionTitle}>Impact Business :</h4>
                    <ul className={styles.projectPoints}>
                      {(project.businessImpact || project.businessValue || []).map((impact, i) => (
                        <li key={i}>{impact}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Legacy points support */}
                {project.points && project.points.length > 0 && (
                  <ul className={styles.projectPoints}>
                    {project.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                
                <div className={styles.projectLinks}>
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Voir le projet
                    </Link>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                      Code source
                    </Link>
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
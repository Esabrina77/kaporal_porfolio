import Image from 'next/image';
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
          </div>
        </article>
      ))}
    </div>
  );
} 
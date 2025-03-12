import { Metadata } from 'next';
import profileData from '@/data/profile.json';
import styles from './experience.module.css';

export const metadata: Metadata = {
  title: 'Expérience | Sabrina Eloundou',
  description: 'Mon parcours professionnel et mes expériences.',
};

export default function ExperiencePage() {
  const { experience } = profileData;

  return (
    <div className={styles.experiencePage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Mon Expérience</h1>
        
        <div className={styles.timeline}>
          {experience.map((exp, index) => (
            <div key={index} className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h2 className={styles.timelineTitle}>{exp.title}</h2>
                <p className={styles.timelineCompany}>
                  {exp.company}, {exp.location}
                </p>
                <p className={styles.timelinePeriod}>{exp.period}</p>
              </div>
              
              <div className={styles.technologies}>
                {exp.technologies.map((tech) => (
                  <span key={tech} className={styles.tech}>{tech}</span>
                ))}
              </div>
              
              <ul className={styles.achievements}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
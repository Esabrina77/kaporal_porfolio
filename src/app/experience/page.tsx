import { Metadata } from 'next';
import styles from '@/styles/app/experience/experience.module.css';
import profileData from '@/data/profile.json';

// TypeScript interfaces
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface EntrepreneurialData {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  kawepla?: {
    name: string;
    description: string;
  };
}

export const metadata: Metadata = {
  title: 'Expérience | Sabrina ELOUNDOU - Parcours Entrepreneurial & Technique',
  description: 'Découvrez mon parcours professionnel : fondatrice de Kaporelo, développeuse full-stack chez Link2Brain, IATRAX et Ynov Campus. Expertise technique et vision entrepreneuriale.',
  keywords: ['expérience professionnelle', 'Kaporelo', 'Link2Brain', 'IATRAX', 'Ynov Campus', 'développeuse full-stack', 'entrepreneur'],
};

export default function ExperiencePage() {

  const experience = (profileData.experience || []) as ExperienceItem[];
  const entrepreneurial = profileData.entrepreneurial as EntrepreneurialData;

  return (
    <div className={`${styles.experiencePage} ${styles.pageContainer}`}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Mon Expérience</h1>
        
        {/* Section Entrepreneuriale */}
        {entrepreneurial && (
          <div className={styles.entrepreneurialSection}>
            <h2 className={styles.sectionTitle}>🚀 Parcours Entrepreneurial</h2>
            <div className={`${styles.timelineItem} ${styles.entrepreneurialItem}`}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.timelineTitle}>{entrepreneurial.role}</h3>
                <p className={styles.timelineCompany}>{entrepreneurial.company}</p>
                <p className={styles.timelinePeriod}>{entrepreneurial.period}</p>
              </div>
              
              <p className={styles.description}>{entrepreneurial.description}</p>
              
              <ul className={styles.achievements}>
                {entrepreneurial.achievements.map((achievement: string, i: number) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              
              {entrepreneurial.kawepla && (
                <div className={styles.kaweplaHighlight}>
                  <h4 className={styles.projectTitle}>🌟 {entrepreneurial.kawepla.name}</h4>
                  <p className={styles.projectDescription}>{entrepreneurial.kawepla.description}</p>
                  <div className={styles.technologies}>
                    {entrepreneurial.achievements.map((achievement: string, i: number) => (
                      <span key={i} className={styles.tech}>{achievement}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        
        {/* Section Expérience Professionnelle */}
        <div className={styles.professionalSection}>
          <h2 className={styles.sectionTitle}>💼 Expérience Professionnelle</h2>
          <div className={styles.timeline}>
            {experience.map((exp: ExperienceItem, index: number) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.timelineTitle}>{exp.title}</h3>
                  <p className={styles.timelineCompany}>
                    {exp.company}, {exp.location}
                  </p>
                  <p className={styles.timelinePeriod}>{exp.period}</p>
                </div>
                
                <div className={styles.technologies}>
                  {exp.technologies.map((tech: string) => (
                    <span key={tech} className={styles.tech}>{tech}</span>
                  ))}
                </div>
                
                <ul className={styles.achievements}>
                  {exp.achievements.map((achievement: string, i: number) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
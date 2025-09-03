import styles from '@/styles/components/Experience.module.css';
import profileData from '@/data/profile.json';
// TypeScript interfaces
interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  achievements: string[];
}



export default function RecentExperience() {

  const recentExperiences = (profileData.experience || []).slice(0, 2);

  return (
    <div className={styles.timeline}>
      {recentExperiences.map((exp: ExperienceItem, index: number) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineHeader}>
            <h3 className={styles.timelineTitle}>{exp.title}</h3>
            <p className={styles.timelineCompany}>
              {exp.company}, {exp.location}
            </p>
            <p className={styles.timelinePeriod}>{exp.period}</p>
          </div>
          
          <div className={styles.technologies}>
            {exp.technologies.map((tech: string, i: number) => (
              <span key={i} className={styles.tech}>{tech}</span>
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
  );
} 
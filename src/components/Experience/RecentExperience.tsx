import styles from '@/styles/components/Experience.module.css';
import profileData from '@/data/profile.json';

export default function RecentExperience() {
  // Prendre seulement les 2 expériences les plus récentes
  const recentExperiences = profileData.experience.slice(0, 2);

  return (
    <div className={styles.timeline}>
      {recentExperiences.map((exp, index) => (
        <div key={index} className={styles.timelineItem}>
          <div className={styles.timelineHeader}>
            <h3 className={styles.timelineTitle}>{exp.title}</h3>
            <p className={styles.timelineCompany}>
              {exp.company}, {exp.location}
            </p>
            <p className={styles.timelinePeriod}>{exp.period}</p>
          </div>
          
          <div className={styles.technologies}>
            {exp.technologies.map((tech, i) => (
              <span key={i} className={styles.tech}>{tech}</span>
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
  );
} 
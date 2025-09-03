import styles from '@/styles/components/Experience.module.css';

export default function RecentExperience() {
  // Import direct des données pour éviter les erreurs côté serveur
  const profileData = require('@/data/profile.json');
  const recentExperiences = (profileData.experience || []).slice(0, 2);

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
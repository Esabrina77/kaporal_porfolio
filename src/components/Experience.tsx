"use client";

import styles from '@/styles/components/Experience.module.css';
import profileData from '@/data/profile.json';

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Expérience Professionnelle</h2>
        
        <div className={styles.timeline}>
          {profileData.experience.map((exp, index) => (
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
      </div>
    </section>
  );
} 
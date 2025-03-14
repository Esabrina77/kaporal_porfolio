import styles from '@/styles/app/education/education.module.css';
import profileData from '@/data/profile.json';

export default function EducationPage() {
  const { education, certifications } = profileData;

  return (
    <div className={styles.educationPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Formation & Certifications</h1>

        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Parcours Académique</h2>
          {education.map((edu, index) => (
            <div key={index} className={styles.educationCard}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.period}>{edu.period}</p>
              <p className={styles.description}>{edu.description}</p>
              <ul className={styles.projects}>
                {edu.projects.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.certificationsSection}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certificationCard}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDate}>{cert.date}</p>
                <p className={styles.certDetails}>{cert.details}</p>
                {cert.code && (
                  <p className={styles.certCode}>Code: {cert.code}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
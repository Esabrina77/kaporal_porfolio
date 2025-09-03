import { Metadata } from 'next';
import styles from '@/styles/app/education/education.module.css';

import profileData from '@/data/profile.json';    
export const metadata: Metadata = {
  title: 'Formation | Sabrina ELOUNDOU - Bachelor Informatique & Certifications Tech',
  description: 'Mon parcours académique et certifications : Bachelor Informatique Ynov Campus, certification Opquast, Three.js Journey. Formation technique avancée.',
  keywords: ['formation', 'Bachelor Informatique', 'Ynov Campus', 'Opquast', 'Three.js', 'certifications tech'],
};

interface EducationItem {
  degree: string;
  school: string;
  period: string;
  description?: string;
  projects: string[];
}

interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  details?: string;
  code?: string;
}

export default function EducationPage() {
  // Import direct des données pour éviter les erreurs côté serveur

  const education: EducationItem[] = (profileData.education || []) as EducationItem[];
  const certifications: CertificationItem[] = (profileData.certifications || []) as CertificationItem[];

  return (
    <div className={styles.educationPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Formation & Certifications</h1>

        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>Parcours Académique</h2>
          {education.map((edu: EducationItem, index: number) => (
            <div key={index} className={styles.educationCard}>
              <h3 className={styles.degree}>{edu.degree}</h3>
              <p className={styles.school}>{edu.school}</p>
              <p className={styles.period}>{edu.period}</p>
              {edu.description && (
                <p className={styles.description}>{edu.description}</p>
              )}
              {Array.isArray(edu.projects) && edu.projects.length > 0 && (
                <ul className={styles.projects}>
                  {edu.projects.map((project: string, i: number) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.certificationsSection}>
          <h2 className={styles.sectionTitle}>Certifications</h2>
          <div className={styles.certificationsGrid}>
            {certifications.map((cert: CertificationItem, index: number) => (
              <div key={index} className={styles.certificationCard}>
                <h3 className={styles.certTitle}>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certDate}>{cert.date}</p>
                {cert.details && (
                  <p className={styles.certDetails}>{cert.details}</p>
                )}
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
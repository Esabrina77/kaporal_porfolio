import styles from '@/styles/app/hobbies/hobbies.module.css';
import profileData from '@/data/profile.json';

export default function HobbiesPage() {
  const { interests } = profileData;

  return (
    <div className={styles.hobbiesPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Centres d&apos;intérêt</h1>
        <div className={styles.hobbyGrid}>
          {interests.map((hobby, index) => (
            <div key={index} className={styles.hobbyCard}>
              <h2 className={styles.hobbyTitle}>{hobby}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
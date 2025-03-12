import Hero from '@/components/Hero';
import RecentProjects from '@/components/Projects/RecentProjects';
import RecentExperience from '@/components/Experience/RecentExperience';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <Hero />
      
      <section className={styles.recentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Expériences Récentes</h2>
            <Link href="/experience" className={styles.seeMoreLink}>
              Voir toutes mes expériences
            </Link>
          </div>
          <RecentExperience />
        </div>
      </section>

      <section className={styles.recentSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Projets Récents</h2>
            <Link href="/projects" className={styles.seeMoreLink}>
              Voir tous mes projets
            </Link>
          </div>
          <RecentProjects />
        </div>
      </section>
    </>
  );
}

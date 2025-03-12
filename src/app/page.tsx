import Hero from '@/components/Hero';
import Sidebar from '@/components/Sidebar';
import RecentProjects from '@/components/Projects/RecentProjects';
import RecentExperience from '@/components/Experience/RecentExperience';
import Link from 'next/link';
import styles from '@/styles/app/home/page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <Sidebar />
          
          <div className={styles.content}>
            <Hero />
            
            <section className={styles.recentSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Expériences Récentes</h2>
                <Link href="/experience" className={styles.seeMoreLink}>
                  Voir toutes mes expériences
                </Link>
              </div>
              <RecentExperience />
            </section>

            <section className={styles.recentSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Projets Récents</h2>
                <Link href="/projects" className={styles.seeMoreLink}>
                  Voir tous mes projets
                </Link>
              </div>
              <RecentProjects />
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

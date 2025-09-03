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
            
            {/* Section Entrepreneuriat */}
            <section className={styles.entrepreneurshipSection}>
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>🚀 Mon Aventure Entrepreneuriale</h2>
                <Link href="/entrepreneurship" className={styles.seeMoreLink}>
                  En savoir plus
                </Link>
              </div>
              <div className={styles.entrepreneurshipCard}>
                <div className={styles.entrepreneurshipContent}>
                  <h3 className={styles.companyName}>Kaporelo</h3>
                  <p className={styles.companyDescription}>
                    Ma startup tech innovante spécialisée dans les solutions numériques disruptives. 
                    J&apos;ai créé <strong>Kawepla</strong>, une plateforme révolutionnaire de wedding planning 
                    qui combine gestion d&apos;événements et marketplace de prestataires.
                  </p>
                  <div className={styles.entrepreneurshipStats}>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>100%</span>
                      <span className={styles.statLabel}>Développé en interne</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>5+</span>
                      <span className={styles.statLabel}>Technologies modernes</span>
                    </div>
                    <div className={styles.stat}>
                      <span className={styles.statNumber}>∞</span>
                      <span className={styles.statLabel}>Scalabilité</span>
                    </div>
                  </div>
                  <div className={styles.entrepreneurshipLinks}>
                    <Link href="/entrepreneurship" className={styles.primaryLink}>
                      Découvrir Kaporelo
                    </Link>
                    <Link href="https://kawepla.kaporelo.com" className={styles.secondaryLink} target="_blank">
                      Voir Kawepla
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
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

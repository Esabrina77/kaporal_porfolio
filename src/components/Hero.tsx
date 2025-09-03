import Link from 'next/link';
import styles from '@/styles/components/Hero.module.css';
import profileData from '@/data/profile.json';

export default function Hero() {
  const { languages } = profileData;

  return (
    <section className={styles.hero}>
      <div className={styles.mainContent}>
        
        {/* Badge Entrepreneur */}
        <div className={styles.entrepreneurBadge}>
          <span className={styles.badgeIcon}>🚀</span>
          <span className={styles.badgeText}>Fondatrice & Innovatrice Tech</span>
        </div>

 *
        
        <h2 className={styles.heading}>
          Architecte de Solutions Numériques | Entrepreneuse Tech | Expert DevOps & IoT
        </h2>

        {/* Description Stratégique */}
        <p className={styles.description}>
          Je transforme des défis complexes en solutions technologiques innovantes. 
          <strong>Fondatrice de Kaporelo</strong> et créatrice de <strong>Kawepla</strong>,
          je combine expertise technique avancée et vision entrepreneuriale pour créer des 
          plateformes qui révolutionnent leur secteur.
        </p>


        {/* Statistiques Impactantes */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3+</span>
            <span className={styles.statLabel}>Années d&apos;innovation</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>10+</span>
            <span className={styles.statLabel}>Projets complexes</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Taux de réussite</span>
          </div>
        </div>

        {/* Call-to-Action Principal */}
        <div className={styles.ctaSection}>
          <Link href="/projects" className={styles.primaryCTA}>
            Découvrir Mes Innovations
          </Link>
          {/* <Link href="/skills" className={styles.secondaryCTA}>
            Mes Atouts
          </Link> */}
        </div>

        {/* Navigation Secondaire */}
        <nav className={styles.navigation}>
          <Link href="/skills" className={styles.navLink}>Expertise Technique</Link>
          <Link href="/experience" className={styles.navLink}>Parcours</Link>
          <Link href="/education" className={styles.navLink}>Formation</Link>
        </nav>

        {/* Langues */}
        <div className={styles.languages}>
          <h3 className={styles.sectionTitle}>Langues</h3>
          <div className={styles.languagesList}>
            {languages.map((lang, index) => (
              <span key={index} className={styles.languageTag}>
                {lang.name} - {lang.level}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
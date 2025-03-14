import Link from 'next/link';
import styles from '@/styles/components/Hero.module.css';
import profileData from '@/data/profile.json';

export default function Hero() {
  const { languages } = profileData;

  return (
    <section className={styles.hero}>
      <div className={styles.mainContent}>

      <h2 className={styles.heading}>
 Développeuse Full Stack | IA | DevOps
</h2>

<p className={styles.description}>
Passionnée par le développement logiciel et les nouvelles technologies, 
  je conçois des solutions modernes et innovantes, alliant performance, accessibilité et design interactif.  
  Mon parcours mêle Web, Intelligence Artificielle, IoT et DevOps, me permettant de créer des expériences uniques et évolutives.  
  Toujours en quête de nouveaux défis, je repousse sans cesse mes limites pour bâtir des applications impactantes et futuristes.
</p>



        <nav className={styles.navigation}>
          <Link href="/skills" className={styles.navLink}>Compétences</Link>
          <Link href="/education" className={styles.navLink}>Formation</Link>
          <Link href="/hobbies" className={styles.navLink}>Centres d&apos;intérêt</Link>
        </nav>

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
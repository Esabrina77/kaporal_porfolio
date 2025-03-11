import styles from '@/styles/components/Hero.module.css';
import Sidebar from './Sidebar';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <Sidebar />
        
        <div className={styles.content}>
          <h2 className={styles.heading}>
            Développeuse Web Front-End
          </h2>
          
          <p className={styles.description}>
            Passionnée par le développement web et spécialisée dans la création d&apos;interfaces 
            modernes et interactives. En alternance chez Link2Brain, je combine créativité 
            et expertise technique pour donner vie à des expériences utilisateur uniques.
          </p>

          <div className={styles.cta}>
            <a href="#contact" className={styles.ctaButton}>
              Me Contacter
            </a>
            <a href="#projects" className={styles.ctaButtonOutline}>
              Voir mes Projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 
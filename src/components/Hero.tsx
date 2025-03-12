import styles from '@/styles/components/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h2 className={styles.heading}>
        Développeuse Full Stack
      </h2>
      
      <p className={styles.description}>
        Passionnée par le développement web et spécialisée dans la création d&apos;interfaces 
        modernes et interactives. En Stage chez Link2Brain, je combine créativité 
        et expertise technique pour donner vie à des expériences utilisateur uniques.
        Je m&apos;efforce constamment d&apos;apprendre de nouvelles technologies et 
        d&apos;améliorer mes compétences pour créer des solutions innovantes et performantes.
      </p>

      <div className={styles.cta}>
        <a href="#contact" className={styles.ctaButton}>
          Me Contacter
        </a>
        <a href="#projects" className={styles.ctaButtonOutline}>
          Voir mes Projets
        </a>
      </div>
    </section>
  );
} 
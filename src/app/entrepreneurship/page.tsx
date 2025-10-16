import { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/styles/app/entrepreneurship/entrepreneurship.module.css';
// import  entrepreneurialData from '@/data/profile.json';


export const metadata: Metadata = {
  title: 'Entrepreneurship | Sabrina ELOUNDOU - Fondatrice Kaporelo',
  description: 'Découvrez mon parcours entrepreneurial, la vision de Kaporelo et le projet Kawepla. Stratégie business, innovations techniques et impact marché.',
  keywords: ['entrepreneuriat', 'Kaporelo', 'Kawepla', 'startup', 'innovation', 'business', 'tech founder'],
};

export default function Entrepreneurship() {


  return (
    <div className={`${styles.entrepreneurshipPage} ${styles.pageContainer}`}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Premier pas... 😃</h1>

        {/* Section Kaporelo */}
        <section className={styles.kaporeloSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>🏢 Kaporelo - Ma vision Tech</h2>
            <Link href="https://kaporelo.com" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              Visiter Kaporelo →
            </Link>
          </div>
          
          <div className={styles.contentBlock}>
            <p className={styles.blockDescription}>
              En tant que fondatrice et CEO, je pilote la vision stratégique et le développement technique de <strong className={styles.highlight}>Kaporelo</strong>. Notre mission est de transformer les défis complexes en opportunités business grâce à des solutions numériques innovantes et scalables.
            </p>
            
            <div className={styles.visionMissionValues}>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Vision</h3>
                <p className={styles.valueText}>Révolutionner les industries traditionnelles avec des solutions numériques innovantes et scalables, visant l&apos;international.</p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Mission</h3>
                <p className={styles.valueText}>Transformer des défis complexes en opportunités business grâce à une expertise technique avancée et une vision entrepreneuriale forte.</p>
              </div>
              <div className={styles.valueCard}>
                <h3 className={styles.valueTitle}>Valeurs</h3>
                <ul className={styles.valueList}>
                  <li>Innovation continue</li>
                  <li>Excellence technique</li>
                  <li>Impact business mesurable</li>
                  <li>Scalabilité globale</li>
                </ul>
              </div>
            </div>

            <div className={styles.achievementsBlock}>
              <h3 className={styles.subTitle}>Mes Accomplissements chez Kaporelo :</h3>
              <ul className={styles.achievementsList}>
                <li><strong>Création et pilotage de la vision stratégique :</strong> Définition de la feuille de route technologique et commerciale de la startup.</li>
                <li><strong>Développement d&apos;une architecture technique scalable :</strong> Conception et implémentation de solutions robustes et évolutives.</li>
                <li><strong>Positionnement stratégique sur des marchés concurrentiels :</strong> Identification des opportunités et élaboration de stratégies de différenciation.</li>
                <li><strong>Mise en place de partenariats clés :</strong> Négociation et collaboration avec des acteurs majeurs pour accélérer la croissance.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Kawepla */}
        <section className={styles.kaweplaSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>💍 Kawepla - Notre Solution Révolutionnaire</h2>
            <Link href="https://kawepla.kaporelo.com" target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              Visiter Kawepla →
            </Link>
          </div>
          
          <div className={styles.contentBlock}>
            <p className={styles.blockDescription}>
              <strong className={styles.highlight}>Kawepla</strong> est la première réalisation majeure de Kaporelo : une plateforme web complète de gestion de mariage qui combine un système de gestion d&apos;événements avec un marketplace de prestataires de services. Conçue pour rivaliser avec les leaders du marché, Kawepla est l&apos;exemple parfait de la manière dont une expertise technique avancée et une vision business peuvent se transformer en une solution concrète et innovante.
            </p>

            <div className={styles.innovationDetails}>
              <div className={styles.innovationCard}>
                <h3 className={styles.innovationTitle}>Architecture Technique</h3>
                <ul className={styles.innovationList}>
                  <li>Backend robuste avec Node.js, Express.js et PostgreSQL/Prisma ORM.</li>
                  <li>Frontend dynamique en Next.js 14 (App Router) avec React et CSS Modules.</li>
                  <li>Authentification JWT avancée avec gestion multi-rôles (ADMIN, COUPLE, PROVIDER).</li>
                  <li>Intégration Stripe pour une gestion des paiements fluide et sécurisée.</li>
                </ul>
              </div>
              <div className={styles.innovationCard}>
                <h3 className={styles.innovationTitle}>Fonctionnalités Clés</h3>
                <ul className={styles.innovationList}>
                  <li>Système de gestion de mariage complet et intuitif.</li>
                  <li>Système de billing intelligent avec forfaits cumulatifs.</li>
                  <li>Marketplace intégré pour une sélection de prestataires facilitée.</li>
                  <li>Interface luxury design premium pour une expérience utilisateur exceptionnelle.</li>
                </ul>
              </div>
            </div>

            <div className={styles.impactBlock}>
              <h3 className={styles.subTitle}>Impact et Vision :</h3>
              <ul className={styles.achievementsList}>
                <li><strong>Simplification du Wedding Planning :</strong> Digitalisation complète du processus, gain de temps et d&apos;argent pour les couples.</li>
                <li><strong>Valeur Ajoutée pour les Prestataires :</strong> Visibilité accrue et outil de gestion intégré pour les professionnels du mariage.</li>
                <li><strong>Positionnement Stratégique :</strong> Ambition de devenir un acteur majeur en proposant une expérience utilisateur inégalée.</li>
                <li><strong>Démonstration de Résolution de Problèmes :</strong> Capacité à transformer des défis complexes en solutions innovantes et fonctionnelles.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section Appel à l'action */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Prêt(e) à Innover Ensemble ?</h2>
          <p className={styles.ctaDescription}>
            Que ce soit pour discuter de nouvelles opportunités ou explorer des collaborations, je suis toujours ouverte aux échanges.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Me Contacter
          </Link>
        </section>
      </div>
    </div>
  );
}

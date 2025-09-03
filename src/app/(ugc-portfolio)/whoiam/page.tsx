import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/app/ugc/whoiam.module.css';

export const metadata: Metadata = {
  title: 'Qui Suis-Je | SABRINA MAGAZINE - Rédactrice en Chef & Créatrice de Mode',
  description: 'Découvrez mon parcours unique : de développeuse tech à rédactrice en chef de SABRINA MAGAZINE. Fondatrice de Kaporelo, experte en mode et innovation technologique.',
  keywords: ['Sabrina ELOUNDOU', 'rédactrice en chef', 'magazine mode', 'créatrice', 'Kaporelo', 'parcours', 'fashion'],
};

export default function WhoIAmPage() {
  const milestones = [
    {
      year: "2023",
      title: "Début en Tech",
      description: "Lancement de mes études en informatique et découverte de ma passion pour l'innovation technologique."
    },
    {
      year: "2024",
      title: "Première Collaboration Mode",
      description: "Début de mes collaborations avec des marques de mode premium, alliant ma créativité et mon expertise technique."
    },
    {
      year: "2024",
      title: "Fondation de Kaporelo",
      description: "Création de ma startup tech, développement de Kawepla et positionnement entrepreneurial."
    },
    {
      year: "2025",
      title: "Lancement de SABRINA MAGAZINE",
      description: "Création de mon magazine de mode premium dans l'esprit des publications françaises de renom."
    }
  ];

  const values = [
    {
      icon: "✨",
      title: "Élégance",
      description: "Je crois en la beauté intemporelle et l'élégance française dans chaque création."
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "J'allie créativité artistique et innovation technologique pour créer l'avenir de la mode."
    },
    {
      icon: "💎",
      title: "Excellence",
      description: "Chaque projet est une opportunité de créer quelque chose d'exceptionnel et de mémorable."
    },
    {
      icon: "🌟",
      title: "Inspiration",
      description: "J'inspire les autres à embrasser leur style unique et leur potentiel créatif."
    }
  ];

  return (
    <div className={styles.whoiamPage}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroImage}>
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                alt="Sabrina ELOUNDOU"
                width={400}
                height={400}
                className={styles.profileImage}
              />
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Salut, moi c&apos;est 
                <span className={styles.accent}> Sabrina</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Rédactrice en Chef • Créatrice de Mode • Tech Entrepreneur
              </p>
              <p className={styles.personalDescription}>
                Je suis une créatrice passionnée par l&apos;art de la mode et l&apos;expression de la beauté
              </p>
              <p className={styles.personalDescription}>
                Chaque création raconte une histoire, chaque look exprime une personnalité unique
              </p>
              <p className={styles.personalDescription}>
                L&apos;élégance n&apos;a pas de limites, la créativité n&apos;a pas de frontières
              </p>
              <p className={styles.personalDescription}>
                Découvrez l&apos;univers de la mode à travers mes yeux et ma vision créative
              </p>
              <p className={styles.personalDescription}>
                Chaque photo est une œuvre d&apos;art, chaque style une expression de liberté
              </p>
              <p className={styles.personalDescription}>
                L&apos;élégance française rencontre l&apos;innovation moderne dans chaque création
              </p>
              <p className={styles.personalDescription}>
                Chaque détail compte, chaque accessoire raconte une histoire
              </p>
              <p className={styles.personalDescription}>
                L&apos;art de la mode est l&apos;art de l&apos;expression personnelle
              </p>
              <p className={styles.personalDescription}>
                Chaque création est unique, chaque style est authentique
              </p>
              <p className={styles.personalDescription}>
                L&apos;élégance n&apos;a pas d&apos;âge, la beauté n&apos;a pas de frontières
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className={styles.story}>
          <h2 className={styles.sectionTitle}>Mon Histoire</h2>
          <div className={styles.storyContent}>
            <p className={styles.storyText}>
              Mon parcours unique commence dans le monde de la tech, où j&apos;ai développé une expertise 
              en développement full-stack, DevOps et IoT. Parallèlement, j&apos;ai découvert ma passion 
              pour la création de contenu mode et lifestyle, particulièrement dans l&apos;univers de la beauté 
              et de l&apos;élégance française.
            </p>
            <p className={styles.storyText}>
              Cette double compétence m&apos;a permis de créer <strong>Kaporelo</strong>, ma startup tech, 
              tout en développant <strong>SABRINA MAGAZINE</strong>, mon magazine de mode premium. 
              Je collabore avec des marques et créateurs qui partagent mes valeurs d&apos;élégance et d&apos;excellence.
            </p>
            <p className={styles.storyText}>
              Aujourd&apos;hui, je continue d&apos;innover à l&apos;intersection de la technologie et de la créativité, 
              créant du contenu qui inspire et des solutions qui transforment l&apos;industrie de la mode.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.timeline}>
          <h2 className={styles.sectionTitle}>Mon Parcours</h2>
          <div className={styles.timelineContainer}>
            {milestones.map((milestone, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{milestone.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{milestone.title}</h3>
                  <p className={styles.timelineDescription}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <h2 className={styles.sectionTitle}>Mes Valeurs</h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className={styles.behind}>
          <h2 className={styles.sectionTitle}>Behind the Scenes</h2>
          <div className={styles.behindGrid}>
            <div className={styles.behindItem}>
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=300&fit=crop"
                alt="Setup création"
                width={500}
                height={300}
                className={styles.behindImage}
              />
              <h3 className={styles.behindTitle}>Mon Atelier Créatif</h3>
              <p className={styles.behindDescription}>
                Entre écrans de code et moodboards mode, mon espace créatif reflète ma double passion.
              </p>
            </div>
            <div className={styles.behindItem}>
              <Image
                src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=300&fit=crop"
                alt="Routine mode"
                width={500}
                height={300}
                className={styles.behindImage}
              />
              <h3 className={styles.behindTitle}>Ma Routine Mode</h3>
              <p className={styles.behindDescription}>
                Style minimaliste et élégance naturelle, dans l&apos;esprit des magazines premium français.
              </p>
            </div>
          </div>
        </section>
       
        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Connectons-nous</h2>
            <p className={styles.ctaDescription}>
              Envie de collaborer ou simplement d&apos;échanger ? Je serais ravie de vous rencontrer !
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Travaillons Ensemble
              </Link>
              <Link href="/ugc" className={styles.secondaryButton}>
                Voir Mon Magazine
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

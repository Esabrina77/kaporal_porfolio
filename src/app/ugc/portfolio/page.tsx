import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/app/ugc/portfolio.module.css';

export const metadata: Metadata = {
  title: 'Portfolio Mode | SABRINA MAGAZINE - Créations & Éditoriaux',
  description: 'Découvrez mon portfolio mode : shootings, éditoriaux et créations dans l\'esprit des magazines de mode premium français.',
  keywords: ['portfolio mode', 'shootings', 'éditoriaux', 'fashion', 'beauté', 'lifestyle', 'magazine'],
};

export default function UGCPortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: "Éditorial Automne : L'Élégance du Minimalisme",
      category: "MODE",
      type: "Shooting Photo",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      description: "Une exploration de la beauté épurée à travers des silhouettes structurées et des textures nobles.",
      credits: "Photographe : Marie Dubois • Styliste : Sophie Laurent",
      tags: ["Minimalisme", "Élégance", "Textures", "Silhouettes"]
    },
    {
      id: 2,
      title: "Beauté Française : Le Natural Glow",
      category: "BEAUTÉ",
      type: "Éditorial Beauté",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop",
      description: "Mise en valeur de la beauté naturelle française avec des techniques de maquillage raffinées.",
      credits: "Maquillage : Claire Martin • Coiffure : Antoine Dubois",
      tags: ["Beauté Naturelle", "Glow", "Techniques", "Raffinement"]
    },
    {
      id: 3,
      title: "Lifestyle Parisien : L'Art de Vivre",
      category: "LIFESTYLE",
      type: "Story Mode",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
      description: "Une journée dans la vie parisienne, de la déco intérieure à la gastronomie raffinée.",
      credits: "Direction Artistique : Sabrina ELOUNDOU • Déco : Atelier Paris",
      tags: ["Paris", "Art de Vivre", "Déco", "Gastronomie"]
    },
    {
      id: 4,
      title: "Créateurs Émergents : La Nouvelle Génération",
      category: "CRÉATEURS",
      type: "Portrait Mode",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop",
      description: "Rencontre avec les jeunes créateurs qui redéfinissent l'élégance française contemporaine.",
      credits: "Interview : Sabrina ELOUNDOU • Photos : Studio Moderne",
      tags: ["Créateurs", "Émergence", "Élégance", "Contemporain"]
    },
    {
      id: 5,
      title: "Wellness & Self-Care : L'Équilibre Moderne",
      category: "WELLNESS",
      type: "Éditorial Lifestyle",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop",
      description: "L'équilibre entre bien-être et style de vie moderne dans un univers urbain sophistiqué.",
      credits: "Concept : Sabrina ELOUNDOU • Wellness : Institut Français",
      tags: ["Wellness", "Équilibre", "Moderne", "Sophistiqué"]
    },
    {
      id: 6,
      title: "Tech & Fashion : L'Innovation Élégante",
      category: "INNOVATION",
      type: "Concept Mode",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=800&fit=crop",
      description: "Fusion entre technologie et mode pour créer des expériences vestimentaires innovantes.",
      credits: "Innovation : Tech Fashion Lab • Direction : Sabrina ELOUNDOU",
      tags: ["Innovation", "Tech", "Mode", "Expérience"]
    }
  ];

  const categories = ["Tous", "MODE", "BEAUTÉ", "LIFESTYLE", "CRÉATEURS", "WELLNESS", "INNOVATION"];

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.container}>
        {/* Header */}
        <section className={styles.header}>
          <Link href="/ugc" className={styles.backLink}>
            ← Retour au Magazine
          </Link>
          <h1 className={styles.pageTitle}>Portfolio Mode</h1>
          <p className={styles.pageDescription}>
            Découvrez mes créations mode, éditoriaux et shootings dans l'esprit des magazines de mode premium français.
          </p>
        </section>

        {/* Filters */}
        <section className={styles.filters}>
          <div className={styles.filterTabs}>
            {categories.map((category, index) => (
              <button key={index} className={`${styles.filterTab} ${index === 0 ? styles.active : ''}`}>
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className={styles.portfolio}>
          <div className={styles.portfolioGrid}>
            {portfolioItems.map((item) => (
              <article key={item.id} className={styles.portfolioItem}>
                <div className={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={800}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.type}>{item.type}</span>
                      <span className={styles.category}>{item.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className={styles.itemContent}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDescription}>{item.description}</p>
                  
                  <div className={styles.credits}>
                    <span className={styles.creditsLabel}>Crédits :</span>
                    <span className={styles.creditsValue}>{item.credits}</span>
                  </div>
                  
                  <div className={styles.tags}>
                    {item.tags.map((tag, i) => (
                      <span key={i} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Votre Magazine de Mode Premium</h2>
            <p className={styles.ctaDescription}>
              Découvrez l'élégance française à travers mes créations et éditoriaux.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Collaborer Ensemble
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

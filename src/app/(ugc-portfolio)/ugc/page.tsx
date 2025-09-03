import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/app/ugc/ugc-portfolio.module.css';

export const metadata: Metadata = {
  title: 'SABRINA MAGAZINE | Mode, Beauté & Lifestyle - Votre Magazine de Mode Premium',
  description: 'Découvrez SABRINA MAGAZINE : votre magazine de mode premium avec les dernières tendances, créateurs émergents et l\'art de vivre à la française.',
  keywords: ['magazine mode', 'tendances', 'beauté', 'lifestyle', 'créateurs', 'fashion', 'luxe'],
};

export default function UGCPortfolioPage() {
  const featuredArticles = [
    {
      category: "MODE",
      title: "Les Tendances Automne-Hiver 2025 : Du Minimalisme au Maximalisme",
      author: "PAR SABRINA ELOUNDOU",
      date: "20 janvier 2025",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop",
      excerpt: "Découvrez les silhouettes qui vont dominer la saison, des coupes épurées aux détails extravagants."
    },
    {
      category: "BEAUTÉ",
      title: "Skincare Français : L'Art de la Beauté Naturelle",
      author: "PAR SABRINA ELOUNDOU",
      date: "18 janvier 2025",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=800&fit=crop",
      excerpt: "Les secrets des rituels beauté français, entre tradition et innovation."
    },
    {
      category: "LIFESTYLE",
      title: "L'Art de Vivre à la Parisienne : Élégance au Quotidien",
      author: "PAR SABRINA ELOUNDOU",
      date: "15 janvier 2025",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop",
      excerpt: "Comment adopter le style de vie parisien, de la déco à la gastronomie."
    },
    {
      category: "CRÉATEURS",
      title: "Portrait : Les Nouveaux Visages de la Mode Française",
      author: "PAR SABRINA ELOUNDOU",
      date: "12 janvier 2025",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=800&fit=crop",
      excerpt: "Rencontre avec les créateurs émergents qui redéfinissent l'élégance française."
    }
  ];

  const latestNews = [
    {
      category: "MODE",
      title: "Paris Fashion Week : Les Défilés à Ne Pas Manquer",
      author: "PAR SABRINA ELOUNDOU",
      date: "10 janvier 2025",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop"
    },
    {
      category: "BEAUTÉ",
      title: "Les Incontournables de la Saison : Maquillage et Soins",
      author: "PAR SABRINA ELOUNDOU",
      date: "8 janvier 2025",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    },
    {
      category: "LIFESTYLE",
      title: "Déco Intérieure : Le Style French Touch",
      author: "PAR SABRINA ELOUNDOU",
      date: "5 janvier 2025",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=300&fit=crop"
    },
    {
      category: "CULTURE",
      title: "L'Art et la Mode : Quand la Créativité Rencontre l'Élégance",
      author: "PAR SABRINA ELOUNDOU",
      date: "3 janvier 2025",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className={styles.magazinePage}>
      <div className={styles.container}>
        {/* Magazine Header */}
        <header className={styles.magazineHeader}>
          <div className={styles.topBar}>
            <button className={styles.menuButton}>
             
            </button>
            <h1 className={styles.magazineLogo}>SABRINA MAGAZINE</h1>
            <div className={styles.headerActions}>
              <Link href="/whoiam" className={styles.profileLink}>
                <span>Qui Suis-Je ?</span>
              </Link>
            </div>
          </div>
          
          <nav className={styles.magazineNav}>
            <ul className={styles.navList}>
              <li><Link href="/ugc">MODE</Link></li>
              <li><Link href="/ugc/portfolio">BEAUTÉ</Link></li>
              <li><Link href="/projects">CULTURE</Link></li>
              <li><Link href="/contact">Hobbies</Link></li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Featured Articles Section */}
          <section className={styles.featuredSection}>
            <h2 className={styles.sectionTitle}>LES DERNIÈRES ACTUALITÉS</h2>
            <div className={styles.featuredGrid}>
              {featuredArticles.map((article, index) => (
                <article key={index} className={styles.articleCard}>
                  <div className={styles.articleImage}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={600}
                      height={800}
                      className={styles.articleImg}
                    />
                  </div>
                  <div className={styles.articleContent}>
                    <span className={styles.articleCategory}>{article.category}</span>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    <div className={styles.articleMeta}>
                      <span className={styles.articleAuthor}>{article.author}</span>
                      <span className={styles.articleDate}>{article.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Latest News Grid */}
          <section className={styles.latestNewsSection}>
            <h2 className={styles.sectionTitle}>À LA UNE</h2>
            <div className={styles.newsGrid}>
              {latestNews.map((news, index) => (
                <article key={index} className={styles.newsCard}>
                  <div className={styles.newsImage}>
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={400}
                      height={300}
                      className={styles.newsImg}
                    />
                  </div>
                  <div className={styles.newsContent}>
                    <span className={styles.newsCategory}>{news.category}</span>
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <div className={styles.newsMeta}>
                      <span className={styles.newsAuthor}>{news.author}</span>
                      <span className={styles.newsDate}>{news.date}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Magazine CTA */}
          <section className={styles.magazineCTA}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Votre Magazine de Mode Premium</h2>
              <p className={styles.ctaDescription}>
                Découvrez l&apos;élégance française à travers nos pages. Mode, beauté, lifestyle et culture 
                dans un magazine qui célèbre l&apos;art de vivre à la française.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/whoiam" className={styles.primaryButton}>
                  Découvrir Mon Univers
                </Link>
                <Link href="/ugc/portfolio" className={styles.secondaryButton}>
                  Voir Plus d&apos;Articles
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
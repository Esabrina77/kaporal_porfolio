import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blog.json';
import styles from '@/styles/app/blog/article.module.css';
import type { Metadata } from 'next';

// Définition des métadonnées de la page
export const metadata: Metadata = {
  title: 'Article | Blog',
  description: 'Article de blog détaillé'
};

// Composant de la page article
export default function ArticlePage() {
  // Récupérer l'ID depuis l'URL
  const pathname = window.location.pathname;
  const postId = Number(pathname.split('/').pop());
  const post = blogData.posts[postId];

  if (!post || isNaN(postId)) {
    notFound();
  }

  return (
    <article className={styles.articlePage}>
      <div className={styles.container}>
        <Link href="/blog" className={styles.backLink}>
          ← Retour aux articles
        </Link>

        <header className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <time className={styles.articleDate}>
            {new Date(post.date).toLocaleDateString('fr-FR')}
          </time>
        </header>

        <div className={styles.articleImage}>
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.blogImage}
            priority
          />
        </div>

        <div className={styles.articleContent}>
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className={styles.hashtags}>
          {post.hashtags.map((tag, index) => (
            <span key={index} className={styles.hashtag}>#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

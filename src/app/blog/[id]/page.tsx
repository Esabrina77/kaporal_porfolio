import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blog.json';
import styles from '@/styles/app/blog/article.module.css';

export default function ArticlePage({ params }: { params: { id: string } }) {
  const post = blogData.posts[parseInt(params.id)];

  if (!post) {
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
            width={1200}
            height={600}
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
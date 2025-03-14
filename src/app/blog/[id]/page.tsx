import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import blogData from '@/data/blog.json';
import type { BlogData, BlogPost } from '@/types/blog';
import styles from '@/styles/app/blog/article.module.css';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ id: string }>
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { posts } = blogData as BlogData;
  const post = posts[Number(id)] as BlogPost;
  
  return {
    title: post.title,
    description: post.content.substring(0, 160),
  };
}

export default async function ArticlePage({ params }: Props) {
  const { id } = await params;
  const { posts } = blogData as BlogData;
  const post = posts[Number(id)] as BlogPost;

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

export function generateStaticParams() {
  const { posts } = blogData as BlogData;
  return posts.map((_, index) => ({
    id: index.toString()
  }));
}

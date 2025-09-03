import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/app/blog/blog.module.css';
import blogData from '@/data/blog.json';

interface BlogPost {
  title: string;
  date: string;
  image: string;
  content: string;
  hashtags: string[];
}



export const metadata: Metadata = {
  title: 'Blog | Sabrina ELOUNDOU - Insights Tech & Entrepreneuriat',
  description: 'Découvrez mes articles sur l\'innovation technologique, l\'entrepreneuriat, DevOps, IoT et les dernières tendances tech.',
  keywords: ['blog tech', 'articles innovation', 'entrepreneuriat', 'DevOps', 'IoT', 'insights tech'],
};

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.blogGrid}>
          {blogData.posts.map((post: BlogPost, index: number) => (
            <article key={index} className={styles.blogCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.blogTitle}>{post.title}</h2>
                <p className={styles.blogDate}>{new Date(post.date).toLocaleDateString('fr-FR')}</p>
                <p className={styles.blogExcerpt}>
                  {post.content.substring(0, 150)}...
                </p>
                <div className={styles.hashtags}>
                  {post.hashtags.slice(0, 3).map((tag: string, i: number) => (
                    <span key={i} className={styles.hashtag}>#{tag}</span>
                  ))}
                </div>
                <Link href={`/blog/${index}`} className={styles.readMore}>
                  Lire la suite
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
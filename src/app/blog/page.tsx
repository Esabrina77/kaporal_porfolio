import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/app/blog/blog.module.css';
import blogData from '@/data/blog.json';

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.blogGrid}>
          {blogData.posts.map((post, index) => (
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
                  {post.hashtags.slice(0, 3).map((tag, i) => (
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
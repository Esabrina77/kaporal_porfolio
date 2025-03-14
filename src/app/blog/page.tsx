import styles from '@/styles/app/blog/blog.module.css';

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <div className="pageContainer">
        <h1 className={styles.pageTitle}>Blog</h1>
        <div className={styles.blogGrid}>
          {/* Contenu du blog */}
        </div>
      </div>
    </div>
  );
} 
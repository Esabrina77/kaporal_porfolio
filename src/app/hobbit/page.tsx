import styles from '@/styles/app/hobbit/hobbit.module.css';

export default function HobbitPage() {
  return (
    <div className={styles.hobbitPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Mes Hobbies</h1>
        <div className={styles.hobbyGrid}>
          {/* Contenu des hobbies */}
        </div>
      </div>
    </div>
  );
} 
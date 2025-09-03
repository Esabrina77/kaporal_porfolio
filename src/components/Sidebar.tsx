"use client";

import Image from 'next/image';
import styles from '@/styles/components/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInfo}>
        <div className={styles.infoContent}>
          <h1 className={styles.name}>Sabrina ELOUNDOU</h1>
          <p className={styles.title}>Architecte de Solutions Numériques</p>
          <p className={styles.subtitle}>Fondatrice de Kaporelo</p>
        </div>

        <figure className={styles.avatarBox}>
          <Image
            src="/images/kaporelo.jpg"
            alt="Sabrina ELOUNDOU - Entrepreneuse Tech"
            width={500}
            height={500}
            priority
          />
        </figure>
      </div>
    </aside>
  );
} 
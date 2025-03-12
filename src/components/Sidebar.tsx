"use client";

import Image from 'next/image';
import styles from '@/styles/components/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInfo}>
        <div className={styles.infoContent}>
          <h1 className={styles.name}>Sabrina Eloundou</h1>
          <p className={styles.title}>Développeuse Full Stack</p>
        </div>

        <figure className={styles.avatarBox}>
          <Image
            src="/images/kaporelo.jpg"
            alt="Sabrina Eloundou"
            width={200}
            height={200}
            priority
          />
        </figure>
      </div>
    </aside>
  );
} 
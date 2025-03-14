'use client';

import Link from 'next/link';
import styles from '@/styles/components/ErrorPage.module.css';

const errorMessages = {
  '404': {
    title: 'Page introuvable',
    description: 'Oups ! ca n\'existe pas ! hhahaha'
  },
  'default': {
    title: 'Une erreur est survenue',
    description: 'Désolé, quelque chose s\'est mal passé. Veuillez réessayer plus tard.'
  }
};

export default function ErrorPage({ code = '404', reset }: { code?: '404' | 'default', reset?: () => void }) {
  const message = errorMessages[code] || errorMessages.default;

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorCode}>{code}</h1>
        <h2 className={styles.errorTitle}>{message.title}</h2>
        <p className={styles.errorDescription}>{message.description}</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Retour à l&apos;accueil
          </Link>
          {reset && (
            <button 
              onClick={reset}
              className={styles.backButton}
            >
              Réessayer
            </button>
          )}
          {!reset && (
            <button 
              onClick={() => window.history.back()} 
              className={styles.backButton}
            >
              Page précédente
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 
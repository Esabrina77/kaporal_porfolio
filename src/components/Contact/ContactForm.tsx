"use client";

import styles from '@/styles/components/Contact.module.css';
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactForm() {
  const contactInfo = {
    email: 'sabrinaeloundou33@gmail.com',
    emailPro: 'kawepla-kaporelo@gmail.com', // Remplacez par votre numéro
    instagram: 'https://instagram.com/sabrina_eloundou', // Remplacez par votre compte
    linkedin: 'https://www.linkedin.com/in/sabrina-eloundou-706372295/',
    github: 'https://github.com/Esabrina77'
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Me Contacter</h1>
      
      <p className={styles.description}>
        N&apos;hésitez pas à me contacter pour discuter de vos projets ou opportunités.
      </p>

      <div className={styles.contactGrid}>
        <a 
          href={`mailto:${contactInfo.email}`}
          className={styles.contactItem}
        >
          <FaEnvelope className={styles.contactIcon} />
          <span className={styles.contactLabel}>Email</span>
          <span className={styles.contactValue}>{contactInfo.email}</span>
        </a>

          <a 
          href={`mailto:${contactInfo.emailPro.replace(/\s/g, '')}`}
            className={styles.contactItem}
        >
          <FaEnvelope className={styles.contactIcon} />
          <span className={styles.contactLabel}>Email Professionnel</span>
          <span className={styles.contactValue}>{contactInfo.emailPro}</span>
        </a>

        <a 
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <FaInstagram className={styles.contactIcon} />
          <span className={styles.contactLabel}>Instagram</span>
          <span className={styles.contactValue}>@sabrina_eloundou</span>
        </a>

        <a 
          href={contactInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <FaLinkedin className={styles.contactIcon} />
          <span className={styles.contactLabel}>LinkedIn</span>
          <span className={styles.contactValue}>Sabrina Eloundou</span>
        </a>

        <a 
          href={contactInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactItem}
        >
          <FaGithub className={styles.contactIcon} />
          <span className={styles.contactLabel}>GitHub</span>
          <span className={styles.contactValue}>@Esabrina77</span>
        </a>
      </div>
    </div>
  );
} 

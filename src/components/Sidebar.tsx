"use client";

import Image from 'next/image';
import { useSidebar } from '@/hooks/useSidebar';
import styles from '@/styles/components/Sidebar.module.css';
import { HiChevronDown } from 'react-icons/hi';
import { MdMail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect } from 'react';

export default function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  // Ajout des classes conditionnelles
  const sidebarClasses = `${styles.sidebar} ${isOpen ? styles.active : ''}`;

  // Gestion de l'animation de l'icône
  const iconStyle = {
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease'
  };

  // Empêcher le défilement du body quand le sidebar est ouvert sur mobile
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isOpen && window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <aside className={sidebarClasses} data-sidebar>
      <div className={styles.sidebarInfo}>
        <figure className={styles.avatarBox}>
          <Image
            src="/images/avatar-2.png"
            alt="Sabrina Eloundou"
            width={150}
            height={150}
            priority
          />
        </figure>

        <div className={styles.infoContent}>
          <h1 className={styles.name}>Sabrina Eloundou</h1>
          <p className={styles.title}>Développeuse </p>
        </div>

        <button 
          className={styles.infoMoreBtn} 
          data-sidebar-btn
          onClick={toggleSidebar}
          aria-expanded={isOpen}
        >
          <span>Voir les Contacts</span>
          <HiChevronDown
            style={iconStyle}
            size={24}
          />
        </button>
      </div>

      <div className={styles.sidebarInfoMore}>
        <div className={styles.separatorLine}></div>

        <ul className={styles.contactsList}>
          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <MdMail size={20} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>Email</p>
              <a href="mailto:sabrinaeloundou33@gmail.com" className={styles.contactLink}>
                sabrinaeloundou33@gmail.com
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaLinkedin size={20} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>LinkedIn</p>
              <a 
                href="https://www.linkedin.com/in/sabrina-eloundou-706372295/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @sabrina-eloundou
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaGithub size={20} />
            </div>
            <div className={styles.contactInfo}>
              <p className={styles.contactTitle}>GitHub</p>
              <a 
                href="https://github.com/Esabrina77"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @Esabrina77
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
} 
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(() => {
    // Initialisation du state avec une fonction
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  // Effet pour synchroniser le thème avec le DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]); // Dépendance stable

  // Gestion du changement de thème
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/projects', label: 'Projets' },
    { href: '/experience', label: 'Expérience' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src={isDark ? '/icons/dark.png' : '/icons/light.png'}
            alt="Logo"
            width={500}
            height={500}
            className={styles.logo}
            priority
          />
        </Link>

        <div className={styles.headerRight}>
        

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${
                      pathname === href ? styles.active : ''
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label="Toggle theme"
          >
            <Image
              src={isDark ? '/icons/chick-egg.svg' : '/icons/chick.svg'}
              alt="Theme toggle"
              width={40}
              height={40}
              className={styles.themeIcon}
            />
          </button>
        </div>
      </div>
    </header>
  );
} 
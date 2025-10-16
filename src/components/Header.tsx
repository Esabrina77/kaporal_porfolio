'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const isMounted = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isMounted.current = true;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  useEffect(() => {
    if (!isMounted.current) return;
    
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  // Gestion de l'ouverture/fermeture du menu burger
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Fermer le menu quand on clique sur un lien
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/projects', label: 'Projets' },
    { href: '/entrepreneurship', label: 'Entrepreneur' },
    
    { href: '/experience', label: 'Expérience' },
    
    { href: '/contact', label: 'Contact' },
    // { href: '/ugc', label: 'UGC' },
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
          {/* Bouton burger pour mobile */}
          <button 
            onClick={toggleMenu} 
            className={styles.burgerButton}
            aria-label="Toggle menu"
          >
            <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
            <div className={`${styles.burgerBar} ${isMenuOpen ? styles.open : ''}`}></div>
          </button>

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
      
      {/* Menu mobile qui s'affiche quand on clique sur le burger */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <nav className={styles.mobileNav}>
          <ul className={styles.mobileNavList}>
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.mobileNavLink} ${
                    pathname === href ? styles.active : ''
                  }`}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 
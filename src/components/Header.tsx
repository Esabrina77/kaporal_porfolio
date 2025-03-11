'use client';
import Link from 'next/link';
import { useActiveSection } from '@/hooks/useActiveSection';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const activeSection = useActiveSection();

  const navItems = [
    { href: '#home', label: 'Accueil' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Expérience' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.navLink} ${
                  activeSection === href.slice(1) ? styles.active : ''
                }`}
                onClick={handleNavClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 
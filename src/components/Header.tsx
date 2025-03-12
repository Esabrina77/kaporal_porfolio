'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Header.module.css';

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/projects', label: 'Projets' },
    { href: '/experience', label: 'Expérience' },
    { href: '/about', label: 'À propos' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
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
    </header>
  );
} 
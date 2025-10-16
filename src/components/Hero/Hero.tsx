"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import GalaxyShape from '../3D/GalaxyShape';
import TypingQuote from '../TypingQuote';



export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background 3D elements */}
     
      <GalaxyShape />
      <div className={styles.mainContent}>
        
        {/* Title Section */}
        <motion.div 
          className={styles.titleSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.heading}>
          Sabrina ELOUNDOU
          </h1>
          <h2 className={styles.subtitle}>
          Digital Solutions Architect × Creative Coder
          </h2>
        </motion.div>

        {/* Central Avatar Container */}
        <motion.div 
          className={styles.centralContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
      
        </motion.div>

        {/* Bottom Section with Info */}
        <motion.div 
          className={styles.bottomSection}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className={styles.infoSection}>
            <TypingQuote />
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.nav 
          className={styles.navigation}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/projects" className={styles.navLink}>WORK GALLERY</Link>
        </motion.nav>

      </div>
    </section>
  );
}
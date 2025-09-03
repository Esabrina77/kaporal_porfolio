import { Metadata } from 'next';
import TechIcon from '@/components/TechIcon';
import styles from '@/styles/app/skills/skills.module.css';

export const metadata: Metadata = {
  title: 'Compétences | Sabrina ELOUNDOU - Expert DevOps, IoT & Full-Stack',
  description: 'Découvrez mes compétences techniques avancées : développement full-stack, DevOps, IoT, AR/VR, Data Science et leadership entrepreneurial.',
  keywords: ['compétences tech', 'DevOps', 'IoT', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker', 'ESP8266', 'MQTT', 'Three.js'],
};

// Interfaces TypeScript pour les compétences
interface TechnicalSkill {
  name: string;
  level?: string;
}

interface SkillCategory {
  category: string;
  items: TechnicalSkill[];
}

interface SoftSkill {
  name: string;
  emoji: string;
  level?: string;
}

interface SkillsData {
  technical: SkillCategory[];
  soft: SoftSkill[];
}

export default function SkillsPage() {
  // Import direct des données pour éviter les erreurs côté serveur
  const profileData = require('@/data/profile.json');
  const skills = profileData.skills as SkillsData || { technical: [], soft: [] };

  return (
    <div className={styles.skillsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Compétences</h1>

        <div className={styles.skillsGrid}>
          {skills.technical.map((category: SkillCategory, index: number) => (
            <div key={index} className={styles.skillCategory}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.skillsList}>
                {category.items.map((skill: TechnicalSkill, i: number) => (
                  <div key={i} className={styles.skillItem}>
                    <TechIcon name={skill.name} className={styles.skillIcon} />
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.level && (
                        <span className={styles.skillLevel}>{skill.level}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.softSkills}>
          <h2 className={styles.sectionTitle}>Soft Skills & Leadership</h2>
          <div className={styles.softSkillsList}>
            {skills.soft.map((skill: SoftSkill, index: number) => (
              <div key={index} className={styles.softSkillItem}>
                <span className={styles.softSkillEmoji}>{skill.emoji}</span>
                <div className={styles.softSkillInfo}>
                  <span className={styles.softSkillName}>{skill.name}</span>
                  {skill.level && (
                    <span className={styles.softSkillLevel}>{skill.level}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
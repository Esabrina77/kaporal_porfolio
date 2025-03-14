import TechIcon from '@/components/TechIcon';
import styles from '@/styles/app/skills/skills.module.css';
import profileData from '@/data/profile.json';

export default function SkillsPage() {
  const { skills } = profileData;

  return (
    <div className={styles.skillsPage}>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Compétences</h1>

        <div className={styles.skillsGrid}>
          {skills.technical.map((category, index) => (
            <div key={index} className={styles.skillCategory}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.skillsList}>
                {category.items.map((skill, i) => (
                  <div key={i} className={styles.skillItem}>
                    <TechIcon name={skill.name} className={styles.skillIcon} />
                    <span className={styles.skillName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.softSkills}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <div className={styles.softSkillsList}>
            {skills.soft.map((skill, index) => (
              <div key={index} className={styles.softSkillItem}>
                <span className={styles.softSkillEmoji}>{skill.emoji}</span>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
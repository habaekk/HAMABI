import React from "react";
import styles from "./Achievement.module.css";

export type AchievementProps = {
  title: string;
  description: string;
  className?: string;
};

const Achievement: React.FC<AchievementProps> = ({ title, description, className }) => {
  return (
    <div
      className={`${styles.container} ${className ?? ""}`.trim()}
      role="group"
      aria-label={`Achievement: ${title}`}
    >
      <div className={styles.graphicArea} />
      <div className={styles.infoArea}>
        <div className={styles.title} title={title}>
          {title}
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export default Achievement;



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
      data-testid="achievement"
    >
      <div className={styles.graphicArea} data-testid="graphic-area" />
      <div className={styles.infoArea} data-testid="info-area">
        <div className={styles.title} title={title} data-testid="achievement-title">
          {title}
        </div>
        <div className={styles.description} data-testid="achievement-description">{description}</div>
      </div>
    </div>
  );
};

export default Achievement;



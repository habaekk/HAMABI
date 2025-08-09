import React from "react";
import Achievement from "@/components/ui/Achievement";
import styles from "./AchievementWindow.module.css";

export type AchievementItem = {
  title: string;
  description: string;
};

export type AchievementWindowProps = {
  items: AchievementItem[];
  maxHeight?: string; // optional height constraint to enable scroll in isolation
};

const AchievementWindow: React.FC<AchievementWindowProps> = ({
  items,
  maxHeight,
}) => {
  return (
    <div
      className={`${styles.container}`.trim()}
      role="region"
      aria-label="Achievements"
      data-testid="achievement-window"
      style={maxHeight ? { maxHeight } : undefined}
    >
      {items.map((item, index) => (
        <Achievement
          key={`${item.title}-${index}`}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default AchievementWindow;



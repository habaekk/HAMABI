import React from "react";
import Achievement from "@/components/ui/Achievement";

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
      className="grid w-full grid-cols-2 gap-4 content-start overflow-y-auto p-2"
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



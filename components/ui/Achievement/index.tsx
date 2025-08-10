import React from "react";

export type AchievementProps = {
  title: string;
  description: string;
  className?: string;
};

const Achievement: React.FC<AchievementProps> = ({ title, description, className }) => {
  return (
    <div
      className={[
        "min-w-[10rem] aspect-[4/3] overflow-hidden rounded-[10px] border border-black bg-white",
        "shadow-[0_2px_6px_rgba(0,0,0,0.2)]",
        "flex flex-col",
        className ?? "",
      ].join(" ")}
      role="group"
      aria-label={`Achievement: ${title}`}
      data-testid="achievement"
    >
      <div className="flex-1 bg-[#9DD0FF]" data-testid="graphic-area" />
      <div className="flex-1 px-2.5 py-2 text-center text-black" data-testid="info-area">
        <div className="truncate text-sm font-bold leading-tight" title={title} data-testid="achievement-title">
          {title}
        </div>
        <div className="mt-0.5 truncate text-sm text-[#5F5F5F] leading-tight" data-testid="achievement-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Achievement;



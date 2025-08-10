"use client";

import React from "react";
import SettingRow, { SettingRowProps } from "@/components/ui/SettingRow";

export type SettingsSection = {
  title?: string;
  rows: SettingRowProps[];
};

export type SettingsWindowProps = {
  sections: SettingsSection[];
  maxHeight?: string;
  className?: string;
};

const SettingsWindow: React.FC<SettingsWindowProps> = ({ sections, maxHeight, className = "" }) => {
  return (
    <div
      role="region"
      aria-label="Settings"
      data-testid="settings-window"
      className={[
        "w-full",
        "bg-gray-100",
        "text-gray-900",
        "rounded-xl",
        "p-0.5",
        className,
      ].join(" ")}
      style={maxHeight ? { maxHeight, overflowY: "auto" as const } : undefined}
    >
      <div className="flex flex-col gap-3">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="">
            {section.title ? (
              <div className="px-4 pt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {section.title}
              </div>
            ) : null}

            <div className="mt-1 overflow-hidden rounded-xl border border-gray-200 bg-white">
              {section.rows.map((row, rowIndex) => (
                <SettingRow key={rowIndex} {...row} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsWindow;



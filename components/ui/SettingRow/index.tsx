"use client";

import React from "react";

export type SettingRowProps = {
  label: string;
  detailText?: string;
  valueText?: string | number;
  right?: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  className?: string;
};

const ChevronRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const SettingRow: React.FC<SettingRowProps> = ({
  label,
  detailText,
  valueText,
  right,
  onClick,
  ariaLabel,
  disabled = false,
  className = "",
}) => {
  const isInteractive = Boolean(onClick) && !disabled;

  const computedAriaLabel =
    ariaLabel ?? `${label}${valueText !== undefined ? `: ${String(valueText)}` : ""}`;

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!isInteractive) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick?.();
    }
  };

  const containerRole = isInteractive ? "button" : "group";
  const tabIndex = isInteractive ? 0 : -1;

  return (
    <div
      role={containerRole}
      aria-label={computedAriaLabel}
      aria-disabled={disabled || undefined}
      tabIndex={tabIndex}
      onClick={isInteractive ? onClick : undefined}
      onKeyDown={handleKeyDown}
      data-testid="setting-row"
      className={[
        "w-full",
        "flex items-center justify-between",
        "px-4 py-3",
        "bg-white",
        "text-gray-900",
        "border-b border-gray-200 last:border-b-0",
        disabled ? "opacity-50 cursor-not-allowed" : isInteractive ? "cursor-pointer" : "",
        className,
      ].join(" ")}
    >
      <div className="min-w-0 flex-1 pr-3">
        <div className="text-sm font-medium leading-6 text-gray-900 truncate">{label}</div>
        {detailText ? (
          <div className="mt-0.5 text-xs leading-5 text-gray-500 truncate">{detailText}</div>
        ) : null}
      </div>

      <div className="ml-3 flex items-center gap-2 shrink-0">
        {right}
        {right == null && valueText !== undefined ? (
          <div className="text-sm text-gray-500" data-testid="setting-row-value">
            {String(valueText)}
          </div>
        ) : null}
        {onClick && !disabled ? (
          <ChevronRightIcon className="h-4 w-4 text-gray-300" />
        ) : null}
      </div>
    </div>
  );
};

export default SettingRow;
export { ChevronRightIcon };



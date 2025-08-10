import React from 'react';

export type StreakProps = {
  current: number;
  total?: number; // defaults to 7
  label?: string; // defaults to "Days Streak"
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const Streak: React.FC<StreakProps> = ({
  current,
  total = 7,
  label = 'Days Streak',
  icon,
  className = '',
  onClick,
}) => {
  const normalizedTotal = total <= 0 ? 7 : total;
  const filledCount = clamp(current, 0, normalizedTotal);
  const isInteractive = Boolean(onClick);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  const ariaLabel = `${filledCount} days streak`;

  return (
    <div
      className={`w-full bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center ${
        isInteractive ? 'cursor-pointer ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500' : ''
      } ${className}`}
      role={isInteractive ? 'button' : 'group'}
      aria-label={ariaLabel}
      tabIndex={isInteractive ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      data-testid="streak-card"
    >
      {icon && (
        <div className="w-12 h-12 rounded-lg bg-yellow-200 flex items-center justify-center mb-2" aria-hidden>
          {icon}
        </div>
      )}

      <div className="flex items-center gap-2 mb-2" aria-hidden>
        {Array.from({ length: normalizedTotal }).map((_, index) => {
          const isFilled = index < filledCount;
          return (
            <span
              key={index}
              className={`inline-block w-2.5 h-2.5 rounded-full ${
                isFilled ? 'bg-green-500' : 'bg-gray-300'
              }`}
              data-testid="streak-dot"
              data-filled={isFilled}
            />
          );
        })}
      </div>

      <div className="text-center">
        <div className="text-2xl font-bold text-gray-900" data-testid="streak-value">
          {filledCount}
        </div>
        <div className="text-sm font-medium text-gray-700" data-testid="streak-label">
          {filledCount} {label}
        </div>
      </div>

      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

export default Streak;



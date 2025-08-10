import React from 'react';

export type ConditionProps = {
  xLabels?: string[]; // Must be length 5 when provided
  yMax?: number; // defaults to 100
  title?: string; // defaults to "Condition"
  description?: string;
  className?: string;
  onClick?: () => void;
};

const DEFAULT_X_LABELS = ['Focus', 'Energy', 'Mood', 'Stress', 'Sleep'];

const clamp = (value: number, min: number, max: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const buildClasses = (...classes: Array<string | false | undefined>) =>
  classes.filter(Boolean).join(' ');

const Condition: React.FC<ConditionProps> = ({
  xLabels = DEFAULT_X_LABELS,
  yMax = 100,
  title = 'Condition',
  description,
  className = '',
  onClick,
}) => {
  const labels = Array.isArray(xLabels) && xLabels.length === 5 ? xLabels : DEFAULT_X_LABELS;
  const normalizedMax = yMax <= 0 ? 100 : yMax;
  const isInteractive = Boolean(onClick);

  // Placeholder values (no business logic yet)
  const placeholderValues = [40, 65, 50, 70, 60].map((v) => clamp(v, 0, normalizedMax));

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  const ariaLabel = `${title} graph with ${labels.length} attributes`;

  // SVG metrics
  const width = 560; // 5 columns * 112px each for nice spacing
  const height = 220;
  const paddingLeft = 44; // room for y-axis labels
  const paddingRight = 12;
  const paddingTop = 12;
  const paddingBottom = 28; // room for x-axis labels (drawn outside SVG but keep spacing)

  const innerWidth = width - paddingLeft - paddingRight;
  const innerHeight = height - paddingTop - paddingBottom;

  const points = placeholderValues.map((value, index) => {
    const x = paddingLeft + (index * innerWidth) / (labels.length - 1);
    const y = paddingTop + innerHeight - (value / normalizedMax) * innerHeight;
    return `${x},${y}`;
  });

  const gridLines = [0, 0.25, 0.5, 0.75, 1];

  return (
    <div
      className={buildClasses(
        'w-full bg-white rounded-lg shadow-md p-4 flex flex-col gap-3',
        isInteractive && 'cursor-pointer ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
        className,
      )}
      role={isInteractive ? 'button' : 'group'}
      aria-label={ariaLabel}
      tabIndex={isInteractive ? 0 : -1}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      data-testid="condition-card"
    >
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-gray-900" data-testid="condition-title">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600" data-testid="condition-description">
            {description}
          </p>
        )}
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          width={width}
          height={height}
          role="img"
          aria-label={ariaLabel}
          className="mx-auto"
        >
          {/* Grid background */}
          {gridLines.map((ratio, idx) => {
            const y = paddingTop + innerHeight - ratio * innerHeight;
            return (
              <line
                key={`h-${idx}`}
                x1={paddingLeft}
                y1={y}
                x2={width - paddingRight}
                y2={y}
                stroke="#e5e7eb"
                strokeWidth={1}
              />
            );
          })}

          {/* Y axis */}
          <line x1={paddingLeft} y1={paddingTop} x2={paddingLeft} y2={paddingTop + innerHeight} stroke="#9ca3af" strokeWidth={1.5} />
          {/* X axis */}
          <line x1={paddingLeft} y1={paddingTop + innerHeight} x2={width - paddingRight} y2={paddingTop + innerHeight} stroke="#9ca3af" strokeWidth={1.5} />

          {/* Placeholder area */}
          <polyline
            points={points.join(' ')}
            fill="none"
            stroke="#3b82f6"
            strokeWidth={2}
            data-testid="graph-placeholder"
          />

          {/* Y ticks */}
          {gridLines.map((ratio, idx) => {
            const y = paddingTop + innerHeight - ratio * innerHeight;
            const value = Math.round(ratio * normalizedMax);
            return (
              <g key={`yt-${idx}`}>
                <text
                  x={paddingLeft - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="fill-gray-500 text-[10px]"
                  data-testid="y-tick"
                >
                  {value}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* X labels */}
      <div className="grid grid-cols-5 gap-2 mt-1">
        {labels.map((label, index) => (
          <div key={index} className="text-center text-xs text-gray-700" data-testid="x-label">
            {label}
          </div>
        ))}
      </div>

      <span className="sr-only">{ariaLabel}</span>
    </div>
  );
};

export default Condition;



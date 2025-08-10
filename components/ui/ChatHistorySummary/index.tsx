import React from "react";

export type ChatHistorySummaryProps = {
  date: string; // formatted like 2025-02-02
  summary: string; // ~ five words, single line
  onClick?: () => void;
};

const ChatHistorySummary: React.FC<ChatHistorySummaryProps> = ({ date, summary, onClick }) => {
  const isInteractive = Boolean(onClick);

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (!isInteractive) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className="aspect-[22.5/5] w-full overflow-hidden rounded-2xl border border-black bg-white flex flex-col"
      role={isInteractive ? "button" : "group"}
      aria-label={`Chat history summary for ${date}`}
      data-testid="chat-history-summary"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={isInteractive ? 0 : -1}
    >
      <div className="flex items-center justify-center h-12 sm:h-14 md:h-16" data-testid="upper-area">
        <div className="h-px flex-1 bg-black mr-3" aria-hidden />
        <div className="shrink-0 text-2xl sm:text-3xl md:text-4xl font-bold leading-none text-black" data-testid="date-text">
          {date}
        </div>
        <div className="h-px flex-1 bg-black ml-3" aria-hidden />
      </div>
      <div className="flex items-center justify-center h-8 sm:h-10" data-testid="lower-area">
        <div className="truncate px-2 text-base sm:text-lg text-black" title={summary} data-testid="summary-text">
          {summary}
        </div>
      </div>
    </div>
  );
};

export default ChatHistorySummary;



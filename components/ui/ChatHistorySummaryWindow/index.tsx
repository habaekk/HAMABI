import React from "react";
import ChatHistorySummary from "@/components/ui/ChatHistorySummary";

export type ChatHistorySummaryItem = {
  date: string;
  summary: string;
};

export type ChatHistorySummaryWindowProps = {
  items: ChatHistorySummaryItem[];
  maxHeight?: string; // optional height constraint to enable scroll in isolation
  onItemClick?: (item: ChatHistorySummaryItem, index: number) => void;
};

const ChatHistorySummaryWindow: React.FC<ChatHistorySummaryWindowProps> = ({
  items,
  maxHeight,
  onItemClick,
}) => {
  return (
    <div
      className="flex w-full flex-col items-center gap-4 overflow-y-auto p-2"
      role="region"
      aria-label="Chat history summaries"
      data-testid="chat-history-summary-window"
      style={maxHeight ? { maxHeight } : undefined}
    >
      {items.map((item, index) => (
        <ChatHistorySummary
          key={`${item.date}-${index}`}
          date={item.date}
          summary={item.summary}
          onClick={onItemClick ? () => onItemClick(item, index) : undefined}
        />
      ))}
    </div>
  );
};

export default ChatHistorySummaryWindow;



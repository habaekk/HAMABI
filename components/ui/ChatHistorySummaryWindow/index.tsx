import React from "react";
import ChatHistorySummary from "@/components/ui/ChatHistorySummary";
import styles from "./ChatHistorySummaryWindow.module.css";

export type ChatHistorySummaryItem = {
  date: string;
  summary: string;
};

export type ChatHistorySummaryWindowProps = {
  items: ChatHistorySummaryItem[];
  maxHeight?: string; // optional height constraint to enable scroll in isolation
};

const ChatHistorySummaryWindow: React.FC<ChatHistorySummaryWindowProps> = ({
  items,
  maxHeight,
}) => {
  return (
    <div
      className={`${styles.container}`.trim()}
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
        />
      ))}
    </div>
  );
};

export default ChatHistorySummaryWindow;



import React from "react";
import styles from "./ChatHistorySummary.module.css";

export type ChatHistorySummaryProps = {
  date: string; // formatted like 2025-02-02
  summary: string; // ~ five words, single line
};

const ChatHistorySummary: React.FC<ChatHistorySummaryProps> = ({ date, summary }) => {
  return (
    <div
      className={styles.container}
      role="group"
      aria-label={`Chat history summary for ${date}`}
      data-testid="chat-history-summary"
    >
      <div className={styles.upper} data-testid="upper-area">
        <div className={styles.date} data-testid="date-text">{date}</div>
      </div>
      <div className={styles.lower} data-testid="lower-area">
        <div className={styles.summary} title={summary} data-testid="summary-text">
          {summary}
        </div>
      </div>
    </div>
  );
};

export default ChatHistorySummary;



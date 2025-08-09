import React, { KeyboardEvent } from 'react';
import styles from './ChatInputBar.module.css';
import { ChatInputField } from '@/components/chat/ChatInputField';
import { SendButton } from '@/components/ui/Button/SendButton';

type ChatInputBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export const ChatInputBar = ({ value, onChange, onSend }: ChatInputBarProps) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <ChatInputField
          value={value}
          onChange={onChange}
          placeholder="Type here..."
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={styles.buttonContainer}>
        <SendButton onClick={onSend} />
      </div>
    </div>
  );
};



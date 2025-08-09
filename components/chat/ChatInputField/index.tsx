import React, { ChangeEvent, KeyboardEvent } from 'react';
import styles from './ChatInputField.module.css';

type ChatInputFieldProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};

export const ChatInputField = ({ value, onChange, placeholder, onKeyDown }: ChatInputFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder ?? 'Type here...'}
      onKeyDown={onKeyDown}
      aria-label="chat-input"
    />
  );
};



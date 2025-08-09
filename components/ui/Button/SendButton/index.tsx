import React from 'react';
import styles from './SendButton.module.css';

type SendButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export const SendButton = ({ onClick, disabled }: SendButtonProps) => {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      aria-label="send"
    >
      Send
    </button>
  );
};



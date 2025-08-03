import React from 'react';
import styles from './UserChatBox.module.css';

type Props = {
  text: string;
};

export const UserChatBox = ({ text }: Props) => {
  return (
    <div className={styles.chatBox}>
      <p className={styles.chatText}>{text}</p>
    </div>
  );
};

import React from 'react';
import { ChatMessage } from './ChatMessage';
import RobotIcon from './Icons/RobotIcon';
import styles from './ChatWindow.module.css';
import { Message } from '../types/Message';

type Props = {
  messages: Message[];
};

export const ChatWindow = ({ messages }: Props) => {
  return (
    <div className={styles.container}>
      {messages.map((msg, idx) => (
        <ChatMessage
          key={idx}
          text={msg.content}
          isUser={msg.sender === 'user'}
          Icon={<RobotIcon />}
        />
      ))}
    </div>
  );
};

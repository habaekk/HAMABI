import React from 'react';
import { ChatMessage } from './ChatMessage';
import RobotIcon from './Icons/RobotIcon';
import styles from './ChatWindow.module.css';

type Message = {
  sender: 'robot' | 'user';
  content: string;
};

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

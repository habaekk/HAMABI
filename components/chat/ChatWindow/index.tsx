import React from 'react';
import { ChatMessage } from '../ChatMessage';
import RobotIcon from '@/components/ui/Icon/RobotIcon';
import { Message } from '@/types/Message';

type Props = {
  messages: Message[];
};

export const ChatWindow = ({ messages }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-2 overflow-y-auto h-full">
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

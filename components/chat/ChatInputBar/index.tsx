import React, { KeyboardEvent } from 'react';
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
    <div className="w-full h-12 flex items-center gap-2 px-4 bg-white border-t border-gray-300 box-border">
      <div className="flex-1 flex">
        <ChatInputField
          value={value}
          onChange={onChange}
          placeholder="Type here..."
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex-shrink-0 flex">
        <SendButton onClick={onSend} />
      </div>
    </div>
  );
};



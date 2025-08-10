import React, { ChangeEvent, KeyboardEvent } from 'react';

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
      className="w-full min-w-[19.5rem] h-8 px-3.5 py-2.5 border border-gray-300 rounded-2xl bg-white text-black text-xs box-border sm:min-w-0 placeholder:text-[#D9D9D9]"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={placeholder ?? 'Type here...'}
      onKeyDown={onKeyDown}
      aria-label="chat-input"
    />
  );
};



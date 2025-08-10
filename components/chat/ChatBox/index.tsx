import React from 'react';

type Props = {
    text: string;
    isUser: boolean;
};

export const ChatBox = ({ text, isUser }: Props) => {

    return (
        <div
            className={`min-h-4 w-fit h-auto px-4 py-2 rounded-t-2xl ${
                isUser
                    ? 'bg-[#D9D9D9] rounded-bl-2xl rounded-br-0' 
                    : 'bg-[#FFB18C] rounded-br-2xl rounded-bl-0'
                }`}
            data-testid="chat-box"
        >
            <p className="text-base leading-relaxed text-black whitespace-pre-wrap break-words">{text}</p>
        </div>
    );
};

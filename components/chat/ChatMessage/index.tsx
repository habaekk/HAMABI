import React from 'react';
import { ChatBox } from '../ChatBox';

type Props = {
    text: string;
    isUser: boolean;
    Icon: React.ReactNode;
};

export const ChatMessage = ({ text, isUser, Icon }: Props) => {
    return (
        <div className="flex gap-2" data-testid="chat-message">
            {!isUser && (
                <div className="flex items-end">
                    {Icon}
                </div>
            )}

            <div
                className={`max-w-80 ${
                    isUser
                        ? 'ml-auto'
                        : 'flex items-start pb-4'
                    }`}
            >
                <ChatBox text={text} isUser={isUser} />
            </div>
        </div>
    );
};

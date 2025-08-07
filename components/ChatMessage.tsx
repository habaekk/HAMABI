import React from 'react';
import styles from './ChatMessage.module.css';
import { ChatBox } from './ChatBox';

type Props = {
    text: string;
    isUser: boolean;
    Icon: React.ReactNode;
};

export const ChatMessage = ({ text, isUser, Icon }: Props) => {
    return (
        <div className={styles.container} data-testid="chat-message">
            {!isUser && (
                <div className={styles.iconContainer}>
                    {Icon}
                </div>
            )}

            <div
                className={`${styles.chatBoxContainer} 
                ${isUser ?
                        styles.userChatBoxContainer :
                        styles.robotChatBoxContainer
                    }`}
            >
                <ChatBox text={text} isUser={isUser} />
            </div>
        </div>
    );
};

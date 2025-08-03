import React from 'react';
import styles from './ChatMessage.module.css';

type Props = {
    text: string;
    isUser: boolean;
    Icon: React.ReactNode;
    ChatBox: React.ComponentType<{ text: string }>;
};

export const ChatMessage = ({ text, isUser, Icon, ChatBox }: Props) => {
    return (
        <div className={styles.container} >
            <div className={styles.iconContainer}>
                {!isUser && <div>{Icon}</div>}
            </div>
            <div
                className={
                    isUser
                        ? styles.userChatBoxContainer
                        : styles.robotChatBoxContainer
                }
            >
                <ChatBox text={text} />
            </div>
        </div>
    );
};

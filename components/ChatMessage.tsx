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
        <div className={styles.container}>
            <div
                className={styles.iconContainer}
                style={{ visibility: isUser ? 'hidden' : 'visible' }}
            >
                <div>{Icon}</div>
            </div>

            <div
                className={
                    isUser
                        ? styles.userChatBoxContainer
                        : styles.robotChatBoxContainer
                }
            >
                <ChatBox text={text} isUser={isUser} />
            </div>
        </div>
    );
};

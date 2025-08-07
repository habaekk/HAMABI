import React from 'react';
import styles from './ChatBox.module.css';

type Props = {
    text: string;
    isUser: boolean;
};

export const ChatBox = ({ text, isUser }: Props) => {

    return (
        <div
            className={`${styles.chatBox} 
            ${isUser ?
                    styles.userChatBox : 
                    styles.robotChatBox
                }`}
            data-testid="chat-box"
        >
            <p className={styles.chatText}>{text}</p>
        </div>
    );
};

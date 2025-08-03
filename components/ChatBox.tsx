import React from 'react';
import styles from './ChatBox.module.css';

type Props = {
    text: string;
    isUser: boolean;
};

export const ChatBox = ({ text, isUser }: Props) => {
    const boxClass = [
        styles.chatBox,
        isUser ? styles.userChatBox : styles.robotChatBox
    ].join(' ');

    return (
        <div
            className={`${styles.chatBox} 
            ${isUser ?
                    styles.userChatBox : 
                    styles.robotChatBox
                }`}
        >
            <p className={styles.chatText}>{text}</p>
        </div>
    );
};

import React from 'react';
import styles from './UserChat.module.css';
import { UserChatBox } from './layout/UserChatBox';

type Props = {
    text: string;
};

export const RobotChat = ({ text }: Props) => {
    return (
        <div className={styles.container}>
            <UserChatBox text={text} />
        </div>
    );
};

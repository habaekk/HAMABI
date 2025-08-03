import React from 'react';
import styles from './RobotChat.module.css';
import RobotIcon from './Icons/RobotIcon';
import { RobotChatBox } from './layout/RobotChatBox';

type Props = {
  text: string;
};

export const RobotChat = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <RobotIcon />
      </div>
      <div className={styles.right}>
        <RobotChatBox text={text} />
      </div>
    </div>
  );
};

import React from 'react';
import styles from './RobotChatBox.module.css';

type Props = {
  text: string;
};

export const RobotChatBox = ({ text }: Props) => {
  return <div className={styles.chatBox}>{text}</div>;
};

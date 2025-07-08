import React from 'react';
import styles from './MobileNavbar.module.css';

type MobileNavbarProps = {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const MobileNavbar = ({ title, left, right }: MobileNavbarProps) => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navIcon}>
        {left ?? <div className={styles.iconPlaceholder} />}
      </div>
      <div className={styles.navTitle}>{title}</div>
      <div className={styles.navIcon}>
        {right ?? <div className={styles.iconPlaceholder} />}
      </div>
    </header>
  );
};

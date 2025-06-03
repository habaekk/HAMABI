// components/layout/ChatNavbar.tsx
'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import UserIcon from '../../UserIcon';    
import ArchiveIcon from '../../ArchiveIcon';


export default function ChatNavbar({ title }) {
  return (
    <header className={styles.navbar}>
      <Link href="/user" className={styles.iconButton}>
        <UserIcon />
      </Link>
      <h1 className={styles.title}>{title}</h1>
      <Link href="/archive" className={styles.iconButton}>
        <ArchiveIcon />
      </Link>
    </header>
  );
}

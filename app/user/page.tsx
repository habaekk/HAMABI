'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './UserPage.module.css';

export default function UserPage() {
  const [chatBubbleStyle, setChatBubbleStyle] = useState('rounded');
  const [notifications, setNotifications] = useState(true);
  const [resetTime, setResetTime] = useState('00:00');

  return (
    <div className={styles.userPage}>

      {/* 네비게이션 바 */}
      <header className={styles.navbar}>
        <Link href="/chat" className={styles.backButton}>〈</Link>
        <h1 className={styles.title}>설정</h1>
        <div className={styles.iconPlaceholder}></div>
      </header>

      {/* 프로필 섹션 */}
      <div className={styles.profileSection}>
        <img src="/default-avatar.png" alt="프로필 이미지" className={styles.profileImg} />
        <div className={styles.profileText}>
          <span className={styles.nickname}>User</span>
          <span className={styles.accountName}>user@example.com</span>
        </div>
      </div>

      {/* 설정 섹션 */}
      <div className={styles.settingsList}>

        {/* 채팅 스타일 선택 */}
        <div className={styles.settingsItem}>
          <span>채팅 스타일</span>
          <select value={chatBubbleStyle} onChange={(e) => setChatBubbleStyle(e.target.value)}>
            <option value="rounded">둥근 스타일</option>
            <option value="square">각진 스타일</option>
          </select>
        </div>

        {/* 알림 설정 */}
        <div className={styles.settingsItem}>
          <span>알림 받기</span>
          <label className={styles.toggleSwitch}>
            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
            <span className={styles.slider}></span>
          </label>
        </div>

        {/* 초기화 기준 시각 설정 */}
        <div className={styles.settingsItem}>
          <span>초기화 기준 시각</span>
          <input
            type="time"
            value={resetTime}
            onChange={(e) => setResetTime(e.target.value)}
            className={styles.timeInput}
          />
        </div>

      </div>
    </div>
  );
}

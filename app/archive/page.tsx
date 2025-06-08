'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ArchivePage.module.css';
import Achievements from './Achievements';
import ChatHistory from './ChatHistory'; // ✅ 추가

export default function ArchivePage() {
    const [activeTab, setActiveTab] = useState('chatHistory'); // 기본 탭: 대화기록

    return (
        <div className={styles.archivePage}>
            {/* 네비게이션 바 */}
            <header className={styles.navbar}>
                <Link href="/chat" className={styles.backButton}>〈</Link>
                <h1 className={styles.title}>아카이브</h1>
                <div className={styles.iconPlaceholder}></div>
            </header>

            {/* 탭 내용 */}
            <div className={styles.tabContent}>
                {activeTab === 'chatHistory' ? (
                    <ChatHistory /> // ✅ 대화기록 컴포넌트
                ) : (
                    <Achievements />
                )}
            </div>

            {/* 하단 탭 네비게이션 */}
            <div className={styles.tabBar}>
                <button
                    className={activeTab === 'chatHistory' ? styles.active : ''}
                    onClick={() => setActiveTab('chatHistory')}
                >
                    대화기록
                </button>
                <button
                    className={activeTab === 'achievements' ? styles.active : ''}
                    onClick={() => setActiveTab('achievements')}
                >
                    업적
                </button>
            </div>
        </div>
    );
}

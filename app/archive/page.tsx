'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './archive.module.css';

export default function ArchivePage() {
    const [activeTab, setActiveTab] = useState('achievements'); // 기본 탭: 업적

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
                {activeTab === 'achievements' ? (
                    <div className={styles.achievements}>
                        <h2>🏆 업적 리스트</h2>
                        <p>여기에 업적 내용이 표시됩니다.</p>
                    </div>
                ) : (
                    <div className={styles.chatHistory}>
                        <h2>💬 대화 기록</h2>
                        <p>여기에 대화 내용이 표시됩니다.</p>
                    </div>
                )}
            </div>

            {/* 하단 탭 네비게이션 */}
            <div className={styles.tabBar}>
                <button
                    className={activeTab === 'achievements' ? styles.active : ''}
                    onClick={() => setActiveTab('achievements')}
                >
                    업적
                </button>
                <button
                    className={activeTab === 'chatHistory' ? styles.active : ''}
                    onClick={() => setActiveTab('chatHistory')}
                >
                    대화기록
                </button>
            </div>
        </div>
    );
}

'use client';

import { useState } from 'react';
import styles from './ArchivePage.module.css';
import Achievements from './Achievements.js';
import ChatHistory from './ChatHistory.js';
import { Navbar } from '../../components/layout/Navbar';
import { BackButton } from '../../components/Buttons/BackButton';

export default function ArchivePage() {
    const [activeTab, setActiveTab] = useState('chatHistory'); // 기본 탭: 대화기록

    return (
        <div className={styles.archivePage}>
            {/* 네비게이션 바 */}
            <Navbar
                title="Archive"
                left={<BackButton ariaLabel="go back" />}
            />

            {/* 탭 내용 */}
            <div className={styles.tabContent}>
                {activeTab === 'chatHistory' ? (
                    <ChatHistory />
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

'use client';

import { useState } from 'react';
import Achievements from './Achievements.js';
import ChatHistory from './ChatHistory.js';
import { Navbar } from '@/components/ui/Layout/Navbar';
import TabBar from '@/components/ui/Navigation/TabBar';
import { BackButton } from '@/components/ui/Button/BackButton';

export default function ArchivePage() {
    const [activeTab, setActiveTab] = useState('chatHistory'); // 기본 탭: 대화기록

  return (
        <div className="flex min-h-dvh w-full flex-col items-center bg-gray-100 text-black">
            {/* 네비게이션 바 */}
            <Navbar
                title="Archive"
                left={<BackButton ariaLabel="go back" />}
            />

            {/* 탭 내용 */}
            <div className="box-border mb-12 w-full flex-grow overflow-y-auto p-5">
                {activeTab === 'chatHistory' ? (
                    <ChatHistory />
                ) : (
                    <Achievements />
                )}
            </div>

            {/* 하단 탭 네비게이션 대체: TabBar */}
            <div className="fixed bottom-0 left-0 flex w-full bg-white">
                <TabBar
                    items={[
                        { key: 'chatHistory', label: 'Chat History' },
                        { key: 'achievements', label: 'Achievements' },
                    ]}
                    activeKey={activeTab}
                    onChange={setActiveTab}
                />
            </div>
        </div>
    );
}

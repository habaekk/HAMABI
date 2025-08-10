'use client';

import React, { Suspense, useMemo } from 'react';
import styles from './ChatHistoryDetail.module.css';
import { Navbar } from '@/components/ui/Layout/Navbar';
import { BackButton } from '@/components/ui/Button/BackButton';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { useSearchParams } from 'next/navigation';
import { Message } from '@/types/Message';
import { getChatHistoryByDate } from '@/app/data';

function ChatHistoryDetailInner() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date') ?? '';

  const chatHistory = useMemo(() => {
    return getChatHistoryByDate(date);
  }, [date]);

  const messages: Message[] = useMemo(() => {
    if (!chatHistory) return [];
    
    return chatHistory.messages.map(({ sender, content }) => ({
      sender: sender as 'robot' | 'user',
      content
    }));
  }, [chatHistory]);

  const title = chatHistory?.title || date || 'Chat History';

  return (
    <div className={styles.page}>
      <Navbar title={title} left={<BackButton ariaLabel="go back" />} />
      <div className={styles.content}>
        {chatHistory ? (
          <ChatWindow messages={messages} />
        ) : (
          <div className={styles.noData}>
            <p>No chat history found for this date.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChatHistoryDetailPage() {
  return (
    <Suspense fallback={<div className={styles.page}><Navbar title="Loading..." left={<BackButton ariaLabel="go back" />} /></div>}>
      <ChatHistoryDetailInner />
    </Suspense>
  );
}



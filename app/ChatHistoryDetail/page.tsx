'use client';

import React, { Suspense, useMemo } from 'react';
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
    <div className="flex flex-col h-screen bg-white">
      <Navbar title={title} left={<BackButton ariaLabel="go back" />} />
      <div className="flex-1 min-h-0">
        {chatHistory ? (
          <ChatWindow messages={messages} />
        ) : (
          <div className="flex justify-center items-center h-full text-gray-500 text-base">
            <p>No chat history found for this date.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ChatHistoryDetailPage() {
  return (
    <Suspense fallback={<div className="flex flex-col h-screen bg-white"><Navbar title="Loading..." left={<BackButton ariaLabel="go back" />} /></div>}>
      <ChatHistoryDetailInner />
    </Suspense>
  );
}



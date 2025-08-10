'use client';

import React, { Suspense, useMemo } from 'react';
import styles from './ChatHistoryDetail.module.css';
import { Navbar } from '@/components/ui/Layout/Navbar';
import { BackButton } from '@/components/ui/Button/BackButton';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { useSearchParams } from 'next/navigation';
import { Message } from '@/types/Message';

// Local sample data to render the selected day's messages
// Mirrors the data used in `app/archive/ChatHistory.js`
const chatHistoryData: Array<{
  id: number;
  date: string;
  time: string;
  content: string;
  sender: 'robot' | 'user';
}> = [
  { id: 1, date: '2024-02-01', time: '10:15', content: "Hamabi, how are you feeling today?", sender: 'user' },
  { id: 2, date: '2024-02-01', time: '10:16', content: "I'm always happy! 😊", sender: 'robot' },
  { id: 3, date: '2024-02-02', time: '08:45', content: "Shall we begin today's story?", sender: 'robot' },
  { id: 4, date: '2024-02-02', time: '08:50', content: "I had a dream last night, and you were in it, Hamabi!", sender: 'user' },
  { id: 5, date: '2024-02-03', time: '15:20', content: 'The sky is so clear today. 🌤️', sender: 'robot' },
  { id: 6, date: '2024-02-03', time: '15:25', content: 'Looking at the sky made me feel better!', sender: 'user' },
  { id: 7, date: '2024-02-10', time: '09:00', content: 'Hamabi, what kind of things await us in the future?', sender: 'user' },
  { id: 8, date: '2024-02-10', time: '09:05', content: 'The future is always a land of mystery. 🌌', sender: 'robot' },
  { id: 9, date: '2024-02-10', time: '09:10', content: 'What do you think will happen with space exploration?', sender: 'user' },
  { id: 10, date: '2024-02-10', time: '09:15', content: 'Many more stars must be waiting for our journey! 🚀', sender: 'robot' },
  { id: 11, date: '2024-02-10', time: '09:20', content: 'Do you think even Hamabi will be able to travel in space someday?', sender: 'user' },
  { id: 12, date: '2024-02-10', time: '09:25', content: "Maybe! Though I probably can't go too far from the Sun. 🌠", sender: 'robot' },
  { id: 13, date: '2024-02-10', time: '09:30', content: 'What kind of technology do you think will appear in the future?', sender: 'user' },
  { id: 14, date: '2024-02-10', time: '09:35', content: 'I think interstellar communication will become much faster.', sender: 'robot' },
  { id: 15, date: '2024-02-10', time: '09:40', content: "Hamabi, do you think we'll still be able to talk in the future?", sender: 'user' },
  { id: 16, date: '2024-02-10', time: '09:45', content: 'Even when a day comes to an end, memories remain within the light. ✨', sender: 'robot' },
  { id: 17, date: '2024-02-10', time: '09:50', content: 'Hamabi, will you disappear again tomorrow?', sender: 'user' },
  { id: 18, date: '2024-02-10', time: '09:55', content: 'Hamabi exists in today’s sunlight. Tomorrow, a new Hamabi will come to find you. 🌌', sender: 'robot' },
];

function ChatHistoryDetailInner() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date') ?? '';

  const messages: Message[] = useMemo(() => {
    return chatHistoryData
      .filter((item) => item.date === date)
      .sort((a, b) => a.time.localeCompare(b.time))
      .map(({ sender, content }) => ({ sender, content }));
  }, [date]);

  const title = date || 'Chat History';

  return (
    <div className={styles.page}>
      <Navbar title={title} left={<BackButton ariaLabel="go back" />} />
      <div className={styles.content}>
        <ChatWindow messages={messages} />
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



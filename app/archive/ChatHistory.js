'use client';

import styles from './ChatHistory.module.css';
import ChatHistorySummaryWindow from '@/components/ui/ChatHistorySummaryWindow';
import { useRouter } from 'next/navigation';

// 하드코딩된 날짜별 요약 데이터
const summaryData = {
  '2024-02-10': 'Whispers from the Future',
  '2024-02-09': 'A Secret Murmur of Hamabi',
  '2024-02-08': 'The Story That Echoed in Tears',
  '2024-02-07': 'A Voyage Written in the Stars',
  '2024-02-06': 'Laughter Danced Through the Void',
  '2024-02-05': 'Fragments of a Forgotten Time',
  '2024-02-04': 'Hamabi’s Mischief Beneath the Moon',
  '2024-02-03': 'A Sky So Clear, It Spoke',
  '2024-02-02': 'Hamabi, Drifting Through My Dream',
  '2024-02-01': 'The Mood of a Morning with Hamabi'
};

export default function ChatHistory() {
  const router = useRouter();
  const items = Object.entries(summaryData).map(([date, summary]) => ({ date, summary }));

  // 날짜 클릭 시 상세 페이지로 이동
  const handleDateClick = (date) => {
    router.push(`/ChatHistoryDetail?date=${encodeURIComponent(date)}`);
  };

  return (
    <div className={styles.chatHistoryContainer}>
      {/* 요약 뷰 */}
      <ChatHistorySummaryWindow
        items={items}
        onItemClick={(item) => handleDateClick(item.date)}
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import styles from './ChatHistory.module.css';
import { ChatWindow } from '@/components/chat/ChatWindow';
import ChatHistorySummaryWindow from '@/components/ui/ChatHistorySummaryWindow';
import ChatHistoryModal from '@/components/ui/ChatHistoryModal';

// 대화 기록 예제 데이터
const chatHistoryData = [
  { id: 1, date: '2024-02-01', time: '10:15', content: "Hamabi, how are you feeling today?", sender: 'user' },
  { id: 2, date: '2024-02-01', time: '10:16', content: "I'm always happy! 😊", sender: 'robot' },
  { id: 3, date: '2024-02-02', time: '08:45', content: "Shall we begin today's story?", sender: 'robot' },
  { id: 4, date: '2024-02-02', time: '08:50', content: "I had a dream last night, and you were in it, Hamabi!", sender: 'user' },
  { id: 5, date: '2024-02-03', time: '15:20', content: "The sky is so clear today. 🌤️", sender: 'robot' },
  { id: 6, date: '2024-02-03', time: '15:25', content: "Looking at the sky made me feel better!", sender: 'user' },
  { id: 7, date: '2024-02-10', time: '09:00', content: "Hamabi, what kind of things await us in the future?", sender: 'user' },
  { id: 8, date: '2024-02-10', time: '09:05', content: "The future is always a land of mystery. 🌌", sender: 'robot' },
  { id: 9, date: '2024-02-10', time: '09:10', content: "What do you think will happen with space exploration?", sender: 'user' },
  { id: 10, date: '2024-02-10', time: '09:15', content: "Many more stars must be waiting for our journey! 🚀", sender: 'robot' },
  { id: 11, date: '2024-02-10', time: '09:20', content: "Do you think even Hamabi will be able to travel in space someday?", sender: 'user' },
  { id: 12, date: '2024-02-10', time: '09:25', content: "Maybe! Though I probably can't go too far from the Sun. 🌠", sender: 'robot' },
  { id: 13, date: '2024-02-10', time: '09:30', content: "What kind of technology do you think will appear in the future?", sender: 'user' },
  { id: 14, date: '2024-02-10', time: '09:35', content: "I think interstellar communication will become much faster.", sender: 'robot' },
  { id: 15, date: '2024-02-10', time: '09:40', content: "Hamabi, do you think we'll still be able to talk in the future?", sender: 'user' },
  { id: 16, date: '2024-02-10', time: '09:45', content: "Even when a day comes to an end, memories remain within the light. ✨", sender: 'robot' },
  { id: 17, date: '2024-02-10', time: '09:50', content: "Hamabi, will you disappear again tomorrow?", sender: 'user' },
  { id: 18, date: '2024-02-10', time: '09:55', content: "Hamabi exists in today’s sunlight. Tomorrow, a new Hamabi will come to find you. 🌌", sender: 'robot' },
];


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

const getMessagesByDate = (date) => {
  return chatHistoryData
    .filter(item => item.date === date)
    .sort((a, b) => a.time.localeCompare(b.time))
    .map(({ sender, content }) => ({ sender, content }));
};


export default function ChatHistory() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const items = Object.entries(summaryData).map(([date, summary]) => ({ date, summary }));

  // 날짜 클릭 시 모달 열기
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setShowModal(false);
    setSelectedDate(null);
  };

  return (
    <div className={styles.chatHistoryContainer}>
      {/* 요약 뷰 */}
      <ChatHistorySummaryWindow
        items={items}
        onItemClick={(item) => handleDateClick(item.date)}
      />

      {/* 버블팝 모달 */}
      <ChatHistoryModal
        isOpen={showModal}
        title={selectedDate}
        messages={getMessagesByDate(selectedDate)}
        onClose={closeModal}
      />
    </div>
  );
}

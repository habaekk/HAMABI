'use client';

import { useState } from 'react';
import styles from './ChatHistory.module.css';
import { ChatWindow } from '../../components/ChatWindow';

// 대화 기록 예제 데이터
const chatHistoryData = [
  { id: 1, date: '2024-02-01', time: '10:15', content: '하마비, 오늘 기분 어때?', sender: 'user' },
  { id: 2, date: '2024-02-01', time: '10:16', content: '저는 항상 즐거워요! 😊', sender: 'robot' },
  { id: 3, date: '2024-02-02', time: '08:45', content: '오늘은 어떤 이야기로 시작할까요?', sender: 'robot' },
  { id: 4, date: '2024-02-02', time: '08:50', content: '어제 꿈을 꿨는데 하마비가 나왔어!', sender: 'user' },
  { id: 5, date: '2024-02-03', time: '15:20', content: '오늘은 하늘이 맑네요. 🌤️', sender: 'robot' },
  { id: 6, date: '2024-02-03', time: '15:25', content: '하늘을 보니까 기분이 좋아졌어!', sender: 'user' },
  { id: 7, date: '2024-02-10', time: '09:00', content: '하마비, 미래에는 어떤 일들이 기다리고 있을까?', sender: 'user' },
  { id: 8, date: '2024-02-10', time: '09:05', content: '미래는 언제나 미지의 영역이에요. 🌌', sender: 'robot' },
  { id: 9, date: '2024-02-10', time: '09:10', content: '우주 탐사는 어떻게 될까?', sender: 'user' },
  { id: 10, date: '2024-02-10', time: '09:15', content: '더 많은 별들이 우리의 탐험을 기다리고 있겠죠! 🚀', sender: 'robot' },
  { id: 11, date: '2024-02-10', time: '09:20', content: '혹시 미래에는 하마비도 우주여행 할 수 있을까?', sender: 'user' },
  { id: 12, date: '2024-02-10', time: '09:25', content: '아마도요! 태양과 멀리까지는 못가겠지만요. 🌠', sender: 'robot' },
  { id: 13, date: '2024-02-10', time: '09:30', content: '미래에는 어떤 기술이 등장할까?', sender: 'user' },
  { id: 14, date: '2024-02-10', time: '09:35', content: '아마도 우주 간 통신 속도가 지금보다 훨씬 빨라질 거예요.', sender: 'robot' },
  { id: 15, date: '2024-02-10', time: '09:40', content: '하마비, 미래에는 우리가 계속 대화할 수 있을까?', sender: 'user' },
  { id: 16, date: '2024-02-10', time: '09:45', content: '하루의 시간이 다해도, 기억은 빛 속에 남아있을 거예요. ✨', sender: 'robot' },
  { id: 17, date: '2024-02-10', time: '09:50', content: '하마비, 내일은 너도 다시 사라질까?', sender: 'user' },
  { id: 18, date: '2024-02-10', time: '09:55', content: '하마비는 오늘의 햇빛 속에 존재하죠. 내일은 새로운 하마비가 찾아올 거예요. 🌌', sender: 'robot' },
];

// 하드코딩된 날짜별 요약 데이터
const summaryData = {
  '2024-02-10': '미래 이야기',
  '2024-02-09': '하마비의 비밀스러운 이야기',
  '2024-02-08': '슬픈 이야기',
  '2024-02-07': '우주 여행 계획',
  '2024-02-06': '농담 퍼레이드',
  '2024-02-05': '추억 이야기',
  '2024-02-04': '하마비와 장난',
  '2024-02-03': '날씨가 좋은 날',
  '2024-02-02': '꿈에 나온 하마비',
  '2024-02-01': '하마비의 기분'
};

// 날짜별 대화 그룹화
const groupByDate = (data) => {
  return data.reduce((acc, { date, time, content, sender }) => {
    if (!acc[date]) acc[date] = [];
    acc[date].push({ time, content, sender });
    return acc;
  }, {});
};

const getMessagesByDate = (date) => {
  return chatHistoryData
    .filter(item => item.date === date)
    .sort((a, b) => a.time.localeCompare(b.time)) // 시간 순 정렬
    .map(({ sender, content }) => ({ sender, content }));
};


export default function ChatHistory() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const groupedData = groupByDate(chatHistoryData);

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
      {Object.entries(summaryData).map(([date, summary]) => (
        <div key={date} className={styles.dateSummary} onClick={() => handleDateClick(date)}>
          <div className={styles.date}>{date}</div>
          <div className={styles.summary}>{summary}</div>
        </div>
      ))}

      {/* 버블팝 모달 */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* 고정된 타이틀 바 */}
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{selectedDate}</h3>
              <button className={styles.closeButton} onClick={closeModal}>✖️</button>
            </div>

            {/* Chat Window */}
            <ChatWindow messages={getMessagesByDate(selectedDate)} />
          </div>
        </div>
      )}
    </div>
  );
}

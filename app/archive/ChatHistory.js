'use client';

import ChatHistorySummaryWindow from '@/components/ui/ChatHistorySummaryWindow';
import { useRouter } from 'next/navigation';
import { chatHistoryData } from '@/app/data';

export default function ChatHistory() {
  const router = useRouter();
  
  // chatHistoryData를 사용하여 요약 데이터 생성
  const items = chatHistoryData.map(({ date, title, preview }) => ({ 
    date, 
    summary: title,
    preview 
  }));

  // 날짜 클릭 시 상세 페이지로 이동
  const handleDateClick = (date) => {
    router.push(`/ChatHistoryDetail?date=${encodeURIComponent(date)}`);
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto p-3">
      {/* 요약 뷰 */}
      <ChatHistorySummaryWindow
        items={items}
        onItemClick={(item) => handleDateClick(item.date)}
      />
    </div>
  );
}

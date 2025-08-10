// 데이터 통합 export
export * from './achievements';
export * from './chatHistory';
export * from './user';

// 데이터 타입 정의
export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ChatHistoryItem {
  id: number;
  title: string;
  date: string;
  messageCount: number;
  lastMessage: string;
  preview: string;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: number;
  sender: 'user' | 'hamabi';
  content: string;
  timestamp: string;
}

export interface ChatHistoryDetail {
  id: number;
  title: string;
  date: string;
  messages: ChatMessage[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  totalChats: number;
  totalMessages: number;
  achievements: number[];
  preferences: {
    theme: string;
    language: string;
    notifications: boolean;
  };
}

export interface UserStats {
  totalConversations: number;
  totalMessages: number;
  averageMessagesPerChat: number;
  favoriteTopics: string[];
  activeDays: number;
  longestStreak: number;
}

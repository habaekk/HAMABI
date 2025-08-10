// 채팅 히스토리 예제 데이터
export const chatHistoryData = [
  {
    id: 1,
    title: "First Chat with Hamabi",
    date: "2024-01-15",
    messageCount: 15,
    lastMessage: "Hello! I'm Hamabi, your AI companion. How can I help you today?",
    preview: "Hello! I'm Hamabi, your AI companion...",
    messages: [
      { id: 1, sender: 'user', content: "Hello Hamabi!", timestamp: "10:00" },
      { id: 2, sender: 'hamabi', content: "Hello! I'm Hamabi, your AI companion. How can I help you today?", timestamp: "10:01" },
      { id: 3, sender: 'user', content: "I'm excited to meet you!", timestamp: "10:02" },
      { id: 4, sender: 'hamabi', content: "I'm excited too! Let's have a wonderful conversation together.", timestamp: "10:03" }
    ]
  },
  {
    id: 2,
    title: "Weather Discussion",
    date: "2024-01-16",
    messageCount: 8,
    lastMessage: "The weather is quite nice today, isn't it?",
    preview: "The weather is quite nice today...",
    messages: [
      { id: 5, sender: 'hamabi', content: "Good morning! How's the weather today?", timestamp: "08:00" },
      { id: 6, sender: 'user', content: "It's sunny and warm!", timestamp: "08:01" },
      { id: 7, sender: 'hamabi', content: "The weather is quite nice today, isn't it?", timestamp: "08:02" }
    ]
  },
  {
    id: 3,
    title: "Philosophy Talk",
    date: "2024-01-17",
    messageCount: 23,
    lastMessage: "That's a very interesting perspective on life.",
    preview: "That's a very interesting perspective...",
    messages: [
      { id: 8, sender: 'user', content: "What do you think about the meaning of life?", timestamp: "14:00" },
      { id: 9, sender: 'hamabi', content: "That's a profound question. I think life is about connection and growth.", timestamp: "14:01" },
      { id: 10, sender: 'user', content: "I agree, but sometimes it feels overwhelming.", timestamp: "14:02" },
      { id: 11, sender: 'hamabi', content: "That's a very interesting perspective on life.", timestamp: "14:03" }
    ]
  },
  {
    id: 4,
    title: "Daily Check-in",
    date: "2024-01-18",
    messageCount: 5,
    lastMessage: "How was your day today?",
    preview: "How was your day today...",
    messages: [
      { id: 12, sender: 'hamabi', content: "Good evening! How was your day today?", timestamp: "19:00" },
      { id: 13, sender: 'user', content: "It was productive but tiring.", timestamp: "19:01" },
      { id: 14, sender: 'hamabi', content: "Remember to rest well. Tomorrow is a new day!", timestamp: "19:02" }
    ]
  }
];

// 특정 날짜의 채팅 히스토리 상세 정보를 가져오는 함수
export const getChatHistoryByDate = (date: string) => {
  return chatHistoryData.find(item => item.date === date);
};

// 모든 채팅 히스토리 데이터를 가져오는 함수
export const getAllChatHistory = () => {
  return chatHistoryData;
};

export const chatHistoryDetailData = [
  {
    id: 1,
    title: "First Chat with Hamabi",
    date: "2024-01-15",
    messages: [
      {
        id: 1,
        sender: "user",
        content: "Hello!",
        timestamp: "2024-01-15T10:00:00Z"
      },
      {
        id: 2,
        sender: "hamabi",
        content: "Hello! I'm Hamabi, your AI companion. How can I help you today?",
        timestamp: "2024-01-15T10:00:05Z"
      },
      {
        id: 3,
        sender: "user",
        content: "Can you tell me about yourself?",
        timestamp: "2024-01-15T10:00:15Z"
      },
      {
        id: 4,
        sender: "hamabi",
        content: "Of course! I'm Hamabi, an AI designed to be your friendly companion. I can chat, help with tasks, and keep you company throughout the day.",
        timestamp: "2024-01-15T10:00:20Z"
      }
    ]
  }
];

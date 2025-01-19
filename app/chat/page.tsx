'use client';

import { useState } from 'react';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
      { text: "안녕하세요! 저는 하마비예요. 😊", isUser: false },
      { text: "어떤 이야기를 나누고 싶나요?", isUser: false },
    ]); // 초기 봇 메시지 추가

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isUser: true }]);
      setMessage('');
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-bar">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

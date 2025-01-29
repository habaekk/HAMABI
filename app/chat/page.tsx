'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserIcon from '@/components/UserIcon';
import ArchiveIcon from '@/components/ArchiveIcon';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        { text: "안녕하세요! 저는 하마비예요. 😊", isUser: false },
        { text: "어떤 이야기를 나누고 싶나요?", isUser: false },
    ]); // 초기 봇 메시지 추가
    const [showScrollButton, setShowScrollButton] = useState(false); // 스크롤 버튼 표시 여부

    const chatEndRef = useRef(null);
    const chatWindowRef = useRef(null);

    // 채팅창을 맨 아래로 스크롤하는 함수
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // 채팅창 스크롤 이벤트 핸들러 (스크롤 버튼 표시 여부 설정)
    const handleScroll = () => {
        if (!chatWindowRef.current) return;
        const { scrollTop, scrollHeight, clientHeight } = chatWindowRef.current;

        // 스크롤이 맨 아래에 있을 경우 버튼 숨김, 위로 올라가면 버튼 표시
        setShowScrollButton(scrollTop + clientHeight < scrollHeight - 10);
    };

    // 메시지가 추가될 때 스크롤을 자동으로 맨 아래로 이동
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // 스크롤 이벤트 리스너 추가
    useEffect(() => {
        const chatWindow = chatWindowRef.current;
        if (chatWindow) {
            chatWindow.addEventListener('scroll', handleScroll);
            return () => chatWindow.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // 메시지 전송 함수
    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, isUser: true }]);
            setMessage('');

            setTimeout(() => {
                setMessages(prevMessages => [
                    ...prevMessages,
                    { text: "좋은 질문이에요! 좀 더 자세히 설명해 주세요. 🤔", isUser: false }
                ]);
            }, 1000);
        }
    };

    // 엔터 키 입력 시 메시지 전송
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // 기본 동작 방지 (새 줄 입력 X)
            handleSendMessage();
        }
    };

    return (
        <div className="chat-page">
            {/* 네비게이션 바 */}
            <header className="navbar">
                <Link href="/user" className="icon-button">
                    <UserIcon />
                </Link>
                <h1 className="title">HAMABI Chat</h1>
                <Link href="/archive" className="icon-button">
                    <ArchiveIcon />
                </Link>
            </header>

            <div className="chat-window" ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.isUser ? 'user' : 'bot'}`}>
                        {msg.text}
                    </div>
                ))}
                {/* 스크롤을 위한 더미 요소 */}
                <div ref={chatEndRef}></div>
            </div>

            {/* 스크롤 맨 아래로 이동 버튼 */}
            {showScrollButton && (
                <button className="scroll-to-bottom" onClick={scrollToBottom}>
                    <Image src="/arrow-down.svg" alt="Scroll Down" width={24} height={24} />
                </button>
            )}

            <div className="chat-input-bar">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

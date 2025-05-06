'use client';

import styles from './ChatPage.module.css';
import { useState, useEffect, useRef } from 'react';
import { drawOneCard } from '../api/fortune';
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
    const [title, setTitle] = useState(''); // 헤더 타이틀 (날짜 + 카운트다운)

    const chatEndRef = useRef(null);
    const chatWindowRef = useRef(null);

    // 현재 날짜 가져오기 (YYYY:MM:DD)
    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}.${month}.${day}`;
    };

    // 24:00:00까지 남은 시간 계산
    const calculateRemainingTime = () => {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(24, 0, 0, 0); // 자정(24:00:00) 설정

        const diff = Math.max(0, midnight - now); // 남은 시간 (밀리초)
        const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
        const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

        return `${hours}:${minutes}:${seconds}`;
    };

    // 타이틀 업데이트 (1초마다 실행)
    useEffect(() => {
        const updateTitle = () => {
            setTitle(`${getCurrentDate()} - ${calculateRemainingTime()}`);
        };

        updateTitle(); // 초기 실행
        const interval = setInterval(updateTitle, 1000); // 1초마다 업데이트

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 해제
    }, []);

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

    const handleDrawTarot = () => {
        // 1단계: 하마비가 메시지 먼저 보여줌
        setMessages(prev => [
            ...prev,
            { text: "🧘 마음 속으로 질문을 떠올려보세요...", isUser: false }
        ]);

        // 2단계: 0.5초(500ms) 후에 카드 뽑기 결과 보여주기
        setTimeout(() => {
            const card = drawOneCard();
            const message = `🔮 당신이 뽑은 카드는 "${card.card}" 이에요!`;
            setMessages(prev => [...prev, { text: message, isUser: false }]);
        }, 1000);
    };


    return (
        <div className={styles.chatPage}>
            {/* 네비게이션 바 */}
            <header className={styles.navbar}>
                <Link href="/user" className={styles.iconButton}>
                    <UserIcon />
                </Link>
                <h1 className={styles.title}>{title}</h1>
                <Link href="/archive" className={styles.iconButton}>
                    <ArchiveIcon />
                </Link>
            </header>

            <div className={styles.chatWindow} ref={chatWindowRef}>
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`${styles.message} ${msg.isUser ? styles.user : styles.bot}`}
                    >
                        {msg.text}
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>

            {showScrollButton && (
                <button className={styles.scrollToBottom} onClick={scrollToBottom}>
                    <Image src="/arrow-down.svg" alt="Scroll Down" width={24} height={24} />
                </button>
            )}

            <button className={styles.tarotButton} onClick={handleDrawTarot}>
                타로 뽑기
            </button>

            <div className={styles.chatInputBar}>
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

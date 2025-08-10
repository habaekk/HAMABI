'use client';

import { useState, useEffect, useRef } from 'react';
import UserIcon from '@/components/ui/Icon/UserIcon';
import ArchiveIcon from '@/components/ui/Icon/ArchiveIcon';
import { processUserMessage } from '@/app/LLM/LLMService';
import { Navbar } from '@/components/ui/Layout/Navbar';
import { NavIconButton } from '@/components/ui/Button/NavIconButton';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatInputBar } from '@/components/chat/ChatInputBar';
import { Message } from '@/types/Message';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'robot', content: "Hello I'm Hamabi. 😊" },
        { sender: 'robot', content: "Which conversation do you want to share with me?" },
    ]);
    const [title, setTitle] = useState(''); // 헤더 타이틀 (날짜 + 카운트다운)

    const chatEndRef = useRef(null);

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

        const diff = Math.max(0, midnight.getTime() - now.getTime()); // 남은 시간 (밀리초)
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

    // 메시지가 추가될 때 스크롤을 자동으로 맨 아래로 이동
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // 메시지 전송 함수
    const handleSendMessage = async () => {
        if (message.trim()) {
            const userMessage: Message = { sender: 'user', content: message };
            const updatedMessages = [...messages, userMessage];

            // 1. 유저 메시지 추가 직후 로그
            console.log('Updated Messages (User Added):', updatedMessages);

            // 1. 유저 메시지 먼저 추가
            setMessages(updatedMessages);
            setMessage('');

            try {
                // 2. LLM 요청 전 로그
                const requestPayload = updatedMessages.map(msg => ({
                    role: msg.sender === 'user' ? 'user' : 'assistant',
                    content: msg.content
                }));
                console.log('Request Payload to LLM:', requestPayload);

                // 2. LLM에게 응답 요청
                const response = await processUserMessage(requestPayload);

                // 3. LLM 응답 받은 후 로그
                console.log('LLM Response:', response);

                // 3. 받은 응답 메시지를 상태에 추가
                const botMessage: Message = { sender: 'robot', content: response.content };
                setMessages(prev => [...prev, botMessage]);

                // 4. 최종 상태 확인
                console.log('Final Messages after Response:', [...updatedMessages, botMessage]);

            } catch (err) {
                // 5. 오류 발생 시 로그
                console.error('Error during message processing:', err);
                setMessages(prev => [
                    ...prev,
                    { sender: 'robot', content: '😢 Hamami spaced out for a moment... Could you say that again?' }
                ]);
            }
        }
    };

    return (
        <div className="flex flex-col h-screen">
            {/* 네비게이션 바 */}
            <Navbar
                title={title}
                left={<NavIconButton to="/user" icon={<UserIcon />} ariaLabel="user" />}
                right={<NavIconButton to="/archive" icon={<ArchiveIcon />} ariaLabel="archive" />}
            />

            <ChatWindow messages={messages} />

            <ChatInputBar
                value={message}
                onChange={setMessage}
                onSend={handleSendMessage}
            />
        </div>
    );
}
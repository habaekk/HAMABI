'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import UserIcon from '@/components/ui/Icon/UserIcon';
import ArchiveIcon from '@/components/ui/Icon/ArchiveIcon';
import { processUserMessage, summarizeChat } from '@/app/LLM/LLMService';
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



    // 입력은 ChatInputBar 내부에서 Enter 처리
    // 지금은 요약 버튼임
    const handleDrawTarot = async () => {
        // // // 1단계: 하마비가 메시지 먼저 보여줌
        // // setMessages(prev => [
        // //     ...prev,
        // //     { text: "🧘 마음 속으로 질문을 떠올려보세요...", isUser: false }
        // // ]);

        // // 2단계: 0.5초(500ms) 후에 카드 뽑기 결과 보여주기
        // setTimeout(() => {
        //     // const card = drawOneCard();
        //     const message = `🔮 당신이 뽑은 카드는 "${card.card}" 이에요!`;
        //     setMessages(prev => [...prev, { text: message, isUser: false }]);
        // }, 1000);



        try {
            // 1. LLM 요청 전 로그
            const requestPayload = messages.map(msg => ({
                role: msg.sender === 'user' ? 'user' : 'assistant',
                content: msg.content,
            }));
            console.log('Request Payload to LLM:', requestPayload);

            // 2. LLM에게 응답 요청
            const response = await summarizeChat(requestPayload);

            // 3. LLM 응답 받은 후 로그
            console.log('LLM Response:', response);

            // 3. 받은 응답 메시지를 상태에 추가
            const botMessage: Message = { sender: 'robot', content: response.content };
            setMessages(prev => [...prev, botMessage]);

            // 4. 최종 상태 확인
            console.log('Final Messages after Response:', [...messages, botMessage]);

        } catch (err) {
            // 5. 오류 발생 시 로그
            console.error('Error during message processing:', err);
            setMessages(prev => [
                ...prev,
                { sender: 'robot', content: '😢 Hamami spaced out for a moment... Could you say that again?' }
            ]);
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

            <ChatWindow messages={ messages } />
            
            {showScrollButton && (
                <button 
                    className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-blue-500/30 border-none p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out shadow-lg flex justify-center items-center w-10 h-10 hover:bg-blue-600/70 hover:scale-105" 
                    onClick={scrollToBottom}
                >
                    <Image src="/arrow-down.svg" alt="Scroll Down" width={24} height={24} />
                </button>
            )}

            <button 
                className="fixed bottom-24 right-6 px-4 py-3 bg-[#fff2c7] text-[#222] border-2 border-[#f4c542] rounded-[1.4rem] font-bold shadow-lg z-50 transition-transform duration-200 ease-in-out hover:-translate-y-1" 
                onClick={handleDrawTarot}
            >
                요약
            </button>

            <ChatInputBar
                value={message}
                onChange={setMessage}
                onSend={handleSendMessage}
            />
        </div>

    );
}

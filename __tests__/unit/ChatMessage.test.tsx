import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from '@/components/chat/ChatMessage';

// 하위 컴포넌트 의존성 제거: ChatBox를 목으로 대체해 ChatMessage 자체 로직만 검증
jest.mock('@/components/chat/ChatBox', () => ({
  ChatBox: ({ text, isUser }: any) => (
    <div data-testid="chat-box" data-isuser={isUser ? 'true' : 'false'}>
      {text}
    </div>
  ),
}));

const DummyIcon = () => <div data-testid="icon" />;

describe('ChatMessage', () => {
    it('renders icon and chat box for robot message', () => {
        const message = 'Hello from robot';

        render(
            <ChatMessage
                text={message}
                isUser={false}
                Icon={<DummyIcon />}
            />
        );

        // 아이콘이 실제로 존재하는지
        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();

        const box = screen.getByTestId('chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    });

    it('renders chat box for user message', () => {
        const message = 'Hello from user';

        render(
            <ChatMessage
                text={message}
                isUser={true}
                Icon={<DummyIcon />}
            />
        );

        const box = screen.getByTestId('chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    // 사용자 메시지이므로 아이콘은 없어야 함
    expect(screen.queryByTestId('icon')).toBeNull();
    });
});

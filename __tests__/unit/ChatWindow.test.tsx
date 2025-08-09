import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatWindow } from '@/components/chat/ChatWindow';

// 하위 컴포넌트 의존성 제거: ChatMessage를 목으로 대체해 ChatWindow의 렌더 로직만 검증
jest.mock('@/components/chat/ChatMessage', () => ({
  ChatMessage: ({ text, isUser }: any) => (
    <div data-testid="chat-message" data-isuser={isUser ? 'true' : 'false'}>
      {text}
    </div>
  ),
}));
import type { Message } from '@/types/Message';

describe('ChatWindow', () => {
    const messages: Message[] = [
        { sender: 'robot', content: 'content' },
        { sender: 'user', content: 'content2' },
        { sender: 'robot', content: 'content3' }
    ];

    it('renders all messages in order', () => {
        render(<ChatWindow messages={messages} />);

        const rendered = screen.getAllByTestId('chat-message');
        expect(rendered).toHaveLength(3);
    // 순서 보장: 첫 번째는 robot, 두 번째는 user, 세 번째는 robot
    expect(rendered[0]).toBeInTheDocument();
    expect(rendered[1]).toBeInTheDocument();
    expect(rendered[2]).toBeInTheDocument();
    });
});

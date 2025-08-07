import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from '../components/ChatMessage';

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

    it('renders icon but hides it visually for user message', () => {
        const message = 'Hello from user';

        render(
            <ChatMessage
                text={message}
                isUser={true}
                Icon={<DummyIcon />}
            />
        );

        const icon = screen.getByTestId('icon');
        expect(icon).toBeInTheDocument();

        const box = screen.getByTestId('chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    });
});

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
                Box={({ text }) => <div data-testid="chat-box">{text}</div>}
            />
        );

        expect(screen.getByTestId('icon')).toBeInTheDocument();
        const box = screen.getByTestId('chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    });

    it('renders only chat box for user message', () => {
        const message = 'Hello from user';

        render(
            <ChatMessage
                text={message}
                isUser={true}
                Icon={<DummyIcon />}
                Box={({ text }) => <div data-testid="chat-box">{text}</div>}
            />
        );

        expect(screen.queryByTestId('icon')).not.toBeInTheDocument();
        const box = screen.getByTestId('chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    });
});

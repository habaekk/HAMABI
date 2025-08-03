import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatWindow } from '../components/ChatWindow';

type Message = {
  sender: 'robot' | 'user';
  content: string;
};

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
    });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserChat } from '../components/UserChat';

jest.mock('../components/layout/UserChatBox', () => ({
    __esModule: true,
    UserChatBox: ({ text }: { text: string }) => (
        <div data-testid="user-chat-box">{text}</div>
    ),
}));

describe('UserChat', () => {
    it('renders RobotChatBox correctly', () => {
        const message: string = 'Hello, I am a user';

        render(<UserChat text={message} />);

        // 아이콘이 렌더되는지
        expect(screen.getByTestId('user-icon')).toBeInTheDocument();

        // 텍스트가 잘 전달되어 박스에 나오는지
        const box = screen.getByTestId('user-chat-box');
        expect(box).toBeInTheDocument();
        expect(box).toHaveTextContent(message);
    });
});

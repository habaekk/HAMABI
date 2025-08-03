import React from 'react';
import { render, screen } from '@testing-library/react';
import { RobotChat } from '../components/RobotChat';

jest.mock('../components/Icons/RobotIcon', () => ({
  __esModule: true,
  default: () => <div data-testid="robot-icon" />,
}));

jest.mock('../components/layout/RobotChatBox', () => ({
  __esModule: true,
  RobotChatBox: ({ text }: { text: string }) => (
    <div data-testid="robot-chat-box">{text}</div>
  ),
}));


describe('RobotChat', () => {
  it('renders RobotIcon and RobotChatBox correctly', () => {
    const message: string = 'Hello, I am a robot';

    render(<RobotChat text={message} />);

    // 아이콘이 렌더되는지
    expect(screen.getByTestId('robot-icon')).toBeInTheDocument();

    // 텍스트가 잘 전달되어 박스에 나오는지
    const box = screen.getByTestId('robot-chat-box');
    expect(box).toBeInTheDocument();
    expect(box).toHaveTextContent(message);
  });
});

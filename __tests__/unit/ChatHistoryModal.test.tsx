import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatHistoryModal from '@/components/ui/ChatHistoryModal';
import { Message } from '@/types/Message';

jest.mock('@/components/chat/ChatWindow', () => ({
  __esModule: true,
  ChatWindow: ({ messages }: { messages: { sender: 'robot' | 'user'; content: string }[] }) => (
    <div data-testid="chat-window" data-count={messages.length} />
  ),
}));

const messages: Message[] = Array.from({ length: 5 }).map((_, i) => ({
  sender: i % 2 === 0 ? 'robot' : 'user',
  content: `Message ${i + 1}`,
}));

describe('ChatHistoryModal', () => {
  it('does not render when closed', () => {
    render(<ChatHistoryModal isOpen={false} title={null} messages={messages} onClose={() => {}} />);
    expect(screen.queryByTestId('chat-history-modal')).not.toBeInTheDocument();
  });

  it('renders when open with title and messages', () => {
    render(<ChatHistoryModal isOpen={true} title={'2024-02-10'} messages={messages} onClose={() => {}} />);
    expect(screen.getByTestId('chat-history-modal')).toBeInTheDocument();
    expect(screen.getByTestId('modal-title')).toHaveTextContent('2024-02-10');
    expect(screen.getByTestId('chat-window')).toBeInTheDocument();
  });

  it('calls onClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    render(<ChatHistoryModal isOpen={true} title={'x'} messages={messages} onClose={handleClose} />);
    fireEvent.click(screen.getByTestId('chat-history-modal'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not close when content is clicked (stopPropagation)', () => {
    const handleClose = jest.fn();
    render(<ChatHistoryModal isOpen={true} title={'x'} messages={messages} onClose={handleClose} />);
    fireEvent.click(screen.getByTestId('modal-header'));
    expect(handleClose).toHaveBeenCalledTimes(0);
  });
});



import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatHistorySummaryWindow from '@/components/ui/ChatHistorySummaryWindow';

// Mock child to keep test focused on window behavior only
jest.mock('@/components/ui/ChatHistorySummary', () => ({
  __esModule: true,
  default: ({ date, summary }: { date: string; summary: string }) => (
    <div data-testid="chat-history-summary" data-date={date} data-summary={summary} />
  ),
}));

const makeItems = (count: number) =>
  Array.from({ length: count }).map((_, i) => ({
    date: `2025-02-${String((i % 28) + 1).padStart(2, '0')}`,
    summary: `Summary ${i + 1}`,
  }));

describe('ChatHistorySummaryWindow', () => {
  it('renders a vertical list of chat history summaries', () => {
    render(<ChatHistorySummaryWindow items={makeItems(4)} />);
    expect(screen.getByTestId('chat-history-summary-window')).toBeInTheDocument();
    expect(screen.getAllByTestId('chat-history-summary')).toHaveLength(4);
  });

  it('applies accessible region label', () => {
    render(<ChatHistorySummaryWindow items={makeItems(1)} />);
    expect(screen.getByRole('region', { name: /Chat history summaries/i })).toBeInTheDocument();
  });

  it('applies maxHeight style when provided', () => {
    render(<ChatHistorySummaryWindow items={makeItems(3)} maxHeight="12rem" />);
    expect(screen.getByTestId('chat-history-summary-window')).toHaveStyle({ maxHeight: '12rem' });
  });

  it('renders empty container when no items are provided', () => {
    render(<ChatHistorySummaryWindow items={[]} />);
    expect(screen.queryAllByTestId('chat-history-summary')).toHaveLength(0);
  });

  it('calls onItemClick when an item is clicked', () => {
    const handleClick = jest.fn();
    render(<ChatHistorySummaryWindow items={makeItems(2)} onItemClick={handleClick} />);
    const items = screen.getAllByTestId('chat-history-summary');
    fireEvent.click(items[1]);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(
      expect.objectContaining({ date: expect.any(String), summary: 'Summary 2' }),
      1
    );
  });
});



import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatHistorySummary from '@/components/ui/ChatHistorySummary';

describe('ChatHistorySummary', () => {
  it('renders date and summary with proper roles', () => {
    render(<ChatHistorySummary date="2025-02-02" summary="A short five-word summary" />);
    expect(screen.getByTestId('chat-history-summary')).toBeInTheDocument();
    expect(screen.getByTestId('date-text')).toHaveTextContent('2025-02-02');
    expect(screen.getByTestId('summary-text')).toHaveTextContent('A short five-word summary');
  });

  it('layout has upper and lower areas', () => {
    render(<ChatHistorySummary date="2025-02-02" summary="Five words summary" />);
    expect(screen.getByTestId('upper-area')).toBeInTheDocument();
    expect(screen.getByTestId('lower-area')).toBeInTheDocument();
  });

  it('is interactive and keyboard accessible when onClick provided', () => {
    const handleClick = jest.fn();
    render(<ChatHistorySummary date="2025-02-02" summary="Clickable" onClick={handleClick} />);
    const card = screen.getByTestId('chat-history-summary');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('tabIndex', '0');
    fireEvent.keyDown(card, { key: 'Enter' });
    fireEvent.keyDown(card, { key: ' ' });
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});



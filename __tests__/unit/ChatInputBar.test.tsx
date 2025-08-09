import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createEvent } from '@testing-library/dom';
import { ChatInputBar } from '@/components/chat/ChatInputBar';

// Mock child components to capture props
jest.mock('@/components/chat/ChatInputField', () => ({
  ChatInputField: ({ value, onChange, onKeyDown }: any) => (
    <input
      data-testid="mock-input"
      value={value}
      onChange={(e) => onChange((e.target as HTMLInputElement).value)}
      onKeyDown={onKeyDown}
    />
  ),
}));

jest.mock('@/components/ui/Button/SendButton', () => ({
  SendButton: ({ onClick }: any) => (
    <button aria-label="send" onClick={onClick}>Send</button>
  ),
}));

describe('ChatInputBar', () => {
  it('calls onSend when Enter is pressed without Shift', () => {
    const onSend = jest.fn();
    render(<ChatInputBar value="" onChange={() => {}} onSend={onSend} />);
    const input = screen.getByTestId('mock-input');
    const event = createEvent.keyDown(input, { key: 'Enter', shiftKey: false, bubbles: true, cancelable: true });
    fireEvent(input, event);
    expect(event.defaultPrevented).toBe(true);
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it('does not call onSend on Shift+Enter', () => {
    const onSend = jest.fn();
    render(<ChatInputBar value="" onChange={() => {}} onSend={onSend} />);
    const input = screen.getByTestId('mock-input');
    const preventDefault = jest.fn();
    fireEvent.keyDown(input, { key: 'Enter', shiftKey: true, preventDefault });
    expect(preventDefault).not.toHaveBeenCalled();
    expect(onSend).not.toHaveBeenCalled();
  });

  it('calls onSend when send button is clicked', () => {
    const onSend = jest.fn();
    render(<ChatInputBar value="hello" onChange={() => {}} onSend={onSend} />);
    fireEvent.click(screen.getByRole('button', { name: 'send' }));
    expect(onSend).toHaveBeenCalledTimes(1);
  });

  it('forwards value and onChange to ChatInputField', () => {
    const onChange = jest.fn();
    render(<ChatInputBar value="hello" onChange={onChange} onSend={() => {}} />);
    const input = screen.getByTestId('mock-input') as HTMLInputElement;
    expect(input).toHaveValue('hello');
    fireEvent.change(input, { target: { value: 'world' } });
    expect(onChange).toHaveBeenCalledWith('world');
  });
});



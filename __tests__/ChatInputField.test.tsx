import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatInputField } from '@/components/chat/ChatInputField';

describe('ChatInputField', () => {
  it('renders with placeholder and aria-label', () => {
    render(<ChatInputField value="" onChange={() => {}} placeholder="Type here..." />);
    const input = screen.getByLabelText('chat-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Type here...');
  });

  it('calls onChange with typed value', () => {
    const onChange = jest.fn();
    render(<ChatInputField value="" onChange={onChange} />);
    const input = screen.getByLabelText('chat-input');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalledWith('hello');
  });

  it('forwards onKeyDown handler', () => {
    const onKeyDown = jest.fn();
    render(<ChatInputField value="" onChange={() => {}} onKeyDown={onKeyDown} />);
    const input = screen.getByLabelText('chat-input');
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(onKeyDown).toHaveBeenCalled();
  });
});



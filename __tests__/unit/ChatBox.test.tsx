import React from 'react';
import { render, screen } from '@testing-library/react';
import { ChatBox } from '@/components/chat/ChatBox';

describe('ChatBox', () => {
  it('renders provided text', () => {
    render(<ChatBox text="hello world" isUser={false} />);
    const box = screen.getByTestId('chat-box');
    expect(box).toBeInTheDocument();
    expect(box).toHaveTextContent('hello world');
  });

  it('applies robot style when isUser is false', () => {
    render(<ChatBox text="robot message" isUser={false} />);
    const box = screen.getByTestId('chat-box');
    expect(box.className).toMatch(/bg-\[#FFB18C\]/);
    expect(box.className).toMatch(/rounded-br-2xl/);
    expect(box.className).toMatch(/rounded-bl-0/);
    expect(box.className).not.toMatch(/bg-\[#D9D9D9\]/);
  });

  it('applies user style when isUser is true', () => {
    render(<ChatBox text="user message" isUser={true} />);
    const box = screen.getByTestId('chat-box');
    expect(box.className).toMatch(/bg-\[#D9D9D9\]/);
    expect(box.className).toMatch(/rounded-bl-2xl/);
    expect(box.className).toMatch(/rounded-br-0/);
    expect(box.className).not.toMatch(/bg-\[#FFB18C\]/);
  });
});



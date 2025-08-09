import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TabBar from '@/components/ui/Navigation/TabBar';

describe('TabBar', () => {
  const items = [
    { key: 'chatHistory', label: 'Chat History' },
    { key: 'achievements', label: 'Achievements' },
  ];

  it('renders two tabs and marks active correctly', () => {
    render(<TabBar items={items} activeKey="chatHistory" onChange={() => {}} />);
    const chat = screen.getByRole('tab', { name: 'Chat History' });
    const achv = screen.getByRole('tab', { name: 'Achievements' });
    expect(chat).toBeInTheDocument();
    expect(achv).toBeInTheDocument();
    expect(chat).toHaveAttribute('aria-selected', 'true');
    expect(achv).toHaveAttribute('aria-selected', 'false');
  });

  it('invokes onChange when clicking a tab', () => {
    const onChange = jest.fn();
    render(<TabBar items={items} activeKey="chatHistory" onChange={onChange} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Achievements' }));
    expect(onChange).toHaveBeenCalledWith('achievements');
  });
});



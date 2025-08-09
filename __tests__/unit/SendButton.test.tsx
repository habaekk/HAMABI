import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SendButton } from '@/components/ui/Button/SendButton';

describe('SendButton', () => {
  it('renders button with aria-label send', () => {
    render(<SendButton onClick={() => {}} />);
    expect(screen.getByRole('button', { name: 'send' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    render(<SendButton onClick={onClick} />);
    fireEvent.click(screen.getByRole('button', { name: 'send' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const onClick = jest.fn();
    render(<SendButton onClick={onClick} disabled />);
    const button = screen.getByRole('button', { name: 'send' });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});



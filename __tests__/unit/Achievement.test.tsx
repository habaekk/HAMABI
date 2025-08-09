import React from 'react';
import { render, screen } from '@testing-library/react';
import Achievement from '@/components/ui/Achievement';

describe('Achievement', () => {
  it('renders title and description', () => {
    render(<Achievement title="First Achievement" description="Three-word summary" />);
    expect(screen.getByTestId('achievement')).toBeInTheDocument();
    expect(screen.getByTestId('achievement-title')).toHaveTextContent('First Achievement');
    expect(screen.getByTestId('achievement-description')).toHaveTextContent('Three-word summary');
  });

  it('has graphic and info areas', () => {
    render(<Achievement title="T" description="D" />);
    expect(screen.getByTestId('graphic-area')).toBeInTheDocument();
    expect(screen.getByTestId('info-area')).toBeInTheDocument();
  });

  it('sets accessible group label with title', () => {
    render(<Achievement title="Accessibility Check" description="Desc" />);
    expect(screen.getByRole('group', { name: /Achievement: Accessibility Check/i })).toBeInTheDocument();
  });
});



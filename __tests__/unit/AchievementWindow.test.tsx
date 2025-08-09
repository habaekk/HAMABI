import React from 'react';
import { render, screen } from '@testing-library/react';
import AchievementWindow from '@/components/ui/AchievementWindow';

const makeItems = (count: number) =>
  Array.from({ length: count }).map((_, i) => ({
    title: `Achievement ${i + 1}`,
    description: 'Three-word summary',
  }));

describe('AchievementWindow', () => {
  it('renders a grid of achievements', () => {
    render(<AchievementWindow items={makeItems(4)} />);
    expect(screen.getByTestId('achievement-window')).toBeInTheDocument();
    // 4 child achievements should render
    expect(screen.getAllByTestId('achievement')).toHaveLength(4);
  });

  it('applies accessible region label', () => {
    render(<AchievementWindow items={makeItems(1)} />);
    expect(screen.getByRole('region', { name: /Achievements/i })).toBeInTheDocument();
  });
});



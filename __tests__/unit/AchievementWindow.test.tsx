import React from 'react';
import { render, screen } from '@testing-library/react';
import AchievementWindow from '@/components/ui/AchievementWindow';

// Mock child to keep test focused on AchievementWindow behavior only
jest.mock('@/components/ui/Achievement', () => ({
  __esModule: true,
  default: ({ title, description }: { title: string; description: string }) => (
    <div data-testid="achievement" data-title={title} data-description={description} />
  ),
}));

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

  it('applies maxHeight style when provided', () => {
    render(<AchievementWindow items={makeItems(3)} maxHeight="10rem" />);
    expect(screen.getByTestId('achievement-window')).toHaveStyle({ maxHeight: '10rem' });
  });

  it('renders empty container when no items are provided', () => {
    render(<AchievementWindow items={[]} />);
    expect(screen.queryAllByTestId('achievement')).toHaveLength(0);
  });
});



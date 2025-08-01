// components/__tests__/Navbar.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/layout/Navbar';
import ArchiveIcon from '../components/ArchiveIcon';
import UserIcon from '../components/UserIcon';
import BackArrowIcon from '../components/BackArrowIcon';

describe('Navbar', () => {
  it('renders the title', () => {
    render(<Navbar title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders left and right placeholders if none provided', () => {
    render(<Navbar title="No Icons" />);
    const placeholders = screen.getAllByRole('presentation');
    expect(placeholders.length).toBe(2); // left + right
  });

  it('renders left and right icons if provided', () => {
    render(<Navbar title="Icons" left={<ArchiveIcon />} right={<UserIcon />} />);
    expect(screen.getByRole('img', { hidden: true })).toBeInTheDocument(); // SVG 확인
  });

  it('renders only left icon if only left is provided', () => {
    render(<Navbar title="Only Left" left={<BackArrowIcon />} />);
    const svgElements = screen.getAllByRole('img', { hidden: true });
    expect(svgElements.length).toBeGreaterThanOrEqual(1);
  });

  it('handles long title with ellipsis', () => {
    const longTitle = 'This is a very long title that should be truncated';
    render(<Navbar title={longTitle} />);
    const titleElement = screen.getByText(longTitle);
    expect(titleElement).toBeInTheDocument();
    // 실제 스타일에 따른 시각적 ellipsis는 테스트 불가 (jsdom 한계)
  });
});

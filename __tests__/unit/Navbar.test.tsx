import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/ui/Layout/Navbar';
import { NavIconButton } from '@/components/ui/Button/NavIconButton';
import { BackButton } from '@/components/ui/Button/BackButton';
import ArchiveIcon from '@/components/ui/Icon/ArchiveIcon';
import UserIcon from '@/components/ui/Icon/UserIcon';

jest.mock('@/components/ui/Button/NavIconButton', () => ({
  NavIconButton: ({ ariaLabel }: { ariaLabel: string }) => (
    <button aria-label={ariaLabel}>Mocking Button</button>
  ),
}));

jest.mock('@/components/ui/Button/BackButton', () => ({
  BackButton: ({ ariaLabel }: { ariaLabel: string }) => (
    <button aria-label={ariaLabel}>Mocking Button</button>
  ),
}));

describe('Navbar', () => {
  it('renders the title', () => {
    render(<Navbar title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders NavIconButton components in left and right slots', () => {
    render(
      <Navbar
        title="With Icons"
        left={<NavIconButton to="/archive" icon={<ArchiveIcon />} ariaLabel="archive" />}
        right={<NavIconButton to="/user" icon={<UserIcon />} ariaLabel="user" />}
      />
    );

    expect(screen.getByRole('button', { name: 'archive' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'user' })).toBeInTheDocument();
  });

  it('renders only left back button', () => {
    render(
      <Navbar
        title="Back Only"
        left={<BackButton ariaLabel='back arrow' />}
      />
    );

    expect(screen.getByRole('button', { name: 'back arrow' })).toBeInTheDocument();
    // 오른쪽은 placeholder가 렌더되어야 함 (버튼 없음)
    expect(screen.queryByRole('button', { name: 'user' })).toBeNull();
  });
});

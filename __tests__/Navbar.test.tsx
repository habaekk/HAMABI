import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../components/layout/Navbar';
import { NavIconButton } from '../components/Buttons/NavIconButton';
import { BackButton } from '../components/Buttons/BackButton';
import ArchiveIcon from '../components/Icons/ArchiveIcon';
import UserIcon from '../components/Icons/UserIcon';

jest.mock('../components/Buttons/NavIconButton', () => ({
  NavIconButton: ({ ariaLabel, icon }: { ariaLabel: string, icon: React.ReactNode }) => (
    <button aria-label={ariaLabel}>{icon}</button>
  ),
}));

jest.mock('../components/Buttons/BackButton', () => ({
  BackButton: ({ ariaLabel, icon }: { ariaLabel: string, icon: React.ReactNode }) => (
    <button aria-label={ariaLabel}>{icon}</button>
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
  });
});

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


  it('renders left and right icons if provided', () => {
    render(
        <Navbar
        title="Icons"
        left={<div data-testid="left-slot"><ArchiveIcon /></div>}
        right={<div data-testid="right-slot"><UserIcon /></div>}
        />
    )

    expect(screen.getByTestId('left-slot')).toBeInTheDocument();
    expect(screen.getByTestId('right-slot')).toBeInTheDocument();
  });
});

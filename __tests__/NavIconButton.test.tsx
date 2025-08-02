import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ArchiveIcon from '../components/ArchiveIcon';
import { NavIconButton } from '../components/NavIconButton'; // 컴포넌트는 나중에 만들 것

// next/navigation의 useRouter를 모킹
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('NavIconButton', () => {
  const pushMock = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    pushMock.mockClear();
  });

  it('should render a button with an Archive icon', () => {
    render(<NavIconButton to="/archive" icon={<ArchiveIcon />} ariaLabel="go-to-archive" />);
    const button = screen.getByRole('button', { name: 'go-to-archive' });
    expect(button).toBeInTheDocument();
  });

  it('should call router.push with correct path(Archive) when clicked', () => {
    render(<NavIconButton to="/archive" icon={<ArchiveIcon />} ariaLabel="archive" />);
    const button = screen.getByRole('button', { name: 'archive' });
    fireEvent.click(button);
    expect(pushMock).toHaveBeenCalledWith('/archive');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserInfo from '../../components/ui/UserInfo';

// Mock child components
jest.mock('../../components/ui/UserAvatar', () => {
  return function MockUserAvatar({ src, alt, size, className }: any) {
    return (
      <div data-testid="user-avatar" data-src={src} data-alt={alt} data-size={size} className={className}>
        Mock Avatar
      </div>
    );
  };
});

jest.mock('../../components/ui/UserDetailCard', () => {
  return function MockUserDetailCard({ icon, title, value, className }: any) {
    return (
      <div data-testid="user-detail-card" data-title={title} data-value={value} className={className}>
        <div data-testid="card-icon">{icon}</div>
        <div data-testid="card-title">{title}</div>
        <div data-testid="card-value">{value}</div>
      </div>
    );
  };
});

describe('UserInfo', () => {
  const mockUser = {
    name: 'John Doe',
    avatar: '/test-avatar.jpg',
  };

  const mockDetailCards = [
    {
      icon: <div data-testid="icon-1">📊</div>,
      title: 'Statistics',
      value: '85%',
    },
    {
      icon: <div data-testid="icon-2">🏆</div>,
      title: 'Achievements',
      value: '12',
    },
  ];

  it('renders with user information', () => {
    render(<UserInfo user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
  });

  it('renders with detail cards', () => {
    render(<UserInfo user={mockUser} detailCards={mockDetailCards} />);
    
    expect(screen.getByText('Statistics')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
    expect(screen.getByText('Achievements')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    
    const detailCards = screen.getAllByTestId('user-detail-card');
    expect(detailCards).toHaveLength(2);
  });

  it('renders without detail cards', () => {
    render(<UserInfo user={mockUser} />);
    
    const detailCards = screen.queryAllByTestId('user-detail-card');
    expect(detailCards).toHaveLength(0);
  });

  it('renders with empty detail cards array', () => {
    render(<UserInfo user={mockUser} detailCards={[]} />);
    
    const detailCards = screen.queryAllByTestId('user-detail-card');
    expect(detailCards).toHaveLength(0);
  });

  it('renders user without avatar', () => {
    const userWithoutAvatar = { name: 'Jane Smith' };
    render(<UserInfo user={userWithoutAvatar} />);
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByTestId('user-avatar')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<UserInfo user={mockUser} className="custom-class" />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveClass('custom-class');
  });

  it('has correct accessibility attributes', () => {
    render(<UserInfo user={mockUser} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveAttribute('aria-label', 'User information');
  });

  it('renders with single detail card', () => {
    const singleCard = [mockDetailCards[0]];
    render(<UserInfo user={mockUser} detailCards={singleCard} />);
    
    const detailCards = screen.getAllByTestId('user-detail-card');
    expect(detailCards).toHaveLength(1);
    expect(screen.getByText('Statistics')).toBeInTheDocument();
  });

  it('renders with many detail cards', () => {
    const manyCards = [
      ...mockDetailCards,
      {
        icon: <div data-testid="icon-3">❤️</div>,
        title: 'Streak',
        value: '7',
      },
      {
        icon: <div data-testid="icon-4">⭐</div>,
        title: 'Rating',
        value: '4.8',
      },
    ];
    
    render(<UserInfo user={mockUser} detailCards={manyCards} />);
    
    const detailCards = screen.getAllByTestId('user-detail-card');
    expect(detailCards).toHaveLength(4);
  });

  it('renders with long user name', () => {
    const userWithLongName = {
      name: 'Very Long User Name That Might Need To Wrap To Multiple Lines',
      avatar: '/test-avatar.jpg',
    };
    
    render(<UserInfo user={userWithLongName} />);
    
    expect(screen.getByText('Very Long User Name That Might Need To Wrap To Multiple Lines')).toBeInTheDocument();
  });

  it('passes correct props to UserAvatar', () => {
    render(<UserInfo user={mockUser} />);
    
    const avatar = screen.getByTestId('user-avatar');
    expect(avatar).toHaveAttribute('data-src', '/test-avatar.jpg');
    expect(avatar).toHaveAttribute('data-alt', 'John Doe');
    expect(avatar).toHaveAttribute('data-size', 'lg');
  });

  it('passes correct props to UserDetailCard', () => {
    render(<UserInfo user={mockUser} detailCards={mockDetailCards} />);
    
    const detailCards = screen.getAllByTestId('user-detail-card');
    expect(detailCards[0]).toHaveAttribute('data-title', 'Statistics');
    expect(detailCards[0]).toHaveAttribute('data-value', '85%');
    expect(detailCards[1]).toHaveAttribute('data-title', 'Achievements');
    expect(detailCards[1]).toHaveAttribute('data-value', '12');
  });
});

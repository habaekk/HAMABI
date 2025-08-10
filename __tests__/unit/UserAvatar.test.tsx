import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserAvatar from '../../components/ui/UserAvatar';

// Mock Next.js Image component
jest.mock('next/image', () => {
  // Omit boolean-only Next/Image props like `fill` to avoid invalid DOM attributes in tests
  return function MockImage({ src, alt, fill: _fill, ...props }: any) {
    return <img src={src} alt={alt} {...props} />;
  };
});

describe('UserAvatar', () => {
  const defaultProps = {
    src: '/test-avatar.jpg',
    alt: 'Test User Avatar',
  };

  it('renders with default props', () => {
    render(<UserAvatar {...defaultProps} />);
    
    const avatar = screen.getByRole('img', { name: 'Test User Avatar' });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', '/test-avatar.jpg');
    expect(avatar).toHaveAttribute('alt', 'Test User Avatar');
  });

  it('renders with default avatar when no src provided', () => {
    render(<UserAvatar alt="Test User" />);
    
    const avatar = screen.getByRole('img', { name: 'Test User' });
    expect(avatar).toHaveAttribute('src', '/default-avatar.png');
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<UserAvatar {...defaultProps} size="sm" />);
    let container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('w-12', 'h-12');

    rerender(<UserAvatar {...defaultProps} size="md" />);
    container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('w-16', 'h-16');

    rerender(<UserAvatar {...defaultProps} size="lg" />);
    container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('w-20', 'h-20');

    rerender(<UserAvatar {...defaultProps} size="xl" />);
    container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('w-24', 'h-24');
  });

  it('applies custom className', () => {
    render(<UserAvatar {...defaultProps} className="custom-class" />);
    
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('has correct accessibility attributes', () => {
    render(<UserAvatar {...defaultProps} />);

    const img = screen.getByRole('img', { name: 'Test User Avatar' });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', 'Test User Avatar');
    // The container should not duplicate the img role to avoid ambiguity
    const container = img.parentElement as HTMLElement;
    expect(container).toBeInTheDocument();
    expect(container).not.toHaveAttribute('role', 'img');
    expect(container).not.toHaveAttribute('aria-label');
  });

  it('falls back to default avatar on image error', () => {
    render(<UserAvatar {...defaultProps} />);

    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', '/test-avatar.jpg');

    // Simulate image error by firing the error event
    avatar.dispatchEvent(new Event('error'));

    // In our component, onError should switch to default avatar
    expect(avatar).toHaveAttribute('src', '/default-avatar.png');
  });

  it('renders with default size when size prop is not provided', () => {
    render(<UserAvatar {...defaultProps} />);
    
    const container = screen.getByRole('img').parentElement;
    expect(container).toHaveClass('w-16', 'h-16'); // default 'md' size
  });
});

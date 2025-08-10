import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserDetailCard from '../../components/ui/UserDetailCard';

describe('UserDetailCard', () => {
  const mockIcon = <div data-testid="mock-icon">📊</div>;
  
  const defaultProps = {
    icon: mockIcon,
    title: 'Test Title',
    value: 'Test Value',
  };

  it('renders with all required props', () => {
    render(<UserDetailCard {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Value')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('renders with numeric value', () => {
    render(<UserDetailCard {...defaultProps} value={42} />);
    
    expect(screen.getByText('42')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<UserDetailCard {...defaultProps} className="custom-class" />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveClass('custom-class');
  });

  it('has correct accessibility attributes', () => {
    render(<UserDetailCard {...defaultProps} />);
    
    const container = screen.getByRole('region');
    expect(container).toHaveAttribute('aria-label', 'Test Title: Test Value');
  });

  it('renders with long title and value', () => {
    const longTitle = 'Very Long Title That Might Need To Wrap To Multiple Lines';
    const longValue = 'Very Long Value That Might Need To Wrap To Multiple Lines';
    
    render(<UserDetailCard {...defaultProps} title={longTitle} value={longValue} />);
    
    expect(screen.getByText(longTitle)).toBeInTheDocument();
    expect(screen.getByText(longValue)).toBeInTheDocument();
  });

  it('renders with special characters in title and value', () => {
    const specialTitle = 'Title with @#$%^&*()';
    const specialValue = 'Value with @#$%^&*()';
    
    render(<UserDetailCard {...defaultProps} title={specialTitle} value={specialValue} />);
    
    expect(screen.getByText(specialTitle)).toBeInTheDocument();
    expect(screen.getByText(specialValue)).toBeInTheDocument();
  });

  it('renders with empty string values', () => {
    render(<UserDetailCard {...defaultProps} title="" value="" />);

    // Query the title and value containers exist, even if text is empty
    const container = screen.getByRole('region');
    expect(container).toBeInTheDocument();
    // Use getAllByText with exact empty string is unreliable; instead, verify elements are present
    const titleEl = container.querySelector('.text-sm');
    const valueEl = container.querySelector('.text-lg');
    expect(titleEl).toBeInTheDocument();
    expect(valueEl).toBeInTheDocument();
  });

  it('renders with zero value', () => {
    render(<UserDetailCard {...defaultProps} value={0} />);
    
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('maintains correct structure with different content lengths', () => {
    const { rerender } = render(<UserDetailCard {...defaultProps} />);
    
    // Check initial structure
    expect(screen.getByRole('region')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
    
    // Change to different content
    rerender(<UserDetailCard {...defaultProps} title="Short" value="Minimal" />);
    
    expect(screen.getByText('Short')).toBeInTheDocument();
    expect(screen.getByText('Minimal')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Streak from '../../components/ui/Streak';

describe('Streak', () => {
  test('renders current value and label', () => {
    render(<Streak current={5} total={7} />);
    expect(screen.getByTestId('streak-value')).toHaveTextContent('5');
    expect(screen.getByTestId('streak-label')).toHaveTextContent('5 Days Streak');
  });

  test('renders default total and label when not provided', () => {
    render(<Streak current={3} />);
    expect(screen.getByTestId('streak-value')).toHaveTextContent('3');
    expect(screen.getByTestId('streak-label')).toHaveTextContent('3 Days Streak');
  });

  test('clamps current between 0 and total', () => {
    const { rerender } = render(<Streak current={-1} total={7} />);
    expect(screen.getByTestId('streak-value')).toHaveTextContent('0');
    rerender(<Streak current={10} total={7} />);
    expect(screen.getByTestId('streak-value')).toHaveTextContent('7');
  });

  test('renders the correct number of filled and unfilled dots', () => {
    render(<Streak current={4} total={7} />);
    const dots = screen.getAllByTestId('streak-dot');
    expect(dots).toHaveLength(7);
    const filled = dots.filter((dot) => dot.getAttribute('data-filled') === 'true');
    const unfilled = dots.filter((dot) => dot.getAttribute('data-filled') === 'false');
    expect(filled).toHaveLength(4);
    expect(unfilled).toHaveLength(3);
  });

  test('is focusable and clickable when onClick is provided', () => {
    const handleClick = jest.fn();
    render(<Streak current={7} onClick={handleClick} />);
    const card = screen.getByTestId('streak-card');
    card.focus();
    expect(card).toHaveAttribute('tabindex', '0');
    fireEvent.click(card);
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(card, { key: 'Enter' });
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('is not interactive when onClick is not provided', () => {
    render(<Streak current={2} />);
    const card = screen.getByTestId('streak-card');
    expect(card).toHaveAttribute('role', 'group');
    expect(card).toHaveAttribute('tabindex', '-1');
  });
});



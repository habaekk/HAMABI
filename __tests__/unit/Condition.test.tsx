import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Condition from '../../components/ui/Condition';

describe('Condition', () => {
  test('renders title and default x labels', () => {
    render(<Condition />);
    expect(screen.getByTestId('condition-title')).toHaveTextContent('Condition');
    const labels = screen.getAllByTestId('x-label');
    expect(labels).toHaveLength(5);
  });

  test('renders custom x labels when provided', () => {
    render(<Condition xLabels={['A', 'B', 'C', 'D', 'E']} />);
    const labels = screen.getAllByTestId('x-label');
    expect(labels.map((el) => el.textContent)).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  test('clamps yMax to a positive value and renders placeholder graph', () => {
    render(<Condition yMax={-10} />);
    expect(screen.getByTestId('graph-placeholder')).toBeInTheDocument();
  });

  test('is focusable and clickable when onClick is provided', () => {
    const handleClick = jest.fn();
    render(<Condition onClick={handleClick} />);
    const card = screen.getByTestId('condition-card');
    card.focus();
    expect(card).toHaveAttribute('tabindex', '0');
    fireEvent.click(card);
    fireEvent.keyDown(card, { key: 'Enter' });
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  test('is not interactive when onClick is not provided', () => {
    render(<Condition />);
    const card = screen.getByTestId('condition-card');
    expect(card).toHaveAttribute('role', 'group');
    expect(card).toHaveAttribute('tabindex', '-1');
  });
});



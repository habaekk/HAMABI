import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingRow from '@/components/ui/SettingRow';

describe('SettingRow', () => {
  it('renders label and value text', () => {
    render(<SettingRow label="Notifications" valueText="On" />);
    expect(screen.getByTestId('setting-row')).toBeInTheDocument();
    expect(screen.getByRole('group', { name: /Notifications: On/i })).toBeInTheDocument();
    expect(screen.getByTestId('setting-row-value')).toHaveTextContent('On');
  });

  it('renders detail text', () => {
    render(<SettingRow label="Chat Bubble Style" detailText="Rounded or Square" valueText="Rounded" />);
    expect(screen.getByText('Chat Bubble Style')).toBeInTheDocument();
    expect(screen.getByText('Rounded or Square')).toBeInTheDocument();
  });

  it('is interactive when onClick provided', () => {
    const handleClick = jest.fn();
    render(<SettingRow label="Language" valueText="English" onClick={handleClick} />);
    const row = screen.getByRole('button', { name: /Language: English/i });
    fireEvent.click(row);
    fireEvent.keyDown(row, { key: 'Enter' });
    fireEvent.keyDown(row, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(3);
  });

  it('respects disabled state', () => {
    const handleClick = jest.fn();
    render(<SettingRow label="Language" valueText="English" onClick={handleClick} disabled />);
    const row = screen.getByTestId('setting-row');
    expect(row).toHaveAttribute('aria-disabled', 'true');
    fireEvent.click(row);
    expect(handleClick).not.toHaveBeenCalled();
  });
});



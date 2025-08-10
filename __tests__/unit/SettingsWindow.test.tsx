import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SettingsWindow from '@/components/ui/SettingsWindow';

describe('SettingsWindow', () => {
  const sections = [
    {
      title: 'General',
      rows: [
        { label: 'Nickname', valueText: 'User' },
        { label: 'Email', valueText: 'user@example.com' },
      ],
    },
    {
      title: 'Chat',
      rows: [
        { label: 'Language', valueText: 'English', onClick: jest.fn() },
        { label: 'Notifications', right: <input aria-label="Notifications" type="checkbox" defaultChecked /> },
      ],
    },
  ];

  it('renders sections and rows', () => {
    render(<SettingsWindow sections={sections} />);
    expect(screen.getByTestId('settings-window')).toBeInTheDocument();
    expect(screen.getByText('General')).toBeInTheDocument();
    expect(screen.getByText('Chat')).toBeInTheDocument();
    expect(screen.getAllByTestId('setting-row')).toHaveLength(4);
  });

  it('applies accessible region label', () => {
    render(<SettingsWindow sections={sections} />);
    expect(screen.getByRole('region', { name: /Settings/i })).toBeInTheDocument();
  });

  it('applies maxHeight style when provided', () => {
    render(<SettingsWindow sections={sections} maxHeight="16rem" />);
    expect(screen.getByTestId('settings-window')).toHaveStyle({ maxHeight: '16rem' });
  });

  it('handles row click forwarding', () => {
    const handleClick = jest.fn();
    const localSections = [
      { title: 'One', rows: [{ label: 'Language', valueText: 'English', onClick: handleClick }] },
    ];
    render(<SettingsWindow sections={localSections} />);
    fireEvent.click(screen.getByRole('button', { name: /Language: English/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});



import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import ArchiveIcon from '../components/Icons/ArchiveIcon';
import UserIcon from '../components/Icons/UserIcon';
import { NavIconButton } from '../components/Buttons/NavIconButton';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('NavIconButton', () => {
    const pushMock = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
        pushMock.mockClear();
    });

    describe.each([
        { label: 'archive', path: '/archive', icon: <ArchiveIcon /> },
        { label: 'user', path: '/user', icon: <UserIcon /> },
    ])('NavIconButton for $label', ({ label, path, icon }) => {
        it(`renders ${label} button`, () => {
            render(<NavIconButton to={path} icon={icon} ariaLabel={label} />);
            const button = screen.getByRole('button', { name: label });
            expect(button).toBeInTheDocument();
        });

        it(`navigates to ${path} when clicked`, () => {
            render(<NavIconButton to={path} icon={icon} ariaLabel={label} />);
            const button = screen.getByRole('button', { name: label });
            fireEvent.click(button);
            expect(pushMock).toHaveBeenCalledWith(path);
        });
    });
});

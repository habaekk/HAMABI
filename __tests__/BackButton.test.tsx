import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { BackButton } from '../components/ui/Button/BackButton';

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('BackButton', () => {
    const backMock = jest.fn();

    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({ back: backMock });
        backMock.mockClear();
    });

    it('renders BackArrow icon button', () => {
        render(<BackButton ariaLabel="go-back" />);
        const button = screen.getByRole('button', { name: 'go-back' });
        expect(button).toBeInTheDocument();
    });

    it('calls router.back when clicked', () => {
        render(<BackButton ariaLabel="go-back" />);
        const button = screen.getByRole('button', { name: 'go-back' });
        fireEvent.click(button);
        expect(backMock).toHaveBeenCalled();
    });
});

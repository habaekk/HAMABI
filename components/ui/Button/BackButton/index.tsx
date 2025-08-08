'use client';

import { useRouter } from 'next/navigation';
import BackArrowIcon from '../../Icon/BackArrowIcon';

type Props = {
    ariaLabel: string;
};

export const BackButton = ({ ariaLabel }: Props) => {
    const router = useRouter();

    return (
        <button aria-label={ariaLabel} onClick={() => router.back()}>
            <BackArrowIcon />
        </button>
    );
};

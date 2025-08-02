// components/NavIconButton.tsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type NavIconButtonProps = {
  to: string;
  icon: React.ReactNode;
  ariaLabel: string;
};

export const NavIconButton = ({ to, icon, ariaLabel }: NavIconButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(to);
  };

  return (
    <button onClick={handleClick} aria-label={ariaLabel}>
      {icon}
    </button>
  );
};

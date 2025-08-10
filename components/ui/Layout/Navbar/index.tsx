import React from 'react';

type MobileNavbarProps = {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Navbar = ({ title, left, right }: MobileNavbarProps) => {
  return (
    <header
      aria-label="Top navigation"
      className="w-full h-8 flex items-center justify-between px-4 bg-white border-b border-gray-200 box-border"
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {left ?? <div className="w-6 h-6" />}
      </div>
      <div className="flex-1 text-center text-xl font-medium truncate" title={title}>
        {title}
      </div>
      <div className="w-6 h-6 flex items-center justify-center">
        {right ?? <div className="w-6 h-6" />}
      </div>
    </header>
  );
};

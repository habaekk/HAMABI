// components/MobileNavbar.tsx
import React from 'react';
import './Navbar.css';

type NavbarProps = {
  title: string;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Navbar = ({ title, left, right }: NavbarProps) => {
  return (
    <header className="navbar">
      <div className="nav-icon">{left ?? <div className="icon-placeholder" />}</div>
      <div className="nav-title">{title}</div>
      <div className="nav-icon">{right ?? <div className="icon-placeholder" />}</div>
    </header>
  );
};

import React from 'react';

export interface UserDetailCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  className?: string;
}

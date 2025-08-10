import React from 'react';
import { UserDetailCardProps } from './types';

const UserDetailCard: React.FC<UserDetailCardProps> = ({
  icon,
  title,
  value,
  className = '',
}) => {
  return (
    <div
      className={`bg-gray-200 rounded-lg p-3 flex flex-col items-center justify-center min-h-[78px] ${className}`}
      role="region"
      aria-label={`${title}: ${value}`}
    >
      <div className="w-16 h-16 bg-yellow-200 rounded-lg flex items-center justify-center mb-2">
        {icon}
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-700">{title}</div>
        <div className="text-lg font-bold text-gray-900">{value}</div>
      </div>
    </div>
  );
};

export default UserDetailCard;

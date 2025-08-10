import React from 'react';
import Image from 'next/image';
import { UserAvatarProps } from './types';

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24',
  };

  const defaultAvatar = '/default-avatar.png';

  return (
    <div
      className={`relative rounded-2xl overflow-hidden bg-red-500 ${sizeClasses[size]} ${className}`}
    >
      <Image
        src={src || defaultAvatar}
        alt={alt || 'User avatar'}
        fill
        className="object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = defaultAvatar;
        }}
      />
    </div>
  );
};

export default UserAvatar;

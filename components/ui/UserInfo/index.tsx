import React from 'react';
import UserAvatar from '../UserAvatar';
import UserDetailCard from '../UserDetailCard';
import { UserInfoProps } from './types';

const UserInfo: React.FC<UserInfoProps> = ({
  user,
  detailCards = [],
  className = '',
}) => {
  return (
    <div
      className={`w-full max-w-md bg-white rounded-lg overflow-hidden shadow-lg ${className}`}
      role="region"
      aria-label="User information"
    >
      {/* Top Area - Blue background with overlapping avatar */}
      <div className="relative bg-blue-400 h-20">
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <UserAvatar
            src={user.avatar}
            alt={user.name}
            size="lg"
            className="border-4 border-white"
          />
        </div>
      </div>

      {/* Bottom Area - User details */}
      <div className="pt-12 pb-6 px-4">
        {/* User Name */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
        </div>

        {/* Detail Cards Grid */}
        {detailCards.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {detailCards.map((card, index) => (
              <UserDetailCard
                key={index}
                icon={card.icon}
                title={card.title}
                value={card.value}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;

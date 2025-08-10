'use client';

import React, { useMemo, useState } from 'react';
import { BackButton } from '@/components/ui/Button/BackButton';
import { Navbar } from '@/components/ui/Layout/Navbar';
import UserInfo from '@/components/ui/UserInfo';
import Streak from '@/components/ui/Streak';
import Condition from '@/components/ui/Condition';
import SettingsWindow from '@/components/ui/SettingsWindow';
import type { DetailCard } from '@/components/ui/UserInfo/types';
import type { SettingsSection } from '@/components/ui/SettingsWindow';
import UserIcon from '@/components/ui/Icon/UserIcon';
import { userData, userStats } from '@/app/data/user';

const Switch: React.FC<{
  checked: boolean;
  onToggle: () => void;
  label?: string;
}> = ({ checked, onToggle, label }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={onToggle}
      className={`inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        checked ? 'bg-blue-600' : 'bg-gray-300'
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-1'
        }`}
      />
    </button>
  );
};

export default function UserPage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(
    Boolean(userData?.preferences?.notifications)
  );
  const [resetTime, setResetTime] = useState<string>('00:00');
  const [theme, setTheme] = useState<string>(userData?.preferences?.theme ?? 'light');

  const user = useMemo(() => ({
    name: userData?.name ?? 'User',
    avatar: '/default-avatar.png',
  }), []);

  const detailCards: DetailCard[] = useMemo(
    () => [
      { icon: <UserIcon />, title: 'Email', value: userData?.email ?? '—' },
      { icon: <span aria-hidden>💬</span>, title: 'Total Chats', value: userStats?.totalConversations ?? 0 },
      { icon: <span aria-hidden>✉️</span>, title: 'Messages', value: userStats?.totalMessages ?? 0 },
      { icon: <span aria-hidden>📅</span>, title: 'Joined', value: userData?.joinDate ?? '—' },
    ],
    []
  );

  const settingsSections: SettingsSection[] = useMemo(
    () => [
      {
        title: 'Settings',
        rows: [
          {
            label: 'Notifications',
            detailText: 'Receive updates and reminders',
            right: (
              <Switch
                checked={notificationsEnabled}
                onToggle={() => setNotificationsEnabled((prev) => !prev)}
                label="Toggle notifications"
              />
            ),
          },
          {
            label: 'Language',
            valueText: userData?.preferences?.language?.toUpperCase?.() ?? 'KO',
          },
          {
            label: 'Reset Time',
            right: (
              <input
                type="time"
                value={resetTime}
                onChange={(e) => setResetTime(e.target.value)}
                aria-label="Select reset time"
                className="h-9 rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ),
          },
          {
            label: 'Theme',
            right: (
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                aria-label="Select theme"
                className="h-9 rounded-md border border-gray-300 px-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            ),
          },
        ],
      },
    ],
    [notificationsEnabled, resetTime, theme]
  );

  return (
    <div className="min-h-dvh w-full bg-gray-50">
      <Navbar title="User" left={<BackButton ariaLabel="go back" />} />

      <main className="mx-auto flex w-full max-w-none flex-col gap-4 p-4">
        <UserInfo user={user} detailCards={detailCards} className="max-w-none" />

        <Streak current={userStats?.longestStreak ?? 0} total={7} label="Days Streak" />

        <Condition title="Condition" description="오늘의 컨디션 지표" />

        <SettingsWindow sections={settingsSections} />
      </main>
    </div>
  );
}

'use client';

import AchievementWindow from '@/components/ui/AchievementWindow';
import { achievementsData } from '@/app/data';

export default function Achievements() {
  const items = achievementsData.map(({ title, description }) => ({ title, description }));
  return <AchievementWindow items={items} />;
}

'use client';

import AchievementWindow from '@/components/ui/AchievementWindow';
import { achievementsData } from '@/app/data';
import type { AchievementItem } from '@/components/ui/AchievementWindow';
import type { ReactElement } from 'react';

export default function Achievements(): ReactElement {
  const items: AchievementItem[] = achievementsData.map(({ title, description }) => ({ 
    title, 
    description 
  }));
  return <AchievementWindow items={items} />;
}

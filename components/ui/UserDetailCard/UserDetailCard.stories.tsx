import type { Meta, StoryObj } from '@storybook/react';
import UserDetailCard from './index';

const meta: Meta<typeof UserDetailCard> = {
  title: 'UI/UserDetailCard',
  component: UserDetailCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Simple icon component for stories
const SimpleIcon = () => (
  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
    📊
  </div>
);

const TrophyIcon = () => (
  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
    🏆
  </div>
);

const HeartIcon = () => (
  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
    ❤️
  </div>
);

const StarIcon = () => (
  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
    ⭐
  </div>
);

export const Default: Story = {
  args: {
    icon: <SimpleIcon />,
    title: 'Statistics',
    value: '85%',
  },
};

export const Achievement: Story = {
  args: {
    icon: <TrophyIcon />,
    title: 'Achievements',
    value: '12',
  },
};

export const Streak: Story = {
  args: {
    icon: <HeartIcon />,
    title: '7 Days Streak',
    value: '7',
  },
};

export const Rating: Story = {
  args: {
    icon: <StarIcon />,
    title: 'Rating',
    value: '4.8',
  },
};

export const LongTitle: Story = {
  args: {
    icon: <SimpleIcon />,
    title: 'Very Long Title That Might Wrap',
    value: '999',
  },
};

export const LargeValue: Story = {
  args: {
    icon: <TrophyIcon />,
    title: 'Total Score',
    value: '1,234,567',
  },
};

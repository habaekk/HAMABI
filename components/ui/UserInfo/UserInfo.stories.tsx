import type { Meta, StoryObj } from '@storybook/react';
import UserInfo from './index';

const meta: Meta<typeof UserInfo> = {
  title: 'UI/UserInfo',
  component: UserInfo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Icon components for stories
const StatsIcon = () => (
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

const defaultUser = {
  name: 'John Doe',
  avatar: '/default-avatar.png',
};

const defaultDetailCards = [
  {
    icon: <StatsIcon />,
    title: 'Statistics',
    value: '85%',
  },
  {
    icon: <TrophyIcon />,
    title: 'Achievements',
    value: '12',
  },
  {
    icon: <HeartIcon />,
    title: '7 Days Streak',
    value: '7',
  },
  {
    icon: <StarIcon />,
    title: 'Rating',
    value: '4.8',
  },
];

export const Default: Story = {
  args: {
    user: defaultUser,
    detailCards: defaultDetailCards,
  },
};

export const WithoutAvatar: Story = {
  args: {
    user: {
      name: 'Jane Smith',
    },
    detailCards: defaultDetailCards,
  },
};

export const WithCustomAvatar: Story = {
  args: {
    user: {
      name: 'Alex Johnson',
      avatar: 'https://via.placeholder.com/150',
    },
    detailCards: defaultDetailCards,
  },
};

export const FewerDetailCards: Story = {
  args: {
    user: defaultUser,
    detailCards: [
      {
        icon: <StatsIcon />,
        title: 'Statistics',
        value: '85%',
      },
      {
        icon: <TrophyIcon />,
        title: 'Achievements',
        value: '12',
      },
    ],
  },
};

export const SingleDetailCard: Story = {
  args: {
    user: defaultUser,
    detailCards: [
      {
        icon: <HeartIcon />,
        title: '7 Days Streak',
        value: '7',
      },
    ],
  },
};

export const NoDetailCards: Story = {
  args: {
    user: defaultUser,
    detailCards: [],
  },
};

export const LongUserName: Story = {
  args: {
    user: {
      name: 'Very Long User Name That Might Need To Wrap',
      avatar: '/default-avatar.png',
    },
    detailCards: defaultDetailCards,
  },
};

// components/Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import { Navbar } from './index';
import ArchiveIcon from '@/components/ui/Icon/ArchiveIcon';
import UserIcon from '@/components/ui/Icon/UserIcon';
import BackArrowIcon from '@/components/ui/Icon/BackArrowIcon';

const meta: Meta<typeof Navbar> = {
  title: 'components/ui/Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'], // Docs 탭 자동 생성
  argTypes: {
    title: { control: 'text' },
    left: { control: false },
    right: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    title: 'Home',
  },
};

export const Chat: Story = {
  args: {
    title: '14:46:22:00',
    left: <ArchiveIcon />,
    right: <UserIcon />,
  },
};

export const User: Story = {
  args: {
    title: 'User',
    left: <BackArrowIcon />,
  },
};

export const Archive: Story = {
  args: {
    title: 'Archive',
    left: <BackArrowIcon />,
  },
};

export const ChatHistoryDetail: Story = {
  args: {
    title: '2025-02-15',
    left: <BackArrowIcon />,
  },
};

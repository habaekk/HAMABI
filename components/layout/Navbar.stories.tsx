// components/Navbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import ArchiveIcon from '../ArchiveIcon'
import UserIcon from '../UserIcon'


const meta: Meta<typeof Navbar> = {
  title: 'components/layout/Navbar',
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

export const WithPlaceholders: Story = {
  args: {
    title: 'Settings',
    left: <div style={{ width: 16, height: 16, backgroundColor: 'gray' }} />,
    right: <div style={{ width: 16, height: 16, backgroundColor: 'gray' }} />,
  },
};

export const WithIcons: Story = {
  args: {
    title: 'Chat',
    left: <ArchiveIcon />,
    right: <UserIcon />,
  },
};

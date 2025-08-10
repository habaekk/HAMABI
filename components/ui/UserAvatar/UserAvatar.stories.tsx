import type { Meta, StoryObj } from '@storybook/nextjs';
import UserAvatar from './index';

const meta: Meta<typeof UserAvatar> = {
  title: 'UI/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    src: {
      control: { type: 'text' },
    },
    alt: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: '/default-avatar.png',
    alt: 'User Avatar',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    src: '/default-avatar.png',
    alt: 'Small Avatar',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    src: '/default-avatar.png',
    alt: 'Large Avatar',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    src: '/default-avatar.png',
    alt: 'Extra Large Avatar',
    size: 'xl',
  },
};

export const WithCustomImage: Story = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'Custom Image Avatar',
    size: 'md',
  },
};

export const NoImage: Story = {
  args: {
    alt: 'No Image Avatar',
    size: 'md',
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import Streak from './index';
import React from 'react';

const meta: Meta<typeof Streak> = {
  title: 'components/ui/Streak',
  component: Streak,
  tags: ['autodocs'],
  argTypes: {
    current: { control: { type: 'number', min: 0, step: 1 } },
    total: { control: { type: 'number', min: 1, step: 1 } },
    label: { control: 'text' },
    icon: { control: false },
    className: { control: false },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const HeartIcon = () => (
  <div className="text-xl" aria-hidden>
    ❤️
  </div>
);

export const Default: Story = {
  args: {
    current: 7,
    total: 7,
    label: 'Days Streak',
    icon: <HeartIcon />,
  },
};

export const Partial: Story = {
  args: {
    current: 3,
    total: 7,
    label: 'Days Streak',
  },
};

export const Clickable: Story = {
  args: {
    current: 7,
    total: 7,
    label: 'Days Streak',
    icon: <HeartIcon />,
  },
};



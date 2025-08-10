import type { Meta, StoryObj } from '@storybook/nextjs';
import Condition from './index';

const meta: Meta<typeof Condition> = {
  title: 'components/ui/Condition',
  component: Condition,
  tags: ['autodocs'],
  argTypes: {
    xLabels: { control: 'object' },
    yMax: { control: { type: 'number', min: 1, step: 1 } },
    title: { control: 'text' },
    description: { control: 'text' },
    className: { control: false },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Condition',
    description: 'Abstract status graph (placeholder)',
  },
};

export const CustomLabels: Story = {
  args: {
    xLabels: ['Focus', 'Hydration', 'Recovery', 'Load', 'Sleep'],
    yMax: 100,
    title: 'Condition - Custom',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Interactive Condition',
  },
};



import type { Meta, StoryObj } from '@storybook/nextjs';
import AchievementWindow from './index';

const sampleItems = Array.from({ length: 12 }).map((_, i) => ({
  title: `Achievement ${i + 1}`,
  description: 'Three-word summary',
}));

const meta: Meta<typeof AchievementWindow> = {
  title: 'components/ui/AchievementWindow',
  component: AchievementWindow,
  tags: ['autodocs'],
  argTypes: {
    items: { control: false },
    maxHeight: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const ConstrainedHeight: Story = {
  args: {
    items: sampleItems,
    maxHeight: '20rem',
  },
};



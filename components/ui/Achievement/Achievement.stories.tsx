import type { Meta, StoryObj } from '@storybook/nextjs';
import Achievement from './index';

const meta: Meta<typeof Achievement> = {
  title: 'components/ui/Achievement',
  component: Achievement,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'First Achievement',
    description: 'Three-word summary',
  },
};

export const LongTitle: Story = {
  args: {
    title: 'This is a very long achievement title that requires an ellipsis',
    description: 'Three-word summary',
  },
};

export const LongDescription: Story = {
  args: {
    title: 'Short title',
    description: 'A long and detailed description that should be truncated with an ellipsis in the lower area',
  },
};



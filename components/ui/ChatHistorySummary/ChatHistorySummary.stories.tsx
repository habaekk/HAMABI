import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatHistorySummary from './index';

const meta: Meta<typeof ChatHistorySummary> = {
  title: 'components/ui/ChatHistorySummary',
  component: ChatHistorySummary,
  tags: ['autodocs'],
  argTypes: {
    date: { control: 'text' },
    summary: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: '2025-02-02',
    summary: 'A short five-word summary',
  },
};

export const LongSummary: Story = {
  args: {
    date: '2025-02-02',
    summary: 'This is a much longer summary that should be truncated with an ellipsis',
  },
};

export const Clickable: Story = {
  args: {
    date: '2025-02-02',
    summary: 'Clickable summary example',
    onClick: () => {},
  },
};



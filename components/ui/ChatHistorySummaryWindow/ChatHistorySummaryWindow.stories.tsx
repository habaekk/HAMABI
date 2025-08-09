import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatHistorySummaryWindow from './index';

const sampleItems = Array.from({ length: 20 }).map((_, i) => ({
  date: `2025-02-${String((i % 28) + 1).padStart(2, '0')}`,
  summary: `Summary line number ${i + 1}`,
}));

const meta: Meta<typeof ChatHistorySummaryWindow> = {
  title: 'components/ui/ChatHistorySummaryWindow',
  component: ChatHistorySummaryWindow,
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
    items: sampleItems.slice(0, 6),
  },
};

export const ManyItemsScrollable: Story = {
  args: {
    items: sampleItems,
    maxHeight: '20rem',
  },
};

export const ClickableItems: Story = {
  args: {
    items: sampleItems.slice(0, 5),
    onItemClick: (item) => {
      // eslint-disable-next-line no-alert
      alert(`Clicked: ${item.date} - ${item.summary}`);
    },
  },
};



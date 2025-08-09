import type { Meta, StoryObj } from '@storybook/nextjs';
import ChatHistoryModal from './index';
import { Message } from '@/types/Message';

const messages: Message[] = Array.from({ length: 12 }).map((_, i) => ({
  sender: i % 2 === 0 ? 'robot' : 'user',
  content: `Message ${i + 1}`,
}));

const meta: Meta<typeof ChatHistoryModal> = {
  title: 'components/ui/ChatHistoryModal',
  component: ChatHistoryModal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    title: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: '2025-02-02',
    messages,
  },
};



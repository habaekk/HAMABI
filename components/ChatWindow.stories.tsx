// ChatWindow.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ChatWindow } from './ChatWindow';

const meta = {
  title: 'Chat/ChatWindow',
  component: ChatWindow,
  tags: ['autodocs'],
} satisfies Meta<typeof ChatWindow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messages: [
      { sender: 'robot', content: 'Hello, I am your assistant.' },
      { sender: 'user', content: 'Hi, nice to meet you.' },
      { sender: 'robot', content: 'How can I help you today?' }
    ],
  },
};

export const LongConversation: Story = {
  args: {
    messages: [
      { sender: 'robot', content: '안녕하세요, 무엇을 도와드릴까요?' },
      { sender: 'user', content: '날씨 알려줘.' },
      { sender: 'robot', content: '서울의 현재 날씨는 맑고 28도입니다.' },
      { sender: 'user', content: '내일은?' },
      { sender: 'robot', content: '내일은 흐리고 비가 올 확률이 60%입니다.' },
      { sender: 'user', content: '우산 챙겨야겠네. 고마워!' }
    ],
  },
};

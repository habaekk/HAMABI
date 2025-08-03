import type { Meta, StoryObj } from '@storybook/nextjs';

import { UserChatBox } from './UserChatBox';

const meta = {
  component: UserChatBox,
} satisfies Meta<typeof UserChatBox>;
 
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
args: {
  text: 'Hello! This is a test message.',
  }
};

export const LongText: Story = {
args: {
  text: `This is a very long text to test how the chat box handles larger content.
It includes multiple lines, some long sentences, and even emojis like 😊.
Let’s see how it wraps the text properly in the box.`,
  }
};
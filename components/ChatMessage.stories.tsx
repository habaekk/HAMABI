// ChatMessage.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import { ChatMessage } from './ChatMessage';
import RobotIcon from './Icons/RobotIcon';

const meta = {
    title: 'Chat/ChatMessage',
    component: ChatMessage,
    tags: ['autodocs'],
} satisfies Meta<typeof ChatMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Robot: Story = {
    args: {
        text: 'Hello! This is a robot message.',
        isUser: false,
        Icon: <RobotIcon />,
    },
};

export const User: Story = {
    args: {
        text: 'Hi! This is a user message.',
        isUser: true,
        Icon: <></>,

    },
};

export const LongRobot: Story = {
    args: {
        text: `This is a very long message from a robot. It should wrap and maintain the correct layout without breaking anything. 
It also contains new lines and emojis 🚀🤖 to test layout flexibility.`,
        isUser: false,
        Icon: <RobotIcon />,
    },
};

export const LongUser: Story = {
    args: {
        text: `This is a long message from the user.
It should behave consistently just like the robot message, wrapping across multiple lines and keeping padding and spacing intact.`,
        isUser: true,
        Icon: <></>,
    },
};

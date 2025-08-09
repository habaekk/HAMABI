// ChatInputBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import { ChatInputBar } from './index';

const meta = {
  title: 'Chat/ChatInputBar',
  component: ChatInputBar,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    onSend: { action: 'sent' },
  },
} satisfies Meta<typeof ChatInputBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledRender: Story['render'] = (args) => {
  const [value, setValue] = useState(args.value ?? '');

  return (
    <ChatInputBar
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        if (typeof args.onChange === 'function') {
          args.onChange(newValue);
        }
      }}
      onSend={() => {
        if (typeof args.onSend === 'function') {
          args.onSend();
        }
        // Simulate clearing the input after send
        setValue('');
      }}
    />
  );
};

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    onSend: () => {},
  },
  render: ControlledRender,
};

export const Prefilled: Story = {
  args: {
    value: 'Hello there!',
    onChange: () => {},
    onSend: () => {},
  },
  render: ControlledRender,
};

export const LongText: Story = {
  args: {
    value:
      'This is a very long text to test the input resizing or overflow handling behaviour in the ChatInputBar component.',
    onChange: () => {},
    onSend: () => {},
  },
  render: ControlledRender,
};



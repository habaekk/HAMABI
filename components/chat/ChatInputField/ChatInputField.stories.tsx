// ChatInputField.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import { ChatInputField } from './index';

const meta = {
    title: 'Chat/ChatInputField',
    component: ChatInputField,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        onKeyDown: { action: 'keyDown' },
    },
} satisfies Meta<typeof ChatInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

const ControlledRender: Story['render'] = (args) => {
    const [value, setValue] = useState(args.value ?? '');

    return (
        <ChatInputField
            {...args}
            value={value}
            onChange={(newValue) => {
                setValue(newValue);
                // Call Storybook action if provided
                if (typeof args.onChange === 'function') {
                    args.onChange(newValue);
                }
            }}
        />
    );
};

export const Default: Story = {
    args: {
        value: '',
        placeholder: 'Type here...',
    onChange: () => {},
    onKeyDown: () => {},
    },
    render: ControlledRender,
};

export const Prefilled: Story = {
    args: {
        value: 'Hello there!',
        placeholder: 'Type here...',
    onChange: () => {},
    onKeyDown: () => {},
    },
    render: ControlledRender,
};



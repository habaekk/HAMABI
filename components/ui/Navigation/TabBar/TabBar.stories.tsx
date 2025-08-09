import type { Meta, StoryObj } from '@storybook/nextjs';
import React, { useState } from 'react';
import TabBar from './index';

const meta: Meta<typeof TabBar> = {
  title: 'components/ui/Navigation/TabBar',
  component: TabBar,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoTabs: Story = {
  render: () => {
    const [active, setActive] = useState('chatHistory');
    return (
        <TabBar
          items={[
            { key: 'chatHistory', label: 'Chat History' },
            { key: 'achievements', label: 'Achievements' },
          ]}
          activeKey={active}
          onChange={setActive}
        />
    );
  },
};



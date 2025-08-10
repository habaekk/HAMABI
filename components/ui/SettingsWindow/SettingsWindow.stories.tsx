import type { Meta, StoryObj } from '@storybook/nextjs';
import SettingsWindow from './index';

const meta: Meta<typeof SettingsWindow> = {
  title: 'components/ui/SettingsWindow',
  component: SettingsWindow,
  tags: ['autodocs'],
  argTypes: {
    sections: { control: false },
    maxHeight: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    sections: [
      {
        title: 'General',
        rows: [
          { label: 'Nickname', valueText: 'User' },
          { label: 'Email', valueText: 'user@example.com' },
        ],
      },
      {
        title: 'Chat',
        rows: [
          { label: 'Chat Bubble Style', valueText: 'Rounded', onClick: () => {} },
          { label: 'Notifications', right: <input type="checkbox" defaultChecked aria-label="Notifications" /> },
          { label: 'Reset Time', valueText: '00:00' },
        ],
      },
    ],
  },
};

export const Scrollable: Story = {
  args: {
    ...Default.args,
    maxHeight: '20rem',
  },
};



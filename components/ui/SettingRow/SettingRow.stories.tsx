import type { Meta, StoryObj } from '@storybook/nextjs';
import SettingRow from './index';

const meta: Meta<typeof SettingRow> = {
  title: 'components/ui/SettingRow',
  component: SettingRow,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Notifications',
    valueText: 'On',
  },
};

export const WithDetailText: Story = {
  args: {
    label: 'Chat Bubble Style',
    detailText: 'Rounded or Square',
    valueText: 'Rounded',
  },
};

export const Clickable: Story = {
  args: {
    label: 'Language',
    valueText: 'English',
    onClick: () => {},
  },
};

export const CustomRight: Story = {
  args: {
    label: 'Daily Reminder',
    right: (
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" defaultChecked className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600"></div>
        <span className="ml-3 text-sm text-gray-500">Enable</span>
      </label>
    ),
  },
};



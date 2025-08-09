import type { Meta, StoryObj } from '@storybook/nextjs';
import { SendButton } from './index';

const meta: Meta<typeof SendButton> = {
  title: 'components/ui/Button/SendButton',
  component: SendButton,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};



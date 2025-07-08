// components/MobileNavbar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MobileNavbar } from './Navbar';

const meta: Meta<typeof MobileNavbar> = {
  title: 'Components/MobileNavbar',
  component: MobileNavbar,
  tags: ['autodocs'], // Docs 탭 자동 생성
  argTypes: {
    title: { control: 'text' },
    left: { control: false },
    right: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavbar>;

export const Default: Story = {
  args: {
    title: '홈',
  },
};

export const WithPlaceholders: Story = {
  args: {
    title: '설정',
    left: <div style={{ width: 16, height: 16, backgroundColor: 'gray' }} />,
    right: <div style={{ width: 16, height: 16, backgroundColor: 'gray' }} />,
  },
};

// export const WithIcons: Story = {
//   args: {
//     title: '마이페이지',
//     left: <img src="/icons/back.svg" alt="뒤로가기" width={16} height={16} />,
//     right: <img src="/icons/more.svg" alt="더보기" width={16} height={16} />,
//   },
// };

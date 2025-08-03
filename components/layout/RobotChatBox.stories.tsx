import React from 'react';
import { RobotChatBox } from './RobotChatBox';

export default {
  title: 'ChatBox/RobotChatBox',
  component: RobotChatBox,
};

const Template = (args: { text: string }) => <RobotChatBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Hello!\nThis is a test message.\nDisplayed on multiple lines.',
};

export const LongText = Template.bind({});
LongText.args = {
  text: `This is a very long text to test how the chat box handles larger content.
It includes multiple lines,
some long sentences, and even emojis like 😊.
Let’s see how it wraps the text properly in the box.`,
};

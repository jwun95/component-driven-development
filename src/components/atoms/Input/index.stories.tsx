import { Meta, StoryObj } from '@storybook/react';

import { Input } from '.';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Template: Story = {
  args: {
    value: '리액트 공부하기',
  },
  render: (args) => <Input {...args} />,
};

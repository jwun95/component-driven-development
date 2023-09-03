import { Meta, StoryObj } from '@storybook/react';

import { ToDoItem } from '.';

const meta: Meta<typeof ToDoItem> = {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
};

export default meta;

type Story = StoryObj<typeof ToDoItem>;

export const Template: Story = {
  args: {
    label: '리액트 공부하기',
  },
  render: (args) => <ToDoItem {...args} />,
};

import { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

const meta: Meta<typeof ToDoList> = {
  title: 'Templates/ToDoList',
  component: ToDoList,
};

export default meta;

type Story = StoryObj<typeof ToDoList>;

export const Template: Story = {
  args: {
    toDoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발하기'],
  },
  render: (args) => <ToDoList {...args} />,
};

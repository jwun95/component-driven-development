import { Meta, StoryObj } from '@storybook/react';

import { ToDoListPage } from '.';

const meta: Meta<typeof ToDoListPage> = {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
};

export default meta;

type Story = StoryObj<typeof ToDoListPage>;

export const Template: Story = {
  args: {},
  render: () => <ToDoListPage />,
};

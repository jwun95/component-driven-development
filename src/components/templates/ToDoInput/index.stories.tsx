import { Meta, StoryObj } from '@storybook/react';

import { ToDoInput } from '.';

const meta: Meta<typeof ToDoInput> = {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
};

export default meta;

type Story = StoryObj<typeof ToDoInput>;

export const Template: Story = {
  args: {},
  render: () => <ToDoInput />,
};

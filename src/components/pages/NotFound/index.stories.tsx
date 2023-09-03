import { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '.';

const meta: Meta<typeof NotFound> = {
  title: 'Pages/NotFound',
  component: NotFound,
};

export default meta;

type Story = StoryObj<typeof NotFound>;

export const Template: Story = {
  args: {},
  render: () => <NotFound />,
};

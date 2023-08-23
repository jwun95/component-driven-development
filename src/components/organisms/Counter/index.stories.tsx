import { Meta, StoryObj } from '@storybook/react';

import { Counter } from '.';

const meta: Meta<typeof Counter> = {
  title: 'Organisms/Counter',
  component: Counter,
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Template: Story = {
  args: {},
  render: () => <Counter />,
};

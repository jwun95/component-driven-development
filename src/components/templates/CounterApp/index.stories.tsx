import { Meta, StoryObj } from '@storybook/react';

import { CounterApp } from '.';

const meta: Meta<typeof CounterApp> = {
  title: 'Templates/CounterApp',
  component: CounterApp,
};

export default meta;

type Story = StoryObj<typeof CounterApp>;

export const Template: Story = {
  args: {},
  render: () => <CounterApp />,
};

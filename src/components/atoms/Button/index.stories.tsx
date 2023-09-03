import { StoryObj, Meta } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const RedButton: Story = {
  args: {
    label: '추가',
  },
  render: (args) => <Button {...args} />,
};

export const BlueButton: Story = {
  args: {
    label: '추가',
    color: '#304ffe',
  },
  render: (args) => <Button {...args} />,
};

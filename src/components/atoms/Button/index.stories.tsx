import { StoryObj, Meta } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Template: Story = {
  args: {
    label: 'Button',
  },
  render: (args) => <Button {...args} />,
};

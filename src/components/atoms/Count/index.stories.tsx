import { StoryObj, Meta } from '@storybook/react';

import { Count } from '.';

const meta: Meta<typeof Count> = {
  title: 'Atoms/Count',
  component: Count,
};

export default meta;

type Story = StoryObj<typeof Count>;

export const Template: Story = {
  args: {
    value: 0,
  },
  render: (args) => <Count {...args} />,
};

import { StoryObj, Meta } from '@storybook/react';

import { Label } from '.';

const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Template: Story = {
  args: {
    label: '리액트 공부하기',
  },
  render: (args) => <Label {...args} />,
};

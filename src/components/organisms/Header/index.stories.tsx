import { StoryObj, Meta } from '@storybook/react';

import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Template: Story = {
  args: {},
  render: () => <Header />,
};

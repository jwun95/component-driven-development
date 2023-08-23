import type { Meta, StoryObj } from '@storybook/react';
import { Title } from '.';

const meta: Meta<typeof Title> = {
  title: 'Atoms/Title',
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const Template: Story = {
  args: {
    title: 'Counter App',
  },
  render: ({ title }) => <Title title={title} />,
};

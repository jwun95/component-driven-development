import { StoryObj, Meta } from '@storybook/react';

import { PageTitle } from '.';

const meta: Meta<typeof PageTitle> = {
  title: 'Atoms/PageTitle',
  component: PageTitle,
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Template: Story = {
  args: {
    title: '할 일 목록',
  },
  render: (args) => <PageTitle {...args} />,
};

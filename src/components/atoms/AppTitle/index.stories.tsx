import { StoryObj, Meta } from '@storybook/react';

import { AppTitle } from '.';

const meta: Meta<typeof AppTitle> = {
  title: 'Atoms/AppTitle',
  component: AppTitle,
  parameters: {
    backgrounds: {
      default: 'Header background color',
      values: [{ name: 'Header background color', value: '#304ffe' }],
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppTitle>;

export const Template: Story = {
  args: {},
  render: () => <AppTitle />,
};

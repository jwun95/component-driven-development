import React from 'react';
import type { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ToDoListContextProvider } from '../src/contexts/ToDoList';

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ToDoListContextProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ToDoListContextProvider>
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

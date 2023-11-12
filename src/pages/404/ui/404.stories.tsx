import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider/lib/ThemsContext';
import { NotFound } from './404';

const meta = {
  title: 'pages/404',
  component: NotFound,
  parameters: {
    layout: 'padded',
  },
  // tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div className={`app ${Theme.DARK}`}>
        <Story/>
      </div>
    )
  ],
};

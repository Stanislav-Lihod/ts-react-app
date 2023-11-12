import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from './Sidebar';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemsContext';

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Sidebar>;

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

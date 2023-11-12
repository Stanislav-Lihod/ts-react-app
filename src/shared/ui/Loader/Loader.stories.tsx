import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemsContext';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'padded',
  },
  // tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Loader>;

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

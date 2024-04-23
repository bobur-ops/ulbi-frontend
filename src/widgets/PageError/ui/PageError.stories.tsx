import { Meta, StoryObj } from '@storybook/react';
import { ErrorPage } from './PageError';

const meta: Meta<typeof ErrorPage> = {
  title: 'widgets/Error Page',
  component: ErrorPage
};
export default meta;

type Story = StoryObj<typeof ErrorPage>;

export const Basic: Story = {};

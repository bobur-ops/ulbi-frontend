import { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher
};
export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Basic: Story = {};

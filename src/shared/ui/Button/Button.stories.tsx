import { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'Text'
  }
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.CLEAR
  }
};

export const Outlined: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE
  }
};

import { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinktheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/'
  }
};
export default meta;

type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'Text',
    theme: AppLinktheme.PRIMARY
  }
};
export const Secondary: Story = {
  args: {
    children: 'Text',
    theme: AppLinktheme.SECONDARY
  }
};

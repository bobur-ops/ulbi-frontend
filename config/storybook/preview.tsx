import { Preview } from '@storybook/react';
import 'app/styles/index.scss';
import { withThemeByClassName } from '@storybook/addon-themes';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light app',
        dark: 'dark app'
      },
      defaultTheme: 'light',
      parentSelector: '#storybook-root'
    }),
    RouterDecorator
  ]
};

export default preview;

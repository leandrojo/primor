/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Provider } from '..';

const CustomGlobalStyle = createGlobalStyle`
  body {
    background-color: pink;
  }
`;

const components = {
  GlobalStyle: CustomGlobalStyle,
};

const ChangedProviderDecorator = storyFn => (
  <Provider components={components}>
    {storyFn()}
  </Provider>
);

storiesOf('Provider', module)
  .addDecorator(ChangedProviderDecorator)
  .add('default', () => <Button type="link" onClick={action('clicked')}>Link</Button>);

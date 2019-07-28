/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonGroup, Provider } from '../src';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('Button', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('link', () => <Button type="link" onClick={action('clicked')}>Link</Button>)
  .add('fluid', () => <Button fluid onClick={action('clicked')}>Fluid Button</Button>)
  .add('disabled', () => <Button disabled onClick={action('clicked')}>Button Disabled</Button>);

storiesOf('ButtonGroup', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => (
    <ButtonGroup>
      <Button onClick={action('clicked')}>
        Option 1
      </Button>
      <Button onClick={action('clicked')}>
        Option 2
      </Button>
      <Button onClick={action('clicked')}>
        Option 3
      </Button>
    </ButtonGroup>
  ));


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

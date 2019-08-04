/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonToolbar, Provider } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('ButtonToolbar', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => (
    <ButtonToolbar>
      <Button onClick={action('clicked')}>
        Option 1
      </Button>
      <Button onClick={action('clicked')}>
        Option 2
      </Button>
      <Button onClick={action('clicked')}>
        Option 3
      </Button>
    </ButtonToolbar>
  ));

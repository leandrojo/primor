/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, ButtonGroup, Provider } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

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

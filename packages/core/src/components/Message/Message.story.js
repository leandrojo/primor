/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { Message, Provider } from '../..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('core/Message', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => (
    <Message>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Message>
  ));

/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';

import { Dialog, Provider } from '../..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('core/Dialog', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => (
    <Dialog>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Dialog>
  ));

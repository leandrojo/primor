/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import Provider from '@primor/core/src/components/Provider';

import { Form } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('Form', module)
  .addDecorator(ProviderDecorator)
  .add('with text', () => <Form>Hello Form</Form>);

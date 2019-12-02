/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Provider } from '../..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('core/Button', module)
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

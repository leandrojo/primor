/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';

import Provider from '@primor/core/src/components/Provider';

import { Input } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('Input', module)
  .addDecorator(ProviderDecorator)
  .add('controlled', () => {
    const InputControlled = () => {
      const [value, setValue] = React.useState('initial value');

      return (
        <>
          <Input
            controlled
            name="name"
            onChange={setValue}
            value={value}
          />
          <span>{`Value: ${value}`}</span>
        </>
      );
    };

    return <InputControlled />;
  })
  .add('with label', () => {
    const InputControlled = () => {
      const [value, setValue] = React.useState('');

      return (
        <Input
          label="Label"
          controlled
          name="name"
          onChange={setValue}
          value={value}
        />
      );
    };

    return <InputControlled />;
  });

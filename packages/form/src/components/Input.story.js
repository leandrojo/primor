/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Provider from '@primor/core/src/components/Provider';

import { Form, Input, Submit } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

const Footer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

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
  })
  .add('form', () => {
    const FormSample = () => {
      const onSubmit = () => action('submit');

      return (
        <Form onSubmit={onSubmit} values={{}}>
          <Input
            label="Nome Completo"
            name="name"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
            ]}
          />

          <Input
            label="Data de Nascimento"
            name="birthDate"
            pattern="99/99/9999"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
            ]}
          />

          <Footer>
            <Submit>Salvar</Submit>
          </Footer>
        </Form>
      );
    };

    return <FormSample />;
  });

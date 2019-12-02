/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Provider from '@primor/core/src/components/Provider/Provider';

import { Form, Input, Submit } from '../..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

const Footer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

storiesOf('form', module)
  .addDecorator(ProviderDecorator)
  .add('advanced validation (email)', () => {
    const FormSample = () => {
      const onSubmit = () => action('submit');

      return (
        <Form autoComplete="off" onSubmit={onSubmit} initialValues={{}}>
          <Input
            label="E-mail"
            name="email"
            rules={[
              {
                type: 'string',
                required: true,
                message: 'Campo obrigatório.',
              },
              {
                validator(rule, value, callback, source) {
                  const re = /\S+@\S+\.\S+/;
                  const errors = [];
                  if (re.test(source.email) === false) {
                    errors.push(new Error('Entre com um e-mail válido.').message);
                  }
                  callback(errors);
                },
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
  })
  .add('rules when submit', () => {
    const FormSample = () => {
      const onSubmit = () => action('submit');

      return (
        <Form autoComplete="off" onSubmit={onSubmit} initialValues={{}}>
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

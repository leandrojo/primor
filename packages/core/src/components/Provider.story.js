/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Form, Input, Submit } from '@primor/form/src';

import { Button, ButtonToolbar, Provider } from '..';

const CustomGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url("/assets/Roboto/Roboto-Regular.ttf");
  }

  @font-face {
    font-family: "Roboto";
    src: url("/assets/Roboto/Roboto-Italic.ttf");
    font-style: italic;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/assets/Roboto/Roboto-Bold.ttf");
    font-weight: bold;
  }

  @font-face {
    font-family: "Roboto";
    src: url("/assets/Roboto/Roboto-BoldItalic.ttf");
    font-style: italic;
    font-weight: bold;
  }

  body {
    background-color: ${props => props.theme.backgroundColor};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Footer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const components = {
  GlobalStyle: CustomGlobalStyle,
};

const theme = {
  input: {
    backgroundColor: 'rgba(190, 100, 0, 0.3)',
    borderColor: 'transparent',
    color: 'orange',
  },
};

const ChangedProviderDecorator = storyFn => (
  <Provider components={components} theme={theme}>
    {storyFn()}
  </Provider>
);

storiesOf('core/Provider', module)
  .addDecorator(ChangedProviderDecorator)
  .add('dark theme', () => {
    const Theming = () => {
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
            <ButtonToolbar>
              <Button>Cancelar</Button>
              <Submit>Salvar</Submit>
            </ButtonToolbar>
          </Footer>
        </Form>
      );
    };

    return <Theming />;
  });

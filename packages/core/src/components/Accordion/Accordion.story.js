/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';

import { Form, Input, Submit } from '@primor/form/src';

import { Accordion, Provider } from '../..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

const Footer = styled.div`
  display: inline-flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

storiesOf('core/Accordion', module)
  .addDecorator(ProviderDecorator)
  .add('default', () => (
    <Accordion>
      <Accordion.Item>
        <Accordion.Summary>
          Heading 1
        </Accordion.Summary>
        <Accordion.Details>
          {'Maiores, soluta sapiente expedita porro itaque voluptate vel, laudantium deserunt laborum dolore labore nobis minima. Eaque ex officiis sint ut, accusantium ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta sapiente expedita porro itaque voluptate vel, laudantium. Eaque ex officiis sint ut, accusantium ullam deserunt laborum dolore labore nobis minima. Eaque ex officiis sint ut, accusantium ullam. soluta sapiente expedita porro itaque voluptate vel, laudantium deserunt laborum dolore labore nobis minima. Eaque ex officiis sint ut, accusantium ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, soluta sapiente expedita porro itaque voluptate vel, laudantium. Eaque ex officiis sint ut, accusantium ullam deserunt laborum dolore labore nobis minima. Eaque ex officiis sint ut, accusantium ullam.'}
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Heading 2
        </Accordion.Summary>
        <Accordion.Details>
          Quam asperiores doloremque sapiente a rem temporibus.
        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  ))
  .add('with form', () => (
    <Accordion>
      <Accordion.Item>
        <Accordion.Summary>
          Step One
        </Accordion.Summary>
        <Accordion.Details>
          <Form autoComplete="off" onSubmit={() => {}} initialValues={{}}>
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
        </Accordion.Details>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Summary>
          Step Two
        </Accordion.Summary>
        <Accordion.Details>

        </Accordion.Details>
      </Accordion.Item>
    </Accordion>
  ));

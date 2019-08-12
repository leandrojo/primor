/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import Home from 'react-feather/dist/icons/home';

import { storiesOf } from '@storybook/react';

import { Breadcrumb, Provider } from '..';

const ProviderDecorator = storyFn => <Provider>{storyFn()}</Provider>;

storiesOf('core/Breadcrumb', module)
  .addDecorator(ProviderDecorator)
  .add('default', () => (
    <Breadcrumb>
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
      <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add('separator arrow type', () => (
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
      <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add('without link', () => (
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
      <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
    </Breadcrumb>
  ))
  .add('home is icon', () => (
    <Breadcrumb separator="arrow">
      <Breadcrumb.Item>
        {/* Fix center appearance. */}
        <Home style={{ marginTop: 3 }} size={16} />
      </Breadcrumb.Item>
      <Breadcrumb.Item href="/settings">Settings</Breadcrumb.Item>
      <Breadcrumb.Item href="/settings/accessibility">Accessibility</Breadcrumb.Item>
      <Breadcrumb.Item>Voice Control</Breadcrumb.Item>
    </Breadcrumb>
  ));

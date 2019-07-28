/* eslint-disable react/prop-types */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { theme } from '../common/theme';

const DefaultGlobalStyle = createGlobalStyle`
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
    color: ${props => props.theme.typography.color};
    font-family: ${props => props.theme.fontFamily};
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Provider = ({ children, components }) => {
  const { GlobalStyle } = components;
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

Provider.defaultProps = {
  components: {
    GlobalStyle: DefaultGlobalStyle,
  },
};

Provider.propTypes = {
  components: PropTypes.shape({
    GlobalStyle: PropTypes.element,
  }),
};

export default Provider;

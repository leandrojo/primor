/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import theme, { dark, light } from '../../common/theme';

import Button from '../Button/Button';

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
    transition-property: background-color, color;
    transition-duration: 0.3s;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

const Provider = ({ children, components }) => {
  const { GlobalStyle } = components;

  // TODO: Criar uma hook que escute as mudanças do tema.
  const [update, setUpdate] = React.useState(new Date());

  useEffect(() => {
    theme.addListener(() => {
      setUpdate(new Date());
    });
  }, []);

  // TODO: Registrar novos temas de modo a extender o tema dark ou light.
  // TODO: Verificar como indicar um tema diretamente, night shift, por exemplo.

  return (
    <ThemeProvider theme={theme.getState().theme}>
      <>
        <GlobalStyle />
        {children}
      </>
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

import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme, Provider } from '@primor/core';

import {
  Header,
  Promo,
  Features,
  Footer,
} from './scenes';

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
    transition:
      background-color 0.5s,
      border-color 0.5s;
      color 0.5s;
  }

  p {
    margin: 0;
  }
`;

const components = {
  GlobalStyle: CustomGlobalStyle,
};

function App() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    theme.register({
      colors: {
        primary: 'pink',
        acent: 'red'
      }
    }, 'dark')
  }, []);

  React.useEffect(() => {
    theme.select(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Provider components={components}>
      <Header />
      <Promo />
      <Features />
      <Footer />
      <button type="button" onClick={() => setIsDark(isDark === false)}>change</button>
    </Provider>
  );
}

export default App;

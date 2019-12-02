import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Moon } from 'react-feather';
import { Button, ButtonToolbar } from '@primor/core';

import Container from '../../components/Container'

const StyledHeader = styled.header`
  background-color: ${props => props.theme.backgroundColor + props.opacity.toString(16)};
  margin: 0;
  position: fixed;
  transition: all 100ms;
  width: 100%;

  ${props => {
    if (props.opacity === 255) {
      return css`
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2), 0 0 8px rgba(0, 0, 0, 0.1);
      `;
    }
  }}
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h1`
  color: ${props => props.theme.typography.color};
`;

const Menu = styled.nav``;

const Link = styled(Button).attrs(() => ({ type: 'link' }))`
  text-transform: uppercase;
`;

const Header = () => {
  const [ opacity, setOpacity ] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', ev => {
      const { scrollingElement } = ev.target;

      const scrollTop = scrollingElement.scrollTop + 50;

      setOpacity(scrollTop < 255 ? scrollTop : 255);
    });
  }, []);

  return (
    <StyledHeader opacity={opacity}>
      <StyledContainer>
        <Logo>Primor</Logo>
        <Menu>
          <ButtonToolbar>
            <Link>Get Started</Link>
            <Link>Components</Link>
            <Link>Contribute</Link>
            <Link title="Coming Soon">
              <Moon />
            </Link>
          </ButtonToolbar>
        </Menu>
      </StyledContainer>
    </StyledHeader>  
  );
};

export default Header;
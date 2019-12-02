import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container'

const StyledHeader = styled.header`
  background-color: ${p => p.theme.colors.primary};
  height: 460px;
  width: 100%;
`;

const StyledHeaderContainer = styled(Container)``;

const Header = () => (
  <StyledHeader>
    <StyledHeaderContainer>
      <p>lorem</p>
    </StyledHeaderContainer>
  </StyledHeader>  
);

export default Header;
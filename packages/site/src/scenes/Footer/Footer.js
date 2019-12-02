import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container'

const StyledFooter = styled.header`
  color: ${props => props.theme.typography.color};
`;

const StyledContainer = styled(Container)`
  padding: 30px;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <p>A project from React currently maintained by Leandro Araújo</p>
    </StyledContainer>
  </StyledFooter>  
);

export default Footer;
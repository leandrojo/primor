import React from 'react';
import styled from 'styled-components';
import { Button } from '@primor/core';

import Container from '../../components/Container'

const StyledPromo = styled.header`
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  flex: 1;
  min-height: 400px;
  height: 90vh;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.acent};
  font-size: 3em;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.typography.color};
  font-size: 1.2em;
  margin: 0 50px;
`;

const Action = styled(Button)`
  font-size: 1.35em;
  margin: 30px;
  padding: 0 50px;
`;

const Promo = () => (
  <StyledPromo>
    <StyledContainer>
      <Title>A Design System for the Web</Title>
      <Paragraph>Primor is a React UI Framework for building ambitious products on the web. Brought to you by Segment.</Paragraph>
      <Action>Get Started</Action>
    </StyledContainer>
  </StyledPromo>
);

export default Promo;
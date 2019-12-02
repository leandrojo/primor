import React from 'react';
import styled from 'styled-components';

import Container from '../../components/Container'

const StyledFeatures = styled.div`
  background-color: ${props => props.theme.colors.acent};
  padding: 15px 0 40px;
`;

const Row = styled.ul`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  padding: 0;
`;

const Column = styled.li`
  list-style: none;
`;

const Title = styled.h5`
  color: ${props => props.theme.typography.color};
  font-size: 1.1em;
  text-align: center;
`;

const Description = styled.p`
  color: ${props => props.theme.typography.color};
  font-size: 1em;
  text-align: center;
  place-self: center;

`;

const Features = () => (
  <StyledFeatures>
    <Container>
      <Row>
        <Column>
          <Title>Works out of the box</Title>
          <Description>
            Primor contains a set of polished React components that work out of the box.
          </Description>
        </Column>
        <Column>
          <Title>Flexible & composable</Title>
          <Description>
            Primor components are built on top of a React UI Primitive for endless composability.
          </Description>
        </Column>
        <Column>
          <Title>Enterprise-grade</Title>
          <Description>
            Primor features a UI design language for enterprise-grade web applications.
          </Description>
        </Column>
      </Row>
    </Container>
  </StyledFeatures>  
);

export default Features;
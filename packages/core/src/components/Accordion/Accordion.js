/* eslint-disable no-console */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { ChevronRight } from 'react-feather';

import { omit } from '../../common';
import { getStyle } from '../../common/theme';

const s = getStyle('accordion');

const Title = styled.h5`
  color: ${s('indicator.color')};
  font-family: ${props => props.theme.fontFamily};
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-family: ${props => props.theme.fontFamily};
`;

const StyledIndicator = styled(ChevronRight)`
  align-items: center;
  color: ${s('indicator.color')};
  display: flex;
  height: 1.4em;
  justify-content: center;
  margin: 0;
  width: 20px;
`;

const StyledAccordion = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const StyledHeading = styled.div`
  align-items: center;
  background-color: ${s('summary.backgroundColor')};
  border: 1px solid ${s('summary.borderColor')};
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 10px;
`;

const StyledDetails = styled.div`
  border: 1px solid ${s('details.borderColor')};
  border-bottom: none;
  border-top: none;
  display: block;
  padding: 0 ${s('details.paddingHorizontal')};
`;

const StyledItem = styled.li`
  display: flex;
  flex: 1;
  flex-direction: column;

  &:first-of-type {
    ${StyledHeading} {
      border-radius: ${s('summary.borderRadius')};
    }
  }

  &:last-of-type {
    ${StyledDetails} {
      border-bottom: 1px solid ${s('details.borderColor')};
      border-radius: ${s('details.borderRadius')};
    }
  }
`;

export const AccordionContext = React.createContext({
  accordion: false,
});

const Details = ({ children }) => {
  function renderContent() {
    if (typeof children === 'string') return <Description>{children}</Description>;
    return children;
  }

  return <StyledDetails>{renderContent()}</StyledDetails>;
};

Details.role = 'Details';

const Indicator = () => (
  <StyledIndicator size={24} />
);

Indicator.role = 'Indicator';

const Summary = ({ children }) => {
  function renderContent() {
    if (typeof children === 'string') {
      return [
        <Title>{children}</Title>,
        <Indicator />,
      ];
    }
    return children;
  }

  return <StyledHeading role="button">{renderContent()}</StyledHeading>;
};

Summary.role = 'Summary';

const Item = ({ children }) => {
  console.log(children);
  return React.Children.map(children, (child, i) => {
    console.log(child);
    return child;
  });
};


const Accordion = ({ components, children }) => {
  const { CloseIcon } = components;

  function renderItem(child, key) {
    return (
      <StyledItem key={key}>
        {child}
      </StyledItem>
    );
  }

  function renderContent() {
    return React.Children.map(children, (child, i) => renderItem(child, i));
  }

  return (
    <StyledAccordion role="list">
      {renderContent()}
    </StyledAccordion>
  );
};

Accordion.defaultProps = {
  children: null,
  closable: false,
  components: {
    Indicator,
  },
  type: false,
  visible: true,
};

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Show button close option.
   *
   * @type {boolean}
   */
  closable: PropTypes.bool,

  /**
   * External control visibility.
   *
   * @type {boolean}
   */
  visible: PropTypes.bool,

  /**
   * The reason for alert and your styled.
   *
   * @type {'success' | 'danger' | 'warning'}
   */
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

Accordion.Details = Details;
Accordion.Item = Item;
Accordion.Summary = Summary;

export default Accordion;

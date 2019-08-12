/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Arrow from 'react-feather/dist/icons/arrow-right';
import Chevron from 'react-feather/dist/icons/chevron-right';

import { omit } from '../common';
import { getStyle } from '../common/theme';

const s = getStyle('breadcrumb');

const ArrowIcon = styled(Arrow)`
  align-items: center;
  color: ${s('separator.color')};
  display: flex;
  height: 1.4em;
  justifyContent: center;
  margin: 0 0.3em;
  width: 20px;
`;

const ChevronIcon = styled(Chevron)`
  align-items: center;
  color: ${s('separator.color')};
  display: flex;
  height: 1.4em;
  justifyContent: center;
  margin: 0;
  width: 20px;
`;

const Content = styled.nav`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  padding: 0.35em 0;
`;

const Listing = styled.ol`
  display: inline-flex;
  margin: 0;
  list-style: none;
  padding-left: 0;
`;

const StyledItem = styled.li`
  align-ttems: center;
  display: flex;
`;

const Link = styled.a`
  color: ${s('item.color')};
  line-height: 1.4em;
`;

const Item = ({
  children, href, ...rest
}) => (
  <Link href={href} {...rest} aria-current="page">
    {children}
  </Link>
);

const DefaultSeparator = ({ type }) => {
  switch (type) {
    case 'arrow':
      return <ArrowIcon size={16} />;
    case 'chevron':
    default:
      return <ChevronIcon size={24} />;
  }
};

const Breadcrumb = ({ components, children, separator }) => {
  const { Separator } = components;

  function renderSeparator(key) {
    if (key === 0) return null;
    return <Separator type={separator} />;
  }

  function renderItem(child, key) {
    return (
      <StyledItem key={key}>
        {renderSeparator(key)}
        {child}
      </StyledItem>
    );
  }

  function renderContent() {
    return React.Children.map(children, (child, i) => renderItem(child, i));
  }

  return (
    <Content aria-label="Breadcrumb" role="navigation">
      <Listing>{renderContent()}</Listing>
    </Content>
  );
};

Breadcrumb.defaultProps = {
  children: [],
  components: {
    Separator: DefaultSeparator,
  },
  latestIsCurrentPage: true,
  separator: 'chevron',
  styles: {},
  useSpread: 5,
};

Breadcrumb.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

Breadcrumb.Item = Item;

export default Breadcrumb;

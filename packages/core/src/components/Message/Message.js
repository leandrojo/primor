/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { X } from 'react-feather';

import { omit } from '../../common';
import { getStyle } from '../../common/theme';

const s = getStyle('message');

const Content = styled.section`
  align-items: center;
  background-color: ${s('backgroundColor')};
  border: 1px solid ${s('borderColor')};
  border-radius: ${s('borderRadius')};
  display: flex;
  min-height: 48px;
  padding: 6px ${s('paddingHorizontal')};
  width: 100%;

  @media(max-width: 368px) {
    max-width: 344px;
  }
`;

const Text = styled.span`
  color: ${s('color')};
  font-family: ${s('fontFamily')};
  font-size: ${s('fontSize')};
  line-height: ${s('lineHeight')};
`;

const Message = ({ children, components, closable }) => {
  const { CloseIcon } = components;

  function renderClose() {
    if (closable === false) return null;
    return <CloseIcon size={16} />;
  }

  return (
    <Content>
      <Text>{children}</Text>
      {renderClose()}
    </Content>
  );
};

Message.defaultProps = {
  children: '',
  closable: false,
  components: {
    CloseIcon: X,
  },
  type: false,
  visible: true,
};

Message.propTypes = {
  children: PropTypes.string,

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

export default Message;

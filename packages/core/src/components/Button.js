/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useContext, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { getStyle } from '../common/theme';

import { ButtonGroupContext } from './ButtonGroup';
import { ButtonToolbarContext } from './ButtonToolbar';

const s = {};

['button', 'buttonGroup'].map((key) => {
  s[key] = getStyle(key);
  return key;
});

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${s.button('backgroundColor')};
  border: 1px solid transparent;
  border-radius: ${s.button('borderRadius')};
  color: ${s.button('color')};
  cursor: pointer;
  display: inline-flex;
  font-size: ${s.button('fontSize')};
  font-weight: ${s.button('fontWeight')};
  height: 2.4em;
  justify-content: center;
  line-height: 2.3em;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 ${s.button('paddingHorizontal')};
  text-align: center;
  touch-action: manipulation;
  transition: all .2s cubic-bezier(.06,.67,.37,.99);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  ${props => (props.buttonGroup === true
    ? css`
        background-color: ${s.buttonGroup('backgroundColor')};
        border: 1px solid ${s.buttonGroup('borderColor')};
        border-left: none;
        border-radius: 0;

        &:first-of-type {
          border: 1px solid ${s.buttonGroup('borderColor')};
          border-bottom-left-radius: ${s.button('borderRadius')};
          border-top-left-radius: ${s.button('borderRadius')};
        }

        &:last-of-type {
          border-bottom-right-radius: ${s.button('borderRadius')};
          border-top-right-radius: ${s.button('borderRadius')};
        }
      `
    : '')}

  ${props => (props.buttonToolbar === true
    ? css`
        margin: ${props.spacing}px;

        &:first-of-type {
          margin-left: 0;
        }

        &:last-of-type {
          margin-right: 0;
        }
      `
    : '')}

  ${props => (props.disabled === true
    ? css`
        color: ${props.theme.colors.gray};
        opacity: 0.8;
      `
    : '')}

  ${(props) => {
    switch (props.size) {
      case 'xs':
        return css`
          font-size: 70%;
        `;
      case 'sm':
        return css`
          font-size: 85%;
        `;
      case 'lg':
        return css`
          font-size: 110%;
        `;
      case 'xl':
        return css`
          font-size: 135%;
        `;
      case 'md':
      default:
        return css`
          font-size: 100%;
        `;
    }
  }}

  ${(props) => {
    switch (props.type) {
      case 'link':
        return css`
          background-color: transparent;
          box-shadow: none;
          color: ${props.theme.colors[props.disabled ? 'grayDark' : 'acent']};

          &:hover {
            box-shadow: none;
            text-decoration: ${props.disabled ? 'none' : 'underline'};
          },
        `;
      default:
        return css``;
    }
  }}

  ${props => (props.fluid === true
    ? css`
          display: flex;
          width: 100%;
        `
    : '')}

  &:hover {
    opacity: 0.8,
  }
`;

const Button = ({
  children, components, onClick, onPress, spacing, selected, ...rest
}) => {
  const { buttonGroup, include } = useContext(ButtonGroupContext);
  const { buttonToolbar, spacingBetween } = useContext(ButtonToolbarContext);

  useEffect(() => {
    include({ selected });
  }, []);

  const handlePress = (ev) => {
    ev.preventDefault();

    onClick();
  };

  const getSpacing = () => {
    if (spacing === false) return spacingBetween;
    return spacing;
  };

  return (
    <StyledButton
      buttonGroup={buttonGroup}
      buttonToolbar={buttonToolbar}
      onClick={handlePress}
      selected={selected}
      spacing={getSpacing()}
      type="button"
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  contained: true,
  disabled: false,
  fluid: false,
  outline: false,
  onClick: () => {},
  selected: false,
  spacing: false,
  size: 'md',
  type: 'default',
};

Button.propTypes = {
  contained: PropTypes.bool,

  /**
   * Boolean when fluid width
   *
   * @type {boolean}
   */

  fluid: PropTypes.bool,

  onClick: PropTypes.func,

  outline: PropTypes.bool,

  selected: PropTypes.bool,

  spacing: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),

  /**
   * The badges size options.
   *
   * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
   */

  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * The reason for action button.
   *
   * @type { 'primary' | 'complementary' | 'success' | 'danger' | 'warning'}
   */

  type: PropTypes.string,
};

export default Button;

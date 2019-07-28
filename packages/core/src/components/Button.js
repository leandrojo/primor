/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { css, getStyle, styled } from '../common/theme';

import { ButtonGroupContext } from './ButtonGroup';

const s = getStyle('button');

export const StyledButton = styled.button`
  align-items: center;
  background-color: ${s('backgroundColor')};
  border: 1px solid transparent;
  border-radius: ${s('borderRadius')};
  color: ${s('color')};
  cursor: pointer;
  display: flex;
  font-size: ${s('fontSize')};
  font-weight: ${s('fontWeight')};
  height: 2.4em;
  justify-content: center;
  line-height: 2.3em;
  margin: 0;
  outline: none;
  overflow: hidden;
  padding: 0 ${s('paddingHorizontal')};
  text-align: center;
  touch-action: manipulation;
  transition: all .2s cubic-bezier(.06,.67,.37,.99);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  ${props => (props.buttonGroup === true
    ? css`
        background-color: white;
        border: 1px solid black;
        border-left: none;
        border-radius: 0;

        &:first-of-type {
          border: 1px solid black;
          border-bottom-left-radius: ${s('borderRadius')};
          border-top-left-radius: ${s('borderRadius')};
        }

        &:last-of-type {
          border-bottom-right-radius: ${s('borderRadius')};
          border-top-right-radius: ${s('borderRadius')};
        }
        `
    : '')}

  ${props => (props.disabled === true
    ? css`
            color: ${getStyle('colors')('gray')};
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
          color: ${getStyle('colors')(props.disabled ? 'grayDark' : 'secondary')};

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
          width: 100%;
        `
    : '')}

  &:hover {
    opacity: 0.8,
  }
`;

const Button = ({
  children, components, onClick, onPress, selected, ...rest
}) => {
  const { buttonGroup, include } = useContext(ButtonGroupContext);

  useEffect(() => {
    include({ selected });
  }, []);

  const handlePress = (ev) => {
    ev.preventDefault();

    onClick();
  };

  return (
    <StyledButton
      buttonGroup={buttonGroup}
      onClick={handlePress}
      selected={selected}
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

/* eslint-disable no-unused-vars */
/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masker from 'vanilla-masker';

import { css, getStyle } from '@primor/core/src/common/theme';

import { FormContext } from './Form';
import registerField from './registerField';

const Wrapper = styled.div`
  padding: 0 0 10px;
`;

const Inner = styled.div`
  flex: 1;
  padding: 20px 0 0;
  position: relative;
`;

const s = {};

s.input = getStyle('input');

const StyledInput = styled.input`
  appearance: none;
  border: ${s.input('borderSize')}px solid ${s.input('borderColor')};
  border-radius: ${s.input('borderRadius')}px;
  box-shadow: none;
  font-size: ${s.input('fontSize')}px;
  padding: ${s.input('padding')}px;
  width: ${s.input('width')};

  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }

  ${props => (props.danger === true
    ? css`
      border-color: ${props.theme.colors.danger};
      box-shadow: 0 0 0 4px #ffe8e6;
      `
    : '')}
`;

s.label = getStyle('label');

const Label = styled.label`
  color: ${s.label('color')};
  display: block;
  font-family: ${s.label('fontFamily')};
  font-size: ${s.label('fontSize')}px;
  padding: ${s.label('paddingVertical')}px 0px;
  pointer-events: none;
  position: absolute;
  top: calc(50% + 8px);
  left: 10px;
  transform: translateY(-50%);
  transition: font-size 100ms, top 100ms, color 100ms;

  ${props => (props.isInputFocus === true
    ? css`
      font-size: 70%;
      left: 0px;
      top: 8px;
      transition: font-size 250ms, top 250ms, color 250ms;
      `
    : '')}
`;

const Warn = styled.div`
  padding-top: 5;
`;

const WarnText = styled.span`
  color: ${props => props.theme.colors.danger};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.typography.fontSize} * 0.8;
`;

const ref = React.createRef();

export const Input = ({
  controlled,
  errors,
  id,
  isDisable,
  isMoney,
  isReadOnly,
  label,
  name,
  onChange,
  pattern,
  value,
  ...rest
}) => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [showInputErrors, setShowInputErrors] = useState(false);
  const [state, setState] = useState({
    value: '',
  });

  function format(unformatted) {
    const moneyFormatter = {
      precision: 2,
      separator: ',',
      delimiter: '.',
      unit: 'R$',
    };

    if (isMoney) {
      return Masker.toMoney(Masker.toNumber(unformatted), moneyFormatter);
    }

    if (typeof unformatted === 'string' && pattern !== '') {
      return Masker.toPattern(unformatted, pattern);
    }

    return unformatted;
  }

  function getValue() {
    if (controlled) return value;
    return state.value;
  }

  useEffect(() => {
    switch (typeof value) {
      case 'number':
        setState({
          value: value.toFixed(2),
        });
        break;
      case 'string':
      default:
        setState({
          value: format(value),
        });
        break;
    }
  }, []);

  const onBlur = () => {
    setShowInputErrors(true);
    setIsInputFocus(true);
  };

  const onFocus = () => {
    setIsInputFocus(true);
  };

  const handleChange = (ev) => {
    const newValue = format(ev.target.value);
    if (controlled === false) {
      setState({
        value: newValue,
      });
    }
    onChange(newValue, name);
  };

  function renderError() {
    const showErrors = showInputErrors || rest.showErrors;

    if (errors.length === 0 || showErrors === false) return null;

    return (
      <Warn>
        <WarnText>{errors[0]}</WarnText>
      </Warn>
    );
  }

  function renderLabel() {
    return (
      <Label isInputFocus={isInputFocus} htmlFor={id}>
        {label}
      </Label>
    );
  }

  return (
    <FormContext.Consumer>
      {() => (
        <Wrapper>
          <Inner>
            {renderLabel()}
            <StyledInput
              disabled={isDisable}
              id={id}
              name={name}
              onChange={handleChange}
              onFocus={onFocus}
              pattern="\d*"
              readOnly={isReadOnly}
              ref={ref}
              type="text"
              value={getValue()}
              {...rest}
            />
          </Inner>
          {renderError()}
        </Wrapper>
      )}
    </FormContext.Consumer>
  );
};

Input.defaultProps = {
  controlled: false,
  errors: [],
  id: '',
  isMoney: false,
  label: '',
  onChange: () => {},
  onError: () => {},
  onSuccess: () => {},
  pattern: '',
  placeholder: '',
  required: false,
  rules: [],
};

Input.propTypes = {
  id: PropTypes.string,
  isMoney: PropTypes.bool,
  label: PropTypes.string,
  pattern: PropTypes.string,
  name: PropTypes.string.isRequired,
  // onError: PropTypes.func,
  // onSuccess: PropTypes.func,
  // placeholder: PropTypes.string,
  // required: PropTypes.bool,
  // rules: PropTypes.arrayOf(),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default registerField(Input);

/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

import { styled } from '../common/theme';

const StyledButtonGroup = styled.div`
  display: inline-flex;
  justify-content: row;
`;

export const ButtonGroupContext = React.createContext({
  buttonGroup: false,
  include: () => {},
});

const ButtonGroup = ({ children, ...rest }) => {
  const [options, setOptions] = useState([]);

  const include = (data) => {
    setOptions([...options, data]);
  };

  const updateState = (data, index) => {
    setOptions(Array.from(options, (v, k) => {
      if (k === index) return data;
      return v;
    }));
  };

  return (
    <ButtonGroupContext.Provider
      value={{
        buttonGroup: true,
        include,
        options,
        updateState,
      }}
    >
      <StyledButtonGroup {...rest}>{children}</StyledButtonGroup>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.defaultProps = {};

ButtonGroup.propTypes = {};

export default ButtonGroup;

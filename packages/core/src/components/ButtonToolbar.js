/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';

import { styled } from '../common/theme';

const StyledButtonToolbar = styled.div`
  display: inline-flex;
  justify-content: row;
`;

export const ButtonToolbarContext = React.createContext({
  buttonToolbar: false,
  include: () => {},
  spacing: false,
});

const ButtonToolbar = ({ children, ...rest }) => {
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
    <ButtonToolbarContext.Provider
      value={{
        buttonGroup: true,
        include,
        options,
        updateState,
      }}
    >
      <StyledButtonToolbar {...rest}>{children}</StyledButtonToolbar>
    </ButtonToolbarContext.Provider>
  );
};

ButtonToolbar.defaultProps = {};

ButtonToolbar.propTypes = {};

export default ButtonToolbar;

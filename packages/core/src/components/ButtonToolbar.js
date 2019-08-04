/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { styled } from '../common/theme';

const StyledButtonToolbar = styled.div`
  display: inline-flex;
  justify-content: row;
`;

export const ButtonToolbarContext = React.createContext({
  buttonToolbar: false,
  include: () => {},
  spacingBetween: 5,
});

const ButtonToolbar = ({ children, spacingBetween, ...rest }) => {
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
        buttonToolbar: true,
        include,
        spacingBetween,
        options,
        updateState,
      }}
    >
      <StyledButtonToolbar {...rest}>{children}</StyledButtonToolbar>
    </ButtonToolbarContext.Provider>
  );
};

ButtonToolbar.defaultProps = {
  spacingBetween: 5,
};

ButtonToolbar.propTypes = {
  spacingBetween: PropTypes.number,
};

export default ButtonToolbar;

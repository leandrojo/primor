import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@primor/core/src';

import { FormContext } from '../Form/Form';

const Submit = ({ children, ...rest }) => {
  const { onSubmit } = useContext(FormContext);

  return (
    <Button {...rest} onClick={() => onSubmit()}>
      {children}
    </Button>
  );
};

Submit.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Submit;

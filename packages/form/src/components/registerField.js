/* eslint-disable no-console */
import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FormContext } from './Form';

export default function registerField(Component) {
  return (() => {
    const Field = ({
      controlled, name, rules, value, ...rest
    }) => {
      const {
        errors, formExist, onChange, register, showErrors, values,
      } = useContext(FormContext);

      /**
       * @description Get value of a specific property.
       * @param  {string} property - property 'name' is the key name.
       */

      const getValue = () => {
        if (controlled) return value;
        if (value !== '') return value;

        return values[name];
      };

      /**
       * @description Get yours errors.
       */

      const getErrors = () => errors.filter(err => err.field === name).map(err => err.message) || '';

      useEffect(() => {
        console.log(name);
        register(name, rules);
      }, [name]);

      if (formExist === false) return <Component {...rest} />;

      return (
        <Component
          {...rest}
          controlled={controlled}
          errors={getErrors()}
          name={name}
          onChange={onChange}
          showErrors={showErrors}
          value={getValue()}
        />
      );
    };

    Field.defaultProps = {
      controlled: false,
      rules: [],
      value: '',
    };

    Field.propTypes = {
      controlled: PropTypes.bool,
      name: PropTypes.string.isRequired,
      rules: PropTypes.arrayOf(PropTypes.objectOf()),
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    };

    return Field;
  })();
}

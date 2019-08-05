/* eslint-disable no-unused-vars */
/* eslint-disable no-console */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Schema from 'async-validator';

import { objectify } from '@primor/core/src/common';

const StyleForm = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;
  justifyContent: flex-end;
  padding: 20px 0;
`;

export const FormContext = React.createContext({
  errors: [],
  formExist: false,
  isCompleted: false,
  register: () => {},
  showErrors: false,
});

const schema = new Schema({});

const Form = ({ children, onSubmit }) => {
  const [errors, setErrors] = useState([]);
  const [isCompleted, setIsCompleted] = useState(true);
  const [rules, setRules] = useState({});
  const [showErrors, setShowErrors] = useState(false);
  const [values, setValues] = useState({});

  function validate(name, value = '') {
    schema.validate(Object.assign(values, objectify({}, [name, value])), (newErrors) => {
      setErrors(newErrors || []);
    });
  }

  const getCount = () => errors.length || 0;

  const handleChange = (value, name) => {
    console.log(objectify({}, [name, value]));
    setValues(Object.assign(values, objectify({}, [name, value])));
    validate(name, value);
  };

  const handleSubmit = () => {
    setShowErrors(true);
    console.log(values);
    if (getCount() === 0) onSubmit(values);
  };

  const register = async (name, fieldRules = []) => {
    console.log(objectify({}, [name, fieldRules]));
    setRules(Object.assign(rules, objectify({}, [name, fieldRules])));
    validate(name, '');
  };

  return (
    <StyleForm>
      <FormContext.Provider
        value={{
          errors,
          formExist: true,
          isCompleted,
          register,
          onChange: handleChange,
          onSubmit: handleSubmit,
          rules,
          showErrors,
          values,
        }}
      >
        {children}
      </FormContext.Provider>
    </StyleForm>
  );
};

Form.defaultProps = {};

Form.propTypes = {
  children: PropTypes.element.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

import styled, { css } from 'styled-components';

const unit = 10;

const colors = {
  primary: '#0F29F6',
  secondary: '#007bff',
  complementary: '#ff7a00',
  acent: '#00d0d0',
  danger: '#dc3545',
  success: '#1DB954',
  warning: '#ffc107',
  grayExtraLight: '#fafafa',
  grayLight: '#c1c7d0',
  gray: '#7a869a',
  grayDark: '#505f79',
  grayExtraDark: '#343a40',
};

const fontFamily = "'Roboto', sans-serif";

const theme = {
  backgroundColor: 'transparent',
  button: {
    backgroundColor: colors.grayExtraLight,
    borderRadius: '0.3em',
    color: colors.grayDark,
    fontFamily,
    fontSize: '100%',
    fontWeight: 'normal',
    marginHorizontal: '0.3em',
    paddingHorizontal: '10px',
  },
  colors,
  fontFamily: 'Roboto, sans-serif',
  input: {
    borderColor: '#DFE3E7',
    borderRadius: 4,
    borderSize: 1,
    boxShadow: {
      color: colors.grayExtraLight,
      offset: 'inset 0 1px 3px',
    },
    fontFamily,
    fontSize: 12,
    padding: unit * 1.5,
    width: '100%',
  },
  label: {
    color: colors.grayDark,
    fontFamily,
    fontSize: 14,
    paddingVertical: unit * 0.4,
  },
  typography: {
    color: 'rgb(0, 0, 0)',
  },
};

const getStyle = element => property => props => props.theme[element][property];

export {
  colors,
  css,
  getStyle,
  styled,
  theme,
};

import { transparentize } from 'polished';

import mergeDeep from '../mergeDeep';

import light, { fontFamily, unit } from './light';

export const colors = {
  primary: '#bb86fc',
  secondary: '#3700b3',
  complementary: '#ff7a00',
  acent: '#03dac6',
  danger: '#dc3545',
  grayExtraLight: '#fafafa',
  grayLight: '#eceff4',
  gray: '#7a869a',
  grayDark: '#505f79',
  grayExtraDark: '#343a40',
};

export const components = {
  accordion: {
    details: {
      borderColor: colors.grayDark,
    },
    indicator: {
      color: colors.acent,
    },
    summary: {
      backgroundColor: transparentize(0.5, colors.grayDark),
      borderColor: colors.grayDark,
    },
  },
  breadcrumb: {
    separator: {
      color: colors.grayLight,
    },
    item: {
      color: colors.acent,
      current: {
        color: colors.grayExtraDark,
      },
      disabled: {
        color: colors.grayExtraLight,
      },
    },
  },
  button: {
    backgroundColor: 'rgb(46, 52, 64)',
    color: colors.grayLight,
  },
  buttonGroup: {
    backgroundColor: transparentize(0.5, colors.grayDark),
    borderColor: transparentize(0.1, colors.grayDark),
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: 'transparent',
    color: colors.grayExtraLight,
  },
  label: {
    color: colors.grayLight,
  },
  message: {
    backgroundColor: transparentize(0.3, colors.grayDark),
    color: colors.grayLight,
  },
};

const theme = {
  backgroundColor: '#121212',
  colors,
  components,
  fontFamily,
  typography: {
    color: 'rgb(255, 255, 255)',
  },
};

export { fontFamily, unit };

export default mergeDeep({}, light, theme);

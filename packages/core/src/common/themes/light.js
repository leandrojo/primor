import { math, transparentize } from 'polished';

export const unit = '10px';

export const scale = value => math(`${unit} * ${value}`);

export const colors = {
  primary: '#0f29f6',
  secondary: '#007bff',
  complementary: '#ff7a00',
  acent: '#03dac6',
  danger: '#b00020',
  success: '#1DB954',
  warning: '#ffc107',
  grayExtraLight: '#fafafa',
  grayLight: '#eceff4',
  gray: '#7a869a',
  grayDark: '#505f79',
  grayExtraDark: '#343a40',
};

export const fontFamily = "'Roboto', sans-serif";

export const components = {
  accordion: {
    details: {
      borderColor: colors.grayLight,
      borderRadius: '0 0 2px 2px',
      paddingHorizontal: scale(1.2),
    },
    indicator: {
      color: colors.secondary,
    },
    summary: {
      backgroundColor: colors.grayExtraLight,
      borderColor: colors.grayLight,
      borderRadius: '2px 2px 0 0',
    },
  },
  breadcrumb: {
    item: {
      color: colors.secondary,
      current: {
        color: colors.grayExtraDark,
      },
      disabled: {
        color: colors.grayExtraLight,
      },
    },
    separator: {
      color: colors.gray,
    },
  },
  button: {
    backgroundColor: colors.grayExtraLight,
    borderRadius: '2px',
    color: colors.grayDark,
    fontFamily,
    fontSize: '100%',
    fontWeight: 'normal',
    marginHorizontal: '0.3em',
    paddingHorizontal: '10px',
  },
  buttonGroup: {
    backgroundColor: colors.grayExtraLight,
    borderColor: '#DFE3E7',
  },
  buttonToolbar: {},
  card: {},
  chips: {},
  divider: {},
  input: {
    backgroundColor: 'transparent',
    borderColor: '#DFE3E7',
    borderRadius: '4px',
    borderSize: '1px',
    boxShadow: {
      color: colors.grayExtraLight,
      offset: 'inset 0 1px 3px',
    },
    color: colors.grayExtraDark,
    fontFamily,
    fontSize: scale(1.2),
    padding: scale(1.5),
    width: '100%',
  },
  label: {
    color: colors.grayDark,
    fontFamily,
    fontSize: scale(1.4),
    paddingVertical: scale(0.4),
  },
  list: {},
  menu: {},
  message: {
    backgroundColor: transparentize(0.1, '#fff3d9'),
    borderRadius: '3px',
    borderColor: '#0a0a0a10',
    color: colors.grayExtraDark,
    fontFamily,
    fontSize: scale(1.4),
    lineHeight: scale(2),
    paddingHorizontal: scale(1.6),
  },
};

const theme = {
  backgroundColor: 'white',
  colors,
  components,
  fontFamily,
  typography: {
    color: 'rgb(0, 0, 0)',
    fontSize: scale(1.2),
  },
};

export default theme;
